import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true);
    return Promise.resolve({ user: { email } });
  };
  const signIn = (email, password) => {
    setLoading(true);
    return Promise.resolve({ user: { email } });
  };
  const signInGoogle = () => {
    return Promise.resolve({ user: { email: 'google@example.com' } });
  };
  useEffect(() => {
    setUser(null);
    setLoading(false);
    return () => {};
  }, []);
  const logOutUser = () => {
    setLoading(true);
    return Promise.resolve();
  };
  const authInfo = {
    createUser,
    signIn,
    signInGoogle,
    user,
    loading,
    logOutUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
