import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from 'components';

const LandingPage = () => {
  return (
    <div className="grid grid-rows-[max-content_auto_max-content] gap-36">
      <header className="py-3 bg-gray-100">
        <nav>
          <div className="flex items-center w-11/12 m-auto max-w-[1200px]">
            <ul>
              <li>
                <h1 className='text-3xl sm:text-3xl font-["Pacifico"]'>
                  novalink
                </h1>
              </li>
            </ul>
            <ul className="items-center m-auto hidden sm:flex gap-4">
              <li>
                <Link to="/" className="font-bold">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/manish591"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold">
                  Github
                </a>
              </li>
            </ul>
            <ul className="ml-auto sm:ml-0">
              <li>
                <Link
                  to="/login"
                  type="button"
                  className="py-2 px-4 bg-black text-white rounded-xl inline-block">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <section className="mt-20 lg:m-0">
          <div className="w-11/12 m-auto max-w-[1200px] grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] justify-items-center items-center">
            <div className="text-center max-w-[60ch] lg:text-left lg:max-w-full">
              <h1 className="text-4xl sm:text-5xl leading-relaxed">
                Join India&apos;s Best Food Community And Find Your Next
                Favorite Meal
              </h1>
              <Link
                to="/login"
                className="px-7 py-3 bg-black text-white mt-7 inline-block rounded-md shadow-xl">
                Get Started
              </Link>
            </div>
            <img
              src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1654767705/photo-1546069901-ba9599a7e63c-removebg-preview_lqdgey.png"
              alt=""
              className="max-w-full"
            />
          </div>
        </section>
      </header>
      <main>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-16">
          <section className="bg-gray-100">
            <section className="w-11/12 m-auto max-w-[1200px] py-14 px-2 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center gap-10 justo=ify-items-center text-center">
              <div>
                <img
                  src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1654772625/screenshot-novalink.netlify.app-2022.06.09-16_32_43_fzmzea.png"
                  alt="novalink explore page"
                  className="max-w-full"
                />
              </div>
              <div className="sm:max-w-[50ch] m-auto lg:max-w-full lg:m-0">
                <h1 className="text-4xl">
                  Explore Variety Of recipes on Novalink
                </h1>
                <p className="mt-4">
                  Find Recipes, images and videos curated by the people. Like
                  these recipes and share with your friends and family.
                </p>
              </div>
            </section>
          </section>
          <section className="bg-gray-100">
            <section className="w-11/12 m-auto max-w-[1200px] py-14 px-2 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center gap-10 justo=ify-items-center text-center">
              <div className="sm:max-w-[50ch] m-auto lg:max-w-full lg:m-0">
                <h1 className="text-4xl">
                  Share your favorite dishes and recipes at novalink
                </h1>
                <p className="mt-4">
                  Share your recipes with the world and engage with the people.
                </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1654779164/screenshot-novalink.netlify.app-2022.06.09-18_22_07_mbk1uz.png"
                  alt="novalink explore page"
                  className="max-w-full"
                />
              </div>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { LandingPage };
