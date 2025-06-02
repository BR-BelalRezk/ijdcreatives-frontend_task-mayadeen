"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type RaceEvent = {
  date: string;
  classification: string;
  RaceType: { id: number; name: string; point: number };
  floor: string;
  name: string;
  startTime: string;
  startedAt: string;
  endTime: string;
  averageAge: number;
  averageDistance: number;
  averagePrize: number;
};

type RacingCalendarContextType = {
  data: RaceEvent[];
  error: Error | null;
  loading: boolean;
};

const RacingCalendarContext = createContext<RacingCalendarContextType | null>(
  null
);

export const useRacingCalendarContext = () => {
  const context = useContext(RacingCalendarContext);
  if (!context) {
    throw new Error(
      "use the useRacingCalendarContext within the RacingCalendarContextProvider"
    );
  }
  return context;
};

export default function RacingCalendarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<RaceEvent[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mayadeen-api.wovenclouds.com/api/race"
        );
        console.log(response);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch racing calendar data: HTTP error! Status: ${response.status}`
          );
        }

        const json = await response.json();
        const data = json.data;
        setData(data);
        setError(null);
        console.log(response.status);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
          console.error("Error fetching racing calendar data:", err.message);
        } else {
          setError(new Error("An unknown error occurred."));
          console.error("An unknown error occurred:", err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const value: RacingCalendarContextType = { data, error, loading };

  return (
    <RacingCalendarContext.Provider value={value}>
      {children}
    </RacingCalendarContext.Provider>
  );
}
