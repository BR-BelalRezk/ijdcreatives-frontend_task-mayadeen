import Image from "next/image";
import logo from "../../../../public/logo.svg";
export default function Logo() {
  return (
    <figure>
      <Image
        src={logo}
        alt="Logo"
        width={193.38}
        height={58.02}
      />
    </figure>
  );
}
