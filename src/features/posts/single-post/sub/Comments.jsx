import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getPostComments, deletePostComment } from 'features/posts/postsSlice';
import { API_STATE } from 'common';
import { Loader } from 'components';

const Comments = ({
  postId,
  setIsEditComment,
  setCommentText,
  setCommentId,
}) => {
  const commentsData = useSelector((state) => state.post.commentData);
  const commentsStatus = useSelector((state) => state.post.commentStatus);
  const allPosts = useSelector((state) => state.post.postData);
  const currentUserPost = allPosts.find((item) => item._id === postId);
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostComments({ postId }));
  }, [allPosts]);

  return (
    <div>
      <section className="grid grid-cols-[auto_minmax(0,_1fr)] gap-3 border-b pb-3">
        <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full inline-block translate-y-1">
          <img
            src="https://i.pravatar.cc/150?img=26"
            alt="avatar"
            className="min-w-full rounded-full"
          />
        </div>
        <div>
          <p className="text-sm">
            <span className="text-sm font-bold">
              {currentUserPost?.username}
            </span>
            &nbsp;
            {currentUserPost?.content}
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-8 my-8 pb-16">
        {commentsStatus === API_STATE.LOADING && <Loader />}
        {commentsStatus === API_STATE.SUCCESS && commentsData.length > 0 ? (
          <>
            {commentsData.map((item) => {
              return (
                <section key={item._id}>
                  <div className="grid grid-cols-[auto_minmax(0,_1fr)] gap-3">
                    <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full inline-block z-[-1] sm:z-[1]">
                      <img
                        src="https://i.pravatar.cc/150?img=4"
                        alt="avatar"
                        className="max-w-full rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="text-sm font-bold">
                          {item.username}
                        </span>
                        &nbsp; {item.text}
                      </p>
                      {currentUser.username === item.username ? (
                        <div className="justify-start flex gap-3 mt-2">
                          <button
                            type="button"
                            className="text-[0.625rem]"
                            onClick={() => {
                              setCommentText(item.text);
                              setIsEditComment((ec) => !ec);
                              setCommentId(item._id);
                            }}>
                            Edit
                          </button>
                          <button
                            type="button"
                            className="text-[0.625rem]"
                            onClick={() => {
                              dispatch(
                                deletePostComment({
                                  postId,
                                  commentId: item._id,
                                  token,
                                }),
                              );
                            }}>
                            Delete
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </section>
              );
            })}
          </>
        ) : (
          <h1>No comments yet!</h1>
        )}
      </div>
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  setIsEditComment: PropTypes.func.isRequired,
  setCommentText: PropTypes.func.isRequired,
  setCommentId: PropTypes.func.isRequired,
};

export { Comments };
