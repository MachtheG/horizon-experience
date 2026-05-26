import type { Metadata } from "next";
import "./globals.css";
import HorizonCanvas from "@/components/HorizonCanvas";
import TopNav from "@/components/TopNav";
import MotionOrchestrator from "@/components/MotionOrchestrator";
import AmbientZebraMotion from "@/components/AmbientZebraMotion";
import RouteImageGallery from "@/components/RouteImageGallery";

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
        <AmbientZebraMotion />
        <MotionOrchestrator />
        <TopNav />
        <div className="page-shell">
          {children}
          <RouteImageGallery />
        </div>
      </body>
    </html>
  );
}
