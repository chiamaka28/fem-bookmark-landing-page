import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img src='/logo-bookmark.svg' alt='' />
      </div>
      <div>
        <img src='/icon-hamburger.svg' alt='' />
      </div>
    </div>
  );
};

export default Navbar;
