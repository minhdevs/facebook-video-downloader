import * as React from "react";
import { getVideoSourceURLsFromLink } from "../lib/common";
import Link from "next/link";
interface AppProps {
    params: { id: string };
    searchParams: { [key: string]: string };
}
const ErrorMessage = ({ ...props }) => {
    return <div>Error, {props.msg}</div>;
};

export default async function DownloadPage(AppProps: AppProps) {
    const facebookVideoUrl = AppProps.searchParams["facebook-video-url"];
    let response;

    if (facebookVideoUrl && facebookVideoUrl != "") {
        response = JSON.stringify(await getVideoSourceURLsFromLink(facebookVideoUrl));
        response = await JSON.parse(response);
    } else {
        response = {
            error: "Invalid video url!",
        };
    }

    const GetLinks = () => {
        return Object.keys(response).map((e, i) => {
            if (e != "error" && e != "isPrivate") {
                if (response[e] && response[e] != "") {
                    return (
                        <li key={i}>
                            <Link href={response[e]} className="btn btn-primary my-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                                Download {e == "browser_native_hd_url" ? "Full HD (720P)" : "SD (360P)"}
                            </Link>
                        </li>
                    );
                }
            }
        });
    };

    const DownloadLinks = () => {
        return (
            <ul className="menu bg-base-100 lg:menu-horizontal rounded-box w-96 mx-auto mt-48">
                <GetLinks />
                <Link href="/" className="btn btn-secondary my-2">
                    Download Another Video
                </Link>
            </ul>
        );
    };

    return (
        <React.Suspense fallback={<p>Loading...</p>}>
            {response.isPrivate ? (
                <ErrorMessage msg="Sorry, this video is private, please use facebook private video downloader tool!" />
            ) : null}

            {response.error ? <ErrorMessage msg={response.error} /> : null}

            <DownloadLinks />
        </React.Suspense>
    );
}
