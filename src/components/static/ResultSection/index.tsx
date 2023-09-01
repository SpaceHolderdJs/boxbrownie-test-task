import React from "react";

const resultArr = [
    {
        before: "https://firebasestorage.googleapis.com/v0/b/furniture-ai-static/o/render_examples_ip2p_may23%2F8_empty.png?alt=media",
        after: "https://firebasestorage.googleapis.com/v0/b/furniture-ai-static/o/render_examples_ip2p_may23%2F8_staged.jpg?alt=media",
    },
    {
        before: "https://firebasestorage.googleapis.com/v0/b/furniture-ai-static/o/render_examples_ip2p_may23%2F8_empty.png?alt=media",
        after: "https://firebasestorage.googleapis.com/v0/b/furniture-ai-static/o/render_examples_ip2p_may23%2F8_staged.jpg?alt=media",
    },
    {
        before: "https://firebasestorage.googleapis.com/v0/b/furniture-ai-static/o/render_examples_ip2p_may23%2F8_empty.png?alt=media",
        after: "https://firebasestorage.googleapis.com/v0/b/furniture-ai-static/o/render_examples_ip2p_may23%2F8_staged.jpg?alt=media",
    },
];

export const ResultSection = () => {
    return (
        <div className="carousel rounded-box flex flex-col gap-10 h-full gap-8">
            <p className="text-slate-950 text-2xl md:text-5xl font-semibold">
                Results
            </p>
            {resultArr.map((item, i) => (
                <div
                    key={i}
                    className="flex  flex-col  justify-center gap-4 md:gap-10 md:flex-row"
                >
                    <div className="flex flex-col gap-4">
                        <p className="text-slate-950 text-m md:text-xl font-semibold">
                            Before
                        </p>
                        <img src={item.before} className="max-h-76" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-slate-950  text-m md:text-xl font-semibold">
                            After
                        </p>
                        <img src={item.after} className="max-h-76" />
                    </div>
                </div>
            ))}
        </div>
    );
};
