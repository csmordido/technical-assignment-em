const validate = values => {
  const errors = {};
  const numberRegEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const postalCodeRegEx = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

  if (!values.fullName) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!values.contactNumber) {
    errors.contactNumber = 'Please enter your your contact number.';
  } else if (!numberRegEx.test(values.contactNumber)){
    errors.contactNumber = 'Invalid contact number.';
  }

  if (!values.email) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegEx.test(values.email)) {
    errors.email = 'Invalid email address.';
  }

  if (!values.address) {
    errors.address = 'Please enter your address.';
  }

  if (!values.postalCode) {
    errors.postalCode = 'Please enter your postal code.';
  } else if (!postalCodeRegEx.test(values.postalCode)) {
    errors.postalCode = 'Invalid postal code.';
  }
  
  return errors;
};

export default validate;