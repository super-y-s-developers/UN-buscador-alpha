import { FETCH_COURSES } from "services/actions/types";


export const courses = (state = [], { type, courses }) => {
  switch(type) {
    case FETCH_COURSES: {
      return courses;
    }
    default: return state;
  }
}
