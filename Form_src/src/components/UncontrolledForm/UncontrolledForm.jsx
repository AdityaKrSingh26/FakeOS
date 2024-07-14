import { useEffect, useRef, useState } from "react";
import styles from "./UnControlledForm.module.scss";
import { validateForm } from "./validator";
import countryData from "../../data/state-data.json";

const UnControlledForm = ({ onSubmit }) => {
  const [errors, setErrors] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("AU");

  const formRef = useRef(null);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
    console.log(renderCount.current);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(null);
    const form = formRef.current;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    const { isValid, errors } = validateForm(formValues);
    if (isValid) {
      onSubmit(formValues);
      form.reset();
      return;
    }
    setErrors(errors);
  };

  const onCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} ref={formRef}>
      <div className={styles.field}>
        <label htmlFor="usernameInput">Username</label>
        <input id="usernameInput" type="text" name="username" />
        <small className={styles.error_text}>
          {errors?.username ?? "\u00A0"}
        </small>
      </div>

      <div className={styles.field}>
        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" type="email" name="email" />
        <small className={styles.error_text}>{errors?.email ?? "\u00A0"}</small>
      </div>

      <div className={styles.field}>
        <label htmlFor="passwordInput">Password</label>
        <input id="passwordInput" type="password" name="password" />
        <small className={styles.error_text}>
          {errors?.password ?? "\u00A0"}
        </small>
      </div>

      <div className={styles.field}>
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input id="passwordConfirm" type="password" name="passwordConfirm" />
        <small className={styles.error_text}>
          {errors?.passwordConfirm ?? "\u00A0"}
        </small>
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Country</label>
        <select id="country" onChange={onCountryChange} name="countryCode">
          {countryData.map((country) => (
            <option key={country.countryCode} value={country.countryCode}>
              {country.country}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="stateCode">State</label>
        <select id="stateCode" name="stateCode">
          {countryData
            .find((country) => country.countryCode === selectedCountry)
            .states.map((state) => (
              <option key={state.stateCode} value={state.stateCode}>
                {state.name}
              </option>
            ))}
        </select>
      </div>

      <div className={styles.field}>
        <button>Register</button>
      </div>
    </form>
  );
};
export default UnControlledForm;
