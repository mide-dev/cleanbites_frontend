import { useState, HTMLAttributes } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import noImage from "../assets/no_image.png";

// navigate next item
function NextArrow(props) {
  const { onClick, rightArrowStyle } = props;
  return (
    <button
      className={`p-1 bg-white flex items-center justify-center
        rounded-full absolute z-10 right-3 top-1/2 -translate-y-2/4 opacity-75
        transition-opacity ease-in-out duration-200 hover:opacity-100 ${rightArrowStyle}`}
      onClick={onClick}
    >
      <ChevronRight size={24} color="black" />
    </button>
  );
}

// navigate previous item
function PrevArrow(props) {
  const { leftArrowStyle, onClick } = props;
  return (
    <button
      className={`p-1 bg-white flex items-center justify-center
        rounded-full absolute z-10 left-3 top-1/2 -translate-y-2/4 opacity-75 
        transition-opacity ease-in-out duration-200 hover:opacity-100 ${leftArrowStyle}`}
      onClick={onClick}
    >
      <ChevronLeft size={24} color="black" />
    </button>
  );
}

type ImageScrollProps = HTMLAttributes<HTMLDivElement> & {
  images: { image: string }[];
  leftArrowStyle?: string;
  rightArrowStyle?: string;
  scrollSpeed: number;
  displayScrollBtn: boolean;
};

function ImageSlider({
  images,
  scrollSpeed,
  displayScrollBtn,
  className,
  leftArrowStyle,
  rightArrowStyle,
}: ImageScrollProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // react slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: scrollSpeed,
    slidesToShow: 1,
    arrows: { displayScrollBtn },
    slidesToScroll: 1,
    nextArrow: <NextArrow rightArrowStyle={rightArrowStyle} />,
    prevArrow: <PrevArrow leftArrowStyle={leftArrowStyle} />,
    customPaging: (i) => {
      //  set opacity for each dot based on whether it's the active slide
      const opacity = currentSlide === i ? 1 : 0.5;

      return (
        <div
          className={`h-2 w-2 bg-white rounded-full absolute bottom-8`}
          style={{ opacity }}
        ></div>
      );
    },
    afterChange: (index) => {
      // Update the current slide index when the slide changes
      setCurrentSlide(index);
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  // render image
  const renderImages = (imgArr) => {
    if (imgArr && imgArr.length > 0) {
      return imgArr.map((img) => (
        <div key={img} className="focus:outline-none">
          <img src={img} className={`${className} object-cover`} />
        </div>
      ));
    } else {
      return (
        <div key={noImage} className="focus:outline-none">
          <img src={noImage} className={`${className} object-cover`} />
        </div>
      );
    }
  };

  return <Slider {...settings}>{renderImages(images)}</Slider>;
}

export default ImageSlider;
