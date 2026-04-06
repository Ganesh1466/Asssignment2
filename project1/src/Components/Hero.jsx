import React from 'react'
import AvatarGroup from './AvatarGroup'


export default function Hero() {
    return (
        <section id="home" className="relative w-full overflow-hidden bg-white px-4 pt-16 pb-0">

            {/* ── Purple D shape — top right ── */}
            <div
                className="hidden lg:block absolute"
                style={{
                    width: "155.75px",
                    height: "155.75px",
                    background: "#934CEC",
                    top: "200px",
                    left: "1750px",
                    transform: "rotate(45deg)",
                    borderRadius: "50%",
                    clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                }}
                aria-hidden="true"
            />


            {/* ── Heading container ── */}
            <div className="relative max-w-[1332px] mx-auto flex flex-col justify-center -translate-y-8 md:-translate-y-12">
                <div className="px-6 py-4 lg:px-10 lg:py-6">

                    {/* ── Main heading ── */}
                    <h1
                        className="font-gerbil font-normal text-center text-black tracking-normal
                       text-4xl md:text-5xl lg:text-[90px] lg:leading-[1.1]"
                    >
                        {/* Line 1 */}
                        <span className="block">
                            The{' '}
                            <span className="underline-yellow">thinkers</span>
                            {' '}and
                        </span>

                        {/* Line 2 — only "anging" has pink rounded bg */}
                        <span className="block mt-4">
                            doers were ch
                            <span className="relative inline-block">
                                <span
                                    className="absolute inset-y-0 inset-x-[-12px] bg-[#FFC2EA] rounded-full -z-10 mt-5"
                                    aria-hidden="true"
                                />
                                anging
                            </span>
                        </span>

                        {/* Line 3 — "status" has green bg */}
                        <span className="block mt-4">
                            the{' '}
                            <span className="relative inline-block">
                                <span
                                    className="absolute inset-y-0 inset-x-[-15px] bg-[#D7EEDD] rounded-full -z-10 mt-3"
                                    aria-hidden="true"
                                />
                                status
                            </span>
                            {' '}Quo with
                        </span>
                    </h1>

                </div>
            </div>

            {/* ── Sub-text ── */}
            <p
                className="font-normal text-center mx-auto -mt-6 md:-mt-10 text-[10px] md:text-[24px] leading-[36px] tracking-normal max-w-[850px] text-black px-4"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
                We are a team of strategists, designers communicators, researchers.
                <br />
                Togeather, we belive that progress only hghappens when you refuse to play things safe.
            </p>



            {/* ── Avatar group ── */}
            <AvatarGroup />
        </section>
    )
}
