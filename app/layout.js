import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import NavbarRipple from "./components/navigation/NavbarRipple";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Terminus',
  description: 'TerminusCraft website for minecraft',
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        {/* <Navbar content={children}></Navbar> */}
        <NavbarRipple content={children}></NavbarRipple>
      </body>
    </html>
  );
}
