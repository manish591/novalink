import React from 'react';
import PropTypes from 'prop-types';

const getMonthName = (index) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[index];
};

const getDayName = (index) => {
  const weeksName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return weeksName[index];
};

const getFullDate = (date) => {
  const d = new Date(date);
  return `${getDayName(d.getDay())}, ${d.getDate()} ${getMonthName(
    d.getMonth(),
  )} ${d.getFullYear()}`;
};

const PostedOn = ({ createdAt }) => {
  return (
    <div className="text-sm opacity-80 mt-2">
      <p>{getFullDate(createdAt)}</p>
    </div>
  );
};

PostedOn.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export { PostedOn };
