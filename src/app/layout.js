import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Nyanverie × Crownette",
  description: "Maid cafe event — 10 Mei 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className={`${roboto.variable} font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}