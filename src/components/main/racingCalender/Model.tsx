import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import x from "../../../../public/icons/X.svg";
import CustomButton from "@/components/ui/CustomButton";
import { modelListItems } from "@/constants";

const variants: Variants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: 50 },
};

export default function Model({
  displayModel,
  index,
  setDisplayModel,
  parentRef,
}: {
  index: number;
  displayModel: number | null;
  setDisplayModel: React.Dispatch<React.SetStateAction<number | null>>;
  parentRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const [positionRight, setPositionRight] = useState(false);

  useEffect(() => {
    if (displayModel === index && parentRef.current) {
      const circleRect = parentRef.current.getBoundingClientRect();
      const spaceRight = window.innerWidth - circleRect.right;
      const spaceLeft = circleRect.left;
      setPositionRight(spaceRight < 400 && spaceLeft > 400);
    }
  }, [displayModel, index, parentRef]);

  return (
    <AnimatePresence mode="wait">
      {displayModel === index && (
        <motion.div
          variants={variants}
          initial="close"
          animate="open"
          exit="close"
          className={`h-[350px] w-[350px] md:w-[379px] bg-white rounded-xl shadow-[0px_0px_10px_#00000029] absolute z-40 top-[100px] -left-1/2 -translate-x-1/4 md:translate-x-0 md:top-[55px] ${
            positionRight ? "md:right-[80px] md:left-auto" : "md:left-[80px]"
          }`}
        >
          <div className="relative size-full">
            <button
              className="cursor-pointer absolute top-5 left-5"
              onClick={() => setDisplayModel(null)}
            >
              <Image
                src={x}
                alt="x"
              />
            </button>
            <article className="flex flex-col items-end w-full justify-end text-right p-5">
              <div>
                <h3 className="text-main text-[27px] leading-[60px] font-medium">
                  اسم السباق
                </h3>
                <p className="text-main text-[18px] leading-[40px] font-medium">
                  التصنيف
                </p>
              </div>
              <div className="flex items-center gap-5 flex-row-reverse text-[14px] text-black leading-[30px] font-medium">
                <p className="flex flex-row-reverse gap-1 items-center">
                  <span>06</span>
                  <span>اكتوبر</span>
                  <span>2024</span>
                </p>
                <p>
                  <span>05:30 PM</span> <span>-</span> <span>07:30 PM</span>
                </p>
              </div>
              <ul className="mt-[7px] w-full flex flex-col items-end justify-end">
                {modelListItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-right w-full flex-row-reverse gap-[11px] text-[20px] font-medium"
                  >
                    <span className="text-black leading-[40px]">
                      {item.title}
                    </span>
                    <span className="text-main leading-[44px]">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
            <div className="absolute bottom-5 left-5">
              <CustomButton text="تفاصيل" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
