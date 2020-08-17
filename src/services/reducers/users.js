import { FETCH_CURR_USER } from 'services/actions/types';

export const currUser = (state = null, { type, currUser }) => {
  switch (type) {
    case FETCH_CURR_USER: {
      return currUser;
    }
    default:
      return state;
  }
};
