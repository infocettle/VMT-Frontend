import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useEffect, useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import Toggle from "./Toggle";
import InventoryGroupTitle from "./group/InventoryGroupTitle";
import InventoryGroupItem from "./group/InventoryGroupItem";
import InventoryClassTitle from "./class/InventoryClassTitle";
import InventoryClassItem from "./class/InventoryClassItem";
import InventoryTypeTitle from "./type/InventoryTypeTitle";
import InventoryTypeItem from "./type/InventoryTypeItem";
import InventoryCountUnitTitle from "./count-unit/CountUnitTitle";
import InventoryCountUnitItem from "./count-unit/CountUnitItem";
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
export default function Inventory() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("group");

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

  const [minimumQuantity, setMinimumQuantity] = useState("");
  const [orderQuantity, setOrderQuantity] = useState("");
  const [reorderLevel, setReorderLevel] = useState("");
  const [countUnit, setCountUnit] = useState("");
  const [abbreviation, setAbbreviation] = useState("");

  const url = baseUrl;

  const queryClient = useQueryClient();

  const createControl = usePostData({
    queryKey: "create-inventory",
    url: `${url}/settings/account/inventory`,
    title: "inventory",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/account/inventory?type=${active.toLowerCase()}`,
    "account settings - inventory"
  );

  const list = data?.data;

  useEffect(() => {
    queryClient.invalidateQueries(["account settings - inventory"]);
  }, [queryClient, active]);

  function onSubmit(values) {
    createControl.mutate({
      ...values,
      inventoryType: active,
      group,
      costGl,
      costGlAccount,
      impairmentGl,
      impairmentGlAccount,
      wipGl,
      wipGlAccount,
      expenseGl,
      expenseGlAccount,
      provisionGl,
      provisionGlAccount,
      minimumQuantity,
      orderQuantity,
      reorderLevel,
      countUnit,
      class: incomeClass,
      type,
      abbreviation,
    });
    setIsOpen(false);
    setClass("");
    setWipGl("");
    setWipGlAccount("");
    setCostGl("");
    setCostGlAccount("");
    setImpairmentGl("");
    setImpairmentGlAccount("");
    setExpenseGl("");
    setExpenseGlAccount("");
    setProvisionGl("");
    setProvisionGlAccount("");
    setMinimumQuantity("");
    setOrderQuantity("");
    setReorderLevel("");
    setCountUnit("");
    setGroup("");
    setAbbreviation("");
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
            <SecondHeader title="INVENTORY" px="px-0" />

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
                {active !== "group" && active !== "count unit" && (
                  <>
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
                  </>
                )}
                {active !== "count unit" && (
                  <Input
                    label="Category"
                    inputType="select"
                    options={options}
                    onChange={(e) => setGroup(e.target.value)}
                    value={group}
                  />
                )}
                <FormInput name="name" label="Name" />
                <Input
                  label="Abbreviation"
                  onChange={(e) => setAbbreviation(e.target.value)}
                  value={abbreviation}
                />
                <FormInput
                  name="description"
                  label="Description"
                  textArea={true}
                />

                {active === "type" && (
                  <>
                    <div className="w-full flex items-center gap-6">
                      <Input
                        label="Minimum Quantity"
                        onChange={(e) => setMinimumQuantity(e.target.value)}
                        value={minimumQuantity}
                        type="number"
                      />
                      <Input
                        label="Order Quantity"
                        onChange={(e) => setOrderQuantity(e.target.value)}
                        value={orderQuantity}
                        type="number"
                      />
                    </div>
                    <Input
                      label="Reorder Level"
                      onChange={(e) => setReorderLevel(e.target.value)}
                      value={reorderLevel}
                      type="number"
                    />
                    <Input
                      label="Count Unit"
                      options={options}
                      onChange={(e) => setCountUnit(e.target.value)}
                      value={countUnit}
                      inputType="select"
                    />
                  </>
                )}

                {active === "class" && (
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
                )}
              </ReuseDialog>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
            <Toggle active={active} setActive={setActive} />
            {active === "count unit" && (
              <>
                <InventoryCountUnitTitle />
                {list?.map((el, i) => (
                  <InventoryCountUnitItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "type" && (
              <>
                <InventoryTypeTitle />
                {list?.map((el, i) => (
                  <InventoryTypeItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "class" && (
              <>
                <InventoryClassTitle />
                {list?.map((el, i) => (
                  <InventoryClassItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "group" && (
              <>
                <InventoryGroupTitle />
                {list?.map((el, i) => (
                  <InventoryGroupItem item={el} key={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
