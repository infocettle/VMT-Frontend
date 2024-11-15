import Radio from "./Radio";

export default function UpdateSubscription({ formData, setFormData }) {
  return (
    <div className="w-full p-4 gap-4 bg-white mt-6 flex flex-col items-start">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        Subscription
      </h2>
      <Radio
        title="Defer Subscription"
        onChange={() => {
          setFormData({ ...formData, deferSubscription: "Yes" });
        }}
        onChange1={() => {
          setFormData({ ...formData, deferSubscription: "No" });
        }}
        value={formData.deferSubscription}
      />
      <Radio
        title="Defer Taxes"
        onChange={() => {
          setFormData({ ...formData, deferTaxes: "Yes" });
        }}
        onChange1={() => {
          setFormData({ ...formData, deferTaxes: "No" });
        }}
        value={formData.deferTaxes}
      />
      <Radio
        title="Defer Charges"
        onChange={() => {
          setFormData({ ...formData, deferCharges: "Yes" });
        }}
        onChange1={() => {
          setFormData({ ...formData, deferCharges: "No" });
        }}
        value={formData.deferCharges}
      />
    </div>
  );
}
