import Link from "next/link";
import LinkHome from "./ui/components/LinkHome";
import KeyFeatures from "./ui/components/KeyFeatures";
import FrequentlyAskedQuestions from "./ui/components/FrequentlyAskedQuestions";
import Footer from "./ui/components/Footer";
import Header from "@/app/ui/Layouts/Header";

const WhyToUseItem = ({ ...props }) => {
    return (
        <div className="card lg:w-80 md:w-96 shadow-lg p-8 m-3 m-h-60">
            <span className="text-success p-3 w-fit rounded rounded-full bg-green-50">{props.icon}</span>
            <h3 className="text-lg font-bold my-2">{props.title}</h3>
            <p className="text-sm text-slate-400">{props.content}</p>
        </div>
    );
};

const HowToUSeItem = ({ ...props }) => {
    return (
        <div className="card card-compact lg:w-64 md:w-80 shadow-xl m-3 m-h-60">
            <figure>
                <video width="320" height="240" controls preload="none" muted loop playsInline>
                    <source src={props.data.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </figure>
            <div className="card-body">
                <h4 className="text-md font-bold">
                    <span className="text-green-500">Step: {props.step + 1}</span> {props.data.title}
                </h4>
                <p className="text-sm text-slate-400">{props.data.content}</p>
            </div>
        </div>
    );
};

const stepsToUse = [
    {
        title: "Copy and paste video link",
        content: (
            <span>
                From{" "}
                <Link className="text-primary" href="https://www.facebook.com">
                    Facebook
                </Link>
                , copy the link of a video that you wish to download, then paste the link in <LinkHome smaller />
            </span>
        ),
        video: "",
    },
    {
        title: "Select output quality",
        content: "select the quality that you want to download.",
        video: "",
    },
    {
        title: "Download Fb video",
        content: "Wait for our server to process and download your device.",
        video: "",
    },
];

export default function Home() {
    return (
        <>
            <Header />
            <main className="container mx-auto bg-white">
                <h1 className="text-center text-4xl font-bold mt-28">Facebook Video Downloader</h1>
                <p className="text-center mt-1">Save Facebook videos Full HD, 2K, 4K - Free</p>
                <div className="flex justify-center my-5">
                    <form
                        action="/download"
                        id="form"
                        method="get"
                        className="join w-11/12 max-w-3xl mx-auto block mt-2"
                    >
                        <input
                            className="join-item input input-bordered w-full"
                            name="facebook-video-url"
                            type="url"
                            placeholder="Enter facebook video url here..."
                            required
                        />
                        {/* <button
                            type="button"
                            className="btn btn-square join-item"
                            onClick={async () => {
                                const text = await navigator.clipboard.readText();
                                setInputUrl(text);
                            }}
                        >
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
                                    stroke-linejoin="round"
                                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                                />
                            </svg>
                        </button> */}
                        <button id="btn-download" className="join-item btn btn-primary text-base-100" type="submit">
                            Download
                        </button>
                    </form>
                </div>

                {/* Why use */}
                <section className="mx-auto md:w-3/4 lg:w-full xl:w-3/4 my-28">
                    <h2 className="text-center text-2xl font-bold">
                        Why you should use Fb Downloader <LinkHome showIcon />
                    </h2>
                    <div className="mt-3 px-4">
                        <p className="text-center my-1">
                            <LinkHome />{" "}
                            <span className="text-slate-400">
                                is the best Facebook Video Downloader to help you high quality Facebook video download:
                                Full HD, 2K, 4K (mp4).
                            </span>
                        </p>
                        <p className="text-slate-400 text-center">
                            Download Facebook Video to your phone, PC, or tablet with highest quality. Use our FB video
                            downloader with your browser. No need to install any software. Support both Android, and
                            IOS.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center mt-2 ">
                        <WhyToUseItem
                            title="Highest Quality"
                            content="Our Facebook video download helps you download FULL HD, and 4K videos with sound. Most of the current tools only allow HD videos."
                            icon={
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
                                        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                                    />
                                </svg>
                            }
                        />
                        <WhyToUseItem
                            title="Easy"
                            content="Facebook video downloader for every device (mobile phone, PC, or tablet), and every OS (Android, IOS). You don't need to install any software."
                            icon={
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
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            }
                        />
                        <WhyToUseItem
                            title="Free"
                            content="SnapSave FB Downloader - It's always be free. We only place some ads to support our development."
                            icon={
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
                                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            }
                        />
                    </div>
                </section>

                {/* How to use */}
                <section className="mx-auto md:w-3/4 lg:w-full xl:w-3/4 my-28">
                    <h2 className="text-center text-2xl font-bold">
                        How to <span className="text-success">Download video Facebook</span>
                    </h2>
                    <p className="text-slate-400 text-center mt-4">
                        Facebook video downloader with best formats 1080p - 2K - 4K for free
                    </p>

                    <div className="flex flex-wrap justify-center mt-2">
                        {stepsToUse.map((e, i) => {
                            return <HowToUSeItem key={i} data={e} step={i} />;
                        })}
                    </div>

                    <Link
                        target="_blank"
                        href="/"
                        className="btn btn-success btn-outline btn-wide btn-sm mx-auto my-4 justify-center items-center"
                        style={{ display: "flex" }}
                    >
                        Watch Full instructional video
                    </Link>
                </section>

                {/* Key Fratures */}
                <KeyFeatures />

                {/* Frequently Asked Questions */}
                <FrequentlyAskedQuestions />

                <Footer />
            </main>
        </>
    );
}
