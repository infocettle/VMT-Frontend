import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";
import DeleteButton from "@/components/DeleteButton";
import { useEffect, useState } from "react";
import { baseUrl } from "@/utils/https";
import { segmentRequiredForm } from "../ServiceStandard";
import Input from "@/pages/settings/general-settings/Input";

export default function ImpactItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rank, setRank] = useState("");
  const url = baseUrl;

  useEffect(() => {
    setRank(item?.rank);
  }, [item?.rank]);

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const updateServiceStandard = usePatchData({
    queryKey: "update service standard",
    url: `${url}/settings/service/standard/${item?.id}/status`,
    title: "Service standard",
  });

  const deletteServiceStandard = useDeleteData({
    queryKey: "delete service standard",
    url: `${url}/settings/service/standard/${item?.id}`,
    title: "Service standard",
  });

  function deleteHandler() {
    deletteServiceStandard.mutate();
  }

  function onSubmit() {
    updateServiceStandard.mutate({ type: "approve" });
    setIsOpen(false);
  }

  function rejectHandler() {
    updateServiceStandard.mutate({ type: "reject" });
    setIsOpen(false);
  }

  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[30%] lg:w-[20%] " />
      <Title title={item?.description} width="flex-1" />
      <Title title={item?.rank} width="w-[20%] hidden lg:block" />
      <div className="w-[30%] lg:w-[15%] flex gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"Service Group"}
          thirdButton="Edit"
          secondButton="Approve"
          firstButton="Reject"
          defaultValues={defaultValues}
          validationSchema={segmentRequiredForm}
          onSubmit={onSubmit}
          onFirstButtonClick={rejectHandler}
          long={false}>
          <FormInput name="name" label="Name" />
          <FormInput name="description" label="Description" textArea={true} />
          <Input
            name="rank"
            label="Rank"
            onChange={(e) => setRank(e.target.value)}
            value={rank}
            required={true}
          />
        </ReuseDialog>
        <DeleteButton
          onClick={deleteHandler}
          loading={deletteServiceStandard.isPending}
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