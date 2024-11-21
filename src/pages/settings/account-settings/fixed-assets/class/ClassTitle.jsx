export default function FixedAssetsClassTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="CODE" width="w-[5%] uppercase hidden lg:block" />
      <Title title="FIXED ASSET CLASS" width="w-[30%] lg:w-[10%]" />
      <Title title="FIXED ASSET GROUP" width="w-[10%] hidden lg:block" />
      <Title title="DESCRIPTION" width="flex-1" />
      <Title title="COST GL" width="w-[10%] hidden lg:block" />
      <Title title="WIP GL" width="w-[10%] hidden lg:block" />
      <Title title="MEMO GL" width="w-[10%] hidden lg:block" />
      <Title title="PROVIDION GL" width="w-[10%] hidden lg:block" />
      <Title title="EXPENSE GL" width="w-[10%] hidden lg:block" />
      <Title
        title="ACTION"
        width="w-[30%] lg:w-[10%] hidden lg:block text-end"
      />
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
