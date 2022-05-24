import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: '83d92b58-5c52-453f-b865-04638127e76f',
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    password: 'adarshBalika123',
    bio: 'Be yourself!',
    bookmarks: [],
    avatarUrl: 'https://i.pravatar.cc/150?img=23',
    website: 'https://manish-dev.netlify.app/',
    coverImg:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1653006259/priscilla-du-preez-GobsYxc_H_0-unsplash_1_gcgcve.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '83d92b58-5c52-453f-b865-04838127e76f',
    firstName: 'Manish',
    lastName: 'Devrani',
    username: 'manish18',
    password: 'manishdevrani123456',
    bio: 'Never regret anything that made you smile.',
    bookmarks: [],
    avatarUrl: 'https://i.pravatar.cc/150?img=35',
    website: 'https://manish-dev.netlify.app/',
    coverImg:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1653006259/priscilla-du-preez-GobsYxc_H_0-unsplash_1_gcgcve.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
