import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import usePatchData from "@/hooks/usePatchData";
import { baseUrl } from "@/utils/https";
import { Trash } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import useDeleteData from "@/hooks/useDeleteData";
import Input from "@/pages/settings/general-settings/Input";
import DeleteButton from "@/components/DeleteButton";
import { segmentRequiredForm } from "../Inventory";

export default function InventoryCountUnitItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [abbreviation, setAbbreviation] = useState("");

  const url = baseUrl;

  useEffect(() => {
    setAbbreviation(item?.abbreviation);
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
      abbreviation,
    });
    setIsOpen(false);
  }

  function deleteHandler() {
    deleteInventory.mutate();
  }

  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.code} width="w-[20%] uppercase hidden lg:block" />
      <Title title={item?.name} width="w-[30%] lg:w-[20%] uppercase" />
      <Title title={item?.abbreviation} width="w-[15%] hidden lg:block" />
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
          <FormInput name="name" label="Name" />
          <Input
            label="Abbreviation"
            onChange={(e) => setAbbreviation(e.target.value)}
            value={abbreviation}
          />
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
      className={`text-[#8E8EA9] font-bold text-[12px] leading-[18px] ${width}`}>
      {title}
    </h2>
  );
}
