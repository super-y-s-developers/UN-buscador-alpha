import { careersRef } from 'services/firebase';
import { FETCH_CAREERS } from "services/actions/types";


export const fetchCareers = () => async dispatch => {
  careersRef.get().then(snap => {
    const careers = [];
    snap.forEach(s => {
      careers.push({ id: s.id, ...s.data() })
    })
    dispatch({ type: FETCH_CAREERS, careers: careers });
  });
}
