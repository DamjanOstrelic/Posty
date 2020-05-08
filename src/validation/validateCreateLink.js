export default function validateSignup(values) {
  let errors = {};

  //url errors
  if (!values.url) {
    errors.url = "A URL is required.";
  } else if (!/^(ftp|https|http):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "Please provide a valid URL.";
  }

  //Description errors
  if (!values.description) {
    errors.description = "A description is required.";
  } else if (values.description.length < 10) {
    errors.description = "The description must be at least 10 characters.";
  }

  return errors;
}
