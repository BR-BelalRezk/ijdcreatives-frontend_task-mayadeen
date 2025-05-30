import Link from "next/link";
import Logo from "../ui/Logo";
import { footerLinks } from "@/constants";

export default function ColOne() {
  return (
    <div className="flex flex-col gap-10 md:flex-row-reverse md:gap-[55px] items-center">
      <Logo />
      <ul className="text-white flex flex-row-reverse items-center justify-center gap-[17px] text-[22px]">
        {footerLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>
              <item.icon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
