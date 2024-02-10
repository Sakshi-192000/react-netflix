import React, { createContext, useContext, useEffect, useState } from "react";

import { auth, db } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      favShows: [],
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
