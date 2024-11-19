import React, {useState} from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { TbBrandZoom } from "react-icons/tb";
import { FormInput } from '@/components/FormInput';
import { zoomSchema } from '@/utils/zodSchema';
import { Button } from '@/components/ui/button';
import { baseUrl } from '@/App';
import { usePostData } from '@/hooks/usePostData';
import { GenericForm } from '@/components/GenericForm';

export const zoomRequiredForm = zoomSchema.required();
const zoomDefaultValues = {
    type: "Zoom",
    description: "",
    zoomAccountId: "",
    zoomClientId: "",
    zoomClientSecret: ""
}


const Zoom = () => {
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
      zoomAccountId: values.zoomAccountId,
      zoomClientId: values.zoomClientId,
      zoomClientSecret: values.zoomClientSecret
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
            onClick={() => setIsOpen(true)}
            >
                <div className="flex items-center gap-4">
                    <TbBrandZoom className="size-6"/>
                    <div>Zoom</div>
                </div>
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add Zoom</DialogTitle>
            </DialogHeader>
            <hr className="border border-gray-100 w-full h-[1px]" />
            <GenericForm
                defaultValues={zoomDefaultValues}
                validationSchema={zoomRequiredForm}
                onSubmit={onSubmit}
                firstButton={"Cancel"}
                secondButton={"Submit"}
            >
                <FormInput name="zoomAccountId" label="Zoom Account ID" />
                <FormInput name="zoomClientId" label="Zoom Client ID" />
                <FormInput name="zoomClientSecret" label="Zoom Client Secret" />
                <FormInput name="description" label="Description" textArea={true}/>
            </GenericForm>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Zoom
