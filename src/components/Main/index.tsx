'use client';
import React, { useEffect, useState } from 'react';

const Main = () => {
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    const storedState = localStorage.getItem('activeButton');
    if (storedState) {
      setActiveButton(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeButton', JSON.stringify(activeButton));
  }, [activeButton]);

  const handleButton1Click = () => {
    setActiveButton(1);
  };

  const handleButton2Click = () => {
    setActiveButton(2);
  };

  const handleButton3Click = () => {
    setActiveButton(3);
  };

  return (
    <main>
      <div className='w-[90%] md:w-[540px] md:mt-16 mx-auto'>
        <h2 className='text-center text-dark-blue text-[24px] md:text-[32px] font-medium '>
          Features
        </h2>
        <p className='text-grayish-blue text-center text-[15px] md:text-[18px] py-4'>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className='w-[90%] mx-auto'>
        <div className=' text-grayish-blue flex flex-col  md:flex-row md:w-[730px] md:mx-auto  items-stretch justify-center md:justify-between border-t-2 border-b-2 border-light-blue md:border-t-0  md:mt-5 md:px-10'>
          <div className=' flex justify-center items-stretch md:items-center'>
            <button
              onClick={handleButton1Click}
              className=' py-4 md:pt-3 md:pb-6 font-medium text-dark-blue hover:text-soft-red md:h-full relative'
            >
              Simple Bookmarking
              {activeButton === 1 && (
                <div
                  className='after:absolute after:content-[""] after:bottom-0 after:left-0
               md:after:left-0 after:w-full  after:h-[2px] after:bg-soft-red'
                ></div>
              )}
            </button>
          </div>
          <div className='border-t-2  border-light-blue md:border-none flex justify-center items-stretch md:items-center'>
            <button
              onClick={handleButton2Click}
              className=' py-4 md:pt-3 md:pb-6 font-medium text-dark-blue hover:text-soft-red  md:h-full relative'
            >
              Speedy Searching
              {activeButton === 2 && (
                <div
                  className='after:absolute after:content-[""] after:bottom-0 after:left-0
               md:after:left-0 after:w-full  after:h-[2px] after:bg-soft-red'
                ></div>
              )}
            </button>
          </div>
          <div className='border-t-2  border-light-blue md:border-none flex justify-center items-stretch md:items-center'>
            <button
              onClick={handleButton3Click}
              className=' pt-2 pb-6 font-medium text-dark-blue
               hover:text-soft-red md:h-full relative'
            >
              Easy Sharing
              {activeButton === 3 && (
                <div
                  className='after:absolute after:content-[""] after:bottom-0 after:left-0
               md:after:left-0 after:w-full after:h-[2px] after:bg-soft-red'
                ></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {activeButton === 1 && (
        <div
          className={` ${
            activeButton === 1 ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 ease-in-out relative md:flex md:justify-between md:gap-16  w-[90%] md:max-w-[1100px] mx-auto mt-14 mb-36`}
        >
          <div className='relative flex justify-center items-center mt-10 md:mt-0 md:w-1/2'>
            <div className="after:absolute after:top-1/4  after:w-[80%] after:-left-[20%] md:after:w-[600px]  lg:after:w-[900px] md:after:-left-full after:h-[11.5rem] md:after:h-[260px] lg:after:h-[352px] after:content-[''] after:bg-soft-blue after:bg-[length:200%] after:rounded-r-[316px] after:z-[-1000]"></div>
            <img
              src='/illustration-features-tab-1.svg'
              alt=''
              className='w-[340px] lg:w-[536px] '
            />
          </div>
          <div className='mt-20 w-[90%] md:w-1/2 mx-auto  md:max-w-[540px]'>
            <h3 className='text-[24px] lg:text-[32px] text-center md:text-left text-dark-blue font-medium'>
              Bookmark in one click
            </h3>
            <p className='text-[15px] lg:text-[18px] text-center md:text-left text-grayish-blue py-3'>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <div className='flex justify-center md:justify-start items-center'>
              <button className='bg-soft-blue text-white border border-white text-[14px] font-medium py-3 px-5 rounded-md hover:text-soft-blue hover:bg-white hover:border-soft-blue transition-all duration-300'>
                More Info
              </button>
            </div>
          </div>
        </div>
      )}
      {activeButton === 2 && (
        <div
          className={`transition-opacity duration-300 ease-in-out relative mb-5 ${
            activeButton === 2 ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 ease-in-out relative md:flex md:justify-between md:gap-16  w-[90%] md:max-w-[1100px] mx-auto mt-14 mb-3`}
        >
          <div className='relative flex justify-center items-center mt-10 md:mt-0 md:w-1/2'>
            <div className="after:absolute after:top-1/4  after:w-[80%] after:-left-[20%] md:after:w-[600px]  lg:after:w-[900px] md:after:-left-full after:h-[11.5rem] md:after:h-[260px] lg:after:h-[352px] after:content-[''] after:bg-soft-blue after:bg-[length:200%] after:rounded-r-[316px] after:z-[-1000]"></div>
            <img
              src='/illustration-features-tab-2.svg'
              alt=''
              className='w-[340px] lg:w-[536px] '
            />
          </div>
          <div className='mt-20 w-[90%] mx-auto  md:w-1/2   md:max-w-[540px]'>
            <h3 className='text-[24px] g:text-[32px] text-center md:text-left text-dark-blue font-medium'>
              Intelligent search
            </h3>
            <p className='text-[15px] lg:text-[18px] text-center md:text-left text-grayish-blue py-3'>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <div className='flex justify-center md:justify-start items-center'>
              <button className='bg-soft-blue text-white border border-white text-[14px] font-medium py-3 px-5 rounded-md hover:text-soft-blue hover:bg-white hover:border-soft-blue transition-all duration-300'>
                More Info
              </button>
            </div>
          </div>
        </div>
      )}
      {activeButton === 3 && (
        <div
          className={`transition-opacity duration-300 ease-in-out relative md:flex md:justify-between md:gap-16  w-[90%] md:max-w-[1100px] mx-auto mt-14 mb-3 ${
            activeButton === 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='relative flex justify-center md:justify-end items-center mt-10 md:mt-0 md:w-1/2'>
            <div className="after:absolute after:top-1/4  after:w-[80%] after:-left-[20%] md:after:w-[600px]  lg:after:w-[900px] md:after:-left-full after:h-[11.5rem] md:after:h-[260px] lg:after:h-[352px] after:content-[''] after:bg-soft-blue after:bg-[length:200%] after:rounded-r-[316px] after:z-[-1000]"></div>
            <img
              src='/illustration-features-tab-3.svg'
              alt=''
              className='w-[340px] lg:w-[536px] '
            />
          </div>
          <div className='mt-20 w-[90%] mx-auto  md:w-1/2   md:max-w-[540px]'>
            <h3 className='text-[24px] lg:text-[32px] text-center md:text-left text-dark-blue font-medium'>
              Share your bookmarks
            </h3>
            <p className='text-[15px]  lg:text-[18px] text-center md:text-left  text-grayish-blue py-3'>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <div className='flex justify-center md:justify-start items-center'>
              <button className='bg-soft-blue text-white border border-white text-[14px] shadow-customButton font-medium py-3 px-5 rounded-md hover:text-soft-blue hover:bg-white hover:border-soft-blue transition-all duration-300'>
                More Info
              </button>
            </div>
          </div>
        </div>
      )}
      <section className='mt-24 w-[90%] mx-auto'>
        <div className='md:max-w-[540px] md:mx-auto'>
          <h4 className='text-[24px] md:text-[32px] text-center text-dark-blue font-medium'>
            Download the extension
          </h4>
          <p className='text-center text-grayish-blue md:text-[18px]  py-4 md:py-6'>
            We&apos;ve got more browsers in the pipeline. Please do let us know
            if you&apos;ve got a favourite you&apos;d like us to prioritize.
          </p>
        </div>
        <div className='flex flex-col  items-center md:flex-row md:justify-center md:h-[450px]  gap-10 md:gap-5'>
          <div className='w-[280px] h-[370px] flex flex-col pt-12 pb-6 justify-between items-center md:self-start shadow-customCard rounded-[15px] bg-white'>
            <img src='/logo-chrome.svg' alt='' />
            <div className='mt-5'>
              <h5 className='text-dark-blue text-xl font-medium'>
                Add to Chrome
              </h5>
              <p className='text-grayish-blue text-[15px]'>
                Minimum version 62
              </p>
            </div>
            <div className='bg-[url(/bg-dots.svg)] mt-10 h-4 w-full bg-no-repeat'></div>
            <button className='text-[14px] font-medium bg-soft-blue border border-white shadow-customButton text-white  py-3 px-5 rounded-md hover:text-soft-blue hover:bg-white hover:border-soft-blue transition-all duration-300'>
              Add & Install Extension
            </button>
          </div>
          <div className='w-[280px] h-[370px] flex flex-col pt-12 pb-6 justify-between  items-center md:self-center  rounded-[15px] shadow-customCard bg-white'>
            <img src='/logo-firefox.svg' alt='' />
            <div className='mt-5'>
              <h5 className='text-dark-blue text-xl font-medium'>
                Add to Firefox
              </h5>
              <p className='text-grayish-blue text-[15px]'>
                Minimum version 55
              </p>
            </div>
            <div className='bg-[url(/bg-dots.svg)]  mt-10 h-4 w-full bg-no-repeat'></div>
            <button className='text-[14px] font-medium bg-soft-blue border border-white shadow-customButton text-white py-3 px-5 rounded-md hover:text-soft-blue hover:bg-white hover:border-soft-blue transition-all duration-300'>
              Add & Install Extension
            </button>
          </div>
          <div className='w-[280px] h-[370px] flex flex-col pt-12 pb-6 justify-between  items-center md:self-end rounded-[15px] shadow-customCard bg-white'>
            <img src='/logo-opera.svg' alt='' />
            <div className='mt-5'>
              <h5 className='text-dark-blue text-xl font-medium'>
                Add to Opera
              </h5>
              <p className='text-grayish-blue text-[15px]'>
                Minimum version 46
              </p>
            </div>
            <div className='bg-[url(/bg-dots.svg)]  mt-10 h-4 w-full bg-no-repeat'></div>
            <button className='text-[14px] font-medium bg-soft-blue border border-white shadow-customButton text-white  py-3 px-5 rounded-md hover:text-soft-blue hover:bg-white hover:border-soft-blue transition-all duration-300'>
              Add & Install Extension
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
