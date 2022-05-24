import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileOptions = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`fixed w-full bottom-0 z-[20] lg:hidden transition-transform duration-300 ${
        !openModal && 'translate-y-full'
      }`}
      style={{ WebkitTapHighlightColor: 'transparent' }}>
      {openModal && (
        <button
          type="button"
          className="fixed inset-0 z-[10] bg-[rgba(25,25,25,20%)]"
          onClick={() => {
            setOpenModal((om) => !om);
          }}>
          &nbsp;
        </button>
      )}
      <ul className="grid gap-3 z-[12] relative pb-6 pt-6 px-3 bg-[white] rounded-t-2xl">
        <li>
          <Link to="/settings" className="flex items-center gap-3">
            <span className="material-icons-outlined text-2xl">settings</span>
            <p className="text-base">Settings</p>
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <span className="material-icons-outlined text-2xl">archive</span>
          <p className="text-base">Archive</p>
        </li>
        <li className="flex items-center gap-3">
          <span className="material-icons-outlined text-2xl">
            bookmark_border
          </span>
          <p className="text-base">Saved</p>
        </li>
        <li className="flex items-center gap-3">
          <span className="material-icons-outlined text-2xl">delete</span>
          <p className="text-base">Recently Deleted</p>
        </li>
      </ul>
    </div>
  );
};

ProfileOptions.propTypes = {
  openModal: propTypes.bool.isRequired,
  setOpenModal: propTypes.func.isRequired,
};

export { ProfileOptions };
