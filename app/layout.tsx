import { Inter, Alfa_Slab_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const alfaSlabOne = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alfa",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={alfaSlabOne.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}