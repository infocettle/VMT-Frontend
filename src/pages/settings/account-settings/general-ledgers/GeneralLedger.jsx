import SecondDiv from "@/components/SecondDiv";
import SecondHeader from "@/components/SecondHeader";
import { useEffect, useState } from "react";
import ReuseDialog from "@/components/ReuseDialog";
import { FormInput } from "@/components/FormInput";
import { segmentFormSchema } from "@/utils/zodSchema";
import Toggle from "./Toggle";
import GeneralLedgerCategoryTitle from "./category/CategoryTitle";
import GeneralLedgersCategoryItem from "./category/CategoryItem";
import GeneralLedgerGroupTitle from "./group/GroupTitle";
import GeneralLedgerGroupItem from "./group/GroupItem";
import GeneralLedgerClassTitle from "./class/ClassTitle";
import GeneralLedgersClassItem from "./class/ClassItem";
import GeneralLedgerTypeTitle from "./type/TypeTitle";
import GeneralLedgersTypeItem from "./type/TypeItem";
import GeneralLedgerNumberTitle from "./number/NumberTitle";
import GeneralLedgerNumberItem from "./number/NumberItem";
import GeneralLedgerBranchTitle from "./branch/BranchTitle";
import GeneralLedgerBranchItem from "./branch/BranchItem";
import GeneralLedgerCurrencyTitle from "./currency/CurrencyTitle";
import GeneralLedgerCurrencyIttem from "./currency/CurrencyIttem";
import { baseUrl } from "@/utils/https";
import { useQueryClient } from "@tanstack/react-query";
import { usePostData } from "@/hooks/usePostData";
import useFetchData from "@/hooks/useFetchData";
import Input from "../../general-settings/Input";

const options = [
  { name: "debit", value: "debit (DR)" },
  { name: "credit", value: "credit (CR)" },
];

const reportOptions = [
  { name: "balance sheet", value: "balance sheet" },
  { name: "profit & loss", value: "profit & loss" },
  { name: "off-balance sheet", value: "off-balance sheet" },
];

const groupOptions = [
  { name: "assets", value: "assets" },
  { name: "equity", value: "equity" },
  { name: "liability", value: "liability" },
];

const classOptions = [
  { name: "current assets", value: "current assets" },
  { name: "trading assets", value: "trading assets" },
];

export const segmentRequiredForm = segmentFormSchema.optional();
export default function GeneralLedgers() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("category");

  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");

  const [alternateGroupName, setAlternateGroupName] = useState("");
  const [balance, setBalance] = useState("");
  const [report, setReport] = useState("");

  const [alphabetCode, setAlphabetCode] = useState("");
  const [numberCode, setNumberCode] = useState("");

  const [branchCode, setBranchCode] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");

  const [inputType, setInputType] = useState("Manual & System (A)");
  const [reserved, setReserved] = useState("yes");

  const url = baseUrl;

  const queryClient = useQueryClient();

  const createControl = usePostData({
    queryKey: "create-general-ledger",
    url: `${url}/settings/account/general-ledger`,
    title: "General ledger",
  });

  const { data, isPending, isError } = useFetchData(
    `${url}/settings/account/general-ledger?type=${active.toLowerCase()}`,
    "account settings - general-ledger"
  );

  const list = data?.data;

  useEffect(() => {
    queryClient.invalidateQueries(["account settings - general-ledger"]);
  }, [queryClient, active]);

  function onSubmit(values) {
    createControl.mutate({
      ...values,
      generalType: active,
      balance,
      alternateGroupName,
      report,
      group,
      numberCode,
      alphabetCode,
      branchCode,
      currencyCode,
      class: incomeClass,
      type,
      inputType,
      reserved,
    });
    setIsOpen(false);
    setAlternateGroupName("");
    setBalance("");
    setReport("");
    setAlphabetCode("");
    setNumberCode("");
    setBranchCode("");
    setCurrencyCode("");
    setClass("");
    setType("");
    setGroup("");
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
            <SecondHeader title="GENERAL LEDGERS" px="px-0" />

            <div className="flex items-center gap-4">
              <ReuseDialog
                isEdit={false}
                open={isOpen}
                onOpenChange={setIsOpen}
                onClick={() => setIsOpen(true)}
                dialogTitle={`Add New GL ${active}`}
                // defaultValues={defaultValues}
                validationSchema={segmentRequiredForm}
                onSubmit={onSubmit}
                long={false}>
                {active === "number" && (
                  <>
                    <Input
                      label="Select Group"
                      placeholder="Select Group"
                      onChange={(e) => setGroup(e.target.value)}
                      value={group}
                      options={groupOptions}
                      inputType="select"
                    />
                    <Input
                      label="Select Class"
                      placeholder="Select Class"
                      onChange={(e) => setClass(e.target.value)}
                      value={incomeClass}
                      options={classOptions}
                      inputType="select"
                    />
                    <Input
                      label="Select Type"
                      placeholder="Select Type"
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                      options={classOptions}
                      inputType="select"
                    />
                    <div className="w-full flex items-center gap-6">
                      <Input
                        label="Number Code"
                        placeholder="Enter number code"
                        onChange={(e) => setNumberCode(e.target.value)}
                        value={numberCode}
                      />
                      <FormInput
                        name="name"
                        label="GL Name"
                        placeholder="Enter GL name"
                      />
                    </div>
                    <FormInput
                      name="description"
                      label="Usage Description"
                      textArea={true}
                    />
                    <div className="w-full flex items-center gap-6">
                      <div className="w-full flex items-start flex-col gap-4">
                        <h4 className="text-[#212134] font-semibold text-[14px] leading-[20px]">
                          Input type
                        </h4>
                        <div className="w-full flex items-center justify-between">
                          <Radio
                            title="Manual & System (A)"
                            onChange={() => setInputType("Manual & System (A)")}
                            value={inputType}
                          />
                          <Radio
                            title="System only (S)"
                            onChange={() => setInputType("System only (S)")}
                            value={inputType}
                          />
                        </div>
                      </div>

                      <div className="w-full flex items-start flex-col gap-4">
                        <h4 className="text-[#212134] font-semibold text-[14px] leading-[20px]">
                          Reserved
                        </h4>
                        <div className="w-full flex items-center gap-6">
                          <Radio
                            onChange={() => setReserved("yes")}
                            value={reserved}
                            title="Yes"
                          />
                          <Radio
                            title="No"
                            onChange={() => setReserved("no")}
                            value={reserved}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center gap-6">
                      <Input
                        label="Currency Code"
                        placeholder="Enter currency code"
                        onChange={(e) => setCurrencyCode(e.target.value)}
                        value={currencyCode}
                      />
                      <Input
                        label="Branch Code"
                        placeholder="Enter branch code"
                        onChange={(e) => setBranchCode(e.target.value)}
                        value={branchCode}
                      />
                    </div>
                  </>
                )}

                {active === "branch" && (
                  <>
                    <Input
                      label="Branch Code"
                      placeholder="Enter branch code"
                      onChange={(e) => setBranchCode(e.target.value)}
                      value={branchCode}
                    />
                    <FormInput
                      name="name"
                      label="Branch Name"
                      placeholder="Enter branch name"
                    />
                  </>
                )}

                {active === "currency" && (
                  <>
                    <div className="w-full flex items-center gap-6">
                      <Input
                        label="Alphabet Code"
                        placeholder="Enter alphabet code"
                        onChange={(e) => setAlphabetCode(e.target.value)}
                        value={alphabetCode}
                      />
                      <Input
                        label="Number Code"
                        placeholder="Enter number code"
                        onChange={(e) => setNumberCode(e.target.value)}
                        value={numberCode}
                      />
                    </div>
                    <FormInput
                      name="name"
                      label="Currency Name"
                      placeholder="Enter currency name"
                    />
                  </>
                )}

                {active === "type" && (
                  <>
                    <Input
                      label="Select Group"
                      placeholder="Select Group"
                      onChange={(e) => setGroup(e.target.value)}
                      value={group}
                      options={groupOptions}
                      inputType="select"
                    />
                    <Input
                      label="Select Class"
                      placeholder="Select Class"
                      onChange={(e) => setClass(e.target.value)}
                      value={incomeClass}
                      options={classOptions}
                      inputType="select"
                    />
                    <FormInput
                      name="name"
                      label="GL Name"
                      placeholder="Enter GL name"
                    />
                  </>
                )}

                {active === "class" && (
                  <>
                    <Input
                      label="Select Group"
                      placeholder="Select Group"
                      onChange={(e) => setGroup(e.target.value)}
                      value={group}
                      options={groupOptions}
                      inputType="select"
                    />
                    <FormInput
                      name="name"
                      label="Class Name"
                      placeholder="Enter class name"
                    />
                  </>
                )}

                {active === "group" && (
                  <>
                    <div className="w-full flex items-center gap-6">
                      <FormInput
                        name="name"
                        label="Group Name"
                        placeholder="Enter group name"
                      />

                      <Input
                        label="Alternative Name"
                        placeholder="Enter alternative name"
                        onChange={(e) => setAlternateGroupName(e.target.value)}
                        value={alternateGroupName}
                      />
                    </div>
                    <Input
                      label="Balance Type"
                      placeholder="Select balance type"
                      onChange={(e) => setBalance(e.target.value)}
                      value={balance}
                      options={options}
                      inputType="select"
                    />
                    <Input
                      label="Report Type"
                      placeholder="Select report type"
                      onChange={(e) => setReport(e.target.value)}
                      value={report}
                      options={reportOptions}
                      inputType="select"
                    />
                  </>
                )}

                {active === "category" && (
                  <FormInput name="name" label="Name" />
                )}
                {active === "category" && (
                  <FormInput
                    name="description"
                    label="Description"
                    textArea={true}
                  />
                )}
              </ReuseDialog>
            </div>
          </div>

          <div className="w-full border-[0.5px] border-[#C0C0CF] bg-white p-6 mt-6 rounded-[4px] flex flex-col">
            <Toggle active={active} setActive={setActive} />

            {active === "currency" && (
              <>
                <GeneralLedgerCurrencyTitle />
                {list?.map((el, i) => (
                  <GeneralLedgerCurrencyIttem item={el} key={i} />
                ))}
              </>
            )}

            {active === "branch" && (
              <>
                <GeneralLedgerBranchTitle />
                {list?.map((el, i) => (
                  <GeneralLedgerBranchItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "number" && (
              <>
                <GeneralLedgerNumberTitle />
                {list?.map((el, i) => (
                  <GeneralLedgerNumberItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "type" && (
              <>
                <GeneralLedgerTypeTitle />
                {list?.map((el, i) => (
                  <GeneralLedgersTypeItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "class" && (
              <>
                <GeneralLedgerClassTitle />
                {list?.map((el, i) => (
                  <GeneralLedgersClassItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "group" && (
              <>
                <GeneralLedgerGroupTitle />
                {list?.map((el, i) => (
                  <GeneralLedgerGroupItem item={el} key={i} />
                ))}
              </>
            )}

            {active === "category" && (
              <>
                <GeneralLedgerCategoryTitle />
                {list?.map((el, i) => (
                  <GeneralLedgersCategoryItem item={el} key={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export function Radio({ onChange, value, title }) {
  return (
    <div className="flex items-center gap-3">
      <input
        id={title}
        name={title}
        type="radio"
        checked={value?.toLowerCase() === title?.toLowerCase()}
        onChange={onChange}
      />
      <label
        htmlFor={title}
        className="text-[#212134] font-normal text-[14px] leading-[20px]">
        {title}
      </label>
    </div>
  );
}
