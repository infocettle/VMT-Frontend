import Input from "../../general-settings/Input";
import PlanItem from "./PlanItem";
import PlanTitle from "./PlanTitle";

export default function ViewReceipt() {
  return (
    <div className="w-full flex bg-white p-4 mt-6 mb-16 items-start flex-col gap-4">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        RECEIPT
      </h2>

      <h2 className="text-[#000] font-normal text-[16px] leading-[24px]">
        Summary
      </h2>

      <div className="w-full flex flex-col border border-[#C0C0CF]">
        <Reusable title="[ Subscriber ID ]" />
        <Reusable title="[ Invoice number ]" />
        <Reusable title="[ Payment cycle] " />
        <Reusable title="[ Payment date ]" />
        <Reusable title="[ Expiry date ]" />
        <Reusable title="[ Gross subscription ]" />
        <Reusable title="[ Discount granted ]" />
        <Reusable title="[ Taxes ]" />
        <Reusable title="[ Charges ]" />
        <Reusable title="[ Subscription paid ]" />
        <Reusable title="[ Currency ]" />
        <Reusable title="[ Status ]" />
      </div>

      <h2 className="text-[#000] font-normal text-[16px] leading-[24px]">
        Plan details
      </h2>
      <div className="w-full flex items-start flex-col">
        <PlanTitle />
        {[1, 1, 1, 1].map((el, i) => (
          <PlanItem key={i} />
        ))}
      </div>
    </div>
  );
}

function Reusable({ title }) {
  return (
    <div className="w-full h-[36px] border-b border-b-[#C0C0CF] flex items-center justify-between">
      <h4 className="text-black p-4 w-1/2 font-normal leading-[20px] text-[14px]">
        {title}
      </h4>
      <input
        className="w-1/2 h-full outline-none bg-transparent text-center"
        placeholder="[]"
      />
    </div>
  );
}
