import React from "react";

export default function PlanTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="NAME" width="w-[20%]" />
      <Title title="GROUP" width="w-[20%]" />
      <Title title="QUANTITY" width="w-[20%] text-center" />
      <Title title="PRICE" width="w-[20%] text-center" />
      <Title title="AMOUNT" width="w-[20%] text-end" />
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
