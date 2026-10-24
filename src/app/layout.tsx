import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lions Karaokê | Pedidos VIP Express",
  description: "Peça seu karaokê personalizado sem esperar na fila! Produção e remasterização profissional em até 48 horas.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Lions Karaokê | Pedidos VIP Express",
    description: "Peça sua música favorita com letra sincronizada em 4K e playback profissional.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900 pb-16 md:pb-0">
        {children}
      </body>
    </html>
  );
}
