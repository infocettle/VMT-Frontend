import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import { formatDate } from "@/utils/formatDate";
import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { segmentRequiredForm } from "../GeneralLedger";
import DeleteButton from "@/components/DeleteButton";
import Input from "@/pages/settings/general-settings/Input";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";
import { baseUrl } from "@/utils/https";

export default function GeneralLedgerCurrencyIttem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [alphabetCode, setAlphabetCode] = useState("");
  const [numberCode, setNumberCode] = useState("");

  const date = formatDate(new Date(item?.createdAt));

  const defaultValues = {
    name: item?.name,
  };

  useEffect(() => {
    setNumberCode(item?.numberCode);
    setAlphabetCode(item?.alphabetCode);
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
      <Title title={item?.alphabetCode} width="w-[30%] lg:w-[15%] uppercase" />
      <Title title={item?.numberCode} width="w-[15%] hidden lg:block" />
      <Title title={item?.name} width="flex-1 uppercase" />
      <Title title={date} width="w-[15%] hidden lg:block" />

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
