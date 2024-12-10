import ReuseDialog from "@/components/ReuseDialog";
import { useEffect, useState } from "react";
// import { segmentRequiredForm } from "./Segment";
import { FormInput } from "@/components/FormInput";
import DeleteButton from "@/components/DeleteButton";
import { segmentRequiredForm } from "../GeneralLedger";
import Input from "@/pages/settings/general-settings/Input";
import usePatchData from "@/hooks/usePatchData";
import { baseUrl } from "@/utils/https";
import useDeleteData from "@/hooks/useDeleteData";

const groupOptions = [
  { name: "assets", value: "assets" },
  { name: "equity", value: "equity" },
  { name: "liability", value: "liability" },
];

const classOptions = [
  { name: "current assets", value: "current assets" },
  { name: "trading assets", value: "trading assets" },
];

export default function GeneralLedgersTypeItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");

  const defaultValues = {
    name: item?.name,
  };

  useEffect(() => {
    setGroup(item?.group);
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
    <div className="w-full flex items-center py-4 border-b">
      <Title title={item?.code} width="w-[10%] hidden lg:block" />
      <Title title={item?.name} width="flex-1 uppercase" />
      <Title title={item?.class} width="w-[30%] lg:w-[15%] uppercase" />
      <Title title={item?.group} width="w-[20%] uppercase hidden lg:block" />
      <div className="w-[15%] hidden lg:flex items-center justify-center">
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
          <FormInput name="name" label="GL Name" placeholder="Enter GL name" />
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
