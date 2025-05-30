"use client";
import heroImage from "../../../public/home-page/main-img.svg";
import CustomButton from "../ui/CustomButton";
import Card from "../ui/Card";
import { motion } from "motion/react";

export default function Hero() {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <section
      className=" relative  pb-16 h-full bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="container mx-auto px-2.5">
        <article className="pt-[125px] relative z-30 text-right">
          <div className="flex flex-col items-end justify-end gap-5 md:gap-0">
            <motion.h1
              className="text-[#F8F8F8] text-5xl md:text-[72px] md:leading-[160px] font-semibold "
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              عنوان رئيسي
            </motion.h1>
            <motion.p
              className="text-[#F8F8F8] text-3xl md:text-[40px] md:leading-[89px] font-medium"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
            >
              العنوان الفرعي هنا او التفاصيل
            </motion.p>
          </div>
          <motion.div
            className="flex items-end justify-end mt-[34px]"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <CustomButton text="اذهب إلى" />
          </motion.div>
          <div className="flex items-center justify-center w-full pt-[118px]">
            <ul className=" w-full flex-wrap xl:flex-nowrap flex items-center justify-center gap-4">
              {Array.from({ length: 4 }, (_, index) => index).map((index) => (
                <Card key={index}>
                  <span className="text-[#F8F8F8] text-[21px]">20/3/2025</span>
                  <h2 className="text-[#F8F8F8] text-[38px] leading-[65px] font-medium">
                    عنوان رئيسي
                  </h2>
                  <p className="text-[#F8F8F8] text-[21px] whitespace-nowrap">
                    العنوان الفرعي هنا او التفاصيل
                  </p>
                </Card>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
