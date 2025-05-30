import Image from "next/image";
import backButtonWhite from "../../../../public/icons/back-button-white.svg";
export default function WorkoutBar() {
  return (
    <div className="bg-main p-5 gap-5 xl:p-0 xl:h-[50px] text-white w-full flex flex-wrap xl:flex-nowrap flex-row items-center justify-center rounded-[25px] mt-[32px] xl:gap-[50px]">
      <div className="text-[19px] leading-[34px] font-medium flex flex-col md:flex-row items-center gap-3">
        <h3 className="">WORKOUTS</h3>{" "}
        <span className="text-[15px] leading-[34px] font-medium">
          Aug3 SAR Dirt Gd: 4F in 49 2\5 (28 of 49) B
        </span>
      </div>
      <p className="text-[15px] leading-[34px] font-medium">
        Jul27 SAR Turf tr.tFrm: 5F in 57 1\5 (1 of 2) B
      </p>
      <p className="text-[15px] leading-[34px] font-medium">
        Jul20 SAR Dirt Gd: 4F in 51 1\5 (23 of 34) B
      </p>
      <figure className="w-[31px] h-[31px]">
        <Image
          src={backButtonWhite}
          className="size-full"
          alt="Back Button"
          width={31}
          height={31}
        />
      </figure>
    </div>
  );
}
