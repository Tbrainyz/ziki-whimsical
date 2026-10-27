import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const display = Fredoka({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600"] });
const body = Nunito({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Ziki Garden",
  description: "Your Ziki points, issues and agents as a little garden.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
