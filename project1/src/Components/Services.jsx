import { useState } from "react";

const services = [
    {
        category: (
            <>
                Office of multiple<br />
                interest contest
            </>
        ),
        title: "Collaborations & Partnerships",
    },
    {
        category: "The hanger US Air force digital experimental",
        title: "We talk about our weight",
    },
    {
        category: (
            <>
                Delta faucet content<br />
                social, digital
            </>
        ),
        title: "Piloting digital confidence",
    },
];

export default function ServicesPage() {
    const [hovered, setHovered] = useState(null);



    return (
        <>
            <div id="services" className="w-full min-h-screen bg-transparent py-16">

                {/* ── Heading (Shifted Left-Mid) ── */}
                <div className="px-20 mb-16 flex flex-col items-start">
                    <h1 className="font-gerbil text-[clamp(52px,6vw,82px)] font-normal leading-[1.06] tracking-[-2.5px] text-[#111] text-left ml-[9vw]">
                        What we
                        <span className="inline-block bg-[#D7EEDD] rounded-full px-5 py-1 mx-2">
                            can
                        </span>
                        <br />
                        offer you!
                    </h1>

                    {/* Yellow squiggle */}
                    <div className="mt-3 ml-[9vw]">
                        <svg width="255" height="12" viewBox="0 0 255 12" fill="none">
                            <path
                                d="M0 7 Q30 2 63 7 Q96 12 128 7 Q160 2 193 7 Q218 10 255 7"
                                stroke="#F5C842"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* ── Services List ── */}
                <div className="w-full px-20">

                    {/* Top divider */}
                    <div className="h-px bg-[#ddd] ml-[9vw] mr-[9vw]" />

                    {services.map((service, i) => (
                        <div key={i}>
                            <div
                                className="grid items-center py-11 pr-[9vw] transition-colors duration-200 hover:bg-[#f8f8f8] cursor-pointer"
                                style={{ gridTemplateColumns: "9vw 400px 1fr 60px" }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}

                            >
                                {/* Col 1: offset column (9vw) */}
                                <div />

                                {/* Col 2: small category text (Satoshi, 30px, Left-Aligned Parallel) */}
                                <div className="font-satoshi text-[30px] leading-[42px] text-[#111] font-normal pr-8 text-left line-clamp-2 min-h-[84px]">
                                    {service.category}
                                </div>

                                {/* Col 3: big title (Gerbil, Right Aligned) */}
                                <div className="font-gerbil text-[clamp(28px,3vw,48px)] font-normal tracking-[-0.5px] text-[#111] text-right pr-10">
                                    {service.title}
                                </div>

                                {/* Col 4: arrow */}
                                <div className="flex justify-end items-center">
                                    <svg
                                        width="36"
                                        height="14"
                                        viewBox="0 0 36 14"
                                        fill="none"
                                        className={`transition-all duration-300 ${hovered === i
                                            ? "opacity-100 translate-x-1.5"
                                            : "opacity-30 translate-x-0"
                                            }`}
                                    >
                                        <line x1="0" y1="7" x2="28" y2="7" stroke="#111" strokeWidth="1.5" />
                                        <path
                                            d="M22 1 L28 7 L22 13"
                                            stroke="#111"
                                            strokeWidth="1.5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom divider */}
                            <div className="h-px bg-[#ddd] ml-[9vw] mr-[9vw]" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}