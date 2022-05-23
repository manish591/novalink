import React from 'react';
import PropTypes from 'prop-types';

const PostActions = ({ setOpenPostActions }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(25,25,25,50%)] z-[30]">
      <div className="grid grid-cols-1 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-max bg-[white] rounded-md">
        <button type="button" className="py-2.5 px-20 border-b text-red-600">
          Delete
        </button>
        <button type="button" className="py-2.5 px-20 border-b">
          Edit
        </button>
        <button type="button" className="py-2.5 px-20 border-b">
          Go To Post
        </button>
        <button type="button" className="py-2.5 px-20 border-b">
          Copy Link
        </button>
        <button
          type="button"
          className="py-2.5 px-20 border-b last:border-none"
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
