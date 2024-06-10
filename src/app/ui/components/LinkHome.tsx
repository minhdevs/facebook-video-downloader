import clsx from "clsx";
import Link from "next/link";

export interface Props {
    showIcon?: boolean;
    smaller?: boolean;
    bigger?: boolean;
}

export default function LinkHome(props: Props) {
    return (
        <Link
            href="/"
            className={clsx("font-bold inline-flex justify-center items-center ", {
                "text-lg": !props.smaller && !props.bigger,
                "text-sm": props.smaller,
                "text-3xl": props.bigger,
            })}
        >
            {props.showIcon ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 inline text-blue-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                </svg>
            ) : null}
            <span className="text-blue-500">Fast</span>
            <span className="text-primarys">Save</span>
        </Link>
    );
}
