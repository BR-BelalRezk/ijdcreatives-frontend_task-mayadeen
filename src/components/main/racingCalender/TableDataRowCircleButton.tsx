import { useRef } from "react";
import Model from "./Model";
import { RaceEvent } from "./RacingCalenderContextProvider";
import { motion } from "motion/react";

export default function TableDataRowCircleButton({
  displayModel,
  setDisplayModel,
  index,
  event,
}: {
  displayModel: number | null;
  setDisplayModel: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
  event: RaceEvent | undefined;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.td
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" relative flex  items-center w-full justify-center border border-[#E3E3E3] h-[139px] md:h-full "
    >
      <span
        onClick={() => {
          if (index === displayModel) {
            setDisplayModel(null);
          } else {
            setDisplayModel(index);
          }
        }}
        ref={ref}
        className={`cursor-pointer rounded-full size-10 relative flex items-center justify-center transition-colors duration-500 ${
          displayModel === index ? "bg-[#FFBF00] animate-pulse" : "bg-main"
        }`}
      >
        <span className="size-[18px] block rounded-full bg-[#FCFCFC] relative" />
      </span>
      {event && (
        <Model
          index={index}
          item={event}
          displayModel={displayModel}
          setDisplayModel={setDisplayModel}
          parentRef={ref}
        />
      )}
    </motion.td>
  );
}
