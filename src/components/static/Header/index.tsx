import Link from "next/link";
import React from "react";

export const Header = () => {
    const listHeader = ["Home", "About"];

    return (
        <div className="w-full bg-gray-200 py-6 flex justify-center">
            <div className="w-9/12 flex justify-between items-center">
                <div>
                    <Link
                        href="/"
                        className="text-slate-950 text-xl font-semibold"
                    >
                        Virtual Staging
                        <span className="text-indigo-500"> AI</span>
                    </Link>
                </div>

                <div className="flex flex-row gap-8 ">
                    {listHeader.map((item) => {
                        return (
                            <Link
                                href={`/${item}`}
                                key={item}
                                className="text-slate-950 capitalize  font-semibold"
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
