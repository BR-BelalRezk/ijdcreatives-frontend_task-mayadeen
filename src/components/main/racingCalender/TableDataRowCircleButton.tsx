import { useRef } from "react";
import Model from "./Model";

export default function TableDataRowCircleButton({
  displayModel,
  setDisplayModel,
  index,
}: {
  displayModel: number | null;
  setDisplayModel: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <td
      onClick={() => {
        if (index === displayModel) {
          setDisplayModel(null);
        } else {
          setDisplayModel(index);
        }
      }}
      className=" relative flex cursor-pointer items-center w-full justify-center border border-[#E3E3E3] h-[139px] md:h-full "
    >
      <span
        ref={ref}
        className={` rounded-full size-10 relative flex items-center justify-center transition-colors duration-500 ${
          displayModel === index ? "bg-[#FFBF00] animate-pulse" : "bg-main"
        }`}
      >
        <span className="size-[18px] block rounded-full bg-[#FCFCFC] relative" />
      </span>
      <Model
        index={index}
        displayModel={displayModel}
        setDisplayModel={setDisplayModel}
        parentRef={ref}
      />
    </td>
  );
}
