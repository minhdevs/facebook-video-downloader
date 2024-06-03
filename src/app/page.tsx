export default function Home() {
    return (
        <>
            <header>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">FastSave</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary>Languages</summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                        <li>
                                            <a>Link 1</a>
                                        </li>
                                        <li>
                                            <a>Link 2</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className="container mx-auto">
                <h1 className="text-center text-4xl font-bold mt-28">Facebook Video Downloader</h1>
                <p className="text-center text-secondary">Save Facebook videos Full HD, 2K, 4K - Free</p>
                <div className="flex justify-center my-5">
                    <form action="/download" method="get" className="join w-11/12 max-w-3xl mx-auto block">
                        <input
                            className="join-item input input-bordered w-full"
                            name="facebook-video-url"
                            type="url"
                            placeholder="Enter facebook video url here..."
                        />
                        <button className="join-item btn btn-primary" type="submit">
                            Download
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}
