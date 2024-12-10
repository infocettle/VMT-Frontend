export default function Input({
  label,
  type,
  placeholder,
  options = [],
  inputType = "input",
  onChange,
  value,
  rows,
  required = true,
}) {
  return (
    <div className="w-full flex items-start flex-col gap-1">
      <label className="text-[#212134] font-semibold text-[14px] leading-[20px]">
        {label}
      </label>
      {inputType === "input" && (
        <input
          className="w-full h-[48px] text-[14px] font-normal text-[#212134] border border-[#C0C0CF] px-4 rounded-[4px] bg-white"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}
      {inputType === "textarea" && (
        <textarea
          className="w-full text-[14px] font-normal text-[#212134] border border-[#C0C0CF] p-4 rounded-[4px] bg-white"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          rows={rows || 4}
        />
      )}
      {inputType === "select" && (
        <select
          className="w-full h-[48px] border outline-none text-[14px] font-normal text-[#212134] px-4 border-[#C0C0CF] rounded-[4px] bg-white"
          onChange={onChange}
          value={value}
          required={required}
          type={type}>
          <option value="">{placeholder || "Select"}</option>
          {options?.map((el, i) => (
            <option key={i} value={el?.value}>
              {el?.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
