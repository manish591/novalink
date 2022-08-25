import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    mediaURL:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654840009/avkzwweflj1elf5saom3.jpg',
    likes: {
      likeCount: 3,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    comments: [],
    username: 'manish18',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    mediaURL:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654862428/chad-montano-eeqbbemH9-c-unsplash_ld7ysr.webp',
    likes: {
      likeCount: 1,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    comments: [],
    username: 'aku2356',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: 'xhzTkUi2Nt',
    content: 'Nice Weather Today!!',
    mediaURL:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654862598/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash_zqgltf.webp',
    likes: {
      likeCount: 3,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 'okzxcf',
        username: 'aku2356',
        text: 'I agree!! Feels like we should go for outing. What say?',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: 'aku2356',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654862598/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash_zqgltf.webp',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 'okzxcf',
        username: 'janedoe',
        text: 'I agree!! Feels like we should go for outing. What say?',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: 'manish18',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654862798/joseph-gonzalez-fdlZBWIP0aM-unsplash_w2angp.webp',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 'okzxcf',
        username: 'janedoe',
        text: 'I agree!! Feels like we should go for outing. What say?',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: 'sharmaAnu123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654862932/katja-grasinger-4tPjtttythY-unsplash_1_zivdse.webp',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 'okzxcf',
        username: 'sharmaAnu123',
        text: 'I agree!! Feels like we should go for outing. What say?',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: 'manish18',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654862992/anna-pelzer-iecg0mWrnlE-unsplash_zeibay.webp',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 'okzxcf',
        username: 'prachiraulela04',
        text: 'I agree!! Feels like we should go for outing. What say?',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: 'prachiraulela04',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654863079/eiliv-sonas-aceron-DspT8Smoc0k-unsplash_qz2ou2.webp',
    likes: {
      likeCount: 3,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 'okzxcf',
        username: 'prachiraulela04',
        text: 'I agree!! Feels like we should go for outing. What say?',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: 'prachiraulela04',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654863174/tyler-nix-j3FidswVdQk-unsplash_tco6yd.webp',
    likes: {
      likeCount: 1,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 'okzxcf',
        username: 'prachiraulela04',
        text: 'I agree!! Feels like we should go for outing. What say?',
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: 'prachiraulela04',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
