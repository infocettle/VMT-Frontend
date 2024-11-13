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
        onClick={() => setActive("type")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "type"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Type
      </button>
      <button
        onClick={() => setActive("location")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "location"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Location
      </button>
      <button
        onClick={() => setActive("channel")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "channel"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Channel
      </button>
      <button
        onClick={() => setActive("purpose")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "purpose"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Purpose
      </button>
    </div>
  );
}
