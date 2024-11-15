import React from "react";

export default function TemplateTitle() {
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="TYPE" width="w-[20%]" />
      <Title title="DESCRIPTION" width="flex-1" />
      <Title title="ACTION" width="w-[20%] text-end" />
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
