import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useEffect, useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import Toggle from "./Toggle";
import FixedAssetsGroupTitle from "./group/FixedAssetsGroupTitle";
import FixedAssetsGroupItem from "./group/FixedAssetsGroupItem";
import FixedAssetsTypeTitle from "./type/FixedAssetsTypeTitle";
import FixedAssetsClassTitle from "./class/ClassTitle";
import FixedAssetsClassItem from "./class/ClassItem";
import FixedAssetsTypeItem from "./type/FixedAssetsTypeItem";
import { baseUrl } from "@/utils/https";
import { useQueryClient } from "@tanstack/react-query";
import { usePostData } from "@/hooks/usePostData";
import useFetchData from "@/hooks/useFetchData";
import Input from "../../general-settings/Input";

const options = [
  { name: "Vehicles", value: "Vehicles" },
  { name: "Plant and fitttinngs", value: "Plant and fitttinngs" },
];

export const segmentRequiredForm = segmentFormSchema.required();
export default function FixedAssets() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("group");

  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");

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

  const [residualRate, setResidualRate] = useState("");
  const [insuranceRate, setInsuranceRate] = useState("");

  const [depreciationType, setDepreciationType] = useState("");

  const url = baseUrl;

  const queryClient = useQueryClient();

  const createControl = usePostData({
    queryKey: "create-fixed-assets",
    url: `${url}/settings/account/fixed-assets`,
    title: "Fixed assets",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/account/fixed-assets?type=${active.toLowerCase()}`,
    "account settings - fixed-assets"
  );

  const list = data?.data;

  useEffect(() => {
    queryClient.invalidateQueries(["account settings - fixed-assets"]);
  }, [queryClient, active]);

  function onSubmit(values) {
    createControl.mutate({
      ...values,
      fixedAssetType: active,
      group,
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
      class: incomeClass,
      years,
      months,
      depreciationType,
      insuranceRate,
      residualRate,
      type,
    });
    setIsOpen(false);
    setClass("");
    setWipGl("");
    setWipGlAccount("");
    setCostGl("");
    setCostGlAccount("");
    setMemoGl("");
    setMemoGlAccount("");
    setExpenseGl("");
    setExpenseGlAccount("");
    setProvisionGl("");
    setProvisionGlAccount("");
    setAssetGl("");
    setAssetGlAccount("");
    setReserveGl("");
    setReserveGlAccount("");
    setGroup("");
    setMonths("");
    setYears("");
    setDepreciationType("");
    setInsuranceRate("");
    setResidualRate("");
  }

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Error fetching data</p>;

  return (
    <>
      <div className="w-full max-h-screen">
        <SecondDiv
          parentModule={"Account Settings"}
          module={"Account Settings"}
        />
        <div className="bg-gray-100 py-3 px-10 w-full flex-col items-center">
          {/* Second header */}

          <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-6 lg:gap-0 lg:items-center">
            <SecondHeader title="Fixed Asset" px="px-0" />

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
                <FormInput
                  name="description"
                  label="Description"
                  textArea={true}
                />
                {active === "type" && (
                  <>
                    <div className="w-full flex items-center gap-6">
                      <Input
                        label="Useful life (years)"
                        options={options}
                        onChange={(e) => setYears(e.target.value)}
                        value={years}
                        type="number"
                      />
                      <Input
                        label="Useful life (months)"
                        options={options}
                        onChange={(e) => setMonths(e.target.value)}
                        value={months}
                        type="number"
                      />
                    </div>
                    <Input
                      label="Depreciation type"
                      options={options}
                      onChange={(e) => setDepreciationType(e.target.value)}
                      value={depreciationType}
                      inputType="select"
                    />
                    <div className="w-full flex items-center gap-6">
                      <Input
                        label="Residual value (%)"
                        options={options}
                        onChange={(e) => setResidualRate(e.target.value)}
                        value={residualRate}
                        type="number"
                      />
                      <Input
                        label="Insurance rate (%)"
                        options={options}
                        onChange={(e) => setInsuranceRate(e.target.value)}
                        value={insuranceRate}
                        type="number"
                      />
                    </div>
                  </>
                )}
                {active === "class" && (
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
                )}
              </ReuseDialog>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
            <Toggle active={active} setActive={setActive} />

            {active === "class" && (
              <>
                <FixedAssetsClassTitle />
                {list?.map((el, i) => (
                  <FixedAssetsClassItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "type" && (
              <>
                <FixedAssetsTypeTitle />
                {list?.map((el, i) => (
                  <FixedAssetsTypeItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "group" && (
              <>
                <FixedAssetsGroupTitle />
                {list?.map((el, i) => (
                  <FixedAssetsGroupItem item={el} key={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
