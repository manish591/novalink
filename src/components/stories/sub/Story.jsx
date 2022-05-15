import React from 'react';
import PropTypes from 'prop-types';

const Story = ({ name, img }) => {
  return (
    <figure className="grid gap-2 last-of-type:mr-2rem relative last:after:content-[''] last:after:absolute last:after:w-[2rem] last:after:h-full last:after:top-0 last:after:right-[-1rem]">
      <picture className="w-[5ch] h-[5ch] sm:w-[6ch] sm:h-[6ch] lg:w-[7ch] lg:h-[7ch] rounded-full inline-block outline outline-[1.6px] outline-offset-2 outline-cyan-500">
        <img
          src={img}
          alt="people"
          className="max-w-full rounded-full aspect-square object-cover"
        />
      </picture>
      <figcaption className="text-center text-xs truncate tracking-tighter">
        {name}
      </figcaption>
    </figure>
  );
};

Story.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export { Story };
