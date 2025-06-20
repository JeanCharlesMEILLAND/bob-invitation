"use client";
import React, {FC, useState} from "react";
import Link from "next/link";
import {FooterData} from "@/types/common";

import {FaEnvelope, FaPhone} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import StrapiPicture from "@/components/common/StrapiPicture";
import {renderSocialIcon} from "@/utils/icon.utils";
import {cn} from "@/utils/css.utils";

const ContactSection: FC<{
  logo: FooterData["data"]["logo"];
  contacts: { id?: string; adresse: string; phone: string; email: string };
  socialLinks: FooterData["data"]["socialLinks"];
  className?: string;
  onLogoHover: (isHovered: boolean) => void;
}> = ({logo, contacts, socialLinks, className, onLogoHover}) => {
  const {id, ...contactsWithoutId} = contacts;

  const [logoShow, setLogoShow] = useState(false);

  return (
      <div
          className={cn(
              "flex flex-col items-start gap-8 md:gap-6",
              className
          )}
      >
        <div className="w-full h-full flex flex-col items-center gap-4 lg:gap-8">
          <div
              className="w-full cursor-pointer"
              onClick={() => {
                setLogoShow(!logoShow);
                onLogoHover(!logoShow);
              }}
          >
            <StrapiPicture
                picture={logo.logo}
                className="object-contain w-full md:w-fit h-32 md:h-56"
            />
          </div>
          <div className="w-full flex flex-row justify-center gap-6">
            {socialLinks?.map((link, index) => (
                <span key={index}>{renderSocialIcon(link)}</span>
            ))}
          </div>
        </div>
      </div>
  );
};

const Footer: FC<FooterData> = ({data}) => {
  const {logo, contacts, socialLinks, legalLinks, menus} = data;
  const [isHovered, setIsHovered] = useState(false);

  const {id, ...contactsWithoutId} = contacts as {
    id?: string;
    adresse: string;
    phone: string;
    email: string;
  };

  return (
      <div className="relative">
        <footer className="bg-primary-900 text-primary-50 relative z-10">
          <div className="container mx-auto !pt-12 pb-12 relative">
            <div className="flex flex-col md:flex-row gap-8 md:gap-8">
              <ContactSection
                  logo={logo}
                  contacts={contacts}
                  socialLinks={socialLinks}
                  className="w-full md:w-[20%]"
                  onLogoHover={setIsHovered}
              />

              <div className="h-fit flex-1 flex-col justify-end items-end gap-12">
                <div className="flex flex-1 flex-row gap-6">
                  <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-4">
                    {Object.entries(contactsWithoutId).map(([key, value]) => (
                        <div key={key} className="w-full flex flex-1 items-center gap-2">
                          {key === "adresse" ? (
                              <div className="w-full flex flex-col justify-center items-center">
                                <div className="w-full h-24 flex justify-center items-center">
                                  <FaLocationDot size={32}/>
                                </div>
                                <p className="font-bold text-lg">Retrouvez-nous</p>
                                <span className="text-center mt-4">{value}</span>
                              </div>
                          ) : (
                              <div className="w-full flex flex-col justify-center items-center">
                                <div className="w-full h-24 flex justify-center items-center">
                                  {key === "email" ?
                                      <FaEnvelope size={32}/>
                                      :
                                      <FaPhone size={32}/>
                                  }
                                </div>
                                <p className="font-bold text-lg">{key === "email" ? "Contactez-nous" : "Appelez-nous"}</p>
                                <Link
                                    href={`${key === "email" ? "mailto:" : "tel:"}${value}`}
                                    className="text-center mt-4"
                                >
                                  {value}
                                </Link>
                              </div>
                          )}
                        </div>
                    ))}
                  </div>
                </div>
                <div className="w-full h-[1.5px] bg-white/50 mt-8"/>
                <div className="w-full flex flex-row gap-4 items-center justify-center py-4 mt-2">
                  {menus.map(item => (
                      <Link href={item.url} key={item.text} className="text-white uppercase">
                        {item.text}
                      </Link>
                  ))}
                  |
                  {
                    legalLinks.map(item => (
                        <div key={item.text} className="flex items-center gap-2">
                          <Link href={item.url}>
                            {item.text}
                          </Link>
                        </div>
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
