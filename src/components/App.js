import Header from './Header';
import { useFormik } from 'formik';
import validate from '../validate';
import '../styles/App.scss';

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
    <div id="signUpForm">
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