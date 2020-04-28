import axios from 'axios';
import { profileActionTypes } from './profile.action.types';

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');
    dispatch({
        type: profileActionTypes.GET_PROFILE,
        payload: res.data
    })
  } catch (err) {
      dispatch({
          type: profileActionTypes.PROFILE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status}
      })
  }
};
