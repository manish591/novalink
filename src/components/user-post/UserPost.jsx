import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  CreatePostModal,
  addToBookmark,
  removeFromBookmark,
  likePost,
  dislikePost,
} from 'features';
import { Link } from 'react-router-dom';
import { PostActions } from './components/PostActions';
import { MobileCommentsSection } from './components/MobileCommentsSection';

const UserPost = ({ post, setIsOpenPostModal }) => {
  const { _id, mediaURL, username, likes, comments, content } = post;
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [openPostActions, setOpenPostActions] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const allUsersData = useSelector((state) => state.users.usersData);
  const token = useSelector((state) => state.authentication.token);
  const myBookmarks = useSelector((state) => state.authentication.bookmarks);
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      const findItem = allUsersData.filter(
        (item) => item.username === username,
      );
      setUserDetails(findItem[0]);
    }
  }, [allUsersData]);

  return (
    <>
      <div className="grid gap-2 break-inside-avoid mb-10 bg-[#FFFFFF] border border-[#EFEFEF] py-4 rounded-[35px] shadow-">
        <section className="flex justify-between items-center px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Link
              to={`/profile/${username}`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full inline-block">
              <img
                src={userDetails?.avatarUrl}
                alt="avatar"
                className="min-w-full rounded-full"
              />
            </Link>
            <div>
              <Link to={`/profile/${username}`}>
                <h3 className="font-semibold text-sm sm:text-base">
                  {username}
                </h3>
              </Link>
              <p className="text-xs sm:text-sm">Allenton, New Mexico</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setOpenPostActions((opa) => !opa);
            }}>
            <span className="material-icons-outlined">more_horiz</span>
          </button>
        </section>
        <section className="relative rounded-xl mt-1">
          <div className="rounded-xl px-2">
            <img
              src={mediaURL ?? ''}
              alt="post"
              className="min-w-full rounded-2xl object-cover lg:aspect-video"
            />
          </div>
          <div className="w-full px-4">
            <div className="flex items-center justify-between py-2.5">
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
                  <span className="material-icons-outlined text-xl">
                    ios_share
                  </span>
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
                    <span className="material-icons-outlined text-xl">
                      bookmark
                    </span>
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
          <section className="text-sm sm:text-base px-4">
            <p>
              {content && showMoreContent
                ? content.slice(0)
                : content.slice(0, 100)}
              &nbsp;
              {!showMoreContent ? (
                <button
                  type="button"
                  className="text-[blue] text-xs"
                  onClick={() => setShowMoreContent(true)}>
                  See more
                </button>
              ) : (
                <button
                  type="button"
                  className="text-[blue] text-xs"
                  onClick={() => setShowMoreContent(false)}>
                  See less
                </button>
              )}
            </p>
          </section>
        </section>
        {openPostActions ? (
          <PostActions
            setOpenPostActions={setOpenPostActions}
            username={username}
            id={_id}
            isEditPost={isEditPost}
            setIsEditPost={setIsEditPost}
          />
        ) : null}
      </div>
      {isEditPost && (
        <CreatePostModal
          setIsOpenPostModal={setIsOpenPostModal}
          editPostContent={post}
          isEditPost={isEditPost}
          setIsEditPost={setIsEditPost}
        />
      )}
      {showComments && (
        <MobileCommentsSection setShowComments={setShowComments} postId={_id} />
      )}
    </>
  );
};

UserPost.propTypes = {
  post: PropTypes.object.isRequired,
  setIsOpenPostModal: PropTypes.func.isRequired,
};

export { UserPost };
