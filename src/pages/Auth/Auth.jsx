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
import UserCompanyCreatePassword from './SignUp/UserCompanyCreatePassword';


function Auth() {
    const [formType, setFormType] = useState('signup');
    const [userEmail, setUserEmail] = useState('');
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
            {formType === 'company-create-password' && <UserCompanyCreatePassword setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'login-user' && <UserLogin setFormType={setFormType} onSubmit={handleSubmit} setUserEmail={setUserEmail} />}
            {formType === 'otp' && <OTP setFormType={setFormType} userEmail={userEmail} onSubmit={handleSubmit} />}
            {formType === 'governance-page' && <Governance setFormType={setFormType} onSubmit={handleSubmit} />}
            {formType === 'reset-password' && <ResetPassword setFormType={setFormType} setUserEmail={setUserEmail} onSubmit={handleSubmit} />}
            {formType === 'verify-email' && <VerifyEmail setFormType={setFormType} userEmail={userEmail} onSubmit={handleSubmit} />}
            {formType === 'new-password' && <NewPassword setFormType={setFormType} userEmail={userEmail} onSubmit={handleSubmit} />}
               
            </div>


    </div>
  )
}

export default Auth