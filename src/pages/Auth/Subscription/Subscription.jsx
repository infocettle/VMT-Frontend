import React, { useState } from 'react'
import SubscriptionSubscriber from './SubscriptionSubscriber';
import SubscriptionInvestor from './SubscriptionInvestor';
import SubscriptionConsultant from './SubscriptionConsultant';
import CompletedSubscription from './CompletedSubscription';

function Subscription() {
    const [subscriptionType, setSubscriptionType] = useState('first-subscription');
    const handleSubmit = () => {
   
        console.log('Form submitted:', subscriptionType);
      };
    
  return (
    <div className='sub-container'>
           
            <div className="sub-form-overall-container">
           <div className='w-full bg-white'>Navbar</div>
            {subscriptionType === 'first-subscription' && <SubscriptionSubscriber setSubscriptionType={setSubscriptionType} onSubmit={handleSubmit} />}
            {subscriptionType === 'subscription-investor' && <SubscriptionInvestor setSubscriptionType={setSubscriptionType} onSubmit={handleSubmit} />}
            {subscriptionType === 'subscription-consultant' && <SubscriptionConsultant setSubscriptionType={setSubscriptionType} onSubmit={handleSubmit} />}
            {subscriptionType === 'completed-subcription' && <CompletedSubscription setSubscriptionType={setSubscriptionType} onSubmit={handleSubmit} />}
            
               
            </div>


    </div>
  )
}

export default Subscription