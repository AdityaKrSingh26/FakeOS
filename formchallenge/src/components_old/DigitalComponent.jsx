// DigitalIDComponent.js
import React, { useContext } from "react";

import "./FormComponent.module.scss";
import { AppContext } from "./AppContext";
// import { AppContext } from "../context/AppContext";


const DigitalIDComponent = () => {
  const { formData } = useContext(AppContext);

  if (!formData) return null; // Handle case where form data is not yet available

  return (
    <div className="digital-id-container">
      <h2>Digital ID / Driver's License</h2>
      <p>Name: {formData.firstName} {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      {/* Add more details as needed */}
      <img src="https://www.tsa.gov/sites/default/files/digital_mobile_icon.jpg" alt="Digital ID" />
    </div>
  );
};



export default DigitalIDComponent;
