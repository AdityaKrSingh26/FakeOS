// AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  const storeFormData = (data) => {
    setFormData(data);
  };

  return (
    <AppContext.Provider value={{ formData, storeFormData }}>
      {children}
    </AppContext.Provider>
  );
};
