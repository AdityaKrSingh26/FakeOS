import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContextProvider';
import styles from './DigitalID.module.scss';

const DigitalId = () => {
  const { formData } = useContext(FormContext);
  console.log('formData', formData);
  if (!formData) return null;

  const photoURL = formData.photo ? URL.createObjectURL(formData.photo) : null;

  return (
    <div className={styles.digital_id_container}>
      <div className={styles.photo}>
        {photoURL ? <img src={photoURL} alt="User Photo" /> : <div className={styles.placeholder}>No Image</div>}
      </div>
      <h2>Digital ID / Driver's License</h2>
      <p>Name: {formData.userName}</p>
      <p>DOB: {formData.dob}</p>
      <p>State: {formData.state}</p>
      {/* <img
        src="https://www.tsa.gov/sites/default/files/digital_mobile_icon.jpg"
        alt="Digital Id"
      /> */}
    </div>
  );
};

export default DigitalId;
