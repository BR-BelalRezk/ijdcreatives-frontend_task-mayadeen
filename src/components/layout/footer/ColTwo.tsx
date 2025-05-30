import { navbarLinks } from "@/constants";
import Link from "next/link";

export default function ColTwo() {
  return (
    <nav className="md:mr-16">
      <ul className="flex items-center justify-center flex-col gap-5 xl:gap-[60px] xl:flex-row-reverse ">
        {navbarLinks.map((item, index) => (
          <li
            key={index}
            className="text-white text-center text-[20px] leading-[44px] font-medium my-2"
          >
            <Link href={`3${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
