export default function NewsletterFooter() {
    // Satoshi — weight 400, black — for all small/body text in footer
    const satoshi = {
        fontFamily: "'Satoshi', sans-serif",
        fontWeight: 400,
        color: "#000",
    };

    return (
        <div className="w-full min-h-screen flex flex-col" style={{ background: "#D7EEDD" }}>

            {/* ── Newsletter Section ── */}
            <div className="relative flex flex-col items-center justify-center pt-20 pb-16 px-6 text-center">

                {/* Red coral arrows */}
                <div className="mb-4" style={{ width: "163.54px", height: "121.5px" }}>
                    <svg width="163.54" height="121.5" viewBox="0 0 163.54 121.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 5 C40 30, 20 50, 10 90" stroke="#E8524A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                        <path d="M5 82 L10 92 L18 85" stroke="#E8524A" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M110 5 C120 30, 140 55, 148 90" stroke="#E8524A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                        <path d="M142 83 L148 93 L156 86" stroke="#E8524A" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Heading — Gerbil font */}
                <h2
                    className="font-gerbil text-[#111] leading-[1.1] tracking-[-2px]"
                    style={{ fontSize: "clamp(52px, 7vw, 100px)", fontWeight: "normal" }}
                >
                    Subscribe to
                    <br />
                    our newsletter
                </h2>

                {/* Subtext — Satoshi small text, slightly bigger */}
                <p className="mt-5" style={{ ...satoshi, fontSize: "18px", letterSpacing: "0.02em" }}>
                    To make your stay special and even more memorable
                </p>

                {/* CTA Button */}
                <button
                    className="mt-8 px-10 py-4 rounded-full text-white tracking-wide transition-opacity hover:opacity-80"
                    style={{ background: "#111", fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: "16px" }}
                >
                    Subscribe Now
                </button>

                {/* Purple D shape */}
                <div
                    className="hidden lg:block absolute"
                    aria-hidden="true"
                    style={{
                        width: "244px",
                        height: "244px",
                        background: "#934CEC",
                        top: "50%",
                        right: "60px",
                        transform: "translateY(-50%) rotate(-120deg)",
                        borderRadius: "50%",
                        clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                    }}
                />
            </div>

            {/* ── Divider ── */}
            <div className="w-full px-16">
                <div style={{ width: "100%", borderTop: "1px solid #000" }} />
            </div>

            {/* ── Footer Grid ── */}
            <div className="w-full px-16 py-14 grid grid-cols-4 gap-8">

                {/* Col 1 — Company */}
                <div>
                    <h4 className="font-gerbil text-[20px] font-semibold text-[#111] mb-5">Company</h4>
                    <ul className="space-y-3">
                        {["Home", "Studio", "Service", "Blog"].map((item) => (
                            <li key={item}>
                                <a href="#" style={{ ...satoshi, fontSize: "18px", textDecoration: "none" }}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 2 — Terms & Policies */}
                <div>
                    <h4 className="font-gerbil text-[20px] font-semibold text-[#111] mb-5">Terms &amp; Policies</h4>
                    <ul className="space-y-3">
                        {["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"].map((item) => (
                            <li key={item}>
                                <a href="#" style={{ ...satoshi, fontSize: "18px", textDecoration: "none" }}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 3 — Follow Us */}
                <div>
                    <h4 className="font-gerbil text-[20px] font-semibold text-[#111] mb-5">Follow Us</h4>
                    <ul className="space-y-3">
                        {["Instagram", "LinkedIn", "Youtube", "Twitter"].map((item) => (
                            <li key={item}>
                                <a href="#" style={{ ...satoshi, fontSize: "18px", textDecoration: "none" }}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 4 — Contact */}
                <div>
                    <h4 className="font-gerbil text-[20px] font-semibold text-[#111] mb-5">Contact</h4>
                    <div className="space-y-3">
                        <p style={{ ...satoshi, fontSize: "20px", lineHeight: "1.7" }}>
                            1498w Fluton ste, STE<br />
                            2D Chicago, IL 63867.
                        </p>
                        <p style={{ ...satoshi, fontSize: "20px" }}>(123) 456789000</p>
                        <p style={{ ...satoshi, fontSize: "20px" }}>info@elementum.com</p>
                    </div>
                </div>

            </div>

            {/* ── Copyright ── */}
            <div className="w-full text-center pb-10">
                <p style={{ ...satoshi, fontSize: "18px" }}>
                    ©2023 Elementum. All rights reserved
                </p>
            </div>

        </div>
    );
}
