import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import DeleteButton from "@/components/DeleteButton";
import { useEffect, useState } from "react";
import usePatchData from "@/hooks/usePatchData";
import { baseUrl } from "@/utils/https";
import useDeleteData from "@/hooks/useDeleteData";
import Input from "@/pages/settings/general-settings/Input";
import { segmentRequiredForm } from "../Inventory";

const options = [
  { name: "Vehicles", value: "Vehicles" },
  { name: "Plant and fitttinngs", value: "Plant and fitttinngs" },
];

export default function InventoryClassItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");

  const [costGl, setCostGl] = useState("");
  const [costGlAccount, setCostGlAccount] = useState("");
  const [impairmentGl, setImpairmentGl] = useState("");
  const [impairmentGlAccount, setImpairmentGlAccount] = useState("");
  const [expenseGlAccount, setExpenseGlAccount] = useState("");
  const [expenseGl, setExpenseGl] = useState("");

  const [provisionGl, setProvisionGl] = useState("");
  const [provisionGlAccount, setProvisionGlAccount] = useState("");

  const [wipGl, setWipGl] = useState("");
  const [wipGlAccount, setWipGlAccount] = useState("");

  const url = baseUrl;

  useEffect(() => {
    setClass(item?.class);
    setWipGl(item?.wipGl);
    setWipGlAccount(item?.wipGlAccount);
    setCostGl(item?.costGl);
    setCostGlAccount(item?.costGlAccount);
    setImpairmentGl(item?.impairmentGl);
    setImpairmentGlAccount(item?.impairmentGlAccount);
    setExpenseGl(item?.expenseGl);
    setExpenseGlAccount(item?.expenseGlAccount);
    setProvisionGl(item?.provisionGl);
    setProvisionGlAccount(item?.provisionGlAccount);
    setGroup(item?.group);
  }, [item]);

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const updateInventory = usePatchData({
    queryKey: "update inventory",
    url: `${url}/settings/account/inventory/${item?.id}`,
    title: "inventory",
  });

  const deleteInventory = useDeleteData({
    queryKey: "delete inventory",
    url: `${url}/settings/account/inventory/${item?.id}`,
    title: "inventory",
  });

  function onSubmit(values) {
    updateInventory.mutate({
      ...values,
      group,
    });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteInventory.mutate();
  }
  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[5%] uppercase hidden lg:block" />
      <Title title={item?.class} width="w-[30%] lg:w-[10%] uppercase" />
      <Title title={item?.group} width="w-[10%] uppercase hidden lg:block" />
      <Title title={item?.description} width="flex-1" />
      <Title
        title={item?.costGlAccount}
        width="w-[10%] uppercase hidden lg:block"
      />
      <Title
        title={item?.wipGlAccount}
        width="w-[10%] uppercase hidden lg:block"
      />
      <Title
        title={item?.expenseGlAccount}
        width="w-[10%] uppercase hidden lg:block"
      />
      <div className="w-[30%] lg:w-[10%] flex gap-4 items-center justify-end">
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
          <Input
            label="Category"
            options={options}
            onChange={(e) => setType(e.target.value)}
            value={type}
            inputType="select"
          />
          <Input
            label="Class"
            options={options}
            onChange={(e) => setClass(e.target.value)}
            value={incomeClass}
            inputType="select"
          />
          <Input
            label="Category"
            inputType="select"
            options={options}
            onChange={(e) => setGroup(e.target.value)}
            value={group}
          />

          <FormInput name="name" label="Name" />
          <FormInput name="description" label="Description" textArea={true} />
          <>
            <h4 className="text-[#212134] capitalize font-bold text-[14px]">
              Inventory cost GL - Capitalized
            </h4>
            <div className="w-full flex items-center gap-6">
              <Input
                label="GL Type"
                options={options}
                onChange={(e) => setCostGl(e.target.value)}
                value={costGl}
                inputType="select"
              />
              <Input
                label="Default GL Account"
                options={options}
                onChange={(e) => setCostGlAccount(e.target.value)}
                value={costGlAccount}
                inputType="select"
              />
            </div>

            <h4 className="text-[#212134] capitalize font-bold text-[14px]">
              Inventory prepayment (WIP) GL:
            </h4>
            <div className="w-full flex items-center gap-6">
              <Input
                label="GL Type"
                options={options}
                onChange={(e) => setWipGl(e.target.value)}
                value={wipGl}
                inputType="select"
              />
              <Input
                label="Default GL Account"
                options={options}
                onChange={(e) => setWipGlAccount(e.target.value)}
                value={wipGlAccount}
                inputType="select"
              />
            </div>
            <h4 className="text-[#212134] capitalize font-bold text-[14px]">
              Inventory expense (Consumption) GL:
            </h4>
            <div className="w-full flex items-center gap-6">
              <Input
                label="GL Type"
                options={options}
                onChange={(e) => setExpenseGl(e.target.value)}
                value={expenseGl}
                inputType="select"
              />
              <Input
                label="Default GL Account"
                options={options}
                onChange={(e) => setExpenseGlAccount(e.target.value)}
                value={expenseGlAccount}
                inputType="select"
              />
            </div>
            <h4 className="text-[#212134] capitalize font-bold text-[14px]">
              Inventory expense (impairment) GL:
            </h4>
            <div className="w-full flex items-center gap-6">
              <Input
                label="GL Type"
                options={options}
                onChange={(e) => setImpairmentGl(e.target.value)}
                value={impairmentGl}
                inputType="select"
              />
              <Input
                label="Default GL Account"
                options={options}
                onChange={(e) => setImpairmentGlAccount(e.target.value)}
                value={impairmentGlAccount}
                inputType="select"
              />
            </div>
            <h4 className="text-[#212134] capitalize font-bold text-[14px]">
              Inventory provision (Impairment) GL:
            </h4>
            <div className="w-full flex items-center gap-6">
              <Input
                label="GL Type"
                options={options}
                onChange={(e) => setProvisionGl(e.target.value)}
                value={provisionGl}
                inputType="select"
              />
              <Input
                label="Default GL Account"
                options={options}
                onChange={(e) => setProvisionGlAccount(e.target.value)}
                value={provisionGlAccount}
                inputType="select"
              />
            </div>
          </>
        </ReuseDialog>
        <DeleteButton
          onClick={deleteHandler}
          loading={deleteInventory.isPending}
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
