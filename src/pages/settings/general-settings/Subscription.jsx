import { useEffect, useState } from "react";
import { ReusableGeneral } from "./General";

const SubscriptionList = [
  { title: "Defer Subscription", text: "" },
  { title: "Defer Taxes", text: "" },
  { title: "Defer Charges", text: "" },
];

export default function Subscription({ data }) {
  const [list, setList] = useState(SubscriptionList);

  useEffect(() => {
    setList([
      { title: "Defer Subscription", text: data?.deferSubscription },
      { title: "Defer Taxes", text: data?.deferTaxes },
      { title: "Defer Charges", text: data?.deferCharges },
    ]);
  }, [data]);
  return (
    <div className="w-full p-4 gap-4 bg-white my-4 lg:my-10 flex flex-col items-start">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        Subscriptions
      </h2>
      {list?.map((el, i) => (
        <ReusableGeneral title={el.title} text={el.text} key={i} />
      ))}
    </div>
  );
}
