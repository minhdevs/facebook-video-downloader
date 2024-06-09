import { getVideoSourceURLsFromLink } from "@/app/lib/common";

import Link from "next/link";
import ShowError from "./ShowError";

const DownloadLinks = async ({ url }) => {
    let response = await getVideoSourceURLsFromLink(url);

    if (response.isPrivate) {
        return <ShowError message="This video is private please use Facebook Private Video Downloader Tool." />;
    }

    if (response.error) {
        return <ShowError message={response.error} />;
    }

    if (response.msg) {
        return <ShowError message={response.msg} />;
    }

    return (
        <ul className="menu bg-base-100 lg:menu-horizontal rounded-box w-96 mx-auto mt-48">
            {response.browser_native_hd_url && (
                <li>
                    <Link href={response.browser_native_hd_url} className="btn btn-primary my-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                        Download 720P (HD)
                    </Link>
                </li>
            )}

            {response.browser_native_sd_url && (
                <li>
                    <Link href={response.browser_native_sd_url} className="btn btn-primary my-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                        Download 360P (SD)
                    </Link>
                </li>
            )}

            <Link href="/" className="btn btn-secondary my-2">
                Download Another Video
            </Link>
        </ul>
    );
};

export default DownloadLinks;
