import React, { createContext, useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    return auth().signInWithEmailAndPassword(email, password);
  };

  const register = async (email, password, username) => {
    const userCred = await auth().createUserWithEmailAndPassword(email, password);
    if (userCred.user) {
      await firestore().collection("users").doc(userCred.user.uid).set({
        userId: userCred.user.uid,
        email,
        username,
        createdAt: new Date(),
        points: 0,
        portfolioValue: 0,
        watchlist: [],
        paymentHistory: [],
      });
    }
  };

  const logout = async () => {
    return auth().signOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
