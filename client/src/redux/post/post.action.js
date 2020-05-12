import { postActionTypes } from './post.action.types';
import axios from 'axios';
import { setAlert } from '../alert/alert.action';

//Get All Posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: postActionTypes.GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: postActionTypes.POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Likes
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: postActionTypes.UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: postActionTypes.POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Remove Likes
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: postActionTypes.UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: postActionTypes.POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);
    dispatch({
      type: postActionTypes.DELETE_POST,
      payload: id
    });
    dispatch(setAlert('Post removed', 'success'));
  } catch (err) {
    dispatch({
      type: postActionTypes.POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
