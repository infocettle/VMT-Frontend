import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";
import { baseUrl } from "@/utils/https";
import DeleteButton from "@/components/DeleteButton";
import { useEffect, useState } from "react";
import Input from "@/pages/settings/general-settings/Input";
import { segmentRequiredForm } from "../FixedAssets";

const options = [
  { name: "Vehicles", value: "Vehicles" },
  { name: "Plant and fitttinngs", value: "Plant and fitttinngs" },
];

export default function FixedAssetsClassItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const [fixedAssetClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [costGl, setCostGl] = useState("");
  const [costGlAccount, setCostGlAccount] = useState("");
  const [memoGl, setMemoGl] = useState("");
  const [memoGlAccount, setMemoGlAccount] = useState("");
  const [expenseGlAccount, setExpenseGlAccount] = useState("");
  const [expenseGl, setExpenseGl] = useState("");

  const [provisionGl, setProvisionGl] = useState("");
  const [provisionGlAccount, setProvisionGlAccount] = useState("");

  const [assetGl, setAssetGl] = useState("");
  const [assetGlAccount, setAssetGlAccount] = useState("");

  const [wipGl, setWipGl] = useState("");
  const [wipGlAccount, setWipGlAccount] = useState("");

  const [reserveGl, setReserveGl] = useState("");
  const [reserveGlAccount, setReserveGlAccount] = useState("");

  const url = baseUrl;

  useEffect(() => {
    setGroup(item?.group);
    setClass(item?.class);
    setWipGl(item?.wipGl);
    setWipGlAccount(item?.wipGlAccount);
    setCostGl(item?.costGl);
    setCostGlAccount(item?.costGlAccount);
    setMemoGl(item?.memoGl);
    setMemoGlAccount(item?.memoGlAccount);
    setExpenseGl(item?.expenseGl);
    setExpenseGlAccount(item?.expenseGlAccount);
    setProvisionGl(item?.provisionGl);
    setProvisionGlAccount(item?.provisionGlAccount);
    setAssetGl(item?.assetGl);
    setAssetGlAccount(item?.assetGlAccount);
    setReserveGl(item?.reserveGl);
    setReserveGlAccount(item?.reserveGlAccount);
  }, [item]);

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const updateIncome = usePatchData({
    queryKey: "update fixed asset",
    url: `${url}/settings/account/fixed-assets/${item?.id}`,
    title: "Fixed assets",
  });

  const deleteControl = useDeleteData({
    queryKey: "delete fixed assets",
    url: `${url}/settings/account/fixed-assets/${item?.id}`,
    title: "Incfixed assetsome",
  });

  function onSubmit(values) {
    updateIncome.mutate({
      ...values,
      class: fixedAssetClass,
      costGl,
      costGlAccount,
      memoGl,
      memoGlAccount,
      wipGl,
      wipGlAccount,
      expenseGl,
      expenseGlAccount,
      provisionGl,
      provisionGlAccount,
      assetGl,
      assetGlAccount,
      reserveGl,
      reserveGlAccount,
    });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteControl.mutate();
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
        title={item?.memoGlAccount}
        width="w-[10%] uppercase hidden lg:block"
      />
      <Title
        title={item?.provisionGlAccount}
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
            label="Class"
            options={options}
            onChange={(e) => setClass(e.target.value)}
            value={fixedAssetClass}
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
              Fixed Asset cost GL - Capitalized
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
              Fixed Asset cost GL - non-Capitalized memo
            </h4>
            <div className="w-full flex items-center gap-6">
              <Input
                label="GL Type"
                options={options}
                onChange={(e) => setMemoGl(e.target.value)}
                value={memoGl}
                inputType="select"
              />
              <Input
                label="Default GL Account"
                options={options}
                onChange={(e) => setMemoGlAccount(e.target.value)}
                value={memoGlAccount}
                inputType="select"
              />
            </div>
            <h4 className="text-[#212134] capitalize font-bold text-[14px]">
              Fixed Asset prepayment (WIP) GL:
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
              Fixed Asset expense (Depreciation) GL:
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
              Fixed Asset provision (Depreciation) GL:
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
            <h4 className="text-[#212134] capitalize font-bold text-[14px]">
              Fixed Asset revaluation (asset) GL:
            </h4>
            <div className="w-full flex items-center gap-6">
              <Input
                label="GL Type"
                options={options}
                onChange={(e) => setAssetGl(e.target.value)}
                value={assetGl}
                inputType="select"
              />
              <Input
                label="Default GL Account"
                options={options}
                onChange={(e) => setAssetGlAccount(e.target.value)}
                value={assetGlAccount}
                inputType="select"
              />
            </div>
            <h4 className="text-[#212134] capitalize font-bold text-[14px]">
              Fixed Asset revaluation (reserve) GL:
            </h4>
            <div className="w-full flex items-center gap-6">
              <Input
                label="GL Type"
                options={options}
                onChange={(e) => setReserveGl(e.target.value)}
                value={reserveGl}
                inputType="select"
              />
              <Input
                label="Default GL Account"
                options={options}
                onChange={(e) => setReserveGlAccount(e.target.value)}
                value={reserveGlAccount}
                inputType="select"
              />
            </div>
          </>
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
