import { PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_LOADING:
      return {
        ...state,
        profile: {...payload},
        loading: false,
      };
      case CLEAR_CURRENT_PROFILE:
      return{
        ...state,
        profile: null
      }

    default:
      return state;
  }
};
