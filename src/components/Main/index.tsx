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
      <div className='w-[90%] mx-auto'>
        <h2 className='text-center text-dark-blue text-[24px] font-medium '>
          Features
        </h2>
        <p className='text-grayish-blue text-center text-[15px] py-4'>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className='w-[90%] mx-auto'>
        <div className=' text-grayish-blue flex flex-col  items-stretch justify-center border-t-2 border-b-2 border-light-blue '>
          <button onClick={handleButton1Click} className=''>
            Simple Bookmarking
          </button>
          <button
            onClick={handleButton2Click}
            className='border-t-2 border-w-full border-light-blue'
          >
            Speedy Searching
          </button>
          <button
            onClick={handleButton3Click}
            className='border-t-2 border-light-blue'
          >
            Easy Sharing
          </button>
        </div>
      </div>

      {activeButton === 1 && (
        <div
          className={`transition-opacity duration-300 ease-in-out relative  ${
            activeButton === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='relative flex justify-center items-center mt-10'>
            <div className="after:absolute after:top-1/4 after:left-0 after:w-[80%] after:h-[11.5rem] after:content-[''] after:bg-soft-blue after:bg-[length:200%] after:rounded-r-[316px] after:z-[-1000]"></div>
            <img
              src='/illustration-features-tab-1.svg'
              alt=''
              className='w-[311px]'
            />
          </div>
          <div className='mt-20 w-[90%] mx-auto'>
            <h3 className='text-[24px] text-center text-dark-blue font-medium'>
              Bookmark in one click
            </h3>
            <p className='text-[15px] text-center text-grayish-blue py-3'>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <div className='flex justify-center items-center'>
              <button className='bg-soft-blue text-white text-[14px] font-medium py-3 px-5 rounded-md'>
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
          }`}
        >
          <div className='flex justify-center items-center mt-10'>
            <div className="after:absolute after:top-1/4 after:left-0 after:w-[80%] after:h-[11.5rem] after:content-[''] after:bg-soft-blue after:bg-[length:200%] after:rounded-r-[316px] after:z-[-1000]"></div>
            <img
              src='/illustration-features-tab-2.svg'
              alt=''
              className='w-[311px]'
            />
          </div>
          <div className='mt-20 w-[90%] mx-auto'>
            <h3 className='text-[24px] text-center text-dark-blue font-medium'>
              Intelligent search
            </h3>
            <p className='text-[15px] text-center text-grayish-blue py-3'>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <div className='flex justify-center items-center'>
              <button className='bg-soft-blue text-white text-[14px] font-medium py-3 px-5 rounded-md'>
                More Info
              </button>
            </div>
          </div>
        </div>
      )}
      {activeButton === 3 && (
        <div
          className={`transition-opacity duration-300 ease-in-out relative ${
            activeButton === 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className=' flex justify-center items-center mt-10'>
            <div className="after:absolute after:top-1/4 after:left-0 after:w-[80%] after:h-[11.5rem] after:content-[''] after:bg-soft-blue after:bg-[length:200%] after:rounded-r-[316px] after:z-[-1000]"></div>
            <img
              src='/illustration-features-tab-3.svg'
              alt=''
              className='w-[311px]'
            />
          </div>
          <div className='mt-20 w-[90%] mx-auto '>
            <h3 className='text-[24px] text-center text-dark-blue font-medium'>
              Share your bookmarks
            </h3>
            <p className='text-[15px] text-center text-grayish-blue py-3'>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <div className='flex justify-center items-center'>
              <button className='bg-soft-blue text-white text-[14px] shadow-customButton font-medium py-3 px-5 rounded-md'>
                More Info
              </button>
            </div>
          </div>
        </div>
      )}
      <section className='mt-24 w-[90%] mx-auto'>
        <h4 className='text-[24px] text-center text-dark-blue font-medium'>
          Download the extension
        </h4>
        <p className='text-center text-grayish-blue'>
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
        <div className='flex flex-col items-center gap-10'>
          <div className='w-[280px] h-[370px] flex flex-col pt-12 pb-6 justify-between items-center shadow-customCard rounded-[15px] bg-white'>
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
            <button className='text-[14px] font-medium bg-soft-blue shadow-customButton text-white  py-3 px-5 rounded-md'>
              Add & Install Extension
            </button>
          </div>
          <div className='w-[280px] h-[370px] flex flex-col pt-12 pb-6 justify-between  items-center rounded-[15px] shadow-customCard bg-white'>
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
            <button className='text-[14px] font-medium bg-soft-blue shadow-customButton text-white py-3 px-5 rounded-md'>
              Add & Install Extension
            </button>
          </div>
          <div className='w-[280px] h-[370px] flex flex-col pt-12 pb-6 justify-between  items-center rounded-[15px] shadow-customCard bg-white'>
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
            <button className='text-[14px] font-medium bg-soft-blue shadow-customButton text-white  py-3 px-5 rounded-md'>
              Add & Install Extension
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
