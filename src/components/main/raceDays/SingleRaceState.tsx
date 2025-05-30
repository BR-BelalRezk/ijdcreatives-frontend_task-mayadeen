import React from "react";

export default function SingleRaceState({
  number,
  power,
  time,
}: {
  number: string;
  power: string;
  time: string;
}) {
  return (
    <div className="flex flex-col items-end font-semibold text-black">
      <span className="flex gap-1">
        <span className="text-[15px] leading-[34px]">{power}</span>
        <span className="text-[20px] leading-[44px] ">{number}</span>
      </span>
      <span className="text-[14px] leading-[30px]">{time}</span>
    </div>
  );
}
