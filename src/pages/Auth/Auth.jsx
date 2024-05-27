import React, { useState } from 'react'
import "./auth.css"
import ImageComponent from './ImageComponent'
import UserSignUp from './SignUp/UserSignUp'
import UserSubscriberCompany from './SignUp/UserSubscriberCompany';
import UserSubscriberIndividual from './SignUp/UserSubscriberIndividual';
import UserSubscriber from './SignUp/UserSubscriber';
import UserCreatePassword from './SignUp/UserCreatePassword';
import UserLogin from './Login/UserLogin';
import OTP from './Login/OTP';
import Governance from './Login/Governance';
import ResetPassword from './Login/ResetPassword';
import VerifyEmail from './Login/VerifyEmail';
import NewPassword from './Login/NewPassword';


function Auth() {
    const [formType, setFormType] = useState('signup');
    const handleSubmit = () => {
   
        console.log('Form submitted:', formType);
      };
    
  return (
    <div className='auth-container'>
            <ImageComponent />
            <div className="auth-form-overall-container">
            {formType === 'signup' && <UserSignUp setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'user-subscriber' && <UserSubscriber setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'user-subscriber-individual' && <UserSubscriberIndividual setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'user-subscriber-company' && <UserSubscriberCompany setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'individual-create-password' && <UserCreatePassword setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'login-user' && <UserLogin setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'otp' && <OTP setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'governance-page' && <Governance setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'reset-password' && <ResetPassword setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'verify-email' && <VerifyEmail setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'new-password' && <NewPassword setFormType={setFormType} onSubmit={handleSubmit} />}
               
            </div>


    </div>
  )
}

export default Auth