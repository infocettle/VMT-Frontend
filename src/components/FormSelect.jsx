import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export const FormSelect = ({ name, label, options }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full gap-1 flex flex-col">
      <label htmlFor={name} className="capitalize text-sm font-light">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <select
              {...field}
              className="border border-gray-300 text-[14px] text-[#333] font-normal focus:outline-none rounded-md p-2 mb-2">
              <option value="">Select {label}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name]?.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
