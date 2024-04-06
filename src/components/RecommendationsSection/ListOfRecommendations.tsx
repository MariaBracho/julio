"use client";

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import CustomRightArrow from "./CustomRightArrow";
import RecommendationCard from "./RecommendationCard";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getRecommendations } from "@/queries/getRecommendations";
import useSupabaseBrowser from "@/utils/supabase-browser";

export default function ListOfRecommendations() {
  const client = useSupabaseBrowser();

  const { data: recommendations } = useQuery(getRecommendations(client));

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      slidesToSlide: 2,
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      slidesToSlide: 2,
      items: 1,
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
    <div className="flex w-full justify-center ">
      <Carousel
        responsive={responsive}
        itemClass="flex justify-center w-[523px] min-w-[523px] "
        containerClass="w-full py-2"
        sliderClass="gap-5"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomRightArrow isRight={false} />}
        centerMode
        focusOnSelect
      >
        {recommendations &&
          recommendations.map(
            ({ id, profilePicture, username, description, role }) => (
              <RecommendationCard
                key={id}
                profilePicture={profilePicture}
                username={username}
                description={description}
                role={role}
              />
            )
          )}
      </Carousel>
    </div>
  );
}
