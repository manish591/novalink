import React, { useState } from 'react';
import { Comments, addPostComment, editPostComment } from 'features';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const MobileCommentsSection = ({ setShowComments, postId }) => {
  const [commentText, setCommentText] = useState('');
  const [isEditComment, setIsEditComment] = useState(false);
  const [commentId, setCommentId] = useState('');
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  const handleAddMyComment = (e) => {
    e.preventDefault();
    dispatch(addPostComment({ postId, commentData: commentText, token }));
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 bg-[rgba(25,25,25,50%)] z-[30]">
      <div className="fixed inset-0 sm:w-[95%] lg:w-[800px] sm:m-auto sm:h-max bg-white z-20 grid grid-rows-[auto_minmax(0,_1fr)_auto]">
        <div className="shadow py-3 sm:py-4">
          <section className="w-11/12 sm:w-[95%] m-auto flex items-center">
            <button
              type="button"
              className="flex items-center justify-center"
              onClick={() => {
                setShowComments((sc) => !sc);
              }}>
              <span className="material-icons-outlined">west</span>
            </button>
            <h1 className="text-xl font-bold m-auto">Comments</h1>
          </section>
        </div>
        <section className="w-11/12 m-auto mt-4 overflow-y-auto h-[90vh]">
          <Comments
            postId={postId}
            setIsEditComment={setIsEditComment}
            setCommentText={setCommentText}
            setCommentId={setCommentId}
          />
        </section>
        <section>
          <form
            className="w-11/12 m-auto py-2 z-[20]"
            onSubmit={handleAddMyComment}>
            <section className="border-2 border-[#999999] rounded-full bg-[white] flex items-center gap-2 py-2 px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full inline-block">
                <img
                  src="https://i.pravatar.cc/150?img=26"
                  alt="avatar"
                  className="min-w-full rounded-full"
                />
              </div>
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
    </div>
  );
};

MobileCommentsSection.propTypes = {
  setShowComments: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

export { MobileCommentsSection };
