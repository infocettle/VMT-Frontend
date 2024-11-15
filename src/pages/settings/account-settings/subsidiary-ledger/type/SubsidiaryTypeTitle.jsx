import React from "react";

export default function SubsidiaryTypeTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="CODE" width="w-[10%] hidden lg:block" />
      <Title title="NAME" width="w-[30%] lg:w-[15%]" />
      <Title title="GROUP" width="w-[10%] hidden lg:block" />
      <Title title="CLASS" width="w-[30%] lg:w-[15%] hidden lg:block" />
      <Title title="DESCRIPTION" width="flex-1" />
      <Title title="DEFAULT GL" width="w-[10%] hidden lg:block" />
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