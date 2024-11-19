import React from 'react';
import ReuseDialog from '@/components/ReuseDialog';
import ConfirmDelete from '@/components/ConfirmDelete';
import { FormInput } from '@/components/FormInput';
import { zoomRequiredForm } from '../Zoom';

const EditZoom = ({editMutation, deleteMutation, title, open, setIsOpen}) => {
      const zoomDefaultValues = {
        type: title.type,
        description: title.description,
        zoomAccountId: title.zoomAccountId,
        zoomClientId: title.zoomClientId,
        zoomClientSecret: title.zoomClientSecret
    }

      async function onSubmit(values) {
        console.log(values);
    
        const body = {
            type: values.type,
            description: values.description,
            zoomAccountId: values.zoomAccountId,
            zoomClientId: values.zoomClientId,
            zoomClientSecret: values.zoomClientSecret
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
        dialogTitle={"Edit Zoom"}
        defaultValues={zoomDefaultValues}
        validationSchema={zoomRequiredForm}
        long={false}
        onSubmit={onSubmit}
      >
        <FormInput name="zoomAccountId" label="Zoom Account ID" />
        <FormInput name="zoomClientId" label="Zoom Client ID" />
        <FormInput name="zoomClientSecret" label="Zoom Client Secret" />
        <FormInput name="description" label="Description" textArea={true}/>
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

export default EditZoom
