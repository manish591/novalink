import React from 'react';
import PropTypes from 'prop-types';

const BookmarkCard = ({ post }) => {
  return (
    <article>
      <img
        src={post.mediaURL}
        alt="profile"
        className="min-w-full object-cover aspect-square"
      />
    </article>
  );
};

BookmarkCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export { BookmarkCard };
