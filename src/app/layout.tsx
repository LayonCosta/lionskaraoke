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
  description: "Peça um karaokê personalizado com prazo VIP de até 48 horas. O resultado da remoção vocal pode variar conforme a gravação original.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Lions Karaokê | Pedidos VIP Express",
    description: "Peça sua música favorita com letra sincronizada em vídeo de até 4K. O resultado do áudio pode variar conforme a gravação original.",
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
      <body className="min-h-full bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900 pb-20">
        {children}
      </body>
    </html>
  );
}
