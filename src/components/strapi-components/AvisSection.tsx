'use client';

import { AvisInterface } from "@/types/avis";
import HighlightedText from "../common/HighlightedText";
import AvisCard from "../home/avis/AvisCard";
import { titleStyle } from "../home/style";
import { StrapiButton } from "@/types/common";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "@/assets/css/avisSection.css"
import { BobButton } from "../ui/BobButton";

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
        <div className="relative container mx-auto px-8 pb-4 pt-4 lg:pt-10 flex flex-col gap-8 md:gap-16 text-[var(--foreground)]" data-section="avis">
            <HighlightedText text={title} style={titleStyle} />

            <div className="w-full pb-4">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={32}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet !opacity-30',
                        bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 32,
                        },
                    }}
                    className="avis-swiper"
                >
                    {avis && avis.map((av, index) => {
                        if (!av) {
                            return null;
                        }
                        return (
                            <SwiperSlide key={index} className="pb-4 transition-transform duration-300">
                                {({ isActive }) => (
                                    <div className={`transition-transform duration-300 ${isActive ? 'lg:scale-110' : 'lg:scale-95 lg:opacity-80'
                                        }`}>
                                        <AvisCard avis={av} />
                                    </div>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            <div className="mt-8 flex justify-center">
                <BobButton onClick={() => { }} className="text-[#262626]">
                    Déposer vos avis
                </BobButton>
            </div>

            </div>
            <style jsx global>{`
        .avis-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        
        .avis-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .avis-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }
        
        .avis-swiper .swiper-slide > div {
          width: 100%;
          height: 100%;
        }
      `}</style>
        </div>
    );
}