import React from 'react';
import ReuseDialog from '@/components/ReuseDialog';
import ConfirmDelete from '@/components/ConfirmDelete';
import { FormInput } from '@/components/FormInput';
import { googleAdsRequiredForm } from '../GoogleAds';
import AuthenticateGoogleAds from '../AuthenticateGoogleAds';

const EditGoogleAds = ({editMutation, deleteMutation, title, open, setIsOpen}) => {

      const googleAdsDefaultValues = {
        type: title.type,
        description: title.description,
        clientId: title.googleAds.clientId,
        clientSecret: title.googleAds.clientSecret,
        customerId: title.googleAds.customerId,
        developerToken: title.googleAds.developerToken,
        refreshToken: title.googleAds.refreshToken
    }

      async function onSubmit(values) {
        console.log(values);

        const body = {
            type: values.type,
            description: values.description,
            clientId: values.clientId,
            clientSecret: values.clientSecret,
            customerId: values.customerId,
            developerToken: values.developerToken,
            refreshToken: values.refreshToken
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
        dialogTitle={"Edit Google Ads"}
        defaultValues={googleAdsDefaultValues}
        validationSchema={googleAdsRequiredForm}
        long={false}
        onSubmit={onSubmit}
      >
        <div className="overflow-y-auto max-h-[500px]">
          <FormInput name="clientId" label="Client ID" />
          <FormInput name="clientSecret" label="Client Secret"/>
          <AuthenticateGoogleAds token={setRefreshToken} />
          <FormInput name="customerId" label="Customer ID" />
          <FormInput name="developerToken" label="Developer Token"/>
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
  )
}

export default EditGoogleAds;
