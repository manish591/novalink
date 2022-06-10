import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BookmarkCard = ({ post, postId }) => {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        navigate(`/post/${postId}`);
      }}
      onKeyUp={() => {
        navigate(`/post/${postId}`);
      }}>
      <img
        src={post.mediaURL}
        alt="profile"
        className="min-w-full object-cover aspect-square"
      />
    </div>
  );
};

BookmarkCard.propTypes = {
  post: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

export { BookmarkCard };
