import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  likePost,
  dislikePost,
  addToBookmark,
  removeFromBookmark,
} from 'features';
import { Link } from 'react-router-dom';

const UserActions = ({ likes, comments, setShowComments, _id }) => {
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const token = useSelector((state) => state.authentication.token);
  const myBookmarks = useSelector((state) => state.authentication.bookmarks);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between pt-2.5">
        <section className="flex items-center justify-between gap-4 sm:gap-4">
          <div className="flex items-center gap-1">
            {likes.likedBy.some(
              (item) => item.username === currentUser.username,
            ) ? (
              <button
                type="button"
                onClick={() => {
                  dispatch(dislikePost({ postId: _id, token }));
                }}>
                <span className="material-icons-outlined text-xl">
                  favorite
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  dispatch(likePost({ postId: _id, token }));
                }}>
                <span className="material-icons-outlined text-xl">
                  favorite_border
                </span>
              </button>
            )}
            <p className="text-sm sm:text-sm">{likes?.likeCount}</p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 sm:hidden inline-block"
            onClick={() => {
              setShowComments((sc) => !sc);
            }}>
            <span className="material-icons-outlined text-xl">
              chat_bubble_outline
            </span>
            <p className="text-sm sm:text-sm">
              {comments ? comments.length : 0}
            </p>
          </button>
          <Link
            to={`/post/${_id}`}
            className="hidden sm:flex flex items-center gap-2">
            <span className="material-icons-outlined text-xl">
              chat_bubble_outline
            </span>
            <p className="text-sm sm:text-sm">
              {comments ? comments.length : 0}
            </p>
          </Link>
          <div className="flex items-center gap-1">
            <span className="material-icons-outlined text-xl">ios_share</span>
            <p className="text-sm sm:text-sm">7K</p>
          </div>
        </section>
        <section>
          {myBookmarks.some((item) => item === _id) ? (
            <button
              type="button"
              onClick={() => {
                dispatch(removeFromBookmark({ postId: _id, token }));
              }}>
              <span className="material-icons-outlined text-xl">bookmark</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                dispatch(addToBookmark({ postId: _id, token }));
              }}>
              <span className="material-icons-outlined text-xl">
                bookmark_border
              </span>
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

UserActions.propTypes = {
  comments: PropTypes.object.isRequired,
  likes: PropTypes.func.isRequired,
  setShowComments: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};

export { UserActions };
