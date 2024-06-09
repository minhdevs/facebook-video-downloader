import { getVideoSourceURLsFromLink } from "@/app/lib/common";
import * as React from "react";

export interface IAppProps {}

// export default function App(props: IAppProps) {
//     setTimeout(() => {
//         return <div>Download</div>;
//     }, 3000);
// }

const getDownloadLinks = async (url: string) => {
    let response = await getVideoSourceURLsFromLink(url);
    console.log(response);
};

export default getDownloadLinks;
