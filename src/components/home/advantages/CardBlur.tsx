"use client";
import {BobButton} from "@/components/ui/BobButton";
import {useTheme} from "@/context/themeContext";
import {useRouter} from "next/navigation";
import HighlightedText from "@/components/common/HighlightedText";
import {StrapiButton} from "@/types/common";
import {isAndroid, isIOS, isMobile} from 'react-device-detect';

interface CardBlurProps {
  advantagesBloc: {
    titre: string;
    description: string;
  }[];
  button: StrapiButton[]
}

export default function CardBlur({advantagesBloc, button}: CardBlurProps) {
  const {theme: currentTheme} = useTheme();
  const router = useRouter();

  const handleClick = () => {
    const {url, newTab} = button[0] ?? {};
    if (url?.trim()) {
      if (isMobile) {
        if (isIOS) {
          window.location.href = button[1].url;
        } else if (isAndroid) {
          window.location.href = button[0].url;
        }
      } else {
        if (newTab) {
          window.open(url, "_blank", "noopener,noreferrer");
        } else {
          router.push(url);
        }
      }
    }
  };

  return (
      <div className="relative w-fit flex flex-col gap-8"
      >
        <div
            className="pb-12 md:pb-8 lg:pb-10 w-fit h-fit backdrop-blur-3xl md:backdrop-blur-2xl rounded-[50px] border border-[var(--foreground)]/10 overflow-hidden">
          <div
              className={`relative px-8 py-8 w-fit h-auto flex justify-center items-stretch  max-w-full rounded-[50px] bg-[var(--foreground)/10 overflow-hidden
                    ${currentTheme === "light" ? " opacity-0" : " opacity-100"}
                    `}
              style={{
                width: "min(485px, 90vw)",
                filter: "blur(30px)",
                background: currentTheme === "dark" ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(15, 64, 146, 0.21) 70.27%)" : ""
              }}
          >
            <AdvantageList advantagesBloc={advantagesBloc} isBackground={true}/>

          </div>
          <div className="w-fit h-auto rounded-[50px] overflow-hidden">
            <AdvantageList advantagesBloc={advantagesBloc} isBackground={false}/>
          </div>
        </div>
        {button && (
            <BobButton
                onClick={handleClick}
                className=" px-8 w-full flex text-black justify-center"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
            >
              {button[0]?.text}
            </BobButton>

        )}
      </div>
  )
}


function AdvantageList({advantagesBloc, isBackground = false}: {
  advantagesBloc: {
    description: string;
    titre: string;
  }[],
  isBackground?: boolean
}) {
  const {theme: currentTheme} = useTheme();


  return (
      <ul className={` ${isBackground ? "flex flex-col gap-8 w-full h-auto text-transparent pointer-events-none select-none" : "absolute top-0 px-8 py-12  w-full h-[120%] flex flex-col gap-8 rounded-[50px] "} rounded-[50px] overflow-hidden`}
          style={{
            width: "min(485px, 90vw)",
            background: currentTheme === "dark" ? "" : "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(15, 64, 146, 0.21) 70.27%)"
          }}
      >
        {advantagesBloc && advantagesBloc.map((adv, index) => {
          return (
              <li key={index}>
            <span
                style={{
                  fontFamily: 'Prompt',
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "36px",
                  color: "var(--primary)",
                }}
            ><HighlightedText text={adv.titre}/> </span>
                <span
                    className="block"
                    style={{
                      fontFamily: 'Outfit',
                      fontStyle: "normal",
                      fontWeight: 200,
                      fontSize: "24px",
                      lineHeight: "30px",
                      color: "currentColor",
                    }}
                ><HighlightedText text={adv.description}/> </span>
              </li>
          )
        })}
      </ul>
  )
}