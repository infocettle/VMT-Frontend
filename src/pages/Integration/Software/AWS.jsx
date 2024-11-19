import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaAws } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";
import { AWSSchema } from "@/utils/zodSchema";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { GenericForm } from "@/components/GenericForm";

export const AWSRequiredForm = AWSSchema.required();
const AWSDefaultValues = {
  type: "AWS",
  description: "",
  awsRegion: "",
  awsAccessKeyId: "",
  awsAccessKeySecret: "",
  bucketName: "",
};

const AWS = () => {
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
      awsRegion: values.awsRegion,
      awsAccessKeyId: values.awsAccessKeyId,
      awsAccessKeySecret: values.awsAccessKeySecret,
      bucketName: values.bucketName,
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
              <FaAws className="size-6" />
              <div>AWS</div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add AWS</DialogTitle>
          </DialogHeader>
          <hr className="border border-gray-100 w-full h-[1px]" />
          <GenericForm
            defaultValues={AWSDefaultValues}
            validationSchema={AWSRequiredForm}
            onSubmit={onSubmit}
            firstButton={"Cancel"}
            secondButton={"Submit"}>
            <FormInput name="awsRegion" label="AWS Region" />
            <FormInput name="awsAccessKeyId" label="AWS Access Key Id" />
            <FormInput
              name="awsAccessKeySecret"
              label="AWS Access Key Secret"
            />
            <FormInput name="bucketName" label="Bucket Name" />
            <FormInput name="description" textArea={true} label="Description" />
          </GenericForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AWS;
