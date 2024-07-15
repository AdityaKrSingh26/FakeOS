// FormComponent.js
import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import  "./FormComponent.module.scss";



const FormComponent = () => {
  const { storeFormData } = useContext(AppContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    storeFormData(formData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
          {/* Add more fields as needed */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
