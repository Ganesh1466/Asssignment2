import React, { useState } from 'react'

const NAV_LINKS = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="w-full bg-off-white border-b border-gray-100">
            <nav className="max-w-[1920px] h-[100px] mx-auto px-8 flex items-center justify-between">

                {/* Logo */}
                <span 
                    className="font-gerbil font-normal select-none flex items-center justify-center text-black"
                    style={{ 
                        width: '201px', 
                        height: '46px', 
                        fontSize: '28px', 
                        lineHeight: '46px', 
                        letterSpacing: '0%' 
                    }}
                >
                    Elementum
                </span>

                {/* Center nav links — desktop */}
                <ul 
                    className="hidden md:flex items-center justify-between list-none p-0 m-0"
                    style={{ width: '533px', height: '24px' }}
                >
                    {NAV_LINKS.map(link => (
                        <li key={link} className="flex items-center">
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="font-gerbil text-lg font-normal text-gray-700 tracking-wide
                           relative after:absolute after:left-0 after:-bottom-0.5
                           after:w-0 after:h-px after:bg-brand-purple
                           after:transition-all after:duration-300
                           hover:after:w-full hover:text-brand-purple transition-colors duration-200"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right: hamburger icon */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    className="flex flex-col justify-between cursor-pointer p-0 bg-transparent border-none"
                    style={{ width: '45.35px', height: '10.5px' }}
                >
                    <span className="block w-full h-[1.5px] bg-black transition-all duration-300" />
                    <span className="block w-full h-[1.5px] bg-black transition-all duration-300" />
                </button>
            </nav>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <ul className="md:hidden flex flex-col gap-5 px-8 pb-6 list-none border-t border-gray-100 pt-4 bg-off-white">
                    {NAV_LINKS.map(link => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setMobileOpen(false)}
                                className="font-gerbil text-base font-medium text-gray-800 hover:text-brand-purple transition-colors"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}
