import React, { useState } from 'react'
import "./auth.css"
import ImageComponent from './ImageComponent'
import UserSignUp from './SignUp/UserSignUp'
import UserSubscriberCompany from './SignUp/UserSubscriberCompany';
import UserSubscriberIndividual from './SignUp/UserSubscriberIndividual';
import UserSubscriber from './SignUp/UserSubscriber';


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
               
            </div>


    </div>
  )
}

export default Auth