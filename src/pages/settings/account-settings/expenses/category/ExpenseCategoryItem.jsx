import DeleteButton from "@/components/DeleteButton";
import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import { Trash } from "lucide-react";
import { useState } from "react";
import { segmentRequiredForm } from "../Expenses";
import { baseUrl } from "@/utils/https";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";

export default function ExpenseCategoryItem({ item }) {
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

  const updateExpense = usePatchData({
    queryKey: "update expense",
    url: `${url}/settings/account/expense/${item?.id}`,
    title: "Expense",
  });

  const deleteExpense = useDeleteData({
    queryKey: "delete expense",
    url: `${url}/settings/account/expense/${item?.id}`,
    title: "Expense",
  });

  function onSubmit(values) {
    updateExpense.mutate({ ...values });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteExpense.mutate();
  }
  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.name} width="w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.description} width="flex-1" />

      <div className="w-[30%] lg:w-[15%] flex gap-4 items-center justify-end">
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
          loading={deleteExpense.isPending}
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
