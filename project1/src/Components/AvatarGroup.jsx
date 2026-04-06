import React from 'react'

/*
 * Positions match the design screenshot exactly:
 * - Left pair: two slightly overlapping circles, lower on screen
 * - Center-left: tall circle high up + smaller circle below-right
 * - Center: medium circle + smaller circle overlapping it lower-right
 * - Right pair: large circle high + medium circle lower-right
 * No container border/rectangle — avatars float freely.
 */
const AVATARS = [
    // Far left - behind (smaller, lower)
    {
        id: 1,
        src: 'https://randomuser.me/api/portraits/men/32.jpg',
        w: 160, h: 160,
        top: 80, left: -280,
    },
    // Left pair - in front (larger, slightly higher)
    {
        id: 2,
        src: 'https://randomuser.me/api/portraits/men/44.jpg',
        w: 180, h: 180,
        top: 40, left: -150,
        border: "3px solid #fff",
    },
    // Center-left - tall (large, highest up)
    {
        id: 3,
        src: 'https://randomuser.me/api/portraits/men/11.jpg',
        w: 160, h: 160,
        top: -50, left: 270,
    },
    // Center-left - below (smaller, lower)
    {
        id: 4,
        src: 'https://randomuser.me/api/portraits/men/67.jpg',
        w: 160, h: 160,
        top: 80, left: 380,
    },
    // Center - medium (mid height)
    {
        id: 5,
        src: 'https://randomuser.me/api/portraits/men/52.jpg',
        w: 160, h: 160,
        top: -50, left: 700,
    },
    // Center-right - overlapping lower-right of center
    {
        id: 6,
        src: 'https://randomuser.me/api/portraits/men/73.jpg',
        w: 160, h: 160,
        top: 70, left: 820,
    },
    // Right - large, high
    {
        id: 7,
        src: 'https://randomuser.me/api/portraits/men/85.jpg',
        w: 160, h: 160,
        top: -50, left: 1120,
    },
    // Far right - medium, lower
    {
        id: 8,
        src: 'https://randomuser.me/api/portraits/men/91.jpg',
        w: 160, h: 160,
        top: 50, left: 1280,
    },
]

export default function AvatarGroup() {
    return (
        <section className="w-full mt-14 mb-6">

            {/* ── Desktop: free-floating absolute layout, no border box ── */}
            <div
                className="hidden md:block relative mx-auto"
                style={{ width: '1200px', height: '290px' }}
            >
                {AVATARS.map(av => (
                    <img
                        key={av.id}
                        src={av.src}
                        alt={`Team member ${av.id}`}
                        className="absolute rounded-full object-cover shadow-xl
                       transition-transform duration-300 hover:scale-105 hover:z-10 cursor-pointer"
                        style={{
                            width: av.w,
                            height: av.h,
                            top: av.top,
                            left: av.left,
                        }}
                    />
                ))}
            </div>

            {/* ── Mobile: simple horizontal scroll row ── */}
            <div className="flex md:hidden gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory">
                {AVATARS.map(av => (
                    <img
                        key={av.id}
                        src={av.src}
                        alt={`Team member ${av.id}`}
                        className="flex-shrink-0 snap-center rounded-full object-cover
                       shadow-md w-24 h-24"
                    />
                ))}
            </div>
        </section>
    )
}
