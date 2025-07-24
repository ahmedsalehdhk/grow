import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "GROW - Gamify your life",
  description: "Gamification of life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-screen w-screen min-w-[320px] bg-[#F3F3F3]`}>
        <div className="master-container flex flex-col md:flex-row h-full mx-auto">
          <Navbar />
          <main className='flex-[1] md:flex-[5] px-5 md:px-8 py-8 md:py-12'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
