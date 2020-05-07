import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.app = app;
    this.auth = app.auth();
    this.db = app.firestore();
  }

  async register(name, email, password) {
    //register function
    const newUser = await this.auth.createUserWithEmailAndPassword(
      //take in email and password with firebase function
      email,
      password
    );
    return newUser.user.updateProfile({
      //update display name to name passed with firebase function
      displayName: name,
    });
  }

  login(email, password) {
    //login function with firebase
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
