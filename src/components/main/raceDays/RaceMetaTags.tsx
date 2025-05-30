export default function RaceMetaTags({ bg }: { bg: string }) {
  return (
    <div
      className={`w-[279px] xl:mr-[28px] h-[78px] rounded-[39px] ${bg} flex items-center justify-evenly flex-row-reverse text-black text-base leading-[35px]`}
    >
      <p className="flex flex-col items-center">
        <span>1M</span> <span>Yielding</span>
      </p>
      <p className="flex flex-col items-center">
        <span>Turf</span>
        <span>Firecracker</span>
      </p>
      <p className="flex flex-col items-center">
        <span>3+</span>
        <span>G2</span>
      </p>
    </div>
  );
}
