import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Terminus',
  description: 'Webová stránka pro Terminus minecraft server',
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <Navbar content={children}></Navbar>
      </body>
    </html>
  );
}
