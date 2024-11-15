import { FormInput } from "@/components/FormInput";
import ReuseDialog from "@/components/ReuseDialog";
import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { contactClassArr, contactGroups, contactRequiredForm } from "./Contact";
import Input from "../../general-settings/Input";
import { baseUrl } from "@/utils/https";
import DeleteButton from "@/components/DeleteButton";
import usePatchData from "@/hooks/usePatchData";
import useDeleteData from "@/hooks/useDeleteData";

export default function ContactClassItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [group, setGroup] = useState("");
  const [contactClass, setContactClass] = useState("");

  const defaultValues = {
    name: item?.name,
    description: item?.description,
  };

  useEffect(() => {
    setGroup(item?.group);
    setContactClass(item?.class);
  }, [item?.group, item?.class]);

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

  async function onSubmit(values) {
    updateContact.mutate({ ...values, group });
    setIsOpen(false);
  }
  return (
    <div className="w-full flex items-start pt-4 pb-2 border-b">
      <Title title={item?.contactId} width="hidden lg:block w-[10%]" />
      <Title title={item?.class} width="w-[30%] lg:w-[20%] capitalize" />
      <Title title={item?.group} width="hidden lg:block w-[20%] capitalize" />
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
          <Input
            inputType="select"
            name="class"
            label="Class"
            options={contactClassArr || []}
            onChange={(e) => setContactClass(e.target.value)}
            value={contactClass}
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
