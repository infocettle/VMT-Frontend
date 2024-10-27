import React, {useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { GenericForm } from '@/components/GenericForm';
import { usePostData } from '@/hooks/usePostData';
import { baseUrl } from '@/App';
import { Button } from '@/components/ui/button';
import { FaGoogle } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { googleCloudSchema } from '@/utils/zodSchema';
import { FormInput } from '@/components/FormInput';
import { toast } from 'react-toastify';

export const googleCloudRequiredForm = googleCloudSchema.required();
const googleCloudDefaultValues = {
    type: "Google Cloud",
    description: "",
    bucketName: ""
}

const GoogleCloud = () => {
  const [open, setIsOpen] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          setJsonData(data);
          toast.success(`Upload completed successfully`, {
            autoClose: 2000,
            theme: "light",
          });
        } catch (err) {
          console.error('Invalid JSON file', err);
        }
      };
      
      reader.readAsText(file);
    } else {
      console.error('Please upload a valid JSON file');
    }
  };

  const softwareUrl = `${baseUrl}integration/software`;

  const postMutation = usePostData({
    queryKey: ["software"],
    url: softwareUrl,
    title: "software",
  });

  async function onSubmit(values) {
    if (!jsonData) {
        return;
    }
    const body = {
      type: values.type,
      description: values.description,
      bucketName: values.bucketName,
      credentialType: jsonData.type,
      authUri: jsonData.auth_uri,
      authProviderX509CertUrl: jsonData.auth_provider_x509_cert_url,
      clientId: jsonData.client_id,
      clientEmail: jsonData.client_email,
      clientX509CertUrl: jsonData.client_x509_cert_url,
      projectId: jsonData.project_id,
      privateKey: jsonData.private_key,
      privateKeyId: jsonData.private_key_id,
      tokenUri: jsonData.token_uri,
      universeDomain: jsonData.universe_domain
    };

    console.log(body)

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
                    <FaGoogle className="size-6 text-white"/>
                    <div>Google Cloud</div>
                </div>
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add Google Cloud</DialogTitle>
            </DialogHeader>
            <hr className="border border-gray-100 w-full h-[1px]" />
            <GenericForm
                defaultValues={googleCloudDefaultValues}
                validationSchema={googleCloudRequiredForm}
                onSubmit={onSubmit}
                firstButton={"Cancel"}
                secondButton={"Submit"}
            >
                <div className='bg-primary text-primary-foreground hover:bg-vmtblue m-12 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
                    <label className="flex items-center justify-center px-4 py-2 cursor-pointer">
                    <input
                        type="file"
                        accept=".json"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <div className="flex items-center gap-2">
                        <FiUpload className="size-6" />
                        <div className="text-sm">Upload Service Account Credentials</div>
                    </div>
                    </label>
                </div>
                <FormInput textArea={true} name="bucketName" label="bucketName" />
                <FormInput textArea={true} name="description" label="Description" />
            </GenericForm>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default GoogleCloud
