import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import { SiWebauthn } from 'react-icons/si';
import { GoogleAdsAuth } from '@/lib/integrations';
import { toast } from 'react-toastify';


const AuthenticateGoogleAds = ({token}) => {
    const {getValues} = useFormContext();
    const {clientId, clientSecret} = getValues();

    const handleAuthenticationGoogleAds = async () => {
        try {
            const { refreshToken } = GoogleAdsAuth(clientId, clientSecret)
            token(refreshToken);
        } catch (error) {
            toast.error('Authentication Unsuccessful')
        }
    }



  return (
    <div>
      <div className="flex flex-col justify-center items-center">
            <Button onClick={() => handleAuthenticationGoogleAds()} className="m-4">
                <div className="flex items-center gap-2">
                    <SiWebauthn className="size-6"/>
                    <div>Authenticate Access to GoogleAds</div>
                </div>
            </Button>
        </div>
    </div>
  )
}

export default AuthenticateGoogleAds
