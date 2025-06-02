"use client";
import Image from "next/image";
import leftArrowCircleIcon from "../../../../public/icons/left-arrow-circle.svg";
import rightArrowCircleIcon from "../../../../public/icons/right-arrow-circle.svg";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
export default function Header({
  nxtWeek,
  prevWeek,
  startDate,
}: {
  startDate: Date;
  nxtWeek: () => void;
  prevWeek: () => void;
}) {
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const previousWeek = () => {
    setDirection("backward");
    prevWeek();
  };

  const nextWeek = () => {
    setDirection("forward");
    nxtWeek();
  };
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
    <div className="flex flex-col gap-[27px] items-end justify-end relative">
      <div className="flex flex-col items-end justify-end">
        <div className="relative h-[30px] overflow-hidden">
          <AnimatePresence
            custom={direction}
            mode="wait"
          >
            <motion.span
              key={`year-${startDate.getFullYear()}`}
              className="text-black text-[22px] leading-[36px] font-medium block"
              custom={direction}
              variants={animationVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {startDate.getFullYear()}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="relative overflow-hidden h-[45px]">
          <AnimatePresence
            custom={direction}
            mode="wait"
          >
            <motion.span
              key={`month-${startDate.getMonth()}`}
              className="text-black text-[36px] leading-[36px]"
              custom={direction}
              variants={animationVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {startDate.toLocaleString("ar", { month: "long" })}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[9px] flex-shrink-0">
        <button
          className="cursor-pointer size-[35px]"
          onClick={previousWeek}
        >
          <Image
            src={leftArrowCircleIcon}
            alt="Left Arrow"
            className="size-full"
            width={35}
            height={35}
          />
        </button>
        <button
          className="cursor-pointer size-[35px]"
          onClick={nextWeek}
        >
          <Image
            src={rightArrowCircleIcon}
            alt="Right Arrow"
            className="size-full"
            width={35}
            height={35}
          />
        </button>
      </div>
      <h3 className="text-main text-[25px] xl:block hidden leading-[56px] font-medium top-52 right-20 absolute">
        الأحداث
      </h3>
    </div>
  );
}
