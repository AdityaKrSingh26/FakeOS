import React, { createContext, useState } from 'react'

//creating the context element/object
export const FormContext =createContext();

const FormContextProvider = ({children}) => {
  const [formData, setFormData] =useState(null);
 
  //replacing onsubmit from Form-App.jsx
  const storeFormData= (data) => {
    setFormData(data);
    console.log("checking data", data)
  }

  return (
    <FormContext.Provider value={{ formData, storeFormData }}>
      {children}
      </FormContext.Provider>
  );
};

export default FormContextProvider;