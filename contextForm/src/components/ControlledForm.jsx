import React, { useState, useContext } from 'react';
import styles from './ControlledForm.module.scss';
import { FormContext } from '../FormContext';
import countryData from './state-data.json';

const ControlledForm = () => {
    const { setFormData } = useContext(FormContext);
    const defaultValues = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        countryCode: 'AU',
        stateCode: 'NSW',
        photo: null,
    };
    const [formValues, setFormValues] = useState(defaultValues);

    const onInputChange = (event) => {
        const { value, name } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const onFileChange = (event) => {
        setFormValues({ ...formValues, photo: URL.createObjectURL(event.target.files[0]) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formValues);
        setFormValues(defaultValues);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="usernameInput">Username</label>
                <input id="usernameInput" type="text" name="username" value={formValues.username} onChange={onInputChange} required />
            </div>
            <div className={styles.field}>
                <label htmlFor="emailInput">Email</label>
                <input id="emailInput" type="email" name="email" value={formValues.email} onChange={onInputChange} required />
            </div>
            <div className={styles.field}>
                <label htmlFor="passwordInput">Password</label>
                <input id="passwordInput" type="password" name="password" value={formValues.password} onChange={onInputChange} required />
            </div>
            <div className={styles.field}>
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input id="passwordConfirm" type="password" name="passwordConfirm" value={formValues.passwordConfirm} onChange={onInputChange} required />
            </div>
            <div className={styles.field}>
                <label htmlFor="country">Country</label>
                <select id="country" value={formValues.countryCode} onChange={onInputChange} name="countryCode">
                    {countryData.map((country) => (
                        <option key={country.countryCode} value={country.countryCode}>{country.country}</option>
                    ))}
                </select>
            </div>
            <div className={styles.field}>
                <label htmlFor="stateCode">State</label>
                <select id="stateCode" value={formValues.stateCode} onChange={onInputChange} name="stateCode">
                    {countryData.find((country) => country.countryCode === formValues.countryCode).states.map((state) => (
                        <option key={state.stateCode} value={state.stateCode}>{state.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.field}>
                <label htmlFor="photo">Upload Photo</label>
                <input id="photo" type="file" accept="image/*" onChange={onFileChange} />
            </div>
            <div className={styles.field}>
                <button type="submit">Register</button>
            </div>
        </form>
    );
};

export default ControlledForm;
