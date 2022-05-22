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
      'https://images.unsplash.com/photo-1652267389101-553eced76024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: 'adarshbalika',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    mediaURL:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: 'shubhamsoni',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'xhzTkUi2Nt',
    content: 'Nice Weather Today!!',
    mediaURL:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
    username: 'manishdevrani',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
    username: 'manishdevrani',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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
    username: 'manishdevrani',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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
    username: 'manishdevrani',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
    username: 'manishdevrani',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://images.unsplash.com/photo-1652207167893-373e9c31b7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
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
    username: 'manishdevrani',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lorem est. Proin ac nulla eget nisl ullamcorper ultricies ut sed dolor. In semper, quam vel auctor blandit, sem felis tincidunt erat, et ultrices tortor orci ut quam.',
    mediaURL:
      'https://images.unsplash.com/photo-1652267389101-553eced76024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
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
    username: 'manishdevrani',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
