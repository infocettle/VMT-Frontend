import DeleteButton from "@/components/DeleteButton";
import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import Input from "@/pages/settings/general-settings/Input";
import { baseUrl } from "@/utils/https";
import useDeleteData from "@/hooks/useDeleteData";
import { useEffect, useState } from "react";
import { segmentRequiredForm } from "../Inventory";

const options = [
  { name: "Vehicles", value: "Vehicles" },
  { name: "Plant and fitttinngs", value: "Plant and fitttinngs" },
];

export default function InventoryTypeItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [minimumQuantity, setMinimumQuantity] = useState("");
  const [orderQuantity, setOrderQuantity] = useState("");
  const [reorderLevel, setReorderLevel] = useState("");
  const [countUnit, setCountUnit] = useState("");

  const [incomeClass, setClass] = useState("");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");

  const url = baseUrl;

  useEffect(() => {
    setClass(item?.class);
    setMinimumQuantity(item?.minimumQuantity);
    setOrderQuantity(item?.orderQuantity);
    setReorderLevel(item?.reorderLevel);
    setCountUnit(item?.countUnit);
    setGroup(item?.group);
    setType(item?.type);
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
      type,
      class: incomeClass,
      minimumQuantity,
      orderQuantity,
      reorderLevel,
      countUnit,
    });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteInventory.mutate();
  }

  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[20%] uppercase hidden lg:block" />
      <Title title={item?.type} width="w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.class} width="w-[15%] uppercase hidden lg:block" />
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
            options={options}
            onChange={(e) => setType(e.target.value)}
            value={type}
            inputType="select"
          />
          <Input
            label="Class"
            options={options}
            onChange={(e) => setClass(e.target.value)}
            value={incomeClass}
            inputType="select"
          />
          <Input
            label="Category"
            inputType="select"
            options={options}
            onChange={(e) => setGroup(e.target.value)}
            value={group}
          />
          <FormInput name="name" label="Name" />
          <FormInput name="description" label="Description" textArea={true} />

          <div className="w-full flex items-center gap-6">
            <Input
              label="Minimum Quantity"
              onChange={(e) => setMinimumQuantity(e.target.value)}
              value={minimumQuantity}
              type="number"
            />
            <Input
              label="Order Quantity"
              onChange={(e) => setOrderQuantity(e.target.value)}
              value={orderQuantity}
              type="number"
            />
          </div>
          <Input
            label="Reorder Level"
            onChange={(e) => setReorderLevel(e.target.value)}
            value={reorderLevel}
            type="number"
          />
          <Input
            label="Count Unit"
            options={options}
            onChange={(e) => setCountUnit(e.target.value)}
            value={countUnit}
            inputType="select"
          />
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
