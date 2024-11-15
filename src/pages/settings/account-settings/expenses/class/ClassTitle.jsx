export default function ExpenseClassTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="CODE" width="w-[10%] uppercase hidden lg:block" />
      <Title title="EXPENSE CLASS" width="w-[30%] lg:w-[10%] uppercase" />
      <Title title="ALIAS" width="w-[10%] hidden lg:block" />
      <Title title="EXPENSE GROUP" width="w-[15%] hidden lg:block" />
      <Title title="DESCRIPTION" width="flex-1" />
      <Title
        title="DEFAULT GL ACCOUNT"
        width="w-[10%] hidden lg:block text-center"
      />
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
