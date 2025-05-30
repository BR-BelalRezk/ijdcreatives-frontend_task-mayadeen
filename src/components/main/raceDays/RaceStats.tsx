import RaceStateStart from "./RaceStateStart";
import SingleRaceState from "./SingleRaceState";
const stats = [
  { number: "2", power: "1", time: "23.29" },
  { number: "3", power: "3", time: "47.23" },
  { number: "5", power: "1/2", time: "59.82" },
  { number: "6", power: "11", time: "1:12.71" },
];
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
