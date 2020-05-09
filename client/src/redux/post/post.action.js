import { postActionTypes } from './post.action.types';
import axios from 'axios';
// import { setAlert } from '../alert/alert.action';

export const getPosts = () => async (dispatch) => {
  try {
      const res =  await axios.get('/api/posts');
      dispatch({
          type: postActionTypes.GET_POSTS,
          payload: res.data
      })
  } catch (err) {
    dispatch({
      type: postActionTypes.POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
