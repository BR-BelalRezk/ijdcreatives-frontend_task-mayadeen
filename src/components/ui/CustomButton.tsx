import Image from "next/image";
import Link from "next/link";
import arrowLeft from "../../../public/icons/left-arrow.svg";
export default function CustomButton({ text }: { text: string }) {
  return (
    <button className="rounded-[28px] group text-[16px] leading-[35px] gap-1.5 font-medium text-[#000E5A] bg-[#FFBF00] w-[141px] h-[36px] flex  items-center cursor-pointer justify-center ">
      <Image
        alt="arrow-left"
        src={arrowLeft}
        width={16}
        height={16}
      />
      <Link
        href={"#"}
        className="relative inline-flex overflow-hidden"
      >
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {text}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {text}
        </div>
      </Link>
    </button>
  );
}
