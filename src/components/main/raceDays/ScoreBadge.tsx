export default function ScoreBadge({ bg }: { bg: string }) {
  return (
    <div
      className={`${bg} size-[78px] rounded-full flex items-center justify-center mr-[9px]`}
    >
      <span className="text-black text-[24px] leading-[53px] font-medium">
        61
      </span>
    </div>
  );
}
