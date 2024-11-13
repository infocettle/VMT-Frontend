import Radio from "./Radio";

export default function UpdateInvoiceCycle({ formData, setFormData }) {
  console.log(formData);
  return (
    <div className="w-full p-4 gap-4 bg-white mt-6 flex flex-col items-start">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        Invoice Cycle
      </h2>
      <Radio
        title="Month"
        onChange={() => {
          setFormData({ ...formData, invoiceCycleMonth: "Yes" });
        }}
        onChange1={() => {
          setFormData({ ...formData, invoiceCycleMonth: "No" });
        }}
        value={formData.invoiceCycleMonth}
      />
      <Radio
        title="Quarter"
        onChange={() => {
          setFormData({ ...formData, invoiceCycleQuarter: "Yes" });
        }}
        onChange1={() => {
          setFormData({ ...formData, invoiceCycleQuarter: "No" });
        }}
        value={formData.invoiceCycleQuarter}
      />
      <Radio
        title="Bi-Annual"
        onChange={() => {
          setFormData({ ...formData, invoiceCycleBiAnnual: "Yes" });
        }}
        onChange1={() => {
          setFormData({ ...formData, invoiceCycleBiAnnual: "No" });
        }}
        value={formData.invoiceCycleBiAnnual}
      />
      <Radio
        title="Annual"
        onChange={() => {
          setFormData({ ...formData, invoiceCycleAnnual: "Yes" });
        }}
        onChange1={() => {
          setFormData({ ...formData, invoiceCycleAnnual: "No" });
        }}
        value={formData.invoiceCycleAnnual}
      />
    </div>
  );
}
