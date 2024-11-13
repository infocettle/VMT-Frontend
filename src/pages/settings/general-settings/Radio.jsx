import { useState, useEffect } from "react";

export default function Radio({ title, value, onChange, onChange1 }) {
  // const [selectedValue, setSelectedValue] = useState(value);

  // Sync the component's state with the prop whenever it changes
  // useEffect(() => {
  //   setSelectedValue(value);
  // }, [value]);

  return (
    <div className="w-full flex items-center gap-20">
      <h4 className="text-base w-[250px] font-normal leading-[24px] text-[#212134]">
        {title}
      </h4>
      <div className="flex-1 flex items-center gap-2">
        <div className="flex items-center gap-3">
          <input
            id={title}
            name={title}
            type="radio"
            checked={value === "Yes"}
            onChange={onChange}
          />
          <label
            htmlFor={title}
            className="text-[#212134] font-semibold text-[14px] leading-[20px]">
            Yes
          </label>
        </div>

        <div className="flex items-center gap-3">
          <input
            id={title}
            name={title}
            type="radio"
            checked={value === "No"}
            onChange={onChange1}
          />
          <label
            htmlFor={title}
            className="text-[#212134] font-semibold text-[14px] leading-[20px]">
            No
          </label>
        </div>
      </div>
    </div>
  );
}
