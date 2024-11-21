import React from "react";
import useEditData from "@/hooks/useEditHook";
import useDeleteData from "@/hooks/useDeleteData";
import ReuseDialog from "@/components/ReuseDialog";
import ConfirmDelete from "@/components/ConfirmDelete";
import { FormInput } from "@/components/FormInput";
import { azureRequiredForm } from "../Azure";

const EditAzure = ({
  editMutation,
  deleteMutation,
  title,
  open,
  setIsOpen,
}) => {
  const AzureDefaultValues = {
    type: title.type,
    description: title.description,
    tenantId: title.azure.tenantId,
    clientId: title.azure.clientId,
    clientSecret: title.azure.clientSecret,
    containerName: values.containerName,
    subscriptionId: title.azure.subscriptionId,
    storageAccountName: title.azure.storageAccountName,
  };

  async function onSubmit(values) {
    console.log(values);

    const body = {
      type: values.type,
      description: values.description,
      tenantId: values.tenantId,
      clientId: values.clientId,
      clientSecret: values.clientSecret,
      subscriptionId: values.subscriptionId,
      storageAccountName: values.storageAccountName,
    };

    editMutation.mutateAsync(body);
    setIsOpen(false);
  }
  return (
    <div>
      <div
        align="center"
        className="ml-2 flex items-center justify-center space-x-2 w-20 h-10">
        <ReuseDialog
          isEdit={true}
          open={open}
          onOpenChange={setIsOpen}
          onClick={() => setIsOpen(true)}
          dialogTitle={"Edit Microsoft Azure"}
          defaultValues={AzureDefaultValues}
          validationSchema={azureRequiredForm}
          long={false}
          onSubmit={onSubmit}>
          <div className="overflow-y-auto max-h-[500px]">
            <FormInput name="tenantId" label="Tenant ID" />
            <FormInput name="clientId" label="Client ID" />
            <FormInput name="clientSecret" label="Client Secret" />
            <FormInput name="containerName" label="Container Name" />
            <FormInput name="subscriptionId" label="Subscription ID" />
            <FormInput name="storageAccountName" label="Storage Account Name" />
            <FormInput textArea={true} name="description" label="Description" />
          </div>
        </ReuseDialog>

        <ConfirmDelete
          onClick={async () => {
            await deleteMutation.mutateAsync();
            setIsOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default EditAzure;
