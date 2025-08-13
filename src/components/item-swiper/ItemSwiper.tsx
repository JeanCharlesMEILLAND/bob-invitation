"use client";
import React, {ReactNode, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css"
import {clsx} from "clsx";


interface ItemSwiperProps {
  children: ReactNode[];
  className?: string;
}

const ItemSwiper: React.FC<ItemSwiperProps> = ({children, className}) => {
  const [shouldCenter, setShouldCenter] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(1);

  const checkCentering = (swiper: any) => {
    const totalSlides = swiper.slides.length;
    const slidesPerView = swiper.params.slidesPerView;
    setShouldCenter(totalSlides <= slidesPerView - 1);
    setVisibleSlides(slidesPerView);
  };
  const shouldShowPagination = children.length > visibleSlides;

  return (
      <div className="relative">
        <div
            className={"hidden md:block absolute top-0 left-0 h-full w-28 bg-gradient-to-r from-primary to-transparent z-20"}></div>
        <Swiper
            slidesPerView={1}
            spaceBetween={40}
            pagination={{
              clickable: true,
              enabled: shouldShowPagination,
            }}
            breakpoints={{
              640: {slidesPerView: 1},
              768: {slidesPerView: 2},
              1024: {slidesPerView: 3},
              1440: {slidesPerView: 3},
            }}
            modules={[Pagination]}
            className={clsx(
                "w-full !h-auto swiper-container",
                {
                  "mt-10": !className?.includes("mt-"),
                  "[&_.swiper-wrapper]:!justify-center": shouldCenter,
                  "[&_.swiper-wrapper]:mb-8": shouldShowPagination,
                  "[&_.swiper-wrapper]:mb-12": shouldShowPagination,
                  "[&_.swiper-pagination]:!block": shouldShowPagination,
                  "[&_.swiper-pagination]:!hidden": !shouldShowPagination,
                },
                className,
            )}
            onSwiper={checkCentering}
            onBreakpoint={checkCentering}
        >
          {children.map((child, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="h-full w-full">{child}</div>
              </SwiperSlide>
          ))}
          <div
              className={"hidden lg:block absolute top-0 right-0 h-full w-28 bg-gradient-to-l from-primary to-transparent z-20"}></div>
        </Swiper>
      </div>
  );
};

export default ItemSwiper;
