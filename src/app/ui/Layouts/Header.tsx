import LinkHome from "@/app/ui/components/LinkHome";
import Link from "next/link";
import * as React from "react";

export default function Header() {
    return (
        <header className="container mx-auto p-0">
            <div className="navbar bg-base-100 mt-2">
                <div className="flex-1 items-center">
                    <LinkHome showIcon={true} />
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>More</summary>
                                <ul className="p-2 bg-base-100 rounded-t-none w-64">
                                    <li className="hover:text-secondary">
                                        <Link href="/download-facebook-private-video">
                                            Download Facebook Private Video
                                        </Link>
                                    </li>
                                    <li className="hover:text-secondary">
                                        <Link href="/download-facebook-reels">Download Facebook Reels</Link>
                                    </li>
                                    <li className="hover:text-secondary">
                                        <Link href="/download-facebook-story">Download Facebook Story</Link>
                                    </li>
                                    <li className="hover:text-secondary">
                                        <Link href="/download-facebook-watch">Download Facebook Watch</Link>
                                    </li>
                                    <li className="hover:text-secondary">
                                        <Link href="/download-facebook-video">Download Facebook Video</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Languages</summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li>
                                        <a>English</a>
                                    </li>
                                    <li>
                                        <a>Tiếng Việt</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
