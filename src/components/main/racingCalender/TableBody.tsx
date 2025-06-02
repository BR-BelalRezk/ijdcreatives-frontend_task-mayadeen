import { RaceEvent } from "./RacingCalenderContextProvider";
import TableDataRowCircleButton from "./TableDataRowCircleButton";

export default function TableBody({
  dateRange,
  eventsByDate,
  displayModel,
  setDisplayModel,
}: {
  eventsByDate: Map<string, RaceEvent>;
  dateRange: Date[];
  displayModel: number | null;
  setDisplayModel: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <tbody className="size-full">
      <tr className="flex w-full h-full  flex-col md:flex-row">
        {dateRange.map((date, index) => {
          const isoDate = date.toISOString().split("T")[0];
          const event = eventsByDate.get(isoDate);
          return (
            <>
              {event ? (
                <TableDataRowCircleButton
                  index={index}
                  event={event}
                  displayModel={displayModel}
                  setDisplayModel={setDisplayModel}
                  key={index}
                />
              ) : (
                <td className="border border-[#E3E3E3] h-[139px] md:h-full w-full" />
              )}
            </>
          );
        })}
      </tr>
    </tbody>
  );
}
