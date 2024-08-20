import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export const FormDescription = ({ name, label }) => {
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
            <textarea
              className="access-control-modal-textarea"
              {...field}
            rows="8"
          
              placeholder={`Enter ${label}`}
            ></textarea>
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name]?.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
