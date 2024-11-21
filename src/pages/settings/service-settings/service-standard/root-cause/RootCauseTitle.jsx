export default function RootCauseTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="CODE" width="w-[5%] uppercase hidden lg:block" />
      <Title title="NAME" width="w-[30%] lg:w-[15%]" />
      <Title title="DESCRIPTION" width="flex-1" />
      <Title title="GROUP" width="w-[10%] hidden lg:block" />
      <Title title="CLASS" width="w-[10%] hidden lg:block" />
      <Title title="TYPE" width="w-[10%] hidden lg:block" />
      <Title title="ACTION" width="w-[30%] lg:w-[10%] text-end" />
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
