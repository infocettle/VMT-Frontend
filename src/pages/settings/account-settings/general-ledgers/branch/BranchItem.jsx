import DeleteButton from "@/components/DeleteButton";
import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import Input from "@/pages/settings/general-settings/Input";
import { formatDate } from "@/utils/formatDate";
import React, { useEffect, useState } from "react";
import useDeleteData from "@/hooks/useDeleteData";
import { baseUrl } from "@/utils/https";
import { segmentRequiredForm } from "../GeneralLedger";

export default function GeneralLedgerBranchItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [branchCode, setBranchCode] = useState("");

  const date = formatDate(new Date(item?.createdAt));

  const defaultValues = {
    name: item?.name,
  };

  useEffect(() => {
    setBranchCode(item?.branchCode);
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
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.branchCode} width="w-[30%] lg:w-[25%]" />
      <Title title={item?.name} width="flex-1 uppercase" />
      <Title title={date} width="w-[25%] hidden lg:block" />
      <div className="w-[30%] lg:w-[25%] flex gap-4 items-center justify-end">
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
