import React from 'react';

const Header = () => {
  return (
    <header className='w-[90%] md:flex md:justify-between md:flex-row-reverse md:max-w-[1100px] md:mx-auto'>
      <div className='relative flex justify-center items-center mt-10 md:mt-0 '>
        <div className="after:absolute after:top-1/4  after:w-[80%] after:-right-[20%] md:after:w-[600px]  lg:after:w-[900px] md:after:-right-full after:h-[11.5rem] md:after:h-[260px] lg:after:h-[352px] after:content-[''] after:bg-soft-blue after:bg-[length:200%] after:rounded-l-[316px] after:z-[-1000]"></div>
        <img
          src='/illustration-hero.svg'
          alt=''
          className='w-[340px] lg:w-[575px] lg:ml-30'
        />
      </div>

      <div className='w-[90%] md:w-1/2 mx-auto mt-7 md:mt-16 mb-28 '>
        <div className=''>
          <h1 className='text-[30px] lg:text-[48px] lg:leading-[52px] font-medium text-dark-blue text-center md:text-left '>
            A Simple Bookmark Manager
          </h1>
          <p className='text-[15px] lg:text-[18px] lg:leading-7  text-grayish-blue text-center py-5 md:text-left'>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className='flex justify-center items-center  gap-4 md:justify-start'>
          <div className='bg-soft-blue text-[14px] rounded-md text-white border border-white shadow-customButton font-meduim py-4 px-5 hover:text-soft-blue hover:bg-white hover:border-soft-blue transition-all duration-300'>
            <a href=''></a>Get it on Chrome
          </div>
          <div className='bg-light-gray text-[14px]  border border-white text-dark-blue shadow-customButton rounded-md font-meduim py-4 px-5 hover:text-dark-blue hover:bg-white hover:border-dark-blue transition-all duration-300'>
            <a href=''></a>Get it on Firefox
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
