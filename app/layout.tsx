import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { ThemeProvider } from "@/components/theme-provider";

// app/layout.tsx
import { JetBrains_Mono } from "next/font/google";
const jbm = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbm" });
// <html className={jbm.variable}>

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RUGVED Systems — MIT Manipal | Defence Robotics",
  description: "R.U.G.V.E.D Systems — Remote Unmanned Ground Vehicular Electronic Defence. Student defence robotics at MIT Manipal (Est. 2016). WALRUS UGV, AI navigation, field robotics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jbm.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-transparent">
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
