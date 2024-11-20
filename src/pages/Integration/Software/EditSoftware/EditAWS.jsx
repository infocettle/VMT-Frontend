import React from "react";
import ReuseDialog from "@/components/ReuseDialog";
import ConfirmDelete from "@/components/ConfirmDelete";
import { FormInput } from "@/components/FormInput";
import { AWSRequiredForm } from "../AWS";

const EditAWS = ({ editMutation, deleteMutation, title, open, setIsOpen }) => {
  const AWSDefaultValues = {
    type: title.type,
    description: title.description,
    awsRegion: title.awsRegion,
    awsAccessKeyId: title.awsAccessKeyId,
    awsAccessKeySecret: title.awsAccessSecretKey,
    bucketName: title.bucketName,
  };

  async function onSubmit(values) {
    // console.log(values);

    const body = {
      type: values.type,
      description: values.description,
      awsRegion: values.awsRegion,
      awsAccessKeyId: values.awsAccessKeyId,
      awsAccessKeySecret: values.awsAccessKeySecret,
      bucketName: values.bucketName,
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
          dialogTitle={"Edit AWS"}
          defaultValues={AWSDefaultValues}
          validationSchema={AWSRequiredForm}
          long={false}
          onSubmit={onSubmit}>
          <div className="overflow-y-auto max-h-[500px]">
            <FormInput name="awsRegion" label="AWS Region" />
            <FormInput name="awsAccessKeyId" label="AWS Access Key Id" />
            <FormInput
              name="awsAccessKeySecret"
              label="AWS Access Key Secret"
            />
            <FormInput name="bucketName" label="Bucket Name" />
            <FormInput name="description" textArea={true} label="Description" />
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

export default EditAWS;
