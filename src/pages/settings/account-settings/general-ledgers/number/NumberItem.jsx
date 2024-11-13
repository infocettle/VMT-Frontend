import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import { Trash } from "lucide-react";
import React, { useState } from "react";

export default function GeneralLedgerNumberItem() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="100001" width="w-[10%]" />
      <Title title="PETTY CASH" width="flex-1" />
      <Title title="5" width="w-[5%]" />
      <Title title="YES" width="w-[10%]" />
      <Title title="CASH BALANCES" width="w-[10%]" />
      <Title title="CURRENT ASSET" width="w-[10%]" />
      <Title title="NGN" width="w-[10%]" />
      <Title title="1" width="w-[5%]" />
      <Title title="INTEREST" width="w-[10%]" />
      <div className="w-[10%] flex items-center justify-center">
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
      className={`text-[#8E8EA9] font-bold text-[12px] leading-[18px] ${width}`}>
      {title}
    </h2>
  );
}
