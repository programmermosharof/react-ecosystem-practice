import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';



const PricingOption = ({pricingPromise}) => {
    const pricing = use(pricingPromise)
    console.log(pricing);
    
    return (
        <div>
            <h1 className='text-5xl text-center mb-6'>Join Our Pro Membership</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {
                    pricing.map(pricing => <PricingCard
                    pricing={pricing}
                    key={pricing.id}
                    >

                    </PricingCard>)
                }
              
               
            </div>
            
        </div>
    );
};

export default PricingOption;