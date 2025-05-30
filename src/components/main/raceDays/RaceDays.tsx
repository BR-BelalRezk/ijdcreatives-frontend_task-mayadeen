import RaceDayCard from "./RaceDayCard";
import WorkoutBar from "./WorkoutBar";

export default function RaceDays() {
  return (
    <section className="py-[30px]">
      <div className="container mx-auto px-2.5">
        <div className="flex items-center justify-center xl:block">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:flex xl:items-end xl:flex-col xl:gap-3">
            {Array.from({ length: 3 }, (_, index) => index).map((index) => (
              <RaceDayCard
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
        <WorkoutBar />
      </div>
    </section>
  );
}
