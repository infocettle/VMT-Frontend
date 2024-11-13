import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import Toggle from "./Toggle";
import GeneralLedgerCategoryTitle from "./category/CategoryTitle";
import GeneralLedgersCategoryItem from "./category/CategoryItem";
import GeneralLedgerGroupTitle from "./group/GroupTitle";
import GeneralLedgerGroupItem from "./group/GroupItem";
import GeneralLedgerClassTitle from "./class/ClassTitle";
import GeneralLedgersClassItem from "./class/ClassItem";
import GeneralLedgerTypeTitle from "./type/TypeTitle";
import GeneralLedgersTypeItem from "./type/TypeItem";
import GeneralLedgerNumberTitle from "./number/NumberTitle";
import GeneralLedgerNumberItem from "./number/NumberItem";
import GeneralLedgerBranchTitle from "./branch/BranchTitle";
import GeneralLedgerBranchItem from "./branch/BranchItem";
import GeneralLedgerCurrencyTitle from "./currency/CurrencyTitle";
import GeneralLedgerCurrencyIttem from "./currency/CurrencyIttem";

export const segmentRequiredForm = segmentFormSchema.required();
export default function GeneralLedgers() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("category");

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <div className="w-full max-h-screen">
        <SecondDiv
          parentModule={"Account Settings"}
          module={"Account Settings"}
        />
        <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
          {/* Second header */}

          <div className="flex justify-between w-full items-center">
            <SecondHeader title="INCOME" px="px-0" />

            <div className="flex items-center gap-4">
              <ReuseDialog
                isEdit={false}
                open={isOpen}
                onOpenChange={setIsOpen}
                onClick={() => setIsOpen(true)}
                dialogTitle={"Add New Segment"}
                // defaultValues={defaultValues}
                validationSchema={segmentRequiredForm}
                onSubmit={onSubmit}
                long={false}>
                <FormInput name="name" label="Name" />
                <FormInput
                  name="description"
                  label="Description"
                  textArea={true}
                />
              </ReuseDialog>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
            <Toggle active={active} setActive={setActive} />

            {active === "currency" && (
              <>
                <GeneralLedgerCurrencyTitle />
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => (
                  <GeneralLedgerCurrencyIttem key={i} />
                ))}
              </>
            )}

            {active === "branch" && (
              <>
                <GeneralLedgerBranchTitle />
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => (
                  <GeneralLedgerBranchItem key={i} />
                ))}
              </>
            )}

            {active === "number" && (
              <>
                <GeneralLedgerNumberTitle />
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => (
                  <GeneralLedgerNumberItem key={i} />
                ))}
              </>
            )}

            {active === "type" && (
              <>
                <GeneralLedgerTypeTitle />
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => (
                  <GeneralLedgersTypeItem key={i} />
                ))}
              </>
            )}

            {active === "class" && (
              <>
                <GeneralLedgerClassTitle />
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => (
                  <GeneralLedgersClassItem key={i} />
                ))}
              </>
            )}

            {active === "group" && (
              <>
                <GeneralLedgerGroupTitle />
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => (
                  <GeneralLedgerGroupItem key={i} />
                ))}
              </>
            )}

            {active === "category" && (
              <>
                <GeneralLedgerCategoryTitle />
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => (
                  <GeneralLedgersCategoryItem key={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
