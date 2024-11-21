import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SiGoogleads } from "react-icons/si";
import { FormInput } from "@/components/FormInput";
import { googleAdsSchema } from "@/utils/zodSchema";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/App";
import { usePostData } from "@/hooks/usePostData";
import { GenericForm } from "@/components/GenericForm";
import AuthenticateGoogleAds from "./AuthenticateGoogleAds";

export const googleAdsRequiredForm = googleAdsSchema.required();
const googleAdsDefaultValues = {
  type: "Google Ads",
  description: "",
  clientId: "",
  clientSecret: "",
  customerId: "",
  developerToken: "",
  refreshToken: "",
};

const GoogleAds = () => {
  const [open, setIsOpen] = useState(false);
  const [refreshToken, setRefreshToken] = useState("");

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
      clientId: values.clientId,
      clientSecret: values.clientSecret,
      customerId: values.customerId,
      developerToken: values.developerToken,
      refreshToken: refreshToken,
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
              <SiGoogleads className="size-6" />
              <div>Google Ads</div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Google Ads</DialogTitle>
          </DialogHeader>
          <hr className="border border-gray-100 w-full h-[1px]" />
          <GenericForm
            defaultValues={googleAdsDefaultValues}
            validationSchema={googleAdsRequiredForm}
            onSubmit={onSubmit}
            firstButton={"Cancel"}
            secondButton={"Submit"}>
            <div className="overflow-y-auto max-h-[500px]">
              <FormInput name="clientId" label="Client ID" />
              <FormInput name="clientSecret" label="Client Secret" />
              <AuthenticateGoogleAds token={setRefreshToken} />
              <FormInput name="customerId" label="Customer ID" />
              <FormInput name="developerToken" label="Developer Token" />
              <FormInput
                name="description"
                textArea={true}
                label="Description"
              />
            </div>
          </GenericForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GoogleAds;
