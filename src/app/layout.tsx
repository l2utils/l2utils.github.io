import type { Metadata } from "next";
import '@cloudscape-design/global-styles/index.css';

export const metadata: Metadata = {
  title: "L2Utils",
  description: "Home of all Lineage 2 utilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
