import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export const FormRadio = ({ name, label, options, onChange }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full gap-4 flex">
      <label className="access-control-modal-label">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex gap-4">
            {options.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  value={option.value}
                  {...field}
                  checked={field.value === option.value}
                  onChange={(e) => {
                    field.onChange(option.value);
                    if (onChange) onChange(option.value);
                  }}
                  className="access-control-modal-radio"
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
      )}
    </div>
  );
};
