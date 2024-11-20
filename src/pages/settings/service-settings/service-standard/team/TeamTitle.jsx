export default function TeamTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="TEAM" width="w-[30%] lg:w-[20%] uppercase" />
      <Title title="DESCRIPTION" width="flex-1" />
      <Title title="LEVEL" width="w-[20%] hidden lg:block" />
      <Title title="ACTION" width="w-[30%] lg:w-[15%] text-end" />
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
