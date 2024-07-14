import styles from "./ControlledForm.module.scss";
import { useEffect, useState, useRef } from "react";
import { validateForm } from "./validator";
import countryData from "../../data/state-data.json";
const ControlledForm = ({ onSubmit }) => {
  //register form
  //username
  //email
  //password
  //password confirm
  // dob
  //button
  const renderCount = useRef(0);//only to display the render count useRef is not used here in the code

  useEffect(() => {
    renderCount.current++;
    console.log(renderCount);
  });

  console.log(countryData);

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    countryCode: "AU",
    stateCode: "NSW",
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const onInputChange = (event) => {
    const { value, name } = event.target;
    const newValues = { ...formValues, [name]: value };
    setFormValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // call the onsubmit function... with all the data from my form
    onSubmit(formValues);
    setFormValues(defaultValues);
  };

  const { isValid, errors } = validateForm(formValues);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="usernameInput">Username</label>
        <input
          id="usernameInput"
          type="text"
          name="username"
          value={formValues.username}
          onChange={onInputChange}
          required
        />
        {errors.username && (
          <small className={styles.error_text}>{errors.username}</small>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          type="email"
          name="email"
          value={formValues.email}
          onChange={onInputChange}
        />
        {errors.email && (
          <small className={styles.error_text}>{errors.email}</small>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="passwordInput">Password</label>
        <input
          id="passwordInput"
          type="password"
          name="password"
          value={formValues.password}
          onChange={onInputChange}
        />
        {errors.password && (
          <small className={styles.error_text}>{errors.password}</small>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          value={formValues.passwordConfirm}
          onChange={onInputChange}
        />
        {errors.passwordConfirm && (
          <small className={styles.error_text}>{errors.passwordConfirm}</small>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={formValues.countryCode}
          onChange={onInputChange}
          name="countryCode"
        >
          {countryData.map((country) => (
            <option key={country.countryCode} value={country.countryCode}>
              {country.country}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="stateCode">State</label>
        <select
          id="stateCode"
          value={formValues.stateCode}
          onChange={onInputChange}
          name="stateCode"
        >
          {countryData
            .find((country) => country.countryCode === formValues.countryCode)
            .states.map((state) => (
              <option key={state.stateCode} value={state.stateCode}>
                {state.name}
              </option>
            ))}
        </select>
      </div>

      <div className={styles.field}>
        <button disabled={!isValid}>Register</button>
      </div>
    </form>
  );
};
export default ControlledForm;
