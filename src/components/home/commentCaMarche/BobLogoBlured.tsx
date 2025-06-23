"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function BobLogoBlured() {
    const [targetElement, setTargetElement] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = document.querySelector('[data-section="commentCaMarche"]');
        if (!element) {
            setTargetElement(null)
        } else {
            setTargetElement(element as HTMLDivElement);

        }
    }, []);

    if (!targetElement) return;

    return createPortal(
        <>
            <svg width="995" height="1157" viewBox="0 0 995 1157" fill="none" xmlns="http://www.w3.org/2000/svg" className="bob-logo-blured ">
                <g opacity="0.4" filter="url(#filter0_f_3129_5851)">
                    <path d="M446.617 500.811C442.831 501.621 437.946 501.505 434.246 500.818C436.494 497.125 440.545 491.773 448.147 484.063C475.734 456.775 510.077 439.332 546.365 433.141C525.571 462.516 481.884 492.896 446.573 500.75L446.626 500.758L446.617 500.811ZM782.281 514.78C759.816 447.959 702.76 398.109 630.033 381.562C627.571 380.962 625.314 380.447 622.932 380.021C628.768 324.903 606.032 275.457 555.606 242.444C403.892 143.068 98.6608 226.017 -91.3344 420.597L-22.2412 430.482C153.719 272.804 412.118 210.306 524.173 287.952C556.922 310.598 571.995 339.918 567.683 375.698C509.077 378.131 452.51 402.399 409.001 445.48C370.128 483.946 372.79 511.542 381.932 528.016C397.516 556.23 437.284 559.265 458.681 554.467C515.265 541.903 580.389 492.71 603.516 445.041C605.419 441.133 607.216 437.207 608.853 433.257C611.545 433.785 614.44 434.4 617.114 435.034C671.133 447.415 715.701 476.654 741.559 521.087C831.301 674.302 655.174 726.742 650.287 730.238L349.344 810.999C284.352 823.327 224.228 774.885 223.414 709.614L261.196 381.605C261.363 372.733 257.632 362.389 245.203 364.706L199.384 378.737C189.575 381.356 183.956 389.591 182.843 398.585L114.805 817.152C102.515 911.437 197.832 983.23 286.735 946.383L506.443 855.349L507.071 855.178C533.555 845.674 561.752 834.713 591.628 822.181C652.229 796.926 844.861 699.934 782.263 514.886L782.281 514.78Z" fill="url(#paint0_linear_3129_5851)" />
                </g>
                <defs>
                    <filter id="filter0_f_3129_5851" x="-291.334" y="0.265625" width="1285.95" height="1155.96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_3129_5851" />
                    </filter>
                    <linearGradient id="paint0_linear_3129_5851" x1="403.81" y1="197.153" x2="-124.613" y2="800.008" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#166AF6" />
                        <stop offset="1" stopColor="#00C9F7" />
                    </linearGradient>
                </defs>
            </svg>

            <style jsx>
                {`
                .bob-logo-blured {
                position:absolute;
                    width: 903.67px;
                    background: linear-gradient(216.21deg, #166AF6 21.13%, #00C9F7 91.21%);
                    opacity: 0.1;
                    filter: blur(100px);
                    transform: matrix(0.99, 0.15, -0.16, 0.99, 0, 0);
                    z-index: -40;
                }
                `}
            </style>
        </>, targetElement!

    )
}


