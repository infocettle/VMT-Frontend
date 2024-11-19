import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import useDeleteData from "@/hooks/useDeleteData";
import { baseUrl } from "@/utils/https";
import { Trash, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import Input from "../../general-settings/Input";
import { contactGroups } from "./Contact";
import usePatchData from "@/hooks/usePatchData";
import { contactRequiredForm } from "./Contact";
import DeleteButton from "@/components/DeleteButton";

export default function ContactGroupIttem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [group, setGroup] = useState("");

  useEffect(() => {
    setGroup(item?.group);
  }, [item?.group]);

  const url = baseUrl;
  const deleteContact = useDeleteData({
    queryKey: "delete contact",
    url: `${url}/settings/service/contact/${item?.id}`,
    title: "Contact deleted",
  });

  const updateContact = usePatchData({
    queryKey: "update contact",
    url: `${url}/settings/service/contact/${item?.id}`,
    title: "Contact",
  });

  function deleteHandler() {
    deleteContact.mutate();
  }

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  async function onSubmit(values) {
    updateContact.mutate({ ...values, group });
    setIsOpen(false);
  }

  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.group} width="w-[30%] uppercase" />
      <Title title={item?.description} width="flex-1" />
      <div className="w-[30%] lg:w-[15%] flex gap-4 items-center justify-end">
        <ReuseDialog
          isEdit={true}
          open={isOpen}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"Contact"}
          defaultValues={defaultValues}
          validationSchema={contactRequiredForm}
          onSubmit={onSubmit}
          long={false}>
          <Input
            inputType="select"
            name="group"
            label="Group"
            options={contactGroups}
            onChange={(e) => setGroup(e.target.value)}
            value={group}
            required={true}
          />
          <FormInput name="name" label="Name" />
          <FormInput name="description" label="Description" textArea={true} />
        </ReuseDialog>
        <DeleteButton
          onClick={deleteHandler}
          loading={deleteContact.isPending}
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
