import { useFormik } from 'formik';
import Header from './Header';
import Field from './Field';
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
      <Header headerText="Sign up"/>
      <form onSubmit={formik.handleSubmit}>
        <Field 
          label="Full Name"
          name="fullName" 
          type="text" 
          placeholder="Full Name"
          formik={formik}
        />
        <Field 
          label="Contact Number"
          name="contactNumber" 
          type="text" 
          placeholder="123-456-7890"
          formik={formik}
        />
        <Field 
          label="Email"
          name="email" 
          type="email" 
          placeholder="example@email.com"
          formik={formik}
        />
        <Field 
          label="Street Number, City, Province"
          name="address" 
          type="text"
          placeholder=""
          formik={formik}
        />
        <Field 
          label="Postal Code"
          name="postalCode" 
          type="text" 
          placeholder="A1B 2C3"
          formik={formik}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;