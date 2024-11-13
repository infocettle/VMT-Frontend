import React from "react";

export default function SegmentTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b overflow-x-scroll">
      <Title title="SEQUENCE" width="w-[25%] lg:w-[10%]" />
      <Title title="NAME" width="flex-1 lg:w-[20%]" />
      <Title title="FUNCTIONAL DESCRIPTION" width="hidden lg:block flex-1" />
      <Title title="DATE CREATED" width="hidden lg:block w-[10%]" />
      <Title title="STATUS" width="w-[25%] lg:w-[15%] text-center" />
      <Title title="ACTION" width="w-[20%] lg:w-[10%] text-end" />
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
