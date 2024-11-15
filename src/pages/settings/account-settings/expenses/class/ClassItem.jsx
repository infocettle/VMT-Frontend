import DeleteButton from "@/components/DeleteButton";
import ReuseDialog from "@/components/ReuseDialog";
import Input from "@/pages/settings/general-settings/Input";
import { useEffect, useState } from "react";
import { segmentRequiredForm } from "../Expenses";
import { FormInput } from "@/components/FormInput";
import usePatchData from "@/hooks/usePatchData";
import { baseUrl } from "@/utils/https";
import useDeleteData from "@/hooks/useDeleteData";

const options = [{ name: "Journal", value: "Journal" }];

export default function ExpenseClassItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [expense, setExpense] = useState("");
  const [expenseAccount, setExpenseAccount] = useState("");
  const [payable, setPayable] = useState("");
  const [payableAccount, setPayableAccount] = useState("");
  const [prepaid, setPrepaid] = useState("");
  const [prepaidAccount, setPrepaidAccount] = useState("");
  const [alias, setAlias] = useState("");

  const url = baseUrl;

  useEffect(() => {
    setGroup(item?.group);
    setClass(item?.class);
    setExpense(item?.expense);
    setExpenseAccount(item?.expenseAccount);
    setPayable(item?.payable);
    setPayableAccount(item?.payableAccount);
    setPrepaid(item?.prepaid);
    setPrepaidAccount(item?.prepaidAccount);
    setAlias(item?.alias);
  }, [item]);

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const updateExpense = usePatchData({
    queryKey: "update expense",
    url: `${url}/settings/account/expense/${item?.id}`,
    title: "Expense",
  });

  const deleteControl = useDeleteData({
    queryKey: "delete expense",
    url: `${url}/settings/account/expense/${item?.id}`,
    title: "Expense",
  });

  function onSubmit(values) {
    updateExpense.mutate({ ...values });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteControl.mutate();
  }

  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[10%] uppercase hidden lg:block" />
      <Title title={item?.name} width="w-[30%] lg:w-[10%] uppercase" />
      <Title title={item?.alias} width="w-[10%] hidden lg:block" />
      <Title title={item?.group} width="w-[15%] hidden lg:block" />
      <Title title={item?.description} width="flex-1" />
      <Title
        title={item?.expenseAccount}
        width="w-[10%] hidden lg:block text-center"
      />
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
          <Input
            label="Alias"
            onChange={(e) => setAlias(e.target.value)}
            value={alias}
            placeholder="Enter Alias"
          />
          <FormInput name="description" label="Description" textArea={true} />

          <Input
            label="Group"
            options={options}
            onChange={(e) => setGroup(e.target.value)}
            value={group}
            inputType="select"
          />
          <h4 className="text-[#212134] font-bold text-[14px]">
            Default GL Accounts
          </h4>
          <div className="w-full flex items-center gap-6">
            <Input
              label="Expense"
              options={options}
              onChange={(e) => setExpense(e.target.value)}
              value={expense}
              inputType="select"
            />
            <Input
              label="Expense Account"
              options={options}
              onChange={(e) => setExpenseAccount(e.target.value)}
              value={expenseAccount}
              inputType="select"
            />
          </div>
          <div className="w-full flex items-center gap-6">
            <Input
              label="Payable"
              options={options}
              onChange={(e) => setPayable(e.target.value)}
              value={payable}
              inputType="select"
            />
            <Input
              label="Payable Account"
              options={options}
              onChange={(e) => setPayableAccount(e.target.value)}
              value={payableAccount}
              inputType="select"
            />
          </div>
          <div className="w-full flex items-center gap-6">
            <Input
              label="Prepaid"
              options={options}
              onChange={(e) => setPrepaid(e.target.value)}
              value={prepaid}
              inputType="select"
            />
            <Input
              label="Prepaid Account"
              options={options}
              onChange={(e) => setPrepaidAccount(e.target.value)}
              value={prepaidAccount}
              inputType="select"
            />
          </div>
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
