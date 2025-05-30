import ColOne from "./ColOne";
import ColThree from "./ColThree";
import ColTwo from "./ColTwo";

export default function Footer() {
  return (
    <footer className="mt-[120px] bg-[#000000E6]">
      <div className="container mx-auto px-2.5 min-h-[300px] py-[70px]">
        <div className="w-full md:gap-0 gap-10 flex flex-col md:items-center xl:items-start md:flex-row-reverse justify-between">
          <div className="flex flex-col gap-[55px] items-end">
            <ColOne />
            <ColTwo />
          </div>
          <ColThree />
        </div>
      </div>
      <div className="bg-black text-center">
        <div className="container min-h-[54px] py-2.5 md:py-0 md:gap-0 gap-2.5 text-white mx-auto px-2.5 text-base md:leading-[35px] font-medium flex flex-col md:flex-row-reverse items-center justify-between">
          <p>جميع الحقوق محفوظة</p>
          <p>سياسة الخصوصية | أحكام وشروط | ميثاق العملاء | أدوات الموقع</p>
        </div>
      </div>
    </footer>
  );
}
