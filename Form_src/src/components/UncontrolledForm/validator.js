export const validateForm = (formData) => {
  let isValid = true;
  const errors = {};
  if (formData.username === "") {
    isValid = false;
    errors.username = "Username cannot be empty";
  }
  if (formData.email === "") {
    isValid = false;
    errors.email = "Email cannot be empty";
  }
  if (formData.password === "") {
    isValid = false;
    errors.password = "Password cannot be empty";
  }
  if (formData.passwordConfirm === "") {
    isValid = false;
    errors.passwordConfirm = "Password Confirm cannot be empty";
  }

  if (formData.password !== formData.passwordConfirm) {
    isValid = false;
    errors.passwordConfirm = "Password confirm must match password";
  }

  return { isValid, errors };
};
