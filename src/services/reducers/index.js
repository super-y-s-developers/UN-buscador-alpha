import { combineReducers } from 'redux';

import { courses } from "./courses";
import { careers } from "./careers";
import { currUser } from "./users";

export default combineReducers({
  courses, careers, currUser
});
