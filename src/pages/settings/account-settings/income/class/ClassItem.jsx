import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import DeleteButton from "@/components/DeleteButton";
import { useEffect, useState } from "react";
import useDeleteData from "@/hooks/useDeleteData";
import { segmentRequiredForm } from "../Income";
import { baseUrl } from "@/utils/https";
import Input from "@/pages/settings/general-settings/Input";

const options = [{ name: "Journal", value: "Journal" }];

export default function IncomeClassItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [income, setIncome] = useState("");
  const [incomeAccount, setIncomeAccount] = useState("");
  const [type, setType] = useState("");
  const [typeAccount, setTypeAccount] = useState("");

  const url = baseUrl;

  useEffect(() => {
    setGroup(item?.group);
    setIncome(item?.income);
    setIncomeAccount(item?.incomeAccount);
    setType(item?.type);
    setTypeAccount(item?.typeAccount);
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
      <Title title={item?.class} width="w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.group} width="w-[15%] uppercase hidden lg:block" />
      <Title title={item?.description} width="flex-1" />
      <Title title={item?.incomeAccount} width="w-[15%] hidden lg:block" />
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
          <h4 className="text-[#212134] font-bold text-[14px]">
            Default GL Accounts
          </h4>
          <div className="w-full flex items-center gap-6">
            <Input
              label="Income"
              options={options}
              onChange={(e) => setIncome(e.target.value)}
              value={income}
              inputType="select"
            />
            <Input
              label="Income Account"
              options={options}
              onChange={(e) => setIncomeAccount(e.target.value)}
              value={incomeAccount}
              inputType="select"
            />
          </div>
          <div className="w-full flex items-center gap-6">
            <Input
              label="Receivable"
              options={options}
              onChange={(e) => setType(e.target.value)}
              value={type}
              inputType="select"
            />
            <Input
              label="Receivable Account"
              options={options}
              onChange={(e) => setTypeAccount(e.target.value)}
              value={typeAccount}
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
