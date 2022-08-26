import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CreatePostModal } from 'features';
import { Link } from 'react-router-dom';
import { PostActions } from './components/PostActions';
import { MobileCommentsSection } from './components/MobileCommentsSection';
import { LikedBy } from './components/LikedBy';
import { UserActions } from './components/UserActions';
import { Caption } from './components/Caption';

const UserPost = ({ post, setIsOpenPostModal }) => {
  const { _id, mediaURL, username, likes, comments, content, createdAt } = post;
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [openPostActions, setOpenPostActions] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const allUsersData = useSelector((state) => state.users.usersData);

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
              className="min-w-full rounded-2xl object-cover"
            />
          </div>
          <div className="px-4">
            <UserActions
              comments={comments}
              likes={likes}
              setShowComments={setShowComments}
              _id={_id}
            />
          </div>
          <div className="px-4">
            <LikedBy likes={likes} />
          </div>
          <div className="px-4">
            <Caption
              content={content}
              showMoreContent={showMoreContent}
              setShowMoreContent={setShowMoreContent}
              createdAt={createdAt}
            />
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
      {showComments && (
        <MobileCommentsSection setShowComments={setShowComments} postId={_id} />
      )}
    </>
  );
};

UserPost.propTypes = {
  post: PropTypes.object.isRequired,
  setIsOpenPostModal: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export { UserPost };
