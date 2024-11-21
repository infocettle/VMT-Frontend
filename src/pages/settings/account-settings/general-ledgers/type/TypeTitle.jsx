import React from "react";

export default function GeneralLedgerTypeTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="TYPE" width="w-[10%] hidden lg:block" />
      <Title title="NAME" width="flex-1" />
      <Title title="CLASS" width="w-[30%] lg:w-[15%]" />
      <Title title="GROUP" width="w-[20%] hidden lg:block" />
      <Title title="STATUS" width="w-[15%] text-center hidden lg:block" />
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
