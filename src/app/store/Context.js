"use client";

import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [name, setName] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // Track registration status
  const [token, settoken] = useState("");

  const updateUserEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const updatedUserName = (name) => {
    setName(name);
  };

  const updatedUserCnic = (cnic) => {
    setCnic(cnic);
  };

  const updateRegistrationStatus = (status) => {
    setIsRegistered(status);
  };

  const updateToken = (token) => {
    settoken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        updateUserEmail,
        name,
        updatedUserName,
        cnic,
        updatedUserCnic,
        isRegistered,
        updateRegistrationStatus,
        token,
        updateToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
