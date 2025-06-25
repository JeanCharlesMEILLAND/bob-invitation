"use client";
import HighlightedText from "../common/HighlightedText";
import BackgroundStep from "../home/commentCaMarche/BackgroundStep";
import "@/assets/css/richText.css";

interface RichText {
    data: {
        body?: string;
    }
}
export default function RichText({ data }: RichText) {
    const { body } = data;

    return (
        <>
            <div className=" relative container mx-auto px-8 py-8 md:py-16 z-10 richTextContainer"
                style={{
                    color: "currentcolor",
                    minHeight: "calc(86vh - 80px)"
                }}
            >

                {body && (
                    <HighlightedText text={body} />
                )}

                <div className="fixed top-1/4 2xl:left-8 opacity-30 -z-10">
                    <BackgroundStep />
                </div>
                <div className="fixed top-1/3 2xl:right-8 hidden lg:flex opacity-30 z-10">
                    <BackgroundStep />
                </div>
            </div>
        </>
    )
}