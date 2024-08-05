import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import 'highlight.js/styles/github.css'; 

const roboto_Condensed = Roboto_Condensed({ subsets: ["latin"], weight:["400", "500", "600", "700"] });

export const metadata = {
  title: "Milkayeh",
  description: "Milkayeh's blog website",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_Condensed.className}>{children}</body>
    </html>
  );
}
