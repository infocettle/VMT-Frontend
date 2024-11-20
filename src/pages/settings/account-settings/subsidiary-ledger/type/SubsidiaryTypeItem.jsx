import DeleteButton from "@/components/DeleteButton";
import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import Input from "@/pages/settings/general-settings/Input";
import { baseUrl } from "@/utils/https";
import { useEffect, useState } from "react";
import useDeleteData from "@/hooks/useDeleteData";
import { segmentRequiredForm } from "../SubsidiaryLedger";

const groupOptions = [
  { name: "assets", value: "assets" },
  { name: "equity", value: "equity" },
  { name: "liability", value: "liability" },
];

const classOptions = [
  { name: "current assets", value: "current assets" },
  { name: "trading assets", value: "trading assets" },
];

export default function SubsidiaryTypeItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");
  const [numberCode, setNumberCode] = useState("");
  const [defaultGl, setDefaultGl] = useState("");

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  useEffect(() => {
    setGroup(item?.group);
    setClass(item?.class);
    setType(item?.type);
    setNumberCode(item?.numberCode);
    setDefaultGl(item?.defaultGl);
  }, [item]);

  const url = baseUrl;

  const updateLedger = usePatchData({
    queryKey: "update general-ledger",
    url: `${url}/settings/account/subsidiary-ledger/${item?.id}/update`,
    title: `subsidiary-general`,
  });

  const deleteSegment = useDeleteData({
    queryKey: "delete general-ledger",
    url: `${url}/settings/account/subsidiary-ledger/${item?.id}`,
    title: `subsidiary-general-ledger`,
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
      <Title title={item?.code} width="w-[10%] hidden lg:block" />
      <Title title={item?.name} width="w-[30%] lg:w-[15%] uppercase" />
      <Title title={item?.group} width="w-[10%] hidden lg:block uppercase" />
      <Title
        title={item?.class}
        width="w-[30%] lg:w-[15%] hidden lg:block uppercase"
      />
      <Title title={item?.description} width="flex-1" />
      <Title
        title={item?.defaultGl}
        width="w-[10%] hidden lg:block uppercase"
      />
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
          dialogTitle={"Subsidiary Ledger"}
          defaultValues={defaultValues}
          validationSchema={segmentRequiredForm}
          thirdButton="Return"
          secondButton="Approve"
          onThirdButtonClick={returnHandler}
          onSubmit={onSubmit}
          long={false}>
          <Input
            label="SL Group"
            placeholder="Select Group"
            onChange={(e) => setGroup(e.target.value)}
            value={group}
            options={groupOptions}
            inputType="select"
          />
          <Input
            label="SL Class"
            placeholder="Select Class"
            onChange={(e) => setClass(e.target.value)}
            value={incomeClass}
            options={classOptions}
            inputType="select"
          />
          <Input
            label="SL Type"
            placeholder="Select Type"
            onChange={(e) => setType(e.target.value)}
            value={type}
            options={classOptions}
            inputType="select"
          />
          <Input
            label="SL Number"
            placeholder="Enter SL Number"
            onChange={(e) => setNumberCode(e.target.value)}
            value={numberCode}
          />

          <FormInput name="name" label="SL Name" />

          <FormInput
            name="description"
            label="Usage Description"
            textArea={true}
          />
          <Input
            label="Default GL"
            placeholder="Select Default GL"
            onChange={(e) => setDefaultGl(e.target.value)}
            value={defaultGl}
            options={groupOptions}
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
