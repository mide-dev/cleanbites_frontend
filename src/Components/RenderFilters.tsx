// import { filterList } from "@/constants/filterItems";
import { useState } from "react";
import { useFilterContext } from "../FilterContext";

function RenderFilters({ list }) {
  const { onItemClicked } = useFilterContext();
  const [currentItemId, setCurrentItemId] = useState(list[0]?.id);

  return (
    <>
      {list.map((item) => (
        <li
          key={item.id}
          className={`flex flex-col justify-center items-center whitespace-nowrap gap-y-2 
            cursor-pointer text-[12px] font-poppins hover:text-red-500 
            stroke-custom_primary_400 first:pl-4 sm:first:pl-0 last:pr-4 
            sm:last:pr-0 ${
              currentItemId === item.id
                ? "text-red-500 font-medium"
                : "text-[#717171]"
            }`}
          onClick={() => {
            setCurrentItemId(item.id);
            return onItemClicked(item.item);
          }}
        >
          <item.icon strokeWidth={1.5} size={24} className="" />
          {item.item}
        </li>
      ))}
    </>
  );
}

export default RenderFilters;
