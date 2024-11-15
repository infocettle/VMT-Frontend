import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";
import React, { useEffect, useState } from "react";
import { baseUrl } from "@/utils/https";
import { segmentRequiredForm } from "../GeneralLedger";
import DeleteButton from "@/components/DeleteButton";
import Input from "@/pages/settings/general-settings/Input";

const options = [
  { name: "debit", value: "debit (DR)" },
  { name: "credit", value: "credit (CR)" },
];

const reportOptions = [
  { name: "balance sheet", value: "balance sheet" },
  { name: "profit & loss", value: "profit & loss" },
  { name: "off-balance sheet", value: "off-balance sheet" },
];

export default function GeneralLedgerGroupItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [alternateGroupName, setAlternateGroupName] = useState("");
  const [balance, setBalance] = useState("");
  const [report, setReport] = useState("");

  useEffect(() => {
    setAlternateGroupName(item.alternateGroupName);
    setBalance(item?.balance);
    setReport(item?.report);
  }, [item]);

  const url = baseUrl;

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

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
      <Title title={item?.name} width="w-[30%] lg:w-[20%] uppercase" />
      <Title
        title={item?.alternateGroupName}
        width="hidden lg:block flex-1 uppercase"
      />
      <Title title={item?.balance} width="w-[20%] lg:w-[15%] uppercase" />
      <Title title={item?.report} width="w-[20%] lg:w-[15%] uppercase" />
      <div className="hidden lg:flex w-[30%] lg:w-[15%] items-center justify-center">
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
