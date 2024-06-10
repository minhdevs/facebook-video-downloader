import * as React from "react";

export default function FrequentlyAskedQuestions() {
    const data = [
        {
            question: "Why Use FastSave To Download Facebook Video?",
            answer: "According to user reviews and comments, FastSave is currently the fastest, Highest, most stable Facebook Video Download tool at the moment, we offer the best Save video from Facebook for you, And continuously improve the quality of tools to provide users.",
        },
        {
            question: "How to download Facebook videos to your computer?",
            answer: "On a computer Just copy the link of the Facebook video and paste it into the link input box provided at the top of this page and hit the Download button and you're done! See more FastSave manual Instructions for using Fastsave to download Facebook videos",
        },
        {
            question: "How to download Facebook videos to Android?",
            answer: "Just like downloading on a computer, it's very simple, go to FastSave.live -> Import Facebook Video Link -> And Click Download -> Choose the quality you want to download (Support to 4K Video)",
        },
        {
            question: "How to Download 4k Facebook Videos?",
            answer: "You just need a 4K quality Facebook video link. Copy the link -> Access FastSave.live -> Import Facebook Video Link -> And Press Download -> Choose the quality you 4K to download.",
        },
        {
            question: "How to download Facebook videos to your iPhone (iOS)?",
            answer: "IOS is a little more complicated, because iOS does not support Live Video download, you need to download Documents by Readdle, Open the application, Choose browser -> Access FastSave.live -> Import Facebook Video Link -> And Click Download -> Select the quality you want to download.",
        },
        {
            question: "How to Download Facebook video online?",
            answer: "Oh ... Simply copy the link of the Facebook video you want to download and paste the link into the link entry box at FastSave.live. The rest FastSave will take care of itself.",
        },
        {
            question: "Can I save Facebook videos on my phone?",
            answer: "Of course, saving the Facebook video to your computer after you finish downloading will usually be in the Download folder of a Windows or Android machine, and the Iphone is more complicated than see above.",
        },
        {
            question: "Can I download Facebook Live stream videos?",
            answer: "Of course, But you can only download Facebook Live videos but only after they are finished. while playing will not be able to download.",
        },
        {
            question: "Does FastSave.live store downloaded videos or keep a copy of the video?",
            answer: "Oh no, FastSave.live does not host videos nor keep copies of downloaded videos. We support Render only video with loss of audio and no archive. All videos are stored on Facebook's servers and only downloaded to your device.",
        },
    ];
    return (
        <section className="mx-auto md:w-3/4 lg:w-full xl:w-3/4 my-28 px-4">
            <h2 className="text-center text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-6">
                {data.map((e, i) => {
                    return (
                        <div
                            key={i}
                            className="collapse collapse-arrow  shadow-lg my-2"
                            tabIndex={0}
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-bold text-success" itemProp="name">
                                {e.question}
                            </div>
                            <div
                                className="collapse-content text-sm text-slate-400"
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <p itemProp="text">{e.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

// <details tabindex=0 itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
//     <summary itemprop="name"><%= item.question %></summary>
//     <article itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
//         <p itemprop="text"><%= item.answer %></p>
//     </article>
// </details>
