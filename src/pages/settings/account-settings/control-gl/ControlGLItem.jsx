import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import useDeleteData from "@/hooks/useDeleteData";
import DeleteButton from "@/components/DeleteButton";
import { useEffect, useState } from "react";
import { baseUrl } from "@/utils/https";
import Input from "../../general-settings/Input";
import { segmentRequiredForm } from "./ControlGl";
import usePatchData from "@/hooks/usePatchData";

const options = [{ name: "Journal", value: "Journal" }];

export default function ControlGlItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [usage, setUsage] = useState("");
  const [autoJournal, setAutoJournal] = useState("");
  const [glAccount, setGlAccount] = useState("");
  const url = baseUrl;
  // const [type, setType] = useState("");

  useEffect(() => {
    setAutoJournal(item?.autoJournal);
    setGlAccount(item?.glAccount);
    setUsage(item?.usage);
  }, [item]);

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const approveSegment = usePatchData({
    queryKey: "update control-gl",
    url: `${url}/settings/account/control/${item?.id}/update`,
    title: "Control-Gl",
  });

  const deleteControl = useDeleteData({
    queryKey: "delete control",
    url: `${url}/settings/account/control/${item?.id}`,
    title: "Control",
  });

  function onSubmit() {
    approveSegment.mutate({ type: "approve" });
    setIsOpen(false);
  }

  function returnHandler() {
    approveSegment.mutate({ type: "return" });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteControl.mutate();
  }
  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.name} width="w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.description} width="flex-1" />
      <Title
        title={item?.autoJournal}
        width="w-[15%] uppercase hidden lg:block"
      />
      <Title
        title={item?.glAccount}
        width="w-[10%] uppercase hidden lg:block"
      />
      <div className="w-[30%] lg:w-[10%] flex gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"New Segment"}
          defaultValues={defaultValues}
          validationSchema={segmentRequiredForm}
          thirdButton="Return"
          secondButton="Approve"
          onThirdButtonClick={returnHandler}
          onSubmit={onSubmit}
          long={false}>
          <FormInput name="name" label="Name" />
          <Input
            onChange={(e) => setAutoJournal(e.target.value)}
            value={autoJournal}
            label="Auto Journals"
            inputType="select"
            options={options}
          />
          <Input
            label="GL Account"
            inputType="select"
            options={options}
            onChange={(e) => setGlAccount(e.target.value)}
            value={glAccount}
          />
          <Input
            label="Usage"
            inputType="select"
            options={options}
            onChange={(e) => setUsage(e.target.value)}
            value={usage}
          />
          <FormInput name="description" label="Description" textArea={true} />
        </ReuseDialog>
        <DeleteButton
          onClick={deleteHandler}
          loading={deleteControl.isPending}
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
