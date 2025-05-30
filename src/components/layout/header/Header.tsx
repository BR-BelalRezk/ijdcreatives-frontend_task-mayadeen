import HeaderActionButtons from "./HeaderActionButtons";
import Navbar from "./Navbar";
import Logo from "../ui/Logo";

export default function Header() {
  return (
    <header className="bg-main h-[133px] flex items-center justify-center sticky top-0 z-[9999]">
      <div className="container px-2.5 mx-auto">
        <div className="w-full flex flex-row-reverse  items-center justify-between">
          <div className="flex flex-row-reverse items-center w-full justify-between lg:w-fit lg:justify-normal lg:gap-[60px]">
            <Logo />
            <Navbar />
          </div>
          <HeaderActionButtons className="hidden lg:flex" />
        </div>
      </div>
    </header>
  );
}
