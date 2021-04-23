import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBL1PIqa2blpbjylQ5rIkqippZALDg6vS4',
  authDomain: 'disney-clone-2531a.firebaseapp.com',
  projectId: 'disney-clone-2531a',
  storageBucket: 'disney-clone-2531a.appspot.com',
  messagingSenderId: '829518597264',
  appId: '1:829518597264:web:1c7e6a993d9d22aab05c15',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
