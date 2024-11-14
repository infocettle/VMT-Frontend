export default function GeneralLedgerBranchTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="BRANCH CODE" width="w-[30%] lg:w-[25%]" />
      <Title title="BRANCH NAME" width="flex-1" />
      <Title title="DATE CREATED" width="w-[25%] hidden lg:block" />
      <Title title="ACTION" width="w-[30%] lg:w-[25%] text-end" />
    </div>
  );
}

function Title({ title, width }) {
  return (
    <h2
      className={`text-[#8E8EA9] font-bold text-[12px] leading-[18px] ${width}`}>
      {title}
    </h2>
  );
}
