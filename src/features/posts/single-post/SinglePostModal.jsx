import React, { useState } from 'react';
import { ActivityBar, Navbar, Sidebar } from 'components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPostComment, editPostComment } from 'features';
import { Comments } from './sub/Comments';
import { PostOptions } from './sub/PostOption';

const SinglePostModal = () => {
  const [commentText, setCommentText] = useState('');
  const [isEditComment, setIsEditComment] = useState(false);
  const [commentId, setCommentId] = useState('');
  const { postId } = useParams();
  const allPosts = useSelector((state) => state.post.postData);
  const currentUserPost = allPosts.find((item) => item._id === postId);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  const handleAddMyComment = (e) => {
    e.preventDefault();
    dispatch(addPostComment({ postId, commentData: commentText, token }));
    setCommentText('');
  };

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
        <section className="w-11/12 md:w-[80%] m-auto mt-4 mb-8 sm:mb-0 grid grid-cols-1 sm:grid-cols-[60%_minmax(0,1fr)] sm:border lg:mb-8">
          <div className="sm:grid sm:grid-rows-[auto_minmax(0,1fr)_auto] sm:gap-4">
            <section className="flex justify-between items-center sm:py-3 sm:px-2 lg:px-4 sm:border-b">
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
            <section className="sm:hidden text-sm sm:text-base mt-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt aperiam provident dolor.
              </p>
            </section>
            <section className="hidden sm:block sm:px-2 lg:px-4 max-h-[520px] overflow-hidden overflow-y-auto mb-10">
              <Comments
                postId={postId}
                setIsEditComment={setIsEditComment}
                setCommentText={setCommentText}
                setCommentId={setCommentId}
              />
            </section>
            <section className="hidden sm:block">
              <form
                className="m-auto py-2 px-3 lg:px-4"
                onSubmit={handleAddMyComment}>
                <section className="border-2 border-[#999999] rounded-full bg-[white] flex items-center gap-2 py-2 px-2">
                  <section className="flex-1">
                    <label htmlFor="comment" className="sr-only">
                      Comment
                    </label>
                    <input
                      type="text"
                      id="comment"
                      className="w-full outline-none"
                      placeholder="Write a comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      required
                    />
                  </section>
                  <section>
                    {isEditComment ? (
                      <button
                        type="button"
                        className="text-xs text-[hotpink]"
                        onClick={() => {
                          dispatch(
                            editPostComment({
                              postId,
                              commentId,
                              token,
                              commentData: commentText,
                            }),
                          );
                          setCommentId('');
                          setCommentText('');
                          setIsEditComment(false);
                        }}>
                        Update
                      </button>
                    ) : (
                      <button type="submit" className="text-xs text-[hotpink]">
                        Post
                      </button>
                    )}
                  </section>
                </section>
              </form>
            </section>
          </div>
          <section className="relative rounded-xl shadow-md mt-2 sm:mt-0 sm:col-start-1 sm:col-end-2 sm:row-start-1">
            <div className="rounded-xl sm:rounded-none h-full">
              <img
                src="https://images.unsplash.com/photo-1648737966274-79aa6f89c440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="post"
                className="min-w-full rounded-xl h-full sm:rounded-none object-cover lg:aspect-video"
              />
            </div>
            <div className="sm:hidden">
              <PostOptions />
            </div>
          </section>
        </section>
      </div>
      <ActivityBar />
    </div>
  );
};

export { SinglePostModal };
