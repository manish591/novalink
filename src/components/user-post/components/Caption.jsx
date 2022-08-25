import React from 'react';
import PropTypes from 'prop-types';
import { PostedOn } from './PostedOn';

const Caption = ({
  content,
  showMoreContent,
  setShowMoreContent,
  createdAt,
}) => {
  return (
    <section className="text-sm sm:text-base px-4">
      <p>
        {content && showMoreContent ? content.slice(0) : content.slice(0, 100)}
        {!showMoreContent && '...'}&nbsp;
        {!showMoreContent ? (
          <button
            type="button"
            className="text-[black] font-bold text-sm opacity-80"
            onClick={() => setShowMoreContent(true)}>
            (More)
          </button>
        ) : (
          <button
            type="button"
            className="text-[black] font-bold text-sm opacity-80"
            onClick={() => setShowMoreContent(false)}>
            (Less)
          </button>
        )}
      </p>
      <PostedOn createdAt={createdAt} />
    </section>
  );
};

Caption.propTypes = {
  content: PropTypes.string.isRequired,
  showMoreContent: PropTypes.bool.isRequired,
  setShowMoreContent: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export { Caption };
