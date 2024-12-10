import React from "react";

export default function UpdateButtons({ setIsEdit, onClick, loading }) {
  return (
    <div className="w-full fixed bottom-0 left-0 right-0 flex items-center bg-white lg:pl-[6.5rem] px-4 lg:px-[3.5rem] py-6 justify-between">
      <button
        onClick={() => {
          setIsEdit(false);
        }}
        className="w-[79px] h-[40px] tttext-[#212134] bg-white text-[14px] font-bold leading-[16px] border border-[#C0C0CF] rounded-[4px] flex items-center justify-center">
        Cancel
      </button>

      <button
        onClick={onClick}
        disabled={loading}
        className="w-[65px] text-[#666687] h-[40px] bg-[#DDEDFD] text-[14px] font-bold leading-[16px] border border-[#C0C0CF] rounded-[4px] flex items-center justify-center">
        {loading ? "Loading..." : "Save"}
      </button>
    </div>
  );
}
