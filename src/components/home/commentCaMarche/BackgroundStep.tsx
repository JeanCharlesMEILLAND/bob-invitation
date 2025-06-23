"use client";

import Image from "next/image";

interface Step {
    svg: string;
    stepTitle: string;
}

export default function BackgroundStep() {

    const steps: Step[] = [
        {svg: "/svg/bob-steps/step1.svg",stepTitle: "Emprunter"},
        {svg: "/svg/bob-steps/step2.svg",stepTitle: "Prêter"},
        {svg: "/svg/bob-steps/step3.svg",stepTitle: "Services"},
        {svg: "/svg/bob-steps/step4.svg",stepTitle: "Créer un collectif"},
    ];

    return (
        <>
            <div className=" w-[130%] h-[130%] md:w-full md:h-full grid grid-cols-2 gap-8 md:gap-4">

                {
                    steps.map((step, index) => {
                        return (
                            <StepCard step={step} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

interface StepCard {
    step: Step
}
function StepCard({ step }: StepCard) {
    return (
        <>
            <div className="step-card-container">

                <div className="step-svg">
                    <Image
                        src={step.svg}
                        alt="Borrow and Back étapes"
                        width={120}
                        height={100}
                        className="object-cover"
                    />
                </div>

                <h3 className="step-title">{step.stepTitle}</h3>
            </div>
        </>
    )
}

