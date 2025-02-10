import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/index';

const Faq = () => {
  return (
    <div className='w-[90%] mx-auto md:max-w-[540px] mt-28'>
      <h3 className='text-[24px] md:text-[32px] text-dark-blue text-center font-medium'>
        Frequently Asked Questions
      </h3>
      <p className='text-grayish-blue text-center text-[15px] md:text-[18px] py-4 md:py-6'>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>What is Bookmark?</AccordionTrigger>
            <AccordionContent>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              How can I request a new browser?
            </AccordionTrigger>
            <AccordionContent>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
            <AccordionContent>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>
              What about other Chromium browsers?
            </AccordionTrigger>
            <AccordionContent>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='flex justify-center items-center mt-6 mb-28'>
        <button className='bg-soft-blue border border-white text-white  text-[14px] shadow-customButton font-medium py-3 px-5 rounded-md hover:text-soft-blue hover:bg-white hover:border-soft-blue transition-all duration-300'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default Faq;
