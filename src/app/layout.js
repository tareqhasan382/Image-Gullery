import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="fixed top-0 w-screen z-50 ">
          <ClientOnly>
            <Navbar />
          </ClientOnly>
        </div>
        {children}
      </body>
    </html>
  );
}
