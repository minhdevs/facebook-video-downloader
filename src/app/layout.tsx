import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Facebook Video Downloader - FastSave",
    description: "Download Any Facebook Video With One Click!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="emerald">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
