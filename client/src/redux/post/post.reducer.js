import { postActionTypes } from './post.action.types';

const INITIAL_STATE = {
  post: null,
  posts: [],
  laoding: true,
  error: {},
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case postActionTypes.POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default postReducer;
