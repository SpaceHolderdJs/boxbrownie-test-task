import React from "react";

export const TitleSection = () => {
    return (
        <div className="flex justify-between py-14 flex-wrap md:flex-no-wrap gap-8">
            <div className="flex flex-col justify-center gap-4">
                <p className="text-slate-950 text-2xl md:text-5xl font-semibold">
                    Virtually stage
                    <span className="text-indigo-500"> in one click</span>
                </p>
                <p className="text-slate-950 text-xl md:text-2xl">
                    Upload a picture and our AI will add furniture within
                    seconds.
                </p>
            </div>
            <img
                className="max-h-24 mx-auto"
                src="https://www.virtualstagingai.app/_next/image?url=%2Farrow_preview.png&w=1920&q=75"
            />
        </div>
    );
};
