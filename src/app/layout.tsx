import type { Metadata } from "next";
import "./globals.css";
import HorizonCanvas from "@/components/HorizonCanvas";
import TopNav from "@/components/TopNav";

export const metadata: Metadata = {
  title: "Grevy's Zebra Trust | Digital Fieldspace",
  description:
    "A digital-age conservation experience focused on Grevy's zebra survival, community action, and rangeland recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HorizonCanvas />
        <TopNav />
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
