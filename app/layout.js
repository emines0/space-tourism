import { Bellefair, Barlow_Condensed } from "next/font/google";
import "@/styles/globals.css";

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Space Tourism App",
  description: "So you want to go to space? Let us help you get there.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bellefair.className}>{children}</body>
    </html>
  );
}
