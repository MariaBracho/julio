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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
