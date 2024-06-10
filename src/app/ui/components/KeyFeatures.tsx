import * as React from "react";
import LinkHome from "./LinkHome";

export interface KeyFeaturesProps {}

const data = [
    {
        title: "Facebook Downloader",
        content: (
            <span>
                <b>FastSave</b> was invented to help you Facebook video download and save all kinds of videos from
                Facebook to your device with the best quality (up to 4K). Videos on regular posts/Watch, Livestream
                videos, videos in public/private groups, … are all easily downloaded & saved from Fb with just a few
                clicks via FastSave
            </span>
        ),
    },
    {
        title: "Facebook Story Video Downloader",
        content: (
            <span>
                <b>FastSave</b> also could download Fb video story of the best quality. All you need is to befriend the
                creator of the Story on Fb and follow the same steps as downloading private Facebook videos.
            </span>
        ),
    },
    {
        title: "Facebook Reels Downloader",
        content: (
            <span>
                <b>FastSave</b> also could download Fb reels of the best quality. Tollow the same steps as download
                video facebook.
            </span>
        ),
    },
    {
        title: "Facebook Private Video Downloader",
        content: (
            <span>
                <b>FastSave</b> also could download Fb private video. All you need is to befriend the creator of the
                video on Fb and follow the same steps as download facebook reel.
            </span>
        ),
    },
];

export default function KeyFeatures(props: KeyFeaturesProps) {
    return (
        <section className="mx-auto md:w-3/4 lg:w-full xl:w-3/4 my-28">
            <h2 className="text-center text-2xl font-bold">
                <LinkHome showIcon bigger /> - Best <span className="text-success">Facebook Video Downloader</span>
            </h2>
            <p className="text-slate-400 text-center mt-4">
                Key Features of <LinkHome /> Facebook Downloader
            </p>
            <div className="p-4">
                {data.map((e, i) => {
                    return (
                        <div key={i}>
                            <h3 className="text-lg font-bold my-2">{e.title}</h3>
                            <p className="py-4 px-2 text-sm text-slate-400">{e.content}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
