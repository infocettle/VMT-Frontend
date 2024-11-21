import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useEffect, useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import Toggle from "./Toggle";
import ExpenseCategoryTitle from "./category/ExpenseCategoryTitle";
import ExpenseCategoryItem from "./category/ExpenseCategoryItem";
import ExpenseGroupTitle from "./group/ExpenseGroupTitle";
import ExpenseGroupItem from "./group/ExpenseGroupItem";
import ExpenseClassTitle from "./class/ClassTitle";
import ExpenseClassItem from "./class/ClassItem";
import ExpenseTypeTitle from "./type/IncomeTypeTitle";
import ExpenseTypeItem from "./type/IncomeTypeItem";
import useFetchData from "@/hooks/useFetchData";
import { usePostData } from "@/hooks/usePostData";
import { useQueryClient } from "@tanstack/react-query";
import { baseUrl } from "@/utils/https";
import Input from "../../general-settings/Input";

const options = [{ name: "Journal", value: "Journal" }];

export const segmentRequiredForm = segmentFormSchema.required();
export default function Expense() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("category");

  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [expense, setExpense] = useState("");
  const [expenseAccount, setExpenseAccount] = useState("");
  const [payable, setPayable] = useState("");
  const [payableAccount, setPayableAccount] = useState("");
  const [prepaid, setPrepaid] = useState("");
  const [prepaidAccount, setPrepaidAccount] = useState("");
  const [category, setCategory] = useState("");
  const [alias, setAlias] = useState("");

  const url = baseUrl;

  const queryClient = useQueryClient();

  const createControl = usePostData({
    queryKey: "create-expense",
    url: `${url}/settings/account/expense`,
    title: "Expense",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/account/expense?type=${active.toLowerCase()}`,
    "account settings - expense"
  );

  const list = data?.data;

  useEffect(() => {
    queryClient.invalidateQueries(["account settings - expense"]);
  }, [queryClient, active]);

  function onSubmit(values) {
    createControl.mutate({
      ...values,
      expenseType: active,
      class: incomeClass,
      expense,
      expenseAccount,
      payable,
      payableAccount,
      prepaid,
      prepaidAccount,
      group,
      category,
      alias,
    });
    setIsOpen(false);
    setClass("");
    setExpense("");
    setExpenseAccount("");
    setPayable("");
    setPayableAccount("");
    setPrepaid("");
    setPrepaidAccount("");
    setGroup("");
    setCategory("");
    setAlias("");
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

          <div className="flex justify-between w-full items-center">
            <SecondHeader title="EXPENSE" px="px-0" />

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
                {active !== "category" && active !== "type" && (
                  <Input
                    label="Alias"
                    onChange={(e) => setAlias(e.target.value)}
                    value={alias}
                    placeholder="Enter Alias"
                  />
                )}
                <FormInput
                  name="description"
                  label="Description"
                  textArea={true}
                />
                {(active === "type" || active === "class") && (
                  <>
                    {active === "type" && (
                      <Input
                        label="Type"
                        options={options}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        inputType="select"
                      />
                    )}
                    {active === "type" && (
                      <Input
                        label="Class"
                        options={options}
                        onChange={(e) => setClass(e.target.value)}
                        value={incomeClass}
                        inputType="select"
                      />
                    )}
                    <Input
                      label="Group"
                      options={options}
                      onChange={(e) => setGroup(e.target.value)}
                      value={group}
                      inputType="select"
                    />
                  </>
                )}

                {active === "class" && (
                  <>
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
                  </>
                )}
              </ReuseDialog>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
            <Toggle active={active} setActive={setActive} />

            {active === "type" && (
              <>
                <ExpenseTypeTitle />
                {list?.map((el, i) => (
                  <ExpenseTypeItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "class" && (
              <>
                <ExpenseClassTitle />
                {list?.map((el, i) => (
                  <ExpenseClassItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "group" && (
              <>
                <ExpenseGroupTitle />
                {list?.map((el, i) => (
                  <ExpenseGroupItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "category" && (
              <>
                <ExpenseCategoryTitle />
                {list?.map((el, i) => (
                  <ExpenseCategoryItem item={el} key={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
