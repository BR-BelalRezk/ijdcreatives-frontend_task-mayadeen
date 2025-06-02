import { getDate } from "@/components/utils/getDate";
import { Variants, motion } from "motion/react";

export default function TableHeader({
  dateRange,
  direction,
}: {
  direction: "forward" | "backward";
  dateRange: Date[];
}) {
  const animationVariants: Variants = {
    enter: (direction: "forward" | "backward") => ({
      opacity: 0,
      x: direction === "forward" ? 30 : -30,
      position: "absolute",
    }),
    center: {
      opacity: 1,
      x: 0,
      position: "static",
      transition: { duration: 0.3 },
    },
    exit: (direction: "forward" | "backward") => ({
      opacity: 0,
      x: direction === "forward" ? -30 : 30,
      position: "absolute",
    }),
  };
  return (
    <thead className="size-full md:size-auto">
      <tr className="text-[#177245] text-[22px] leading-[36px] font-medium flex flex-col md:flex-row  relative w-full h-[140px] md:h-fit">
        <span className="border-[3px] hidden xl:block border-[#E3E3E3] absolute w-[calc(100%+20vw)] 2xl:w-[calc(100%+15vw)] top-full" />
        {dateRange?.map((date, index) => {
          const { dayOfMonth, dayName } = getDate(date.toISOString());
          return (
            <th
              key={index}
              className=" flex-1 flex flex-col items-center justify-center border border-[#E3E3E3]"
            >
              <motion.span
                key={dayOfMonth}
                custom={direction}
                variants={animationVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-[#177245] text-[32px] md:text-[57px] leading-[90px]"
              >
                {dayOfMonth}
              </motion.span>
              <span className="text-[#000E5A] text-[16px] md:text-[21px] leading-[47px]">
                {dayName}
              </span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
