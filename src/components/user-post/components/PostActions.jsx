import React from 'react';
import PropTypes from 'prop-types';

const PostActions = ({ setOpenPostActions }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(25,25,25,50%)] z-[30]">
      <div className="grid grid-cols-1 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-max bg-[white] rounded-xl">
        <button
          type="button"
          className="py-2.5 px-20 lg:px-32 lg:py-3.5 border-b text-red-600 hover:bg-gray-100 first:rounded-t-xl">
          Delete
        </button>
        <button
          type="button"
          className="py-2.5 px-20 lg:px-32 lg:py-3.5 border-b hover:bg-gray-100">
          Edit
        </button>
        <button
          type="button"
          className="py-2.5 px-20 lg:px-32 lg:py-3.5 border-b hover:bg-gray-100">
          Go To Post
        </button>
        <button
          type="button"
          className="py-2.5 px-20 lg:px-32 lg:py-3.5 border-b hover:bg-gray-100">
          Copy Link
        </button>
        <button
          type="button"
          className="py-2.5 px-20 lg:px-32 lg:py-3.5 border-b last:border-none last:rounded-b-xl hover:bg-gray-100"
          onClick={() => {
            setOpenPostActions((opa) => !opa);
          }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

PostActions.propTypes = {
  setOpenPostActions: PropTypes.func.isRequired,
};

export { PostActions };
