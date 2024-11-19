export default function PlanItem() {
  return (
    <div className="w-full flex items-center py-4 border-b">
      <Title title="PLAN NAME" width="w-[20%]" />
      <Title title="PLAN GROUP" width="w-[20%]" />
      <Title title="QUANTITY" width="w-[20%] text-center" />
      <Title title="PRICE" width="w-[20%] text-center" />
      <Title title="AMOUNT" width="w-[20%] text-end" />
    </div>
  );
}

function Title({ title, width }) {
  return (
    <h2
      className={`text-[#181826] font-normal text-[14px] leading-[24px] ${width}`}>
      {title}
    </h2>
  );
}
