import React from "react";

export default function GeneralLedgerClassTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="CODE" width="w-[10%] hidden lg:block" />
      <Title title="NAME" width="flex-1" />
      <Title title="Group" width="w-[30%] lg:w-[20%]" />
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
