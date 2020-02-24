import { firebase } from '@firebase/app';
import 'firebase/firestore';


// Initialize firebase app
import { FirebaseConfig } from './config';
firebase.initializeApp(FirebaseConfig);


// Export database references
const db = firebase.firestore();
export const coursesRef = db.collection('courses');
export const careersRef = db.collection('careers');
// Export auth reference
// export const auth = firebase.auth();
