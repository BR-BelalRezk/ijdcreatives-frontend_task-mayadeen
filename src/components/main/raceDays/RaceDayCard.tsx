import DayMonth from "./DayMonth";
import JockeyInfo from "./JockeyInfo";
import RaceDateInfo from "./RaceDateInfo";
import RaceMetaTags from "./RaceMetaTags";
import RaceNotes from "./RaceNotes";
import RaceStats from "./RaceStats";
import ScoreBadge from "./ScoreBadge";

export default function RaceDayCard({ index }: { index: number }) {
  const bg =
    index === 0 ? "bg-[#EA3323]" : index === 1 ? "bg-white" : "bg-[#0122F5]";
  return (
    <div className="flex flex-col items-end gap-3 w-full">
      <RaceDateInfo />
      <div className="bg-[#F2F2F2] p-5 xl:py-0 xl:px-[30px] flex-col xl:rounded-[46px] w-fit xl:w-full xl:h-[91px] flex items-end xl:items-center  xl:flex-row-reverse">
        <DayMonth />
        <RaceMetaTags bg={bg} />
        <JockeyInfo />
        <div className="xl:mr-[36px] flex gap-2.5 xl:flex-col items-center xl:gap-[3px] text-black text-base leading-[35px]">
          <span className="rounded-[31px] bg-white w-[47px] h-[28px]  flex items-center justify-center">
            P3
          </span>
          <span className="rounded-[31px] bg-white w-[47px] h-[28px]  flex items-center justify-center">
            P6
          </span>
        </div>
        <RaceStats />
        <ScoreBadge bg={bg} />
        <RaceNotes />
      </div>
    </div>
  );
}
