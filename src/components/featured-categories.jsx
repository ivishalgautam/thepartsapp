"use client";
import { H3 } from "./ui/typography";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "./cards/category";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "./section-heading";
import FadeUp from "./fade-up";

export const fetchCategories = async () => {
  const { data } = await http().get(
    `${endpoints.categories.getAll}?featured=true`,
  );
  return data;
};

export default function FeaturedCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["featured-categories"],
    queryFn: fetchCategories,
    enabled: false,
  });

  const breakpoints = {
    1200: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
  };

  return (
    <div className="bg-[#f4f5f9] py-10">
      <div className="container space-y-4">
        <SectionHeading
          title="Featured Categories"
          description="Explore Our Popular Categories"
        />
        <div className="min-h-72">
          {/* {isLoading && <Spinner />} */}

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={breakpoints}
            modules={[Navigation]}
            navigation
          >
            {Array.from({ length: 10 }).map((item, idx) => (
              <SwiperSlide key={idx}>
                <FadeUp delay={idx * 0.2}>
                  <CategoryCard slug={slug} name={name} image={image} />
                </FadeUp>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
