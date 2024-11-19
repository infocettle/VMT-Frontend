import React, {useState} from 'react';
import ReuseDialog from '@/components/ReuseDialog';
import { FormInput } from '@/components/FormInput';
import ConfirmDelete from '@/components/ConfirmDelete';
import { dropboxRequiredForm } from '../Dropbox';
import { Button } from '@/components/ui/button';
import { SiWebauthn } from 'react-icons/si';
import { handleDropboxAuth } from '@/lib/integrations';
import { toast } from 'react-toastify';

const EditDropbox = ({editMutation, deleteMutation, title, open, setIsOpen}) => {
  const [authData, setAuthData] = useState(null);

      const dropboxAuth = async () => {
        const result = await handleDropboxAuth();
        if (result) {
          setAuthData(result);
          console.log('Authentication successful');
          toast.success(`Authentication completed successfully`, {
            autoClose: 2000,
            theme: "light",
          });
        } else {
          console.log('Authentication failed');
        }
      };

      const dropboxDefaultValues = {
        type: title?.type,
        description: title?.description,
    }

      async function onSubmit(values) {
        console.log(values);
    
        const body = {
            type: values.type,
            description: values.description,
            accessToken: authData.accessToken,
            refreshToken: authData.refreshToken,
            expiresIn: authData.expiresIn,
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
        dialogTitle={"Edit Dropbox"}
        defaultValues={dropboxDefaultValues}
        validationSchema={dropboxRequiredForm}
        long={false}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col justify-center items-center h-full">
            <Button onClick={() => dropboxAuth()} className="m-12">
                <div className="flex items-center gap-2">
                    <SiWebauthn className="size-6"/>
                    <div>Authenticate Access to Dropbox</div>
                </div>
            </Button>
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

export default EditDropbox;
