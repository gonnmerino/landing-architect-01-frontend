"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import type { ImageSlide } from "@/app/types/project";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function VerticalCarousel({
  slides,
}: {
  slides: ImageSlide[];
}) {
  //{ console.log("SLIDE:", slides); }

  return (
    <div className="relative h-full w-full">

      {/* TODO: Hacer que las bullets de la paginacion aparezca en la izquierda y ocultar en mobile. */}
      <div className="carousel-pagination absolute -left-10 md:-left-12 lg:-left-10 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30" />

      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        scrollbar={{ draggable: true }}
        mousewheel={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".carousel-pagination",
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !w-[10px] !h-[10px] !rounded-none !bg-[#c6a48c] !opacity-40",
          bulletActiveClass: "!opacity-100 !bg-[#b46a3c]",
        }}
        modules={[Pagination, Autoplay, Mousewheel, Scrollbar]}
        className="h-full w-full"
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <Link href={`/projects/${slide.slug}`}>
                <img
                  src={slide.imageUrl}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="absolute bottom-0 left-0 md:bottom-10 md:left-15 max-w-xl sm:max-w-xs bg-[#f4f1ed]/90 backdrop-blur-md p-3 md:p-6 border border-[#b46a3c]/20">
                <p className="md:text-base text-xs font-light text-black leading-relaxed">
                  {slide.ImageDescription}
                </p>

                {slide.DateOfProject && (
                  <p className="md:text-base text-xs text-neutral-600 mt-2 tracking-wide">
                    {new Date(slide.DateOfProject).getFullYear()}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
