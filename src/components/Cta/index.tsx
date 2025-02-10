'use client';
import React, { useState } from 'react';

const Cta = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // setError('');
      setEmail('');
      console.log(email);
      console.log('Email submitted:', email);
    } else {
      setError('Please enter a valid email address.');
      console.log(error);
    }
  };

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
          onSubmit={handleSubmit}
          className='flex flex-col md:flex-row md:justify-center items-center font-medium   gap-4'
        >
          <input
            type='text'
            placeholder='Enter your email address'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full h-12 max-w-[311px] rounded-[5px] px-6 text-sm outline-none border border-white text-dark-blue ${
              error ? 'border-soft-red' : ''
            } `}
          />
          <button className='w-full h-12 max-w-[311px] md:w-[130px] text-sm rounded-[5px] bg-soft-red border border-soft-red hover:text-soft-red hover:bg-white hover:border-soft-red transition-all duration-300'>
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cta;
