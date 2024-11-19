import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GenericForm } from "@/components/GenericForm";
import { handleDropboxAuth } from "@/lib/integrations";
import { usePostData } from "@/hooks/usePostData";
import { baseUrl } from "@/App";
import { Button } from "@/components/ui/button";
import { dropboxSchema } from "@/utils/zodSchema";
import { SiWebauthn } from "react-icons/si";
import { FaDropbox } from "react-icons/fa";
import { toast } from "react-toastify";
import { FormInput } from "@/components/FormInput";

export const dropboxRequiredForm = dropboxSchema.required();
const dropboxDefaultValues = {
  type: "Dropbox",
  description: "",
};

const Dropbox = () => {
  const [authData, setAuthData] = useState(null);
  const [open, setIsOpen] = useState(false);

  const dropboxAuth = async () => {
    const result = await handleDropboxAuth();
    if (result) {
      setAuthData(result);
      console.log("Authentication successful");
      toast.success(`Authentication completed successfully`, {
        autoClose: 2000,
        theme: "light",
      });
    } else {
      console.log("Authentication failed");
    }
  };

  const softwareUrl = `${baseUrl}integration/software`;

  const postMutation = usePostData({
    queryKey: ["software"],
    url: softwareUrl,
    title: "software",
  });

  async function onSubmit(values) {
    if (!authData) {
      return;
    }
    const body = {
      type: values.type,
      description: values.description,
      accessToken: authData.accessToken,
      refreshToken: authData.refreshToken,
      expiresIn: authData.expiresIn,
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
              <FaDropbox className="size-6" />
              <div>Dropbox</div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Dropbox</DialogTitle>
          </DialogHeader>
          <hr className="border border-gray-100 w-full h-[1px]" />
          <GenericForm
            defaultValues={dropboxDefaultValues}
            validationSchema={dropboxRequiredForm}
            onSubmit={onSubmit}
            firstButton={"Cancel"}
            secondButton={"Submit"}>
            <div className="flex flex-col justify-center items-center h-full">
              <Button onClick={() => dropboxAuth()} className="m-12">
                <div className="flex items-center gap-2">
                  <SiWebauthn className="size-6" />
                  <div>Authenticate Access to Dropbox</div>
                </div>
              </Button>
            </div>
            <FormInput textArea={true} name="description" label="Description" />
          </GenericForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dropbox;
