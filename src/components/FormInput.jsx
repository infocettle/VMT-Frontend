import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export const FormInput = ({ name, label, type = "text" }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full gap-1 flex flex-col ">
      <label htmlFor={name} className="access-control-modal-label">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              className="access-control-modal-input"
              {...field}
              type={type}
              placeholder={`Enter ${label}`}
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name]?.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
