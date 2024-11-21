import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import { Trash } from "lucide-react";
import { useState } from "react";

export default function UrgencyItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[20%] uppercase" />
      <Title
        title="Significant disruption to critical business activities; many users affected across many sites; major impact on business"
        width="flex-1"
      />
      <Title title="1" width="w-[20%]" />
      <div className="w-[15%] flex gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"Service Group"}
          //   defaultValues={defaultValues}
          //   validationSchema={segmentRequiredForm}
          //   onSubmit={onSubmit}
          long={false}>
          <FormInput name="category" label="Category" />
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
      className={`text-[#8E8EA9] font-normal text-[12px] leading-[18px] ${width}`}>
      {title}
    </h2>
  );
}
