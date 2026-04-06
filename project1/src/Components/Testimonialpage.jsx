import { useState } from "react";

const avatars = [
    // left side
    { id: 1, src: "/image.png", size: 130, style: { top: "26%", left: "12%" } },
    { id: 2, src: "/r2.png", size: 80, style: { top: "38%", left: "5%" } },
    { id: 3, src: "/image copy.png", size: 130, style: { top: "68%", left: "5%" } },
    { id: 4, src: "/left.png", size: 220, style: { top: "45%", left: "15%" } },

    // right side
    { id: 5, src: "/img lfu.png", size: 160, style: { top: "27%", right: "10%" } },
    { id: 6, src: "/lf2.png", size: 100, style: { top: "32%", right: "22%" } },
    { id: 7, src: "/black.png", size: 120, style: { top: "50%", right: "18%" } },
    { id: 8, src: "/img23.png", size: 280, style: { top: "65%", right: "4%" } },
];

export default function TestimonialPage() {
    return (
        <>
            <div
                className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden pt-12 pb-20 font-gerbil"
            >

                {/* ── Floating Avatars ── */}
                {avatars.map((av) => (
                    <div
                        key={av.id}
                        className="absolute rounded-full overflow-hidden border-2 border-white shadow-md"
                        style={{
                            width: av.size,
                            height: av.size,
                            ...av.style,
                        }}
                    >
                        <img
                            src={av.src}
                            alt="customer"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* ── Center Content ── */}
                <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6">

                    {/* Heading */}
                    <div className="text-center mb-4">
                        <h3
                            className="font-gerbil text-[60px] font-normal leading-[52px] tracking-[-0.025em] text-[#111] text-center"
                        >
                            <span className="block whitespace-nowrap">
                                <span className="inline-block bg-[#D7EEDD] rounded-full px-5 py-1 mr-2">What</span>
                                our customer
                            </span>
                            <span className="block">says About Us</span>
                        </h3>
                        {/* Yellow underline under "About Us" */}
                        <div className="flex justify-center mt-1">
                            <svg width="210" height="12" viewBox="0 0 210 12" fill="none">
                                <path
                                    d="M0 7 Q25 2 52 7 Q79 12 105 7 Q131 2 158 7 Q180 10 210 7"
                                    stroke="#F5C842"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Quote Card */}
                    <div
                        className="relative w-200 rounded-3xl px-14 py-10 mt-10 text-center"
                        style={{ background: "#EBF7EE" }}
                    >
                        {/* Opening quote mark */}
                        <span className="absolute left-6 top-4 text-5xl opacity-30">“</span>

                        {/* Quote text */}
                        <p
                            className="text-[24px] leading-[1.75] text-[#333] font-normal mt-4 mb-4 relative z-10"
                        >
                            Elementum delivered the site with in the timeline as they
                            requested. In the end, the client found a 50% increase in traffic
                            within days since its launch. They also had an impressive ability
                            to use technologies that the company hasn't used, which have also
                            proved to be easy to use and reliable
                        </p>

                        {/* Closing quote mark */}
                        <span
                            className="absolute bottom-4 right-10 text-[72px] leading-none text-[#5a9a6a] font-serif select-none"
                            style={{ lineHeight: 1 }}
                        >
                            "
                        </span>
                    </div>

                </div>
            </div>
        </>
    );
}