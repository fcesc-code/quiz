/* puede haber múltiples métodos de autentificación */
import "./firebaseinit";
import firebase from "firebase";
import "firebase/auth";

const providerGoogle = new firebase.auth.GoogleAuthProvider();

const authMethods = {
  signIn: (email, password) => {
    // FIREBASE AuthMethods: SIGNIN with email & pwd
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  signOut: () => firebase.auth().signOut(),

  signInWithGoogle: () => {
    providerGoogle.addScope("profile");
    providerGoogle.addScope("email");
    return firebase.auth().signInWithPopup(providerGoogle);
  },
};

export default authMethods;
