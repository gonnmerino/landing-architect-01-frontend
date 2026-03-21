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

      <div className="carousel-pagination absolute top-1/2 flex flex-col gap-2 z-30"
        style={{ right: 'unset' }} />

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
            "swiper-pagination-bullet !cursor-default !w-[10px] !h-[10px] translate-x-2 -translate-y-8 md:translate-y-0 md:!w-[12px] md:!h-[12px] md:!-translate-x-8 !rounded-none !bg-[#3f2b1d] !opacity-30",
          bulletActiveClass: "!opacity-70 !bg-[#3f2b1d]",
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
              <div className="absolute bottom-0 left-0 md:bottom-10 md:left-10 max-w-xl sm:max-w-xs bg-[#f4f1ed]/70 backdrop-blur-md p-3 md:p-6">
                <p className="md:text-base text-xs text-neutral-700 leading-relaxed">
                  {slide.ImageDescription}
                </p>

                {slide.DateOfProject && (
                  <p className="md:text-base text-xs text-neutral-600 mt-2 tracking-wide">
                    {new Date(slide.DateOfProject).getFullYear()}, {slide.slug
                      .split('-')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ')}.
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