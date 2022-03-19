import Header from './Header';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!values.contactNumber) {
    errors.contactNumber = 'Please enter your your contact number.';
  } else if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(values.contactNumber)){
    errors.contactNumber = 'Invalid contact number.';
  }

  if (!values.email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.address) {
    errors.address = 'Please enter your address.';
  }

  if (!values.postalCode) {
    errors.postalCode = 'Please enter your postal code.';
  } else if (!/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(values.postalCode)) {
    errors.postalCode = 'Invalid postal code';
  }
  
  return errors;
};

const App = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      contactNumber: '',
      email: '',
      address: '',
      postalCode: ''
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div className="signUpForm">
      <Header text="Sign up"/>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input 
          id="fullName" 
          name="fullName" 
          type="text" 
          placeholder="Full Name"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.fullName && formik.errors.fullName 
          ? <p>{formik.errors.fullName}</p>
          : null
        }

        <label htmlFor="contactNumber">Contact Number</label>
        <input 
          id="contactNumber" 
          name="contactNumber" 
          type="text" 
          placeholder="123-456-7890"
          onChange={formik.handleChange}
          value={formik.values.contactNumber}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.contactNumber && formik.errors.contactNumber
          ? <p>{formik.errors.contactNumber}</p>
          : null
        }

        <label htmlFor="email">Email Address</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="example@email.com"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.email && formik.errors.email
          ? <p>{formik.errors.email}</p>
          : null
        }

        <label htmlFor="address">Street Number, City, Province</label>
        <input 
          id="address" 
          name="address" 
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.address && formik.errors.address
          ? <p>{formik.errors.address}</p>
          : null
        }

        <label htmlFor="postalCode">Postal Code</label>
        <input 
          id="postalCode"
          name="postalCode" 
          type="text" 
          placeholder="A1B 2C3"
          onChange={formik.handleChange}
          value={formik.values.postalCode}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.postalCode && formik.errors.postalCode
          ? <p>{formik.errors.postalCode}</p>
          : null
        }

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;