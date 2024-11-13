import React from "react";

export default function GeneralLedgerTypeTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="TYPE" width="w-[10%]" />
      <Title title="NAME" width="flex-1" />
      <Title title="CLASS" width="w-[15%]" />
      <Title title="GROUP" width="w-[20%]" />
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
