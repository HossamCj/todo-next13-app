import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Todo-App",
    description: "Todo app by nextjs-13, using typescript, tailwind...",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`
        ${inter.className}
        container
        bg-slate-800
        text-slate-100
        mx-auto 
        p-4
      `}
            >
                {children}
            </body>
        </html>
    );
}
