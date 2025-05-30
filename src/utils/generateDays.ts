export const generateDays = (date: Date) => {
  const days: { day: string; date: number; fullDate: Date }[] = [];
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  for (let i = 0; i < 9; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push({
      day: d.toLocaleDateString("ar", { weekday: "short" }),
      date: d.getDate(),
      fullDate: new Date(d),
    });
  }
  return days;
};
