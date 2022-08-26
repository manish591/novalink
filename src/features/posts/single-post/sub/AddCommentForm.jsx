import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addPostComment, editPostComment } from 'features';

const AddCommentsForm = ({
  commentText,
  isEditComment,
  commentId,
  postId,
  setCommentText,
  setIsEditComment,
  setCommentId,
}) => {
  const token = useSelector((state) => state.authentication.token);

  const dispatch = useDispatch();

  const handleAddMyComment = (e) => {
    e.preventDefault();
    dispatch(addPostComment({ postId, commentData: commentText, token }));
    setCommentText('');
  };

  return (
    <section className="hidden sm:block border-t">
      <form className="m-auto py-2 px-3 lg:px-4" onSubmit={handleAddMyComment}>
        <section className="border-2 border-[#999999] rounded-full sm:border-none bg-[white] flex items-center gap-2 py-2 px-2">
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
  );
};

AddCommentsForm.propTypes = {
  commentId: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  isEditComment: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
  setCommentText: PropTypes.func.isRequired,
  setIsEditComment: PropTypes.func.isRequired,
  setCommentId: PropTypes.func.isRequired,
};

export { AddCommentsForm };
