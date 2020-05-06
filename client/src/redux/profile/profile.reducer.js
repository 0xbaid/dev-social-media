import { profileActionTypes } from './profile.action.types';

const INITIAL_STATE = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case profileActionTypes.GET_PROFILE:
    case profileActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case profileActionTypes.GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    case profileActionTypes.PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case profileActionTypes.CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    case profileActionTypes.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
