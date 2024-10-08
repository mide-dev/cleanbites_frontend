import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Rating from "./Rating";
import Star from "@/assets/Star";

interface ReviewCardProps {
  author_photo_url: string;
  author_name: string;
  datetime: string;
  text: string;
  rating: number;
}

function ReviewCard({
  author_photo_url,
  author_name,
  datetime,
  text,
  rating,
}: ReviewCardProps) {
  return (
    <>
      <div className="flex gap-x-2 items-center my-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={author_photo_url} />
          <AvatarFallback className="bg-gray-400 text-lg font-medium text-white">
            {author_name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium pb-1">{author_name}</h4>
          <p>{datetime}</p>
        </div>
      </div>
      <Rating
        emptySymbol={<Star className="w-5 stroke-black inline-block" />}
        fullSymbol={<Star className="w-5 fill-black inline-block" />}
        initialRating={rating}
        fractions={10}
        readonly
      />
      <p className="min-w-[250px] xs:min-w-[300px] py-4">{text}</p>
    </>
  );
}

export default ReviewCard;
