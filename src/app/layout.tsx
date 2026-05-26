import type { Metadata } from "next";
import "./globals.css";
import HorizonCanvas from "@/components/HorizonCanvas";
import ZebraStripeNav from "@/components/ZebraStripeNav";

export const metadata: Metadata = {
  title: "Grevy's Zebra Trust | The Horizon Experience",
  description: "An immersive 3D rangeland experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Global persistent components */}
        <HorizonCanvas />
        <ZebraStripeNav />
        {/* Page specific content */}
        {children}
      </body>
    </html>
  );
}
