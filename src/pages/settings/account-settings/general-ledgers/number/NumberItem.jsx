import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import React, { useEffect, useState } from "react";
import { segmentRequiredForm } from "../GeneralLedger";
import DeleteButton from "@/components/DeleteButton";
import Input from "@/pages/settings/general-settings/Input";
import { Radio } from "../GeneralLedger";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";
import { baseUrl } from "@/utils/https";

const groupOptions = [
  { name: "assets", value: "assets" },
  { name: "equity", value: "equity" },
  { name: "liability", value: "liability" },
];

const classOptions = [
  { name: "current assets", value: "current assets" },
  { name: "trading assets", value: "trading assets" },
];

export default function GeneralLedgerNumberItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [numberCode, setNumberCode] = useState("");

  const [branchCode, setBranchCode] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");

  const [inputType, setInputType] = useState("Manual & System (A)");
  const [reserved, setReserved] = useState("yes");

  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  useEffect(() => {
    setGroup(item?.group);
    setNumberCode(item?.numberCode);
    setBranchCode(item?.branchCode);
    setCurrencyCode(item?.currencyCode);
    setClass(item?.class);
    setType(item?.type);
    setReserved(item?.reserved);
    setInputType(item?.inputType);
  }, [item]);

  const url = baseUrl;

  const updateLedger = usePatchData({
    queryKey: "update general-ledger",
    url: `${url}/settings/account/general-ledger/${item?.id}/update`,
    title: "General-ledger",
  });

  const deleteSegment = useDeleteData({
    queryKey: "delete general-ledger",
    url: `${url}/settings/account/general-ledger/${item?.id}`,
    title: "General-ledger",
  });

  function deleteHandler() {
    deleteSegment.mutate();
  }

  function onSubmit() {
    updateLedger.mutate({ type: "approve" });
    setIsOpen(false);
  }

  function returnHandler() {
    updateLedger.mutate({ type: "return" });
    setIsOpen(false);
  }

  return (
    <div className="w-full flex items-center pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[10%] hidden lg:block" />
      <Title title={item?.name} width="flex-1 uppercase" />
      <Title
        title={item?.inputType}
        width="w-[5%] uppercase  hidden lg:block"
      />
      <Title
        title={item?.reserved}
        width="w-[10%] uppercase  hidden lg:block"
      />
      <Title title={item?.type} width="w-[10%] uppercase  hidden lg:block" />
      <Title title={item?.class} width="w-[30%] lg:w-[10%] uppercase" />
      <Title title={item?.currencyCode} width="w-[10%]  hidden lg:block" />
      <Title title={item?.branchCode} width="w-[5%]  hidden lg:block" />
      <Title title="INTEREST" width="w-[10%]  hidden lg:block" />
      <div className="w-[10%]  hidden lg:block flex items-center justify-center">
        <div
          className={`w-[60px] lg:w-[94px] h-[33px] flex items-center justify-center rounded-[16px] border ${
            item?.status === "active"
              ? "border-[#63EEA8] bg-[#EDFDF5]"
              : "border-gray-600 bg-gray-100"
          }`}>
          <h3
            className={`${
              item?.status === "active" ? "text-[#12A55C]" : "text-gray-600"
            } font-semibold text-[10px] lg:text-[14px] leading-[21px] text-center capitalize`}>
            {item?.status}
          </h3>
        </div>
      </div>
      <div className="w-[30%] lg:w-[10%] flex gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"General Ledger"}
          defaultValues={defaultValues}
          validationSchema={segmentRequiredForm}
          thirdButton="Return"
          secondButton="Approve"
          onThirdButtonClick={returnHandler}
          onSubmit={onSubmit}
          long={false}>
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
        </ReuseDialog>
        <DeleteButton
          onClick={deleteHandler}
          loading={deleteHandler.isPending}
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
