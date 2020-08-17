import { auth, usersRef } from 'services/firebase'
import { FETCH_CURR_USER } from 'services/actions/types';

// AUTHENTICATION

export const login = ({ email, password }) => (async) => {
  const provider = new auth.GoogleAuthProvider()

  auth().signInWithPopup(provider).then((result) => {
    console.log('User', result.user);
  }).catch((error) => {
    const { code, message, email } = error
    console.log('Error Google login:', code, message, 'with email', email);
  })
}

export const logout = () => (async) => {
  return auth.signOut()
}

// USER DATA

export const fetchCurrUser = (uid, basicData) => async (dispatch) => {
  usersRef
    .doc(uid)
    .get()
    .then((doc) => {
      dispatch({
        type: FETCH_CURR_USER,
        currUser: { uid, ...basicData, ...doc.data() },
      })
    })
}
