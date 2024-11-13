import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import { Trash } from "lucide-react";
import React, { useState } from "react";

export default function GeneralLedgerBranchItem() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title="34567654" width="w-[25%]" />
      <Title title="AFGHANI" width="flex-1" />
      <Title title="1-SEPT-2024" width="w-[25%]" />
      <div className="w-[25%] flex gap-4 items-center justify-end">
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
