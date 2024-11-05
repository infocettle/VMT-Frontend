import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const FormCheckbox = ({ name, label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full gap-1 flex flex-col relative">
      <label className="capitalize text-sm">{label}</label>
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between border border-gray-300 rounded-md p-2 cursor-pointer"
      >
        <span>Select {label}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md p-3 z-10">
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <>
                <div className="flex flex-col gap-2">
                  {options.map((option) => (
                    <label key={option.value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={field.value?.includes(option.value) || false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...(field.value || []), option.value]
                            : field.value.filter((v) => v !== option.value);
                          field.onChange(newValue);
                        }}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
                {errors[name] && (
                  <p className="text-red-500 text-sm">{errors[name]?.message}</p>
                )}
              </>
            )}
          />
        </div>
      )}
    </div>
  );
};
