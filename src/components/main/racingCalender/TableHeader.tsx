import { getDate } from "@/components/utils/getDate";

export default function TableHeader({ dateRange }: { dateRange: Date[] }) {
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
              <span className="text-[#177245] text-[32px] md:text-[57px] leading-[90px]">
                {dayOfMonth}
              </span>
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
