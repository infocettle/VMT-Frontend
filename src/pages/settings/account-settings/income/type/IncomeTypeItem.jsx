import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import { baseUrl } from "@/utils/https";
import DeleteButton from "@/components/DeleteButton";
import { useEffect, useState } from "react";
import useDeleteData from "@/hooks/useDeleteData";

import { segmentRequiredForm } from "../Income";
import Input from "@/pages/settings/general-settings/Input";

const options = [{ name: "Journal", value: "Journal" }];

export default function IncomeTypeItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [category, setCategory] = useState("");
  const url = baseUrl;

  useEffect(() => {
    setGroup(item?.group);
    setCategory(item?.category);
    setClass(item?.class);
  }, [item]);

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const updateIncome = usePatchData({
    queryKey: "update income",
    url: `${url}/settings/account/income/${item?.id}`,
    title: "Income",
  });

  const deleteControl = useDeleteData({
    queryKey: "delete income",
    url: `${url}/settings/account/income/${item?.id}`,
    title: "Income",
  });

  function onSubmit(values) {
    updateIncome.mutate({ ...values });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteControl.mutate();
  }
  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[20%] uppercase hidden lg:block" />
      <Title title={item?.category} width="w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.class} width="w-[15%] uppercase hidden lg:block" />
      <Title title={item?.description} width="flex-1" />

      <div className="w-[30%] lg:w-[15%] flex gap-1 lg:gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"Service Group"}
          defaultValues={defaultValues}
          validationSchema={segmentRequiredForm}
          onSubmit={onSubmit}
          long={false}>
          <FormInput name="name" label="Name" />
          <FormInput name="description" label="Description" textArea={true} />
          <Input
            label="Class"
            options={options}
            onChange={(e) => setClass(e.target.value)}
            value={incomeClass}
            inputType="select"
          />
          <Input
            label="Group"
            options={options}
            onChange={(e) => setGroup(e.target.value)}
            value={group}
            inputType="select"
          />
          <Input
            label="Category"
            options={options}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            inputType="select"
          />
        </ReuseDialog>
        <DeleteButton
          onClick={deleteHandler}
          loading={deleteControl.isPending}
        />
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
