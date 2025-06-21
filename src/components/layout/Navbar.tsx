"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { NavbarData } from "@/types/common";
import { cn } from "@/utils/css.utils";
import StrapiButtonLink from "@/components/common/buttons/StrapiButtonLink";
import { getStrapiMedia } from "@/utils/url.utils";
import ThemeSwitcher from "../common/ThemeSwitcher";
import SVGLogoBob from "@/assets/svg/SVGLogoBob";
import BorrowText from "../ui/BorrowText";
import { scrollToSection } from "@/utils/scrollUtils";

interface NavItem {
  url: string;
  newTab: boolean;
  text: string;
  nav_items?: {
    id: number;
    title: string;
    url: string;
    description?: string;
  }[];
}

const NavLink: FC<{
  href: string;
  newTab?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  isActive: boolean;
}> = ({ href, newTab, onClick, children, isActive }) => (
  <Link
    href={href}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
    className={cn(
      `hover:opacity-50 text-base ${isActive ? "font-bold" : "font-normal"} transition-colors duration-300 `
    )}
    onClick={onClick}
    scroll={true}
    prefetch={true}
  >
    {children}
    {isActive && <div className="w-full h-[2px] " />}
  </Link>
);

const Navbar: FC<NavbarData> = ({ data }) => {
  const { logo, menus, button } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localIsMenuOpen, setLocalIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const useImage = useState(true);

  const [scrolled, setScrolled] = useState(false);
  const [mobileHeight, setMobileHeight] = useState("100vh");
  const router = useRouter();

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  }, []);

  const updateMobileHeight = useCallback(() => {
    setMobileHeight(`${window.innerHeight}px`);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateMobileHeight);

    handleScroll();
    updateMobileHeight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMobileHeight);
    };
  }, [isMenuOpen, handleScroll, updateMobileHeight]);

  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.toggle("overflow-hidden", localIsMenuOpen);
  }, [localIsMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 728) {
        setLocalIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoUrl = getStrapiMedia(logo?.logo?.url) || "";

  const sectionMap: { [key: string]: string } = {
    "comment": "hero",
    "contact": "advantages",
  }

  const handleScrollToSection = useCallback(async (sectionName: string) => {
    if (!isHomePage) {
      router.push("/");

      await new Promise(resolve => {
        const checkNavigation = () => {
          if (window.location.pathname === "/") {
            resolve(true);
          } else {
            setTimeout(checkNavigation, 100)
          }
        };

        checkNavigation();
      })

      await new Promise(resolve => setTimeout(resolve, 200))
    }

    scrollToSection(sectionName, 1000, -120);
  }, [isHomePage, pathname, router]);

  const checkIfScrollSection = useCallback((url: string) => {

    for (const keyword in sectionMap) {
      if (url.includes(keyword)) {
        handleScrollToSection(sectionMap[keyword])
        return;
      }
    }
  }, [handleScrollToSection])

  const handleButtonClick = useCallback((url: string) => {
      checkIfScrollSection(url);
  }, [checkIfScrollSection])

  const handleNavClick = useCallback((url: string, newTab?: boolean) => {
    setLocalIsMenuOpen(false);

    if (newTab) {
      return;
    }

    checkIfScrollSection(url);
  }, [checkIfScrollSection]);

  const renderNavItems = (
    items: NavItem[],
    part: "left" | "right" | "mobile"
  ) =>
    items?.map(({ newTab, text, url }, index) => {
      const currentPathSegment = pathname.split("/")[1];
      const urlSegment = url.split("/")[1];

      const urlInLowerCase = url.toLowerCase();

      const isScrollLink = urlInLowerCase.includes("comment") || url.toLowerCase().includes("contact");

      return (
        <React.Fragment key={url}>
          <li className="relative group text-center">
            {isScrollLink ? (
              <button
                onClick={() => handleButtonClick(urlInLowerCase)}
                className={cn(
                  `hover:opacity-50 text-base ${currentPathSegment === urlSegment ? "font-bold" : "font-normal"} transition-colors duration-300 `
                )}
              >
                {text}
                {currentPathSegment === urlSegment && <div className="w-full h-[2px] " />}
              </button>
            ) : (
              <NavLink
                href={url}
                newTab={newTab}
                onClick={() => handleNavClick(url, newTab)}
                isActive={currentPathSegment === urlSegment}
              >
                {text}
              </NavLink>
            )}
          </li>
        </React.Fragment>
      );
    });

  return (
    <nav
      className={cn(
        "sticky w-full h-24 md:h-24 flex items-center transition-all ease-in-out duration-150 text-[var(--foreground)] z-[999]",
        scrolled ? "top-0 bg-[var(--background)]/60 backdrop-blur-sm" : "top-6"
      )}
    >
      <div className="container mx-auto w-full h-full flex items-center justify-between px-8">
        <Link href="/" className="py-4 h-full flex items-center">
          {
            useImage ? (
              <div className="relative w-[100px] h-fit flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
                <Image
                  src={logoUrl}
                  alt="Logo"
                  width={200}
                  height={150}
                  className="object-contain w-full h-full"
                  priority
                />
                <BorrowText className="-translate-y-1.5 text-center" />
              </div>
            ) : (
              <SVGLogoBob />
            )
          }
        </Link>

        <div className="w-auto flex items-center justify-end gap-6">
          <ul className={cn("hidden lg:flex items-center gap-8 h-full")}>
            {renderNavItems(menus, "left")}

            {/* Thème switcher */}
            <div className="hidden lg:inline-flex">
              <ThemeSwitcher />
            </div>
          </ul>
        </div>

        {/* 
        {button && (
          <div className={"lg:flex w-fit hidden"}>
            {button.map((btn) => (
              <StrapiButtonLink
                key={btn.url}
                {...btn}
                showArrow={false}
                className="h-12 rounded-none"
              />
            ))}
          </div>
        )} */}

        <div className="inline-flex lg:hidden items-center  gap-6">
          {/* Thème switcher */}
          <ThemeSwitcher />

          <button
            onClick={() => {
              setLocalIsMenuOpen(!localIsMenuOpen);
            }}
            aria-label={localIsMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={localIsMenuOpen}
            className={cn("lg:hidden")}
          >
            {localIsMenuOpen ? (
              <RiCloseLargeLine
                size={27}
                className={"currentColor z-[999]"}
                aria-hidden="true"
              />
            ) : (
              <GiHamburgerMenu
                size={27}
                className={
                  scrolled
                    ? "currentColor"
                    : pathname === "/"
                      ? "currentColor"
                      : "currentColor"
                }
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[9999] bg-[var(--background)] backdrop-blur-3xl lg:hidden",
          "transition-all duration-300 ease-in-out",
          "w-64",
          localIsMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <span className=" text-2xl text-[#0b9bf2] uppercase">Menu</span>

            <button
              onClick={() => setLocalIsMenuOpen(!localIsMenuOpen)}
              aria-label="Close menu"
              className="currentColor"
            >
              <RiCloseLargeLine size={27} aria-hidden="true" />
            </button>
          </div>
          <ul className="flex-grow flex flex-col items-center justify-start gap-6 currentColor p-4">
            {renderNavItems(menus, "mobile")}
            <div className="p-4 w-full flex justify-center">
              {button &&
                button.map((btn) => (
                  <StrapiButtonLink
                    key={btn.url}
                    {...btn}
                    responsive={true}
                    className="mb-2 w-fit text-xs "
                  />
                ))}
            </div>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {localIsMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-[9998] md:hidden"
          onClick={() => setLocalIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;