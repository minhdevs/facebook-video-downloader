import * as React from "react";
import Link from "next/link";

export interface IAppProps {
    message?: string;
}

export default function ShowError(props: IAppProps) {
    return (
        <div className="flex justify-center items-center mt-28">
            <div className="card w-80 shadow-xl p-0">
                <h1 className="card-title text-error mx-8 mt-8">ERROR!</h1>
                <div className="card-body">
                    <div role="alert" className="alert alert-error">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{props.message}</span>
                    </div>
                </div>
                <div className="action">
                    <Link
                        href="/"
                        className="btn btn-primary mx-auto btn-wide mb-4"
                        style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#FFF" }}
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
