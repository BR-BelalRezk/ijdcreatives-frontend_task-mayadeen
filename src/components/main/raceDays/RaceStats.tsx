import { stats } from "@/constants";
import RaceStateStart from "./RaceStateStart";
import SingleRaceState from "./SingleRaceState";

export default function RaceStats() {
  return (
    <div className="mr-[23px] flex flex-row-reverse items-center gap-[33px]">
      <RaceStateStart />
      <ul className="flex flex-row-reverse gap-[21px]">
        {stats.map((stat, index) => (
          <li key={index}>
            <SingleRaceState
              number={stat.number}
              power={stat.power}
              time={stat.time}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
