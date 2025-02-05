import React from 'react';

const Cta = () => {
  return (
    <div className='bg-soft-blue text-white text-center'>
      <div className='w-[90%] mx-auto py-16'>
        <h6 className='text-xs font-medium tracking-[4.615px] leading-[40px]'>
          35,000+ ALREADY JOINED
        </h6>
        <h3 className='text-2xl font-medium mb-5'>
          Stay up-to-date with what we&apos;re doing
        </h3>
        <form
          action=''
          className='flex flex-col items-center font-medium   gap-4'
        >
          <input
            type='text'
            placeholder='Enter your email address'
            className='w-full h-12 max-w-[311px] rounded-[5px] px-6 text-sm outline-none'
          />
          <button className='w-full h-12 max-w-[311px] text-sm rounded-[5px] bg-soft-red'>
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cta;
