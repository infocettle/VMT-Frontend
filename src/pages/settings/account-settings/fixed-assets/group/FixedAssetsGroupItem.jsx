import DeleteButton from "@/components/DeleteButton";
import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import useDeleteData from "@/hooks/useDeleteData";
import usePatchData from "@/hooks/usePatchData";
import { baseUrl } from "@/utils/https";
import { useEffect, useState } from "react";
import Input from "@/pages/settings/general-settings/Input";
import { segmentRequiredForm } from "../FixedAssets";

const options = [
  { name: "Vehicles", value: "Vehicles" },
  { name: "Plant and fitttinngs", value: "Plant and fitttinngs" },
];

export default function FixedAssetsGroupItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const [group, setGroup] = useState("");

  const url = baseUrl;

  useEffect(() => {
    setGroup(item?.group);
  }, [item]);

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  const updateIncome = usePatchData({
    queryKey: "update fixed asset",
    url: `${url}/settings/account/fixed-assets/${item?.id}`,
    title: "Fixed assets",
  });

  const deleteControl = useDeleteData({
    queryKey: "delete fixed assets",
    url: `${url}/settings/account/fixed-assets/${item?.id}`,
    title: "Incfixed assetsome",
  });

  function onSubmit(values) {
    updateIncome.mutate({ ...values });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteControl.mutate();
  }
  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.group} width="w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.description} width="flex-1" />

      <div className="w-[30%] lg:w-[15%] flex gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"Service Group"}
          defaultValues={defaultValues}
          validationSchema={segmentRequiredForm}
          onSubmit={onSubmit}
          long={false}>
          <Input
            label="Category"
            inputType="select"
            options={options}
            onChange={(e) => setGroup(e.target.value)}
            value={group}
          />
          <FormInput name="name" label="Name" />
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
