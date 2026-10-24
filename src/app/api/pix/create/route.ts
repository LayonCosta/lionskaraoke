import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { songName, artistName, customerName, songCount } = body;

    const count = Math.max(1, parseInt(songCount) || 1);
    const unitPrice = count >= 5 ? 10 : 15;
    const totalPrice = count * unitPrice;

    const token =
      process.env.MERCADO_PAGO_ACCESS_TOKEN ||
      "APP_USR-2132561651462789-102409-3d8ed2d18813c9307a3d945d285833c2-2969359885";

    const titleSong = songName?.trim() ? songName.trim() : "Música Personalizada";
    const titleArtist = artistName?.trim() ? artistName.trim() : "Artista";
    const description = `Lions Karaokê VIP: ${titleSong} (${titleArtist}) - ${count} música(s)`;

    // Chamada oficial à API Pix do Mercado Pago
    const mpResponse = await fetch("https://api.mercadopago.com/v1/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "X-Idempotency-Key": `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      },
      body: JSON.stringify({
        transaction_amount: totalPrice,
        description: description.substring(0, 60),
        payment_method_id: "pix",
        payer: {
          email: "pedidos@lionskaraoke.com.br",
          first_name: customerName?.trim() || "Cliente Lions",
        },
      }),
    });

    const data = await mpResponse.json();

    if (!mpResponse.ok || !data.id) {
      console.error("Erro Mercado Pago:", data);
      return NextResponse.json(
        { error: data.message || "Erro ao gerar cobrança Pix no Mercado Pago" },
        { status: 400 }
      );
    }

    const transactionData = data.point_of_interaction?.transaction_data;

    return NextResponse.json({
      success: true,
      paymentId: data.id,
      status: data.status,
      totalPrice,
      qrCode: transactionData?.qr_code || "",
      qrCodeBase64: transactionData?.qr_code_base64 || "",
      expiresAt: data.date_of_expiration,
    });
  } catch (error: any) {
    console.error("Erro ao criar Pix:", error);
    return NextResponse.json(
      { error: error?.message || "Erro interno ao processar pedido" },
      { status: 500 }
    );
  }
}
