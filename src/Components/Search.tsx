// import { useEffect } from "react";
// import search from "../assets/search.svg";
import { HTMLAttributes } from "react";
import { Search as Magnifier } from "lucide-react";

function Search({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-1 relative drop-shadow-lg md:drop-shadow md:hover:drop-shadow-md duration-75 ${className}`}
      {...props}
    >
      <input
        className="search-bar rounded-full lg:rounded-none lg:rounded-l-full border-l-[0.5px] border-y-[0.5px]"
        type="text"
        placeholder="e.g. pizza, sushi, pasta"
      />
      <div className="hidden lg:block relative w-full">
        <input
          className="search-bar md:rounded-r-full focus:outline-none border-r-[0.5px] border-y-[0.5px] "
          type="text"
          placeholder="Location"
          value="London"
          readOnly
        />
        <span className="absolute w-[1px] h-[70%] bg-gray-300 top-[50%] left-[0px] -translate-y-[50%]"></span>
      </div>
      <div className="w-8 h-8 rounded-full grid place-content-center bg-custom_accent absolute top-[50%] right-[10px] -translate-y-[50%] cursor-pointer">
        <Magnifier
          className="w-[0.875rem] h-[0.875rem]"
          color="white"
          strokeWidth={3}
        />
      </div>
    </div>
  );
}

export default Search;
