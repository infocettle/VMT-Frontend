export default function InteractionTypeTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="CODE" width="w-[15%] uppercase hidden lg:block" />
      <Title title="TYPE" width="w-[30%] lg:w-[20%]" />
      <Title title="DESCRIPTION" width="flex-1" />
      <Title title="GROUP" width="w-[15%] hidden lg:block" />
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
