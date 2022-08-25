import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UserList } from 'features/profile/components/user-list/UserList';

const LikedBy = ({ likes }) => {
  const [showUserList, setShowUserList] = useState({
    type: 'Liked By',
    isOpen: false,
  });
  const { likeCount, likedBy } = likes;
  return (
    <section className="w-full px-4 py-2">
      {likeCount < 1 ? (
        <p className="text-base">
          Be the first one to <strong>Like this</strong>
        </p>
      ) : (
        <div className="text-base">
          <p>
            <span>Liked by&nbsp;</span>
            <strong className="opacity-80">
              <Link to={`/profile/${likedBy[0].username}`}>
                {likedBy[0].username}
              </Link>
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  setShowUserList({ ...showUserList, isOpen: true });
                }}
                onKeyUp={() => {
                  setShowUserList({ ...showUserList, isOpen: true });
                }}>
                {likeCount - 1 > 0 && ` and ${likeCount - 1} others`}
              </span>
            </strong>
          </p>
        </div>
      )}
      {showUserList.isOpen && (
        <UserList
          showUserList={showUserList}
          setShowUserList={setShowUserList}
          userData={likedBy}
        />
      )}
    </section>
  );
};

LikedBy.propTypes = {
  likes: PropTypes.object.isRequired,
};

export { LikedBy };
