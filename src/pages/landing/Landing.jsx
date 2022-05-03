import React from 'react';
import { Signup } from 'components';

const LandingPage = () => {
  return (
    <div>
      <section className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:py-28 lg:w-8/12 lg:m-auto lg:items-center">
        <div>
          <h1 className="font-bold text-4xl text-center text-[#2F394D] font-['Pacifico'] lg:text-left lg:text-5xl">
            novalink
          </h1>
          <h3 className="hidden lg:block text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            dolore, consectetur hic omnis nisi nostrum.
          </h3>
        </div>
        <div>
          <Signup />
        </div>
      </section>
    </div>
  );
};

export { LandingPage };
