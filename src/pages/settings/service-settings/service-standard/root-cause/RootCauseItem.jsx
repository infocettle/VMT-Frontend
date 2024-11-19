import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import Input from "@/pages/settings/general-settings/Input";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { interactionGroups } from "../../interactions/Interactions";
import DeleteButton from "@/components/DeleteButton";
import { baseUrl } from "@/utils/https";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";
import { segmentRequiredForm } from "../ServiceStandard";

export default function RootCauseItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");
  const [serviceClass, setClass] = useState("");

  const url = baseUrl;

  useEffect(() => {
    setGroup(item?.group);
    setType(item?.type);
    setClass(item?.class);
  }, [item]);

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
      <Title title={item?.code} width="w-[5%] hidden lg:block" />
      <Title title={item?.name} width="w-[30%] lg:w-[15%] uppercase" />
      <Title title={item?.description} width="flex-1" />
      <Title title={item?.group} width="w-[10%] uppercase hidden lg:block" />
      <Title title={item?.class} width="w-[10%] uppercase hidden lg:block" />
      <Title title={item?.type} width="w-[10%] uppercase hidden lg:block" />
      <div className="w-[30%] lg:w-[10%] flex gap-4 items-center justify-end">
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
          <Input
            inputType="select"
            name="group"
            label="Group"
            options={interactionGroups}
            onChange={(e) => setGroup(e.target.value)}
            value={group}
            required={true}
          />
          <Input
            inputType="select"
            name="type"
            label="Type"
            options={interactionGroups}
            onChange={(e) => setType(e.target.value)}
            value={type}
            required={true}
          />
          <Input
            inputType="select"
            name="class"
            label="Class"
            options={interactionGroups}
            onChange={(e) => setClass(e.target.value)}
            value={serviceClass}
            required={true}
          />
          <FormInput name="name" label="Name" />
          <FormInput name="description" label="Description" textArea={true} />
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
