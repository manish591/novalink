import React from 'react';
import PropTypes from 'prop-types';

const BookmarkCard = ({ post }) => {
  return (
    <article key={post.id}>
      <img
        src={post.img}
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
