import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export const FormTextArea = ({ name, label, type = "text" }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full gap-1 flex flex-col ">
      <label htmlFor={name} className="capitalize text-sm font-light">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <textarea
              className="border border-gray-100 focus:outline-none rounded-md p-2 mb-2"
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
