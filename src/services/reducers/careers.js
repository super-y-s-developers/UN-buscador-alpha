import { FETCH_CAREERS } from "services/actions/types";


export const careers = (state = [], { type, careers }) => {
  switch(type) {
    case FETCH_CAREERS: {
      return careers;
    }
    default: return state;
  }
}
