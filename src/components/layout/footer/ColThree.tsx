export default function ColThree() {
  return (
    <div className="text-white flex flex-col xl:items-end xl:justify-end gap-[30px]">
      <div className="flex flex-col items-end justify-end">
        <h3 className="text-[24px] leading-[53px] font-medium">
          النشرة البريدية
        </h3>
        <p className="text-[17px] leading-[38px] font-medium">
          النص أو الوصف يكتب هنا
        </p>
      </div>
      <div className="flex items-center gap-[7px] flex-row-reverse">
        <input
          type="text"
          placeholder="name@domain.com"
          className="w-[300px] xl:w-[338px] pl-5 placeholder:text-[#E3E3E3] placeholder:text-[18px] placeholder:leading-[40] placeholder:font-medium h-[55px] bg-white border-2 border-[#E3E3E3] rounded-[10px]"
        />
        <button className="h-[55px] w-[150px] flex items-center justify-center bg-main rounded-[10px] text-[20px] leading-[44px]font-medium">
          اشتراك
        </button>
      </div>
    </div>
  );
}
