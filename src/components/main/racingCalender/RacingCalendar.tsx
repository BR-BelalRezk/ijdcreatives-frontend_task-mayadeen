import Header from "./Header";
import Table from "./Table";

export default function RacingCalendar() {
  return (
    <section className="py-[30px]">
      <div className="container mx-auto px-2.5">
        <div className="flex flex-col items-end justify-end gap-3">
          <h2 className="text-[#177245] font-medium text-5xl md:text-[61px] md:leading-[136px]">
            رزنامة السباقات
          </h2>
          <div className="flex items-end xl:items-start flex-col xl:flex-row-reverse justify-between w-full gap-[50px] xl:gap-[200px]">
            <Header />
            <Table />
          </div>
        </div>
      </div>
    </section>
  );
}
