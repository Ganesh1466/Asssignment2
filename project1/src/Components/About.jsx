import React from 'react';

const About = () => {
    return (
        <div id="studio" className="w-full flex justify-center relative bg-white py-20 overflow-x-auto">
            <div
                style={{
                    width: '2000px',
                    minHeight: '1400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid black',
                    opacity: 1,
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <svg
                    style={{
                        position: 'absolute',
                        top: '470px', // Adjusted to keep visible. In full Figma this is 1997px.
                        left: '450px',
                        width: '1439.8696113009998px',
                        height: '689.5963049470697px',
                        transform: 'rotate(-3.65deg)',
                        opacity: 1,
                        zIndex: 0,
                        pointerEvents: 'none',
                        filter: 'drop-shadow(0px 8px 10px rgba(255, 109, 109, 0.4))'
                    }}
                    viewBox="0 0 1440 698"
                    preserveAspectRatio="none"
                >
                    {/* Curve 1: Right Image dipping down to See PIll */}
                    <path
                        d="M 1440 100 C 1000 400, 950 540, 825 540"
                        fill="none"
                        stroke="#FF6D6D"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />
                    {/* Curve 2: See Pill arching up to Left Image with slight upward flick at the end */}
                    <path
                        d="M 825 540 C 700 540, 300 100, 0 350"
                        fill="none"
                        stroke="#FF6D6D"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />
                </svg>
                {[1, 2].map((item, index) => (
                    <div key={index}
                        style={{
                            width: '100%',
                            height: '578px',
                            transform: 'rotate(0deg)',
                            opacity: 1,
                            display: 'flex',
                            justifyContent: 'space-between',
                            border: '2px solid blue'
                        }}
                    >
                        {index === 0 && (
                            <>
                                <div
                                    style={{
                                        width: '737px',
                                        height: '340px',
                                        transform: 'rotate(0deg)',
                                        opacity: 1,
                                        border: '2px solid red',
                                        position: 'relative',
                                        alignSelf: 'center'
                                    }}
                                >
                                    {/* Small red glow placed upper left of the text */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            width: '200px',
                                            height: '200px',
                                            background: '#FF7171',
                                            filter: 'blur(80px)',
                                            opacity: 0.6,
                                            top: '-100px',
                                            left: '50px',
                                            zIndex: 0,
                                            borderRadius: '50%',
                                            pointerEvents: 'none'
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-10px',
                                            left: '60px',
                                            width: '724px',
                                            opacity: 1,
                                            transform: 'rotate(0deg)',
                                            marginBottom: '-60px'
                                        }}
                                    >
                                        <h2
                                            style={{
                                                fontFamily: 'Gerbil',
                                                fontWeight: 400,
                                                fontSize: '56px',
                                                lineHeight: '76px',
                                                letterSpacing: '0.01em',
                                                color: '#000000',
                                                margin: 0,
                                                marginBottom: '24px',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <span className="underline-yellow">Tomorrow</span>{' '}
                                            should<br />
                                            be better than{' '}
                                            <span
                                                style={{
                                                    background: '#D7EEDD',
                                                    borderRadius: '9999px',
                                                    padding: '2px 16px',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                today
                                            </span>
                                        </h2>
                                        <p
                                            style={{
                                                fontFamily: "'Satoshi', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '24px',
                                                lineHeight: '36px',
                                                color: '#000000',
                                                margin: 0
                                            }}
                                        >
                                            We are a team of strategists, designers communicators, researchers.<br />
                                            Togeather, we belive that progress only happens when you refuse<br />
                                            to play things safe.
                                        </p>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '16px',
                                                marginTop: '24px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: "'Satoshi', sans-serif",
                                                    fontWeight: 500,
                                                    fontSize: '20px',
                                                    lineHeight: '24px',
                                                    color: '#000000'
                                                }}
                                            >
                                                Read more
                                            </span>
                                            <div
                                                style={{
                                                    width: '144px',
                                                    height: '0px',
                                                    borderTop: '1px solid black'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ position: 'relative', width: '600px', height: '600px' }}>
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '600px',
                                            height: '600px',
                                            transform: 'rotate(0deg)',
                                            opacity: 1,
                                            borderRadius: '500px',
                                            overflow: 'hidden',
                                            zIndex: 1
                                        }}
                                    >
                                        <img
                                            src="./public/meeting.jpg"
                                            alt="Meeting"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        {index === 1 && (
                            <>
                                <div style={{ position: 'relative', width: '600px', height: '600px' }}>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            width: '274px',
                                            height: '267px',
                                            background: '#FF7171',
                                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                            transform: 'rotate(0deg)',
                                            top: '-50px',
                                            left: '-30px',
                                            opacity: 1,
                                            zIndex: 0
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '600px',
                                            height: '600px',
                                            transform: 'rotate(0deg)',
                                            opacity: 1,
                                            borderRadius: '500px',
                                            overflow: 'hidden',
                                            zIndex: 1
                                        }}
                                    >
                                        <img
                                            src="./public/img2.png"
                                            alt="img2"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            width: '274px',
                                            height: '220px',
                                            background: '#FF7171',
                                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                            transform: 'rotate(0deg)',
                                            bottom: '-40px',
                                            right: '10px',
                                            opacity: 1,
                                            zIndex: 2
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        width: '706px',
                                        height: '348px',
                                        border: '2px solid red',
                                        transform: 'rotate(0deg)',
                                        opacity: 1,
                                        marginTop: '160px',
                                        position: 'relative',
                                        right: '130px' // Moves the rectangle towards the left side
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-10px',
                                            left: '29px',
                                            width: '693px'
                                        }}
                                    >
                                        <h2 style={{
                                            fontFamily: 'Gerbil',
                                            fontWeight: 400,
                                            fontSize: '56px',
                                            lineHeight: '76px',
                                            color: '#000000',
                                            margin: 0,
                                            width: '648px'
                                        }}>
                                            <span style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: '#D7EEDD',
                                                width: '172px',
                                                height: '80px',
                                                borderRadius: '100px',
                                                marginRight: '16px'
                                            }}>
                                                See
                                            </span>
                                            how we can<br />
                                            help you progress
                                        </h2>
                                        <p style={{
                                            fontFamily: "'Satoshi', sans-serif",
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            lineHeight: '36px',
                                            color: '#000000',
                                            margin: 0,
                                            marginTop: '34px',
                                            width: '693px'
                                        }}>
                                            We add a layer of fearless insights and action that allows change<br />
                                            makers to accelerate their progress in areas such as brand, design<br />
                                            digital, comms and social research.
                                        </p>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '16px',
                                                marginTop: '24px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: "'Satoshi', sans-serif",
                                                    fontWeight: 500,
                                                    fontSize: '20px',
                                                    lineHeight: '24px',
                                                    color: '#000000'
                                                }}
                                            >
                                                Read more
                                            </span>
                                            <div
                                                style={{
                                                    width: '144px',
                                                    height: '0px',
                                                    borderTop: '1px solid black'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
                {/* Content inside the perfectly centered box goes here */}
            </div>
        </div>
    )
}

export default About;
