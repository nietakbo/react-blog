import categoryPathFormat from '../utils/categoryPathFormat';
import shortid from 'shortid';
import { createSelector} from '@reduxjs/toolkit';
//selectors
export const getAllPosts = state => state.posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);
const selectPostCategory = (state, category) => category;
export const getPostsByCategory = createSelector(
  [getAllPosts, selectPostCategory],
  (posts, category) => posts.filter(post => post.category === category.name)
);
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

export const removePost = payload => ({ type: REMOVE_POST, payload });
export const addPost = payload => ({ type: ADD_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
        return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
        return [...statePart, { ...action.payload, id: shortid() }];
    case EDIT_POST:
        return statePart.map(post => post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    default:
      return statePart;
  };
};

export default postsReducer;