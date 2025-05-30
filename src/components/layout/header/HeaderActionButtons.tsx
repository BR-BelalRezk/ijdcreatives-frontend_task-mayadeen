import searchIcon from "../../../../public/icons/search.svg";
import accountIcon from "../../../../public/icons/account.svg";
import Image from "next/image";
export default function HeaderActionButtons({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex-row-reverse gap-[26px] items-center text-white ${className}`}
    >
      <button className="flex items-center gap-2.5 cursor-pointer">
        <span>...بحث</span>
        <Image
          src={searchIcon}
          alt="Search Icon"
          width={20}
          height={20}
        />
      </button>
      <button className="flex items-center gap-2.5 cursor-pointer">
        <span>حسابي</span>
        <Image
          src={accountIcon}
          alt="User Icon"
          width={21}
          height={21}
        />
      </button>
    </div>
  );
}
