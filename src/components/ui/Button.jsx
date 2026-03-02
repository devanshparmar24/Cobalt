export default function Button({ className = "" }) {
    return (
        <button className={`relative inline-flex items-center justify-center group ${className}`}>
            <svg
                viewBox="0 0 140 38"
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            >
                {/* Button Background */}
                <g filter="url(#filter0_dd)">
                    {/* Background */}
                    <path
                        d="M1.5 19C1.5 9.611 9.611 1.5 19 1.5H120.49C129.879 1.5 137.99 9.611 137.99 19C137.99 28.389 129.879 36.5 120.49 36.5H19C9.611 36.5 1.5 28.389 1.5 19Z"
                        fill="#09090B"
                        stroke="rgba(255,255,255,0.01)"
                        strokeWidth="2"
                    />
                </g>
                {/* Bottom Glow Line */}
                <rect
                    width="103.49"
                    height="1"
                    transform="translate(18 37)"
                    fill="url(#paint0_linear)"
                />

                {/* TEXT (Outside filter group) */}
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#D4D4D8"
                    fontSize="13"
                    fontWeight="500"
                >
                    Join the waitlist
                </text>

                <defs>
                    <filter
                        id="filter0_dd"
                        x="0"
                        y="0"
                        width="139.49"
                        height="38"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset />
                        <feComposite operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                        />
                        <feBlend mode="normal" />
                    </filter>

                    <linearGradient
                        id="paint0_linear"
                        x1="0"
                        y1="0.5"
                        x2="103.49"
                        y2="0.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#22D3EE" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </button>
    );
}