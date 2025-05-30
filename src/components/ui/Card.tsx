export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[338px] h-[187px] cursor-pointer bg-main/55 px-[30px] py-[25px] hover:scale-[105%] hover:bg-main/75 hover:shadow-xl hover:shadow-main/25 transition-all duration-500">
      {children}
    </div>
  );
}
