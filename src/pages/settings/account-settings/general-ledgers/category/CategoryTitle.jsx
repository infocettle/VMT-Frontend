import React from "react";

export default function GeneralLedgerCategoryTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="CODE" width="w-[10%]" />
      <Title title="NAME" width="w-[20%]" />
      <Title title="DESCRIPTION" width="flex-1" />
      <Title title="STATUS" width="w-[15%] text-center" />
      <Title title="ACTION" width="w-[10%] text-end" />
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
