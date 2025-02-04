import React from 'react';

const Main = () => {
  return (
    <main>
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div>
        <h4>Simple Bookmarking</h4>
        <h4>Speedy Searching</h4>
        <h4>Easy Sharing</h4>
      </div>
      <div>
        <div>
          <img src='/illustration-features-tab-1.svg' alt='' />
        </div>
        <h3>Bookmark in one click</h3>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button>More Info</button>
      </div>
      <div className='hidden'>
        <div>
          <img src='/illustration-features-tab-2.svg' alt='' />
        </div>
        <h3>Intelligent search</h3>
        <p>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <button>More Info</button>
      </div>
      <div className='hidden'>
        <div>
          <img src='/illustration-features-tab-3.svg' alt='' />
        </div>
        <h3>Share your bookmarks</h3>
        <p>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
        <button>More Info</button>
      </div>
      <section>
        <h4>Download the extension</h4>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
        <div>
          <img src='/logo-chrome.svg' alt='' />
          <h5>Add to Chrome</h5>
          <p>Minimum version 62</p>
          <button>Add & Install Extension</button>
        </div>
        <div>
          <img src='/logo-firefox.svg' alt='' />
          <h5>Add to Firefox</h5>
          <p>Minimum version 55</p>
          <button>Add & Install Extension</button>
        </div>
        <div>
          <img src='/logo-opera.svg' alt='' />
          <h5>Add to Opera</h5>
          <p>Minimum version 46</p>
          <button>Add & Install Extension</button>
        </div>
      </section>
    </main>
  );
};

export default Main;
