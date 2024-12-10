import DeleteButton from "@/components/DeleteButton";
import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import { baseUrl } from "@/utils/https";
import useDeleteData from "@/hooks/useDeleteData";
import { useEffect, useState } from "react";
import { segmentRequiredForm } from "../Inventory";
import Input from "@/pages/settings/general-settings/Input";

const options = [
  { name: "Vehicles", value: "Vehicles" },
  { name: "Plant and fitttinngs", value: "Plant and fitttinngs" },
];

export default function InventoryGroupItem({ item }) {
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

  const updateInventory = usePatchData({
    queryKey: "update inventory",
    url: `${url}/settings/account/inventory/${item?.id}`,
    title: "inventory",
  });

  const deleteInventory = useDeleteData({
    queryKey: "delete inventory",
    url: `${url}/settings/account/inventory/${item?.id}`,
    title: "inventory",
  });

  function onSubmit(values) {
    updateInventory.mutate({
      ...values,
      group,
    });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteInventory.mutate();
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
          loading={deleteInventory.isPending}
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
