import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    const {name, price, description, features} = pricing;
    
    return (
<div className='flex flex-col border rounded-2xl p-4 bg-[#008000]'>
{/* Card Header */}
<div>
    <h1 className="text-7xl">{name}</h1>
    <h4 className='text-3xl mt-4'>{price}</h4>
</div>
    {/* Card Body */}
  <div className='bg-[#03631e] p-4 rounded-2xl mt-6 flex-1'>
    <p>{description}</p>
    <div className='bg-[#012a0d] p-4 rounded-2xl mt-6'>
        {
        features.map((features , index) => <PricingFeature
        key={index} features={features}></PricingFeature>)
    }
    </div>
   
  </div>
<button className="btn btn-success rounded-3xl w-full mt-4">Join Now</button>         
</div>
    );
};

export default PricingCard;