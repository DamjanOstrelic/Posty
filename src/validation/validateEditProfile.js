export default function validateSignup(values) {
  let errors = {};

  //Name Errors
  if (!values.name) {
    errors.name = "A username is required.";
  }

  //Email Errors
  if (!values.email) {
    errors.email = "Your email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Please provide a valid email.";
  }

  //new Password Errors
  if (!values.newPassword) {
    errors.password = "A new password is required.";
  } else if (values.newPassword.length < 6) {
    errors.password =
      "Your current password must be at least 6 characters long.";
  }
  //current Password Errors
  if (!values.currentPassword) {
    errors.password = "The current password is required.";
  } else if (values.currentPassword.length < 6) {
    errors.password = "Your new password must be at least 6 characters long.";
  }

  return errors;
}
