import Hero from "@/components/main/Hero";
import RaceDays from "@/components/main/raceDays/RaceDays";
import RacingCalendar from "@/components/main/racingCalender/RacingCalendar";

export default function Home() {
  return (
    <>
      <Hero />
      <RacingCalendar />
      <RaceDays />
    </>
  );
}
