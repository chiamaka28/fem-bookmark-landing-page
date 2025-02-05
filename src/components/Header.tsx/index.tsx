import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='relative flex justify-center items-center mt-10'>
        <div className="after:absolute after:top-1/4 after:right-0 after:w-[80%] after:h-[11.5rem] after:content-[''] after:bg-soft-blue after:bg-[length:200%] after:rounded-l-[316px] after:z-[-1000]"></div>
        <img src='/illustration-hero.svg' alt='' className='w-[340px] l' />
      </div>
      <div className='w-[90%] mx-auto mt-7 mb-28'>
        <div>
          <h1 className='text-[30px] font-medium text-dark-blue text-center'>
            A Simple Bookmark Manager
          </h1>
          <p className='text-[15px] text-grayish-blue text-center py-5'>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className='flex justify-center items-center  gap-4 '>
          <div className='bg-soft-blue text-[14px] rounded-md text-white shadow-customButton font-meduim py-4 px-5'>
            <a href=''></a>Get it on Chrome
          </div>
          <div className='bg-light-gray text-[14px] text-dark-blue shadow-customButton rounded-md font-meduim py-4 px-5'>
            <a href=''></a>Get it on Firefox
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
