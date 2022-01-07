import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCs8loJ6dPpqynqN7CXFMLPYrV_n1ygIgs",
  authDomain: "rebotuca2.firebaseapp.com",
  projectId: "rebotuca2",
  storageBucket: "rebotuca2.appspot.com",
  messagingSenderId: "663203868800",
  appId: "1:663203868800:web:137d8c4f21c7ea4d5d3665",
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      const docRef = await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "Google",
        name: user.displayName,
        email: user.email,
      });
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await collection(db, "users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const sendPasswordResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const logout = () => {
  signOut(auth);
};
