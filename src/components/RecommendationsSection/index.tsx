"use client";

import "react-multi-carousel/lib/styles.css";

import RecommendationCard from "./RecommendationCard";

import Carousel from "react-multi-carousel";
import Image from "next/image";

const CustomRightArrow = ({
  isRight = true,
  onClick,
}: {
  isRight?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      data-isRight={isRight}
      onClick={onClick}
      className="z-50 absolute data-[isRight=false]:left-0 right-0 data-[isRight=false]:rotate-0  rotate-180"
    >
      <Image
        src="/icons/arrow-grey.svg"
        alt="arrow right"
        width={32}
        height={32}
      />
    </button>
  );
};

export default function RecommendationsSection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      slidesToSlide: 2,
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      slidesToSlide: 2,
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="w-full flex flex-col items-center my-12">
      <div className="mb-16">
        <p className="title">Lo que dicen otros profesionales</p>
        <p className="sub-title">
          Conoce, mi trayectoria mis habilidades y mi creencias profesionales
        </p>
      </div>
      <div className="flex w-full justify-center ">
        <Carousel
          infinite
          responsive={responsive}
          itemClass="w-auto h-auto flex justify-center w-[523px]"
          containerClass="w-full py-2"
          sliderClass="gap-5"
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomRightArrow isRight={false} />}
          centerMode
          focusOnSelect
        >
          <RecommendationCard />
          <RecommendationCard />
          <RecommendationCard />
        </Carousel>
      </div>
    </section>
  );
}
