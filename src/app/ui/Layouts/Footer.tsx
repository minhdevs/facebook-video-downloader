import * as React from "react";
import LinkHome from "../components/LinkHome";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
    return (
        <div className="mx-auto md:w-3/4 lg:w-full xl:w-3/4 my-4 px-4">
            <div className="divider"></div>
            <div className="text-center text-sm">
                © 2024 <LinkHome smaller /> 4.0.2. All rights reserved. (Vietnam)
            </div>
        </div>
    );
}
