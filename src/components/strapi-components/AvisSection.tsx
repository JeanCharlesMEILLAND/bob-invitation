import { AvisInterface } from "@/types/avis";
import HighlightedText from "../common/HighlightedText";
import AvisCard from "../home/avis/AvisCard";
import { titleStyle } from "../home/style";
import { StrapiButton } from "@/types/common";


interface AvisSection {
    data: {
        title: string;
        avis: AvisInterface[];
        button: StrapiButton;
    }
}
export default function AvisSection({ data }: AvisSection) {
    const { avis, title, button } = data;

    return (
        <div className="relative container mx-auto px-8 flex flex-col gap-8 md:gap-16 text-[var(--foreground)]" data-section="avis">
            
                <HighlightedText text={title} style={titleStyle} />

            <div className="flex flex-row gap-8">
                {avis && avis.map((av, index) => {
                    if (!av) {
                        return;
                    }

                    return (
                        <AvisCard key={index} avis={av} />
                    )
                })}
            </div>
        </div >
    )
}
