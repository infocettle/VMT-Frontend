import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export const FormInput = ({ name, label, defaultValue, textArea, type = "text" }) => {
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
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            {textArea ? (
              <textarea
                className="border border-gray-100 focus:outline-none rounded-md p-2 mb-2 capitalize h-36"
                {...field}
                type={type}
                placeholder={`Enter ${label}`}
            />
            ): (
              <input
                className="border border-gray-100 focus:outline-none rounded-md p-2 mb-2 capitalize"
                {...field}
                type={type}
                placeholder={`Enter ${label}`}
            />
            )}
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name]?.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
