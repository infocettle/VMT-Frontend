export default function Toggle({ setActive, active }) {
  return (
    <div className="w-full py-4 flex items-center gap-4 overflow-x-scroll">
      <button
        onClick={() => setActive("category")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "category"
            ? "text-white bg-[#12A55C]"
            : "bbg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Category
      </button>

      <button
        onClick={() => setActive("group")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "group"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
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
        onClick={() => setActive("number")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "number"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Number
      </button>
      <button
        onClick={() => setActive("currency")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "currency"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Currency
      </button>
      <button
        onClick={() => setActive("branch")}
        className={`w-auto p-4 flex items-center justify-center h-[37px] rounded-[24px] ${
          active === "branch"
            ? "text-white bg-[#12A55C]"
            : "bg-[#F6F6F9] text-[#666687]"
        } text-[14px] font-semibold leading-[21px]`}>
        Branch
      </button>
    </div>
  );
}
