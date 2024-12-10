import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { pricingOptions } from '../constants';

const Pricing = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:6xl text-center my-8 tracking-wider'>Pricing</h2>
    
     <div className='flex flex-wrap '>
    {pricingOptions.map((option,index) =>(
        <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'> 
          <div className='p-2 border border-neutral-700 rounded-xl'>
            <p className='text-4xl mt-8 ml-6 mb-4'>  {option.title}
                {option.title === "Pro" && <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2'>
                    (Most Popular)
                </span> }
            </p>

            <p className="mb-8 ">
                <span className="text-5xl mt-6 mr-2 ml-6">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>


              <ul className='ml-6'>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex justify-center items-center text-center  h-12 p-5 ml-8 mr-8
                 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200 w-3/4
                 "
              >
                Subscribe
              </a>
        
          </div>
        </div>
    ))}
     </div>
    </div>
  )
}

export default Pricing
