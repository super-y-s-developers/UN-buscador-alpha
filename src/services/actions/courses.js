import { coursesRef } from 'services/firebase';
import { FETCH_COURSES } from "services/actions/types";

export const fetchCourses = () => async dispatch => {
  coursesRef.doc('1000001-B').get().then(doc => {
    dispatch({ type: FETCH_COURSES, courses: [doc.data()] });
  });
}
