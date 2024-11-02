import React from 'react';

const Food = ({foods}) => {
   const {productName,description,productTitle,productImage}=foods
    return (
        <div className='border flex  flex-col border-yellow-200 rounded-xl shadow-lg px-6 py-8 '>
           <h1 className='text-3xl text-green-500 font-bold'>{productName}</h1> 
           <h1  className='text-lg text-green-400 font-medium'>({productTitle})</h1> 
           <img src={productImage} className='w-full mt-3 rounded-xl h-48' alt="" />
           <h1  className='text-base mt-4 text-[#1313138b] font-normal'>{description}</h1> 
           <button className='btn btn-sm mt-3 text-white bg-green-400'>View more Details</button>
        </div>
    );
};

export default Food;