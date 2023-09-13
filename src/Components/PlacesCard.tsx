import { useState, useEffect, HTMLAttributes } from "react";
import PlaceImage from "./PlaceImage";
import HygieneIcon from "@/assets/hygieneIcon";
import Star from "@/assets/Star";
import { Place } from "@/constants/types";
import { useHygieneCheck, HygieneProp } from "../constants/HygieneCheck";

type PlaceProp = HTMLAttributes<HTMLDivElement> & Place;

function PlacesCard({ className, ...data }: PlaceProp) {
  const [hygieneData, setHygieneData] = useState<HygieneProp | null>(null);

  // process & retrieve hygiene data
  const hygieneResult = useHygieneCheck(data.RatingValue);

  useEffect(() => {
    setHygieneData(hygieneResult);
  }, []);

  return (
    <>
      <div className={`rounded-lg cursor-pointer placeCard ${className}`}>
        <PlaceImage images={data.photos} className="rounded-t-lg" />
        <div className="px-2 pt-[0.3rem] text-[0.85rem] text-custom_primary_400">
          <div className="flex justify-between">
            <p>{data.city}</p>
            <div className="flex gap-x-[0.2rem]">
              <Star className="w-3 fill-[#FF385C]" />
              {/* check if the rating value returned is valid */}
              {typeof data.rating === "number" && data.rating > 0 ? (
                <p>{`${data.rating} of ${data.user_ratings_total} Reviews`}</p>
              ) : (
                <p>No Ratings</p>
              )}
            </div>
          </div>
          <h3 className="text-[1rem] font-medium text-custom_primary_500 pt-2">
            {data.BusinessName}
          </h3>
          <p className="pt-[0.2rem] text-[0.75rem]">{data.street}</p>
          <div className="">
            {/* conditionally render hygiene */}
            {hygieneData === "Awaiting Inspection" ? (
              <div className={`flex pt-2 items-center gap-x-2 py-2`}>
                <p className="block font-medium">Awaiting Inspection</p>
              </div>
            ) : (
              <div className={`flex pt-2 items-center gap-x-2 py-2`}>
                <HygieneIcon className={`${hygieneData?.color}`} />
                {
                  <p className="inline-block pr-[0.4rem] font-medium">
                    {`${hygieneData?.ratingText} hygiene `}
                    <span className="px-[0.2rem]">&#8226;</span>
                    {`${hygieneData?.hygieneScore}%`}
                  </p>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlacesCard;
