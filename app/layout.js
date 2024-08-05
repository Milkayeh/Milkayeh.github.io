import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import 'highlight.js/styles/github.css'; 



// If loading a variable font, you don't need to specify the font weight
const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto_condensed.className}>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Milkayeh",
  description: "Milkayeh's blog website",
};
