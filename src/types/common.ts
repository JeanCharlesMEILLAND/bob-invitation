export type StrapiPictureType = {
  url: string;
  alternativeText: string;
  width?: number;
  height?: number;
};

export type StrapiStyles = {
  textColor?: string;
  textHoveredColor?: string;
  bgColor?: string;
  hoveredBgColor?: string;
  bgImage?: StrapiPictureType | null;
  bgPosition?: "center" | "left" | "right";
  paddingTop?: boolean;
};

export type DefaultSeo = {
  metaTitle: string;
  metaDescription: string;
  keywords: string | null;
  shareImage: StrapiPictureType | null;
  canonicalUrl: string | null;
  publisher: string | null;
};

export type MenusLink = {
  url: string;
  text: string;
  newTab: boolean;
};

type Logo = {
  logo: StrapiPictureType;
  text: string;
  url: string;
};

export type StrapiButton = {
  text: string;
  url: string;
  newTab: boolean;
  textColor: string;
  bgColor: string;
  borderColor?: string;
};

export type NavbarData = {
  data: {
    menus: MenusLink[];
    logo: Logo;
    button: StrapiButton[];
  };
};

export enum SocialMedia {
  YOUTUBE = "YOUTUBE",
  TWITTER = "TWITTER",
  DISCORD = "DISCORD",
  WEBSITE = "WEBSITE",
  LINKEDIN = "LINKEDIN",
  FACEBOOK = "FACEBOOK",
}

export type FooterData = {
  data: {
    id: number;
    logo: Logo;
    menus: MenusLink[];
    socialLinks: {
      url: string;
      newTab: boolean;
      text: string;
      social: SocialMedia;
    }[];
    legalLinks: MenusLink[];
    contacts: {
      phone: string;
      email: string;
      adresse: string;
    };
    sections: any[]
  };
};

export type GlobalData = {
  data: {
    siteName: string;
    siteDescription: string;
    favicon: StrapiPictureType;
    defaultSeo: DefaultSeo;
    logo: Logo;
    metadatabase: string;
  };
};
