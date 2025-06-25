"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import { FooterData } from "@/types/common";
import StrapiPicture from "@/components/common/StrapiPicture";
import { renderSocialIcon } from "@/utils/icon.utils";
import { cn } from "@/utils/css.utils";
import "@/assets/css/richText.css";

const ContactSection: FC<{
  logo: FooterData["data"]["logo"];
  contacts: { id?: string; adresse: string; phone: string; email: string };
  socialLinks: FooterData["data"]["socialLinks"];
  className?: string;
  onLogoHover: (isHovered: boolean) => void;
}> = ({ logo, contacts, socialLinks, className, onLogoHover }) => {
  // const {id, ...contactsWithoutId} = contacts;

  const [logoShow, setLogoShow] = useState(false);
  const SHOW_FOOTER_LOGO = false;

  return (
    <div
      className={cn(
        "flex flex-col items-start gap-8 md:gap-6",
        className
      )}
    >
      <div className="w-full h-full flex flex-col items-center gap-4 lg:gap-8">
        {
          SHOW_FOOTER_LOGO && (
            <div
              className="w-full cursor-pointer"

            >
              <StrapiPicture
                picture={logo.logo}
                className="object-contain w-full md:w-fit h-32 md:h-56"
              />
            </div>
          )
        }
        <div className="w-full flex flex-row justify-center gap-6">
          {socialLinks?.map((link, index) => (
            <span key={index}>{renderSocialIcon(link)}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer: FC<FooterData> = ({ data }) => {
  const { logo, contacts, socialLinks, legalLinks, menus } = data;
  const [isHovered, setIsHovered] = useState(false);
  const SHOW_SECTIONS_SEPARATOR = false;
  const SHOW_LEGAL_SEPARATOR = true;

  return (
    <div className="relative">
      <footer className="bg-primary-900 text-primary-50 relative z-10" style={{fontFamily:"Inter" }}>
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-8">
            {
              contacts && logo && (
                <ContactSection
                  logo={logo}
                  contacts={contacts}
                  socialLinks={socialLinks}
                  className="w-full md:w-[20%]"
                  onLogoHover={setIsHovered}
                />
              )
            }
            <div className="h-fit flex-1 flex-col justify-end items-end gap-12">

              {/* <div className="w-full h-[1.5px] bg-white/50 mt-8" /> */}
              <div className="w-full flex flex-row gap-4 items-center justify-center py-4 mt-2">
                {menus && menus.map(item => (
                  <Link href={item.url} key={item.text} className=" text-white brightness-75 hover:brightness-100 uppercase transition">
                    {item.text}
                  </Link>
                ))}
                {SHOW_SECTIONS_SEPARATOR && ("|")}
                {
                  legalLinks && legalLinks.map((item, index) => (
                    <React.Fragment key={item.text}>
                      {SHOW_LEGAL_SEPARATOR && index !== 0 && ("|")}
                      <div  className="flex items-center gap-2 "
                      style={{  letterSpacing: "0.08em",}}

                      >
                        <Link href={item.url}
                        className="brightness-75 hover:brightness-100 transition"
                        >
                          {item.text}
                        </Link>
                      </div>
                    </React.Fragment>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
