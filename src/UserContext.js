import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "./firebase.config";
import { useQuery } from "@tanstack/react-query";

// Create Context
export const AuthContext = createContext();

// get auth from firebase
const auth = getAuth(app);

// google and twitter provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const UserContext = ({ children }) => {
  // user
  const [user, setUser] = useState("");
  // loader
  const [loading, setLoading] = useState(true);
  // theme
  const [theme, setTheme] = useState("light");
  // users
  // const [users, setUsers] = useState([]);
  // logged in user
  // const [loggedUser, setLoggedUser] = useState({});

  // user inspection
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe;
  }, []);

  // useEffect(() => {
  //   fetch("https://harkrx-server.vercel.app/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  // get logged in user
  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`https://harkrx-server.vercel.app/single-user?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setLoggedUser(data));
  //   }
  // }, [user?.email]);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google logIn
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // twitter login
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // updateUser
  const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // log out
  const logOut = () => {
    // setLoading(true);
    localStorage.removeItem("token");
    return signOut(auth);
  };
  // value wrapper
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    facebookLogin,
    updateUser,
    logOut,
    theme,
    setTheme,
    // users,
    // loggedUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
