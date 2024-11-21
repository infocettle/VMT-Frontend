import CustomDatePicker from "@/components/CustomDate";
import { X, Calendar } from "lucide-react";
import { Search } from "lucide-react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Filter({
  setShowFilter,
  range,
  setRange,
  filter,
  setFilter,
  showStatus = true,
}) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (title) => {
    setFilter({ ...filter, status: title === filter.status ? null : title });
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[350px] absolute z-[80] top-[120%] flex items-start flex-col gap-6 right-0 bg-white shadow-xl rounded-[4px] p-4">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[16px] text-[#111] font-medium">Filter</h2>
        <X onClick={() => setShowFilter(false)} color="red" size="20px" />
      </div>

      <div className="w-full px-4 flex items-center gap-2 h-[40px] border border-[#111] rounded-[4px]">
        <div>
          <Search size="14px" />
        </div>
        <input
          className="flex-1 h-full bg-transparent outline-none text-[14px]"
          type="search"
          placeholder="Search for an entry"
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          value={filter?.search}
        />
      </div>

      {showStatus && (
        <div className="w-full flex items-center justify-between">
          <h2 className="text-[14px] text-[#111] font-normal">Status</h2>
          <div
            className="cursor-pointer"
            onClick={() => setShow((prev) => !prev)}>
            {show ? <ChevronUp size="16px" /> : <ChevronDown size="16px" />}
          </div>
        </div>
      )}
      {show && showStatus && (
        <div className="w-full flex items-start flex-col gap-2">
          <Check
            title="Active"
            onChange={() => handleChange("active")}
            checked={filter?.status === "active"}
          />
          <Check
            title="Pending"
            onChange={() => handleChange("pending")}
            checked={filter?.status === "pending"}
          />
        </div>
      )}

      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex gap-1 border border-[#111] rounded-[4px] items-center p-2 text-[14px] font-normal text-[#111]">
        <div>
          <Calendar />
        </div>

        <p className="">
          {" "}
          {range[0]?.startDate && range[0]?.endDate ? (
            <>
              {range[0]?.startDate?.toDateString()} -{" "}
              {range[0]?.endDate?.toDateString()}
            </>
          ) : (
            "Select date"
          )}
        </p>
      </div>

      {open && <CustomDatePicker range={range} setRange={setRange} />}
    </div>
  );
}

function Check({ title, onChange, checked }) {
  return (
    <div className="w-full flex items-center gap-3">
      <input
        checked={checked}
        onChange={onChange}
        name={title}
        id={title}
        type="checkbox"
      />
      <label htmlFor={title} className="text-[12px] font-normal text-[#111">
        {title}
      </label>
    </div>
  );
}
