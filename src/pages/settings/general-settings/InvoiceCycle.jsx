import { useEffect, useState } from "react";
import { ReusableGeneral } from "./General";

const InvoiceCycleList = [
  { title: "Month:", text: "" },
  { title: "Quarter", text: "" },
  { title: "Bi-Annual", text: "" },
  { title: "Annual", text: "" },
];

export default function InvoiceCycle({ data }) {
  const [list, setList] = useState(InvoiceCycleList);

  useEffect(() => {
    setList([
      { title: "Month:", text: data?.invoiceCycleMonth },
      { title: "Quarter", text: data?.invoiceCycleQuarter },
      { title: "Bi-Annual", text: data?.invoiceCycleBiAnnual },
      { title: "Annual", text: data?.invoiceCycleAnnual },
    ]);
  }, [data]);

  return (
    <div className="w-full p-4 gap-4 bg-white my-4 lg:my-10 flex flex-col items-start">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        Invoice Cycle
      </h2>
      {list?.map((el, i) => (
        <ReusableGeneral title={el.title} text={el.text} key={i} />
      ))}
    </div>
  );
}
