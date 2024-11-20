export default function SubsidiaryLedgerNumberTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="NUMBER" width="w-[10%]  hidden lg:block" />
      <Title title="NAME" width="flex-1" />
      <Title title="INPUT" width="w-[5%]  hidden lg:block" />
      <Title title="RESERVED" width="w-[10%]  hidden lg:block" />
      <Title title="TYPE" width="w-[10%]  hidden lg:block" />
      <Title title="CLASS" width="w-[30%] lg:w-[10%]" />
      <Title title="CURRENCY" width="w-[10%]  hidden lg:block" />
      <Title title="BRANCH" width="w-[5%]  hidden lg:block" />
      <Title title="USAGE" width="w-[10%]  hidden lg:block" />
      <Title title="STATUS" width="w-[10%] text-center  hidden lg:block" />
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
