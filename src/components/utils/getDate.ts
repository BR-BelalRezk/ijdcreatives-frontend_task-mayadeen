const dateString = "2025-05-30T08:24:32.742Z";
const dateObject = new Date(dateString);

const dayName = dateObject.toLocaleDateString("en-US", { weekday: "long" });
const monthName = dateObject.toLocaleDateString("en-US", { month: "long" });
const shortMonthName = dateObject.toLocaleDateString("en-US", {
  month: "short",
});

// Extracting date numbers
const year = dateObject.getFullYear();
const monthNumber = dateObject.getMonth() + 1;
const dayOfMonth = dateObject.getDate();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();
const milliseconds = dateObject.getMilliseconds();

export function getDate(dateString: string) {
  const dateObject = new Date(dateString);

  const dayName = dateObject.toLocaleDateString("ar", { weekday: "long" });
  const monthName = dateObject.toLocaleDateString("ar", { month: "long" });
  const shortMonthName = dateObject.toLocaleDateString("en-US", {
    month: "short",
  });
  const date = dateObject.getDate();
  const year = dateObject.getFullYear();
  const monthNumber = dateObject.getMonth() + 1;
  const dayOfMonth = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();
  const milliseconds = dateObject.getMilliseconds();
  const AMorPM = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return {
    dayName,
    monthName,
    dayOfMonth,
    date,
    year,
    monthName,
    hours,
    minutes,
    AMorPM,
  };
}
