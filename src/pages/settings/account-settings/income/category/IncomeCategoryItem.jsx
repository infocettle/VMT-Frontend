import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";
import { useEffect, useState } from "react";
import { baseUrl } from "@/utils/https";
import DeleteButton from "@/components/DeleteButton";
import { segmentRequiredForm } from "../Income";

export default function IncomeCategoryItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const url = baseUrl;

  // useEffect(() => {
  //   setAutoJournal(item?.autoJournal);
  //   setGlAccount(item?.glAccount);
  //   setUsage(item?.usage);
  // }, [item]);

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
      <Title title={item?.name} width="w-[30%] lg:w-[20%] uppercase" />
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
