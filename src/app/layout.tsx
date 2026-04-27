import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'I Bang Records | Underground Electronic Music',
  description: 'The premier record label for cutting-edge sound and electronic music.',
  openGraph: {
    "title": "I Bang Records",
    "description": "Electronic music label.",
    "type": "website"
  },
};



const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
