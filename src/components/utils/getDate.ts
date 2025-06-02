export function getDate(dateString: string) {
  const dateObject = new Date(dateString);
  const dayName = dateObject.toLocaleDateString("ar", { weekday: "long" });
  const monthName = dateObject.toLocaleDateString("ar", { month: "long" });
  const date = dateObject.getDate();
  const year = dateObject.getFullYear();
  const dayOfMonth = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const AMorPM = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return {
    dayName,
    dayOfMonth,
    date,
    year,
    monthName,
    hours,
    minutes,
    AMorPM,
  };
}
