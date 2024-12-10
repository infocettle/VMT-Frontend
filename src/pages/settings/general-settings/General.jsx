import { useEffect, useState } from "react";

const GeneralSettingsList = [
  { title: "Default Country:", text: "" },
  { title: "Default Currency:", text: "" },
  { title: "Default Branch:", text: "" },
  { title: "Date Format:", text: "" },
  { title: "Lock-out:", text: "" },
  { title: "Month Auto-Close:", text: "" },
  { title: "Month Auto-Close:", text: "" },
  { title: "Multi Currency:", text: "" },
  { title: "Multi-Branch:", text: "" },
];

export default function General({ data }) {
  const [list, setList] = useState(GeneralSettingsList);

  useEffect(() => {
    setList([
      { title: "Default Country:", text: data?.country },
      { title: "Default Currency:", text: data?.currency },
      { title: "Default Branch:", text: data?.branch },
      { title: "Date Format:", text: data?.dateFormat },
      { title: "Lock-out:", text: data?.lockOut },
      { title: "Month Auto-Close:", text: data?.monthAutoClose },
      { title: "Month Auto-Close:", text: data?.yearAutoClose },
      { title: "Multi Currency:", text: data?.multiCurrency },
      { title: "Multi-Branch:", text: data?.multiBranch },
    ]);
  }, [data]);

  return (
    <div className="w-full p-4 gap-4 bg-white mt-6 flex flex-col items-start">
      <h2 className="text-[#8E8EA9] font-bold text-[14px] leading-[21px]">
        General
      </h2>
      {list.map((el, i) => (
        <ReusableGeneral title={el.title} text={el.text} key={i} />
      ))}
    </div>
  );
}

export function ReusableGeneral({ title, text }) {
  return (
    <div className="w-full flex items-center justify-between gap-20">
      <h4 className="text-base w-auto lg:w-[300px] font-normal leading-[24px] text-[#212134]">
        {title}
      </h4>
      <h5 className="lg:text-base text-[14px] uppercase lg:flex-1 text-end lg:text-start text-[#212134] font-semibold leading-[24px]">
        {text}
      </h5>
    </div>
  );
}
