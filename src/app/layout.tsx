import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import "./globals.css";

const apfelGrotezk = localFont({
  src: [
    {
      path: "../fonts/ApfelGrotezk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ApfelGrotezk-Mittel.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ApfelGrotezk-Fett.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-apfel",
  display: "swap",
});

const texturina = localFont({
  src: [
    {
      path: "../fonts/Texturina-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-texturina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PUAI Brand Guidelines — Visual Identity & Design System",
  description:
    "The official visual identity guidelines, assets, and design principles for PUAI (using ai).",
  icons: {
    icon: "/assets/logos/svg/PUAI Icon_Coral.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${apfelGrotezk.variable} ${texturina.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#20222b] font-brand antialiased selection:bg-[#f03c4f] selection:text-white">
        <Navigation />
        <main className="flex-1">{children}</main>
        {/* Strictly no footer bar per PRD specifications */}
      </body>
    </html>
  );
}
