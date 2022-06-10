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
      likeCount: 0,
      likedBy: [],
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
      likeCount: 0,
      likedBy: [],
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
      likeCount: 5,
      likedBy: [],
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
      likeCount: 5,
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
      likeCount: 5,
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
      likeCount: 5,
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
      likeCount: 5,
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
      likeCount: 5,
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
      'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654863174/tyler-nix-j3FidswVdQk-unsplash_tco6yd.webp',
    likes: {
      likeCount: 5,
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
];
