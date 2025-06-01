"use client";
import { useEffect, useState } from "react";
import TableDataRowCircleButton from "./TableDataRowCircleButton";
import { useRacingCalendarContext } from "./RacingCalenderContextProvider";
import { getDate } from "@/components/utils/getDate";
import Pulse from "@/components/ui/Pulse";

export default function Table() {
  const [displayModel, setDisplayModel] = useState<number | null>(null);
  const { data, loading } = useRacingCalendarContext();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {loading ? (
        <Pulse />
      ) : (
        <div className="w-full  mt-[52px]">
          <table className="md:h-[295px] h-full border-collapse w-full flex md:flex-col justify-center">
            <thead className="size-full md:size-auto">
              <tr className="text-[#177245] text-[22px] leading-[36px] font-medium flex flex-col md:flex-row  relative w-full h-[140px] md:h-fit">
                <span className="border-[3px] hidden xl:block border-[#E3E3E3] absolute w-[calc(100%+20vw)] 2xl:w-[calc(100%+15vw)] top-full" />
                {data?.map((day, index) => (
                  <th
                    key={index}
                    className=" flex-1 flex flex-col items-center justify-center border border-[#E3E3E3]"
                  >
                    <span className="text-[#177245] text-[32px] md:text-[57px] leading-[90px]">
                      {getDate(day.date).dayOfMonth}
                    </span>
                    <span className="text-[#000E5A] text-[16px] md:text-[21px] leading-[47px]">
                      {getDate(day.date).dayName}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="size-full">
              <tr className="flex w-full h-full  flex-col md:flex-row">
                {data.map((item, index) => (
                  <TableDataRowCircleButton
                    index={index}
                    data={item}
                    displayModel={displayModel}
                    setDisplayModel={setDisplayModel}
                    key={index}
                  />
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
