import React from "react";

export default function GeneralLedgerCurrencyTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="CURRENCY CODE" width="w-[10%]" />
      <Title title="ALPHABET CODE" width="w-[15%]" />
      <Title title="NUMBER CODE" width="w-[15%]" />
      <Title title="CURRENCY NAME" width="flex-1" />
      <Title title="DATE CREATED" width="w-[15%]" />

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
