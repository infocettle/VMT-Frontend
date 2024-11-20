import Input from "./Input";
import { dateFormats } from "@/texts/dateFormats";
import { currencies } from "@/texts/currencies";
import { countries } from "@/texts/countries";

export default function UpdateGeneralSettings({ formData, setFormData }) {
  const formattedCountry = countries.map((el) => {
    return { name: el.name, value: el.name };
  });

  const formattedDateFormats = dateFormats.map((el) => {
    return { name: el, value: el };
  });

  const yesOrNo = [
    { name: "Yes", value: "Yes" },
    { name: "No", value: "No" },
  ];
  return (
    <div className="w-full p-4 gap-4 bg-white mt-6 flex flex-col items-start">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        General
      </h2>

      <Input
        inputType="select"
        label="Default country"
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        value={formData.country}
        options={formattedCountry || []}
      />

      <Input
        inputType="select"
        label="Default currency"
        onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
        value={formData.currency}
        options={currencies || []}
      />

      <Input
        inputType="select"
        label="Default branch"
        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
        value={formData.branch}
        options={[]}
      />

      <Input
        inputType="select"
        label="Date Format"
        onChange={(e) =>
          setFormData({ ...formData, dateFormat: e.target.value })
        }
        value={formData.dateFormat}
        options={formattedDateFormats || []}
      />

      <Input
        inputType="select"
        label="Lock-Out"
        onChange={(e) => setFormData({ ...formData, lockOut: e.target.value })}
        value={formData.lockOut}
        options={yesOrNo}
      />

      <Input
        inputType="select"
        label="Month Auto-Close"
        onChange={(e) =>
          setFormData({ ...formData, monthAutoClose: e.target.value })
        }
        value={formData.monthAutoClose}
        options={yesOrNo}
      />

      <Input
        inputType="select"
        label="Year Auto-Close"
        onChange={(e) =>
          setFormData({ ...formData, yearAutoClose: e.target.value })
        }
        value={formData.yearAutoClose}
        options={yesOrNo}
      />
      <Input
        inputType="select"
        label="Multi Currency"
        onChange={(e) =>
          setFormData({ ...formData, multiCurrency: e.target.value })
        }
        value={formData.multiCurrency}
        options={yesOrNo}
      />
      <Input
        inputType="select"
        label="Multi Branch"
        onChange={(e) =>
          setFormData({ ...formData, multiBranch: e.target.value })
        }
        value={formData.multiBranch}
        options={yesOrNo}
      />
    </div>
  );
}
