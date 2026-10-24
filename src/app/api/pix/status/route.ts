import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const paymentId = searchParams.get("id");

    if (!paymentId) {
      return NextResponse.json({ error: "ID do pagamento obrigatório" }, { status: 400 });
    }

    const token =
      process.env.MERCADO_PAGO_ACCESS_TOKEN ||
      "APP_USR-2132561651462789-102409-3d8ed2d18813c9307a3d945d285833c2-2969359885";

    const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await mpResponse.json();

    if (!mpResponse.ok) {
      return NextResponse.json({ error: "Pagamento não encontrado" }, { status: 404 });
    }

    return NextResponse.json({
      paymentId: data.id,
      status: data.status, // "approved", "pending", "in_process", "rejected", "cancelled"
      statusDetail: data.status_detail,
      isApproved: data.status === "approved",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Erro ao consultar status" },
      { status: 500 }
    );
  }
}
