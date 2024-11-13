import ReuseDialog from "@/components/ReuseDialog";
import { Trash } from "lucide-react";
import { useState } from "react";
// import { segmentRequiredForm } from "./Segment";
import { FormInput } from "@/components/FormInput";

export default function GeneralLedgersClassItem() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultValues = {
    name: "test",
    description: "gfdsr",
  };

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="w-full flex items-center py-4 border-b">
      <Title title="1" width="w-[10%]" />
      <Title title="CURRENT ASSET" width="flex-1 uppercase" />
      <Title title="ASSET" width="w-[20%]" />
      <div className="w-[15%] flex items-center justify-center">
        <div className="w-[94px] h-[33px] flex items-center justify-center rounded-[16px] border border-[#63EEA8] bg-[#EDFDF5]">
          <h3 className="text-[#12A55C] font-semibold text-[14px] leading-[21px] text-center">
            Active
          </h3>
        </div>
      </div>
      <div className="w-[10%] flex gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"New Segment"}
          //   defaultValues={defaultValues}
          //   validationSchema={segmentRequiredForm}
          //   onSubmit={onSubmit}
          long={false}>
          <FormInput name="name" label="Name" />
          <FormInput name="description" label="Description" textArea={true} />
        </ReuseDialog>
        <Trash color="#D02B20" size="24px" />
      </div>
    </div>
  );
}

function Title({ title, width }) {
  return (
    <h2
      className={`text-[#181826] font-normal text-base leading-[24px] ${width}`}>
      {title}
    </h2>
  );
}
