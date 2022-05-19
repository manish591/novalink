import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    password: 'adarshBalika123',
    bio: 'Be yourself!',
    bookmarks: [],
    avatarUrl:
      'https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp',
    website: 'https://manish-dev.netlify.app/',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
