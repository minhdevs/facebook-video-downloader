import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./daisyui.css";
import { appication } from "@/app/global-variable";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Download videos Facebook free 1080P, 2K, 4K - FastSave",
    description:
        "Download Facebook Video to your phone, PC, or tablet with highest quality Full HD, 2K, 4K to mp4. Use our Facebook Downloader with your browser. Support all device.",
    keywords:
        "facebook video downloader, download facebook video, download facebook reels, fb downloader, save video facebook, facebook story downloader, facebook private video downloader, download fb video, download video facebook, facebook downloader",
    applicationName: "facebook video downloader",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="emerald">
            <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="1 days" />

                {/*  */}
                <meta name="author" content="Admin" />
                <meta itemProp="name" content={`${metadata.title}`} />
                <meta property="og:locale" content="en" />
                <meta itemProp="image" content={`${appication.apphost}/banner.png`} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={`${metadata.title}`} />
                <meta name="twitter:description" content={`${metadata.description}`} />
                <meta name="twitter:image:src" content={`${appication.apphost}/banner.png`} />

                <meta property="og:title" content={`${metadata.title}`} />
                <meta property="og:description" content={`${metadata.description}`} />
                <meta property="og:site_name" content={`${metadata.title}`} />
                <meta property="og:image" content={`${appication.apphost}/banner.png`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={appication.apphost} />
                {/*  */}

                <meta name="theme-color" content="#28b76b" />
                {/* <link rel="manifest" href="manifest.json?v=1.7" /> */}
                <link rel="apple-touch-icon" sizes="180x180" href={`${appication.apphost}/icon.png`} />
                <link rel="shortcut icon" href={`${appication.apphost}/icon.png`} />
                <link href={`${appication.apphost}/icon.png`} rel="icon" />

                {/* <meta name="google" content="notranslate" /> */}
                <link rel="canonical" href={`${appication.apphost}`} />
                <link rel="preload" href={`${appication.apphost}/icon.png`} as="image" />

                <link rel="alternate" hrefLang="x-default" href={`${appication.apphost}`} />

                {/* Google Auth */}
                <meta name="google-adsense-account" content="ca-pub-5383842302083788" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
