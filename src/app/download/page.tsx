import BannerH50 from "@/app/ads/BannerH50";
import NativeBanner from "@/app/ads/NativeBanner";
import DownloadSkeleton from "@/app/download/DownloadSkeleton";
import ShowError from "@/app/download/ShowError";
import DownloadLinks from "@/app/download/download-links";
import Header from "@/app/ui/Layouts/Header";
import Link from "next/link";
import * as React from "react";

interface AppProps {
    params: { id: string };
    searchParams: { [key: string]: string };
}

export default function DownloadPage(AppProps: AppProps) {
    const facebookVideoUrl = AppProps.searchParams["facebook-video-url"];

    const regex =
        /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.com|fb\.watch|web\.facebook\.com||m\.facebook\.com).*$/;

    if (!facebookVideoUrl || facebookVideoUrl === "" || !regex.test(facebookVideoUrl)) {
        return <ShowError message="Invalid facebook video url." />;
    }

    return (
        <div className="container mx-auto">
            <Header />
            <NativeBanner />
            <div>
                <BannerH50 />
                <React.Suspense fallback={<DownloadSkeleton />}>
                    <DownloadLinks url={facebookVideoUrl} />
                </React.Suspense>
            </div>
            <NativeBanner />
        </div>
    );
}
