import React, { useContext, useState } from 'react';
import { FormContext } from '../context/FormContextProvider';
import styles from './FormInput.module.scss';

const FormInput = () => {
  const defaultValues = {
    userName: '',
    dob: '',
    driverLicense: '',
    state: 'NSW',
    photo: null,
  };

  const { storeFormData } = useContext(FormContext);
  const [formValues, setFormValues] = useState(defaultValues);

  const onInputChange = (event) => {
    const { value, name } = event.target;
    const newValues = { ...formValues, [name]: value };
    console.log('onInputChange');
    setFormValues(newValues);
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const newValues = { ...formValues, photo: file };
    setFormValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('what is formValues', formValues);
    storeFormData(formValues);
    // setFormValues(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="usernameInput">Username</label>
        <input
          id="usernameInput"
          type="text"
          name="userName"
          value={formValues.userName}
          onChange={onInputChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="dateOfBirthInput">Date of Birth</label>
        <input
          id="dateOfBirthInput"
          type="date"
          name="dob"
          value={formValues.dob}
          onChange={onInputChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="driverLicenseInput">Driver License</label>
        <input
          id="driverLicenseInput"
          type="text"
          name="driverLicense"
          value={formValues.driverLicense}
          onChange={onInputChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="stateInput">State</label>
        <input
          id="stateInput"
          type="text"
          name="state"
          value={formValues.state}
          onChange={onInputChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="photo">Upload Photo</label>
        <input id="photo" type="file" accept="image/*" onChange={onFileChange} />
      </div>

      <div className={styles.field}>
        <button>Register</button>
      </div>
    </form>
  );
};

export default FormInput;
