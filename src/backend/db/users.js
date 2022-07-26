import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: '83d92b58-5c52-453f-b865-04638127e76f',
    name: 'Sakshi Sharma',
    username: 'shakshi123',
    password: 'shakshi456212sha',
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
    _id: 'a748aa66-66f7-4756-8745-230e29ea75a4',
    name: 'Manish Devrani',
    username: 'manish18',
    password: 'manishdevrani123456',
    bio: 'Never regret anything that made you smile.',
    bookmarks: [],
    avatarUrl: 'https://i.pravatar.cc/150?img=20',
    website: 'https://manish-dev.netlify.app/',
    coverImg:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1653006259/priscilla-du-preez-GobsYxc_H_0-unsplash_1_gcgcve.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '75d82589-705b-4030-8b5f-888c5b200207',
    name: 'Akriti rawat',
    username: 'aku2356',
    password: 'akritirawat123456',
    bio: 'The big lesson in life, baby, is never be scared of anyone or anything.',
    bookmarks: [],
    avatarUrl: 'https://i.pravatar.cc/150?img=25',
    website: 'https://manish-dev.netlify.app/',
    coverImg:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1653006259/priscilla-du-preez-GobsYxc_H_0-unsplash_1_gcgcve.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '8c0a6de4-6c40-4cb4-bb74-982870c93a08f',
    name: 'Anushka Sharma',
    username: 'sharmaAnu123',
    password: 'anushkaSharma123456',
    bio: 'In order to write about life first you must live it.',
    bookmarks: [],
    avatarUrl: 'https://i.pravatar.cc/150?img=39',
    website: 'https://manish-dev.netlify.app/',
    coverImg:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1653006259/priscilla-du-preez-GobsYxc_H_0-unsplash_1_gcgcve.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '8eb020d1-b155-4157-b460-03bbac8d739a',
    name: 'Kanak Rawat',
    username: 'kanak20',
    password: 'rawatkanak123456',
    bio: 'You only live once, but if you do it right, once is enough.',
    bookmarks: [],
    avatarUrl: 'https://i.pravatar.cc/150?img=35',
    website: 'https://manish-dev.netlify.app/',
    coverImg:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1653006259/priscilla-du-preez-GobsYxc_H_0-unsplash_1_gcgcve.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '44584e89-c322-43d3-b499-1670b66960f1',
    name: 'Prachi Raulela',
    username: 'prachiraulela04',
    password: 'prachirautela123456',
    bio: "Life is what happens when you're busy making other plans.",
    bookmarks: [],
    avatarUrl: 'https://i.pravatar.cc/150?img=36',
    website: 'https://manish-dev.netlify.app/',
    coverImg:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1653006259/priscilla-du-preez-GobsYxc_H_0-unsplash_1_gcgcve.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
