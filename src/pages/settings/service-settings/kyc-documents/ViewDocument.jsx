import { useEffect, useState } from "react";
import Input from "../../general-settings/Input";

export default function ViewDocument({ kyc, formData, setFormData }) {
  useEffect(() => {
    setFormData({ name: kyc?.name, description: kyc?.description });
  }, [kyc, setFormData]);

  return (
    <div className="w-full flex bg-white p-4 mt-6 mb-16 items-start flex-col gap-4">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        DOCUMENT INFORMATION
      </h2>
      <Input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        value={formData.name}
        label="Document Name"
      />
      <Input
        label="Description"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        value={formData.description}
        inputType="textarea"
        rows={20}
      />
    </div>
  );
}
