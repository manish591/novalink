import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 text-center sm:text-left">
      <div className="w-11/12 m-auto max-w-[1200px]">
        <p className="font-['Pacifico'] text-3xl font-bold">novalink</p>
        <ul className="flex flex-col mt-5 gap-4 sm:flex-row">
          <li className="text-xl font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-bold">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-xl font-bold">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <p className="m-auto sm:m-0 mt-5 max-w-[35ch] sm:mt-5">
          Novalink is the india&apos;s best food community ever. You can share
          your food recipes to the world through novalink.
        </p>
        <p className="mt-5">Copyright 2022. All Rights Reserved</p>
        <ul className="mt-5 flex justify-center gap-4 sm:justify-end">
          <li className="footer__items">
            <a
              href="https://github.com/manish591"
              target="_black"
              rel="noreferrer">
              Github
            </a>
          </li>
          <li className="footer__items">
            <a
              href="https://twitter.com/manishdevrani77"
              target="_black"
              rel="noreferrer">
              Twitter
            </a>
          </li>
          <li className="footer__items">
            <a
              href="https://www.linkedin.com/in/manishdevrani77/"
              target="_black"
              rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
