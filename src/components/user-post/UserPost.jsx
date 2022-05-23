import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CreatePostModal, addToBookmark, removeFromBookmark } from 'features';
import { PostActions } from './components/PostActions';

const UserPost = ({ post, setIsOpenPostModal }) => {
  const { _id, mediaURL, username, likes, comments, content } = post;
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [openPostActions, setOpenPostActions] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);
  const allUsersData = useSelector((state) => state.users.usersData);
  const token = useSelector((state) => state.authentication.token);
  const myBookmarks = useSelector((state) => state.authentication.bookmarks);
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
      <div className="grid gap-2 break-inside-avoid mb-10">
        <section className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
              <img
                src={userDetails?.avatarUrl}
                alt="avatar"
                className="min-w-full rounded-full"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base">{username}</h3>
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
        <section className="text-sm sm:text-base">
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
        <section className="relative rounded-xl drop-shadow-xl">
          <div className="rounded-xl">
            <img
              src={mediaURL ?? ''}
              alt="post"
              className="min-w-full rounded-xl object-cover lg:aspect-video"
            />
          </div>
          <div className="absolute w-full bg-white bottom-0 left-0 rounded-tl-[2rem] rounded-b-xl">
            <div className="flex items-center justify-between w-11/12 m-auto py-2.5 sm:p-3 text-gray-600">
              <section className="flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-icons-outlined text-lg">
                    favorite_border
                  </span>
                  <p className="text-[0.625rem] sm:text-sm">
                    {likes?.likeCount}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-icons-outlined text-lg">chat</span>
                  <p className="text-[0.625rem] sm:text-sm">
                    {comments ? comments.length : 0}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-icons-outlined text-lg">
                    ios_share
                  </span>
                  <p className="text-[0.625rem] sm:text-sm">7K</p>
                </div>
              </section>
              <section>
                {myBookmarks.some((item) => item === _id) ? (
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(removeFromBookmark({ postId: _id, token }));
                    }}>
                    <span className="material-icons-outlined text-lg">
                      bookmark
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(addToBookmark({ postId: _id, token }));
                    }}>
                    <span className="material-icons-outlined text-lg">
                      bookmark_border
                    </span>
                  </button>
                )}
              </section>
            </div>
          </div>
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
    </>
  );
};

UserPost.propTypes = {
  post: PropTypes.object.isRequired,
  setIsOpenPostModal: PropTypes.func.isRequired,
};

export { UserPost };
