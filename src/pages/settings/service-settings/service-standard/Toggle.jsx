import React from "react";

export default function Toggle({ setActive, active }) {
  return (
    <div className="w-full py-4 flex items-center gap-4 overflow-x-scroll">
      <button
        onClick={() => setActive("group")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "group"
            ? "text-white bg-[#12A55C]"
            : "bbg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Group
      </button>
      <button
        onClick={() => setActive("class")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "class"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Class
      </button>
      <button
        onClick={() => setActive("type")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "type"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Type
      </button>
      <button
        onClick={() => setActive("root cause")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "root cause"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Root Cause
      </button>
      <button
        onClick={() => setActive("impact")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "impact"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Impact
      </button>
      <button
        onClick={() => setActive("urgency")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "urgency"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Urgency
      </button>
      <button
        onClick={() => setActive("priority")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "priority"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Priority
      </button>
      <button
        onClick={() => setActive("SLA Types")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "SLA Types"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        SLA Types
      </button>
      <button
        onClick={() => setActive("teams")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "teams"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Teams
      </button>
    </div>
  );
}
