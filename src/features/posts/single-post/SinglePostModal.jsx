import React, { useState } from 'react';
import { ActivityBar, Navbar, Sidebar } from 'components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserActions } from 'components/user-post/components/UserActions';
import { MobileCommentsSection } from 'components/user-post/components/MobileCommentsSection';
import { LikedBy } from 'components/user-post/components/LikedBy';
import { Caption } from 'components/user-post/components/Caption';
import { Comments } from './sub/Comments';
import { AddCommentsForm } from './sub/AddCommentForm';

const SinglePostModal = () => {
  const [commentText, setCommentText] = useState('');
  const [isEditComment, setIsEditComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [commentId, setCommentId] = useState('');
  const { postId } = useParams();
  const allPosts = useSelector((state) => state.post.postData);
  const currentUserPost = allPosts.find((item) => item._id === postId);

  return (
    <div className="lg:grid lg:grid-cols-[80px_minmax(0,1fr)_350px]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[white] lg:col-start-2 border-r border-[#EFEFEF]">
        <section className="sm:hidden shadow py-3 sm:py-4 sticky top-0 bg-[white]">
          <div className="w-11/12 sm:w-[95%] m-auto flex items-center">
            <button type="button" className="flex items-center justify-center">
              <span className="material-icons-outlined">west</span>
            </button>
            <h1 className="text-xl font-bold m-auto">Post</h1>
          </div>
        </section>
        <section className="hidden sm:block sticky top-0 z-[20]">
          <Navbar />
        </section>
        <section className="sm:w-11/12 m-auto mt-4 mb-8 sm:mb-0 grid grid-cols-1 sm:grid-cols-[60%_minmax(0,1fr)] sm:border lg:mb-8 relative">
          <div className="sm:grid sm:grid-rows-[auto_minmax(0,1fr)_auto]">
            <section className="flex justify-between items-center sm:py-3 px-2 lg:px-4 sm:border-b">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full inline-block">
                  <img
                    src="https://i.pravatar.cc/150?img=36"
                    alt="avatar"
                    className="min-w-full rounded-full"
                  />
                </div>
                <div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      {currentUserPost?.username}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm">Allenton, New Mexico</p>
                </div>
              </div>
              <button type="button">
                <span className="material-icons-outlined">more_horiz</span>
              </button>
            </section>
            <section className="hidden sm:block sm:px-2 lg:px-4 py-2 max-h-[400px] overflow-hidden overflow-y-auto">
              <Comments
                postId={postId}
                setIsEditComment={setIsEditComment}
                setCommentText={setCommentText}
                setCommentId={setCommentId}
              />
            </section>
            <section className="absolute top-[100%] left-0 w-full sm:static sm:border-t sm:pt-2">
              <div className="pb-2 px-2 lg:px-5 w-full">
                <UserActions
                  comments={currentUserPost?.comments}
                  likes={currentUserPost?.likes}
                  setShowComments={setShowComments}
                  _id={postId}
                />
              </div>
              <AddCommentsForm
                commentText={commentText}
                isEditComment={isEditComment}
                commentId={commentId}
                postId={postId}
                setIsEditComment={setIsEditComment}
                setCommentText={setCommentText}
                setCommentId={setCommentId}
              />
              <div className="sm:hidden px-2">
                <LikedBy likes={currentUserPost?.likes} />
                <Caption
                  content={currentUserPost?.content}
                  showMoreContent={showMoreContent}
                  setShowMoreContent={setShowMoreContent}
                  createdAt={currentUserPost?.createdAt}
                />
              </div>
            </section>
          </div>
          <section className="relative rounded-xl shadow-md mt-4 sm:mt-0 sm:col-start-1 sm:col-end-2 sm:row-start-1">
            <div className="sm:rounded-none h-full">
              <img
                src={currentUserPost.mediaURL}
                alt="post"
                className="min-w-full h-full sm:rounded-none object-cover lg:aspect-video"
              />
            </div>
          </section>
        </section>
      </div>
      <ActivityBar />
      {showComments && (
        <MobileCommentsSection
          setShowComments={setShowComments}
          postId={postId}
        />
      )}
    </div>
  );
};

export { SinglePostModal };
