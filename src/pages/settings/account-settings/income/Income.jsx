import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useEffect, useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import Toggle from "./Toggle";
import IncomeCategoryTitle from "./category/IncomeCategoryTitle";
import IncomeCategoryItem from "./category/IncomeCategoryItem";
import IncomeGroupTitle from "./group/IncomeGroupTitle";
import IncomeGroupItem from "./group/IncomeGroupItem";
import IncomeTypeTitle from "./type/IncomeTypeTitle";
import IncomeTypeItem from "./type/IncomeTypeItem";
import IncomeClassTitle from "./class/ClassTitle";
import IncomeClassItem from "./class/ClassItem";
import { baseUrl } from "@/utils/https";
import { usePostData } from "@/hooks/usePostData";
import useFetchData from "@/hooks/useFetchData";
import { useQueryClient } from "@tanstack/react-query";
import Input from "../../general-settings/Input";

const options = [{ name: "Journal", value: "Journal" }];

export const segmentRequiredForm = segmentFormSchema.required();
export default function Income() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("category");

  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [income, setIncome] = useState("");
  const [incomeAccount, setIncomeAccount] = useState("");
  const [type, setType] = useState("");
  const [typeAccount, setTypeAccount] = useState("");
  const [category, setCategory] = useState("");

  const url = baseUrl;

  const queryClient = useQueryClient();

  const createControl = usePostData({
    queryKey: "create-income",
    url: `${url}/settings/account/income`,
    title: "Income",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/account/income?type=${active.toLowerCase()}`,
    "account settings - income"
  );

  const list = data?.data;

  useEffect(() => {
    queryClient.invalidateQueries(["account settings - income"]);
  }, [queryClient, active]);

  function onSubmit(values) {
    createControl.mutate({
      ...values,
      incomeType: active,
      class: incomeClass,
      income,
      incomeAccount,
      type,
      typeAccount,
      group,
      category,
    });
    setIsOpen(false);
    setClass("");
    setIncome("");
    setIncomeAccount("");
    setType("");
    setTypeAccount("");
    setGroup("");
    setCategory("");
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

          <div className="flex justify-between flex-col lg:flex-row w-full items-start gap-6 lg:gap-0 lg:items-center">
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
                {(active === "type" || active === "class") && (
                  <>
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
                  </>
                )}
                {active === "type" && (
                  <Input
                    label="Category"
                    options={options}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    inputType="select"
                  />
                )}
                {active === "class" && (
                  <>
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
                  </>
                )}
              </ReuseDialog>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
            <Toggle active={active} setActive={setActive} />

            {active === "class" && (
              <>
                <IncomeClassTitle />
                {list?.map((el, i) => (
                  <IncomeClassItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "type" && (
              <>
                <IncomeTypeTitle />
                {list?.map((el, i) => (
                  <IncomeTypeItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "group" && (
              <>
                <IncomeGroupTitle />
                {list?.map((el, i) => (
                  <IncomeGroupItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "category" && (
              <>
                <IncomeCategoryTitle />
                {list?.map((el, i) => (
                  <IncomeCategoryItem item={el} key={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
