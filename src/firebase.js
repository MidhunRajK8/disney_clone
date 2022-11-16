import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCahCgu2BjnvtRxJMIY6kPcFYSeMyU2HgI",
    authDomain: "disney-clone-a6dd4.firebaseapp.com",
    projectId: "disney-clone-a6dd4",
    storageBucket: "disney-clone-a6dd4.appspot.com",
    messagingSenderId: "325088375080",
    appId: "1:325088375080:web:535a5622e8e17c3fcfe01d"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);  // no-unused-vars
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;
