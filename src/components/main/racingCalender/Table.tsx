"use client";
import { useState } from "react";
import {
  RaceEvent,
  useRacingCalendarContext,
} from "./RacingCalenderContextProvider";
import Pulse from "@/components/ui/Pulse";
import Header from "./Header";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table() {
  const [displayModel, setDisplayModel] = useState<number | null>(null);
  const [startDate, setStartDate] = useState(new Date());
  const { data, loading } = useRacingCalendarContext();

  const dateRange = Array.from({ length: 9 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  const eventsByDate = new Map<string, RaceEvent>();
  data.forEach((event) => {
    eventsByDate.set(new Date(event.date).toISOString().split("T")[0], event);
  });

  const nextWeek = () => {
    const newStart = new Date(startDate);
    newStart.setDate(startDate.getDate() + 7);
    setStartDate(newStart);
  };

  const prevWeek = () => {
    const newStart = new Date(startDate);
    newStart.setDate(startDate.getDate() - 7);
    setStartDate(newStart);
  };
  console.log(data);
  return (
    <>
      {loading ? (
        <Pulse />
      ) : (
        <>
          <Header
            startDate={startDate}
            nxtWeek={nextWeek}
            prevWeek={prevWeek}
          />
          <div className="w-full  mt-[52px]">
            <table className="md:h-[295px] h-full border-collapse w-full flex md:flex-col justify-center">
              <TableHeader dateRange={dateRange} />
              <TableBody
                eventsByDate={eventsByDate}
                setDisplayModel={setDisplayModel}
                displayModel={displayModel}
                dateRange={dateRange}
              />
            </table>
          </div>
        </>
      )}
    </>
  );
}
