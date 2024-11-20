import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SiMicrosoftazure } from "react-icons/si";
import { FormInput } from "@/components/FormInput";
import { azureSchema } from "@/utils/zodSchema";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { GenericForm } from "@/components/GenericForm";

export const azureRequiredForm = azureSchema.required();
const azureDefaultValues = {
  type: "Azure",
  description: "",
  tenantId: "",
  clientId: "",
  clientSecret: "",
  containerName: "",
  subscriptionId: "",
  storageAccountName: "",
};

const Azure = () => {
  const [open, setIsOpen] = useState(false);

  const softwareUrl = `${baseUrl}integration/software`;

  const postMutation = usePostData({
    queryKey: ["software"],
    url: softwareUrl,
    title: "software",
  });

  async function onSubmit(values) {
    const body = {
      type: values.type,
      description: values.description,
      tenantId: values.tenantId,
      clientId: values.clientId,
      clientSecret: values.clientSecret,
      containerName: values.containerName,
      subscriptionId: values.subscriptionId,
      storageAccountName: values.storageAccountName,
    };

    await postMutation.mutateAsync(body);
    setIsOpen(false);
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-vmtblue w-full px-4 py-2"
            size="lg"
            onClick={() => setIsOpen(true)}>
            <div className="flex items-center gap-4">
              <SiMicrosoftazure className="size-6" />
              <div>Microsoft Azure</div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Microsoft Azure</DialogTitle>
          </DialogHeader>
          <hr className="border border-gray-100 w-full h-[1px]" />
          <GenericForm
            defaultValues={azureDefaultValues}
            validationSchema={azureRequiredForm}
            onSubmit={onSubmit}
            firstButton={"Cancel"}
            secondButton={"Submit"}>
            <div className="overflow-y-auto max-h-[500px]">
              <FormInput name="tenantId" label="Tenant ID" />
              <FormInput name="clientId" label="Client ID" />
              <FormInput name="clientSecret" label="Client Secret" />
              <FormInput name="containerName" label="Container Name" />
              <FormInput name="subscriptionId" label="Subscription ID" />
              <FormInput
                name="storageAccountName"
                label="Storage Account Name"
              />
              <FormInput
                textArea={true}
                name="description"
                label="Description"
              />
            </div>
          </GenericForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Azure;
