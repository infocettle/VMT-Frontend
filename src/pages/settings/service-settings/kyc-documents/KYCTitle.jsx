import React from "react";

export default function KYCTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="Document Code" width="w-[15%] hidden lg:block" />
      <Title title="NAME" width="w-[30%] lg:w-[20%]" />
      <Title title="FUNCTIONAL DESCRIPTION" width="flex-1" />
      <Title title="DATE CREATED" width="w-[15%] hidden lg:block" />
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