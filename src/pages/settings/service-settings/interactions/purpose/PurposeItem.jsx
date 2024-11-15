import DeleteButton from "@/components/DeleteButton";
import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import React, { useState } from "react";
import { segmentRequiredForm } from "../Interactions";
import { baseUrl } from "@/utils/https";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";

export default function InteractionPurposeItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const url = baseUrl;

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const updateInteraction = usePatchData({
    queryKey: "update interaction",
    url: `${url}/settings/service/interaction/${item?.id}/status`,
    title: "Interaction",
  });

  const deleteInteraction = useDeleteData({
    queryKey: "delete interaction",
    url: `${url}/settings/service/interaction/${item?.id}`,
    title: "Interaction",
  });

  function deleteHandler() {
    deleteInteraction.mutate();
  }

  function onSubmit() {
    updateInteraction.mutate({ type: "approve" });
    setIsOpen(false);
  }

  function rejectHandler() {
    updateInteraction.mutate({ type: "reject" });
    setIsOpen(false);
  }
  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[15%] uppercase hidden lg:block" />
      <Title title={item?.name} width="w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.description} width="flex-1 lg:pr-8" />
      <div className="w-[30%] lg:w-[15%] flex gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"Interaction Group"}
          thirdButton="Edit"
          secondButton="Approve"
          firstButton="Reject"
          defaultValues={defaultValues}
          validationSchema={segmentRequiredForm}
          onSubmit={onSubmit}
          onFirstButtonClick={rejectHandler}
          long={false}>
          <FormInput name="category" label="Category" />
          <FormInput name="name" label="Name" />
          <FormInput name="description" label="Description" textArea={true} />
        </ReuseDialog>
        <DeleteButton
          onClick={deleteHandler}
          loading={deleteInteraction.isPending}
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
