import SVGBob from "@/assets/svg/SVGBob";
import Image from "next/image";

export default function RootPage() {
    return (
        <div className="relative container mx-auto px-8 min-h-screen flex justify-start items-center">
            <div className=" flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-16">
                <div className="relative min-h-[80vh] overflow-hidden"
                >
                    <Image
                        src={"/images/bob-1 1.png"}
                        alt="Borrow and Back"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/3 -z-10">
                    <SVGBob />
                </div>

                <div
                    style={{
                        position: "absolute",
                        width: "650px",
                        height: "650px",
                        left: "0px",
                        top: "400px",
                        background: "#166AF6",
                        mixBlendMode: "lighten",
                        opacity: 0.4,
                        filter: "blur(250px)",
                        zIndex: -10

                    }}
                >

                </div>

                <div className="flex flex-col gap-8">

                    <h1
                        style={{
                            fontFamily: 'Prompt',
                            fontStyle: "normal",
                            fontWeight: 900,
                            fontSize: "74px",
                            lineHeight: "112px",
                            color: "#FFFFFF",
                        }}
                    >BORROW & BACK</h1>
                    <div>
                        <p style={{

                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "36px",
                            lineHeight: "130%",
                            letterSpacing: "-0.06em",

                            color: "#FFFFFF",


                        }}>Partagez, Empruntez, Réduisez vos Dépenses avec BOB !</p>

                    </div>
                    <p
                        style={{

                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: "20px",
                            lineHeight: "140%",
                            color: "#FFFFFF",


                        }}
                    >
                        Avec Bob, gérez vos prêts d'objets et d'argent en toute simplicité. Ajoutez vos amis, définissez des rappels et gardez le contrôle sans jamais rien oublier !

                    </p>

                    {/* CTA */}
                    <div className="flex flex-col gap-8">
                        <span
                            style={{

                                fontFamily: 'Outfit',
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "15px",
                                lineHeight: "19px",
                                letterSpacing: "0.75em",
                                textTransform: "uppercase",
                                color: "#0BCAFF",


                            }}
                        >Téléchargez l’application</span>

                        <div className="flex flex-row gap-4">

                            <button
                                className="px-3 py-2 flex flex-row justify-center items-center"
                                style={
                                    {
                                        width: "200px",
                                        height: "60px",
                                        left: "671px",
                                        top: "728px",
                                        background: "#D9D9D9",
                                        borderRadius: "40px",
                                        cursor: "pointer"
                                    }
                                }

                            >
                                <Image
                                    src={"/images/buttons/downloadonandroid.png"}
                                    alt="Download on apple Store"
                                    width={150}
                                    height={150}
                                    className="object-contain"
                                    priority

                                />
                            </button>
                            <button
                                className="px-3 py-2 flex flex-row justify-center items-center"
                                style={
                                    {
                                        width: "200px",
                                        height: "60px",
                                        left: "671px",
                                        top: "728px",
                                        background: "#D9D9D9",
                                        borderRadius: "40px",
                                        cursor: "pointer"
                                    }
                                }

                            >
                                <Image
                                    src={"/images/buttons/downloadonapple.png"}
                                    alt="Download on playStore"
                                    width={150}
                                    height={150}
                                    className="object-contain"
                                    priority
                                />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}