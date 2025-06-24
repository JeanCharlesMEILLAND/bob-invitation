import { CgWebsite } from "react-icons/cg";
import { FaDiscord, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { JSX } from "react";
import { SocialMedia } from "@/types/common";

type Social = {
  url: string;
  newTab: boolean;
  text: string;
  social: SocialMedia;
  className?: string;
};

const createIcon = (Icon: JSX.ElementType) => (
  <div className="rounded-full bg-white p-2">
    <Icon size={27} color="#3D3D3D" />
  </div>
);

const iconMap: { [key: string]: JSX.Element } = {
  WEBSITE: createIcon(CgWebsite),
  TWITTER: createIcon(FaXTwitter),
  YOUTUBE: createIcon(AiFillYoutube),
  DISCORD: createIcon(FaDiscord),
  FACEBOOK: createIcon(FaFacebookF),
  LINKEDIN: createIcon(FaLinkedin),
  INSTAGRAM: createIcon(AiFillInstagram),
};

export const renderSocialIcon = ({
  url,
  newTab,
  text,
  social,
  className,
}: Social) => {
  const icon = iconMap[social || ""] || null;
  return icon ? (
    <Link
      className={className}
      key={text + social}
      href={url}
      target={newTab ? "_blank" : "_parent"}
    >
      {icon}
    </Link>
  ) : null;
};