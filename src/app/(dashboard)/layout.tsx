import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "SKB BEST",
    description: "Get the best",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main>{children}</main>;
}
