import { navbarLinks } from "@/constants";
import { MenuListItem } from "./Menu";
import Link from "next/link";

export default function NavbarItems() {
  return (
    <>
      {navbarLinks.map((link, index) => (
        <MenuListItem
          key={index}
          className="hover:text-white/50 transition-colors duration-300"
        >
          <Link href={`#${link}`}>{link}</Link>
        </MenuListItem>
      ))}
    </>
  );
}
