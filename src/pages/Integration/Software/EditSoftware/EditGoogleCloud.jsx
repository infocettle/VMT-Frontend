import React, {useState} from 'react';
import ReuseDialog from '@/components/ReuseDialog';
import ConfirmDelete from '@/components/ConfirmDelete';
import { FormInput } from '@/components/FormInput';
import { toast } from 'react-toastify';
import { googleCloudRequiredForm } from '../GoogleCloud';
import { FiUpload } from 'react-icons/fi';

const EditGoogleCloud = ({editMutation, deleteMutation, title, open, setIsOpen}) => {
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

      const googleCloudDefaultValues = {
        type: title.type,
        description: title.description
    }

      async function onSubmit(values) {
        console.log(values);

        const body = {
            type: values.type,
            description: values.description,
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

        editMutation.mutateAsync(body);
        setIsOpen(false);
      }
  return (
    <div>
        <div
      align="center"
      className="ml-2 flex items-center justify-center space-x-2 w-20 h-10"
    >
      <ReuseDialog
        isEdit={true}
        open={open}
        onOpenChange={setIsOpen}
        onClick={() => setIsOpen(true)}
        dialogTitle={"Edit Google Cloud"}
        defaultValues={googleCloudDefaultValues}
        validationSchema={googleCloudRequiredForm}
        long={false}
        onSubmit={onSubmit}
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
        <FormInput textArea={true} name="description" label="Description" />
      </ReuseDialog>

      <ConfirmDelete
        onClick={async () => {
          await deleteMutation.mutateAsync();
          setIsOpen(false);
        }}
      />
    </div>
    </div>
  )
}

export default EditGoogleCloud;
