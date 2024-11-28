import { Montserrat, PT_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./componenets/Footer";

// Import Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-pt-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// Import Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata
export const metadata = {
  title: "Yusuf Blog Site",
  description: "Share Your Dream",
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${ptSerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    
    </html>
  );
}
