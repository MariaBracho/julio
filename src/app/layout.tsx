import type { Metadata } from "next";

import { montserrat } from "@/theme/fonts.theme";

import "./../theme/globals.css";

export const metadata: Metadata = {
  title: "Portafolio UX/UI",
  description: "Portafolio UX/UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
