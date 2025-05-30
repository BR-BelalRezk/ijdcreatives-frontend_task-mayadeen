import { Menu, MenuButtonToggle, MenuList, MenuListItem } from "./Menu";
import HamburgerIcon from "./HamburgerIcon";
import HeaderActionButtons from "./HeaderActionButtons";
import Logo from "../ui/Logo";
import NavbarItems from "./NavbarItems";
import { transition } from "@/constants";
export default function Navbar() {
  return (
    <Menu className="relative z-50">
      <MenuButtonToggle className="flex cursor-pointer gap-1 z-50 relative bg-white rounded-full flex-col items-center justify-center size-10 lg:hidden">
        <HamburgerIcon />
      </MenuButtonToggle>
      <MenuList
        variants={{
          open: {
            right: 0,
            transition: {
              ...transition,
              delayChildren: 0.75,
              staggerChildren: 0.05,
            },
          },
          close: {
            right: "-100%",
            transition: {
              ...transition,

              when: "afterChildren",
            },
          },
        }}
        className=" fixed px-5 bg-main/75 backdrop-blur-md  h-full w-[250px] top-0 z-40 lg:hidden flex gap-2.5 justify-center flex-col  items-end   text-white leading-[40px] text-[18px] font-medium tracking-[0] font-main"
      >
        <MenuListItem className="absolute top-10 right-5">
          <Logo />
        </MenuListItem>
        <NavbarItems />
        <MenuListItem className="self-center mt-10">
          <HeaderActionButtons className="flex" />
        </MenuListItem>
      </MenuList>
      <MenuList
        variants={{
          open: {
            transition: {
              ...transition,
              delayChildren: 0.75,
              staggerChildren: 0.05,
            },
          },
          close: {
            transition: {
              ...transition,
            },
          },
        }}
        className=" hidden lg:flex flex-row-reverse  items-center gap-[34px] text-white leading-[40px] text-[18px] font-medium tracking-[0] font-main"
      >
        <NavbarItems />
      </MenuList>
    </Menu>
  );
}
