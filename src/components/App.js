import Header from './Header';

const App = () => {
  return (
    <div className="signUpForm">
      <Header text="Sign-up"/>
      <form>
        <label htmlFor="fullName">Full Name</label>
        <input name="fullName" type="text" placeholder="Full Name"/>
        <p>Error message</p>

        <label htmlFor="contactNumber">Contact Number</label>
        <input name="contactNumber" type="text" placeholder="1234567890"/>
        <p>Error message</p>

        <label htmlFor="email">Email Address</label>
        <input name="email" type="email" placeholder="example@email.com"/>
        <p>Error message</p>

        <label htmlFor="address">Street Number, City, Province</label>
        <input name="email" type="text"/>
        <p>Error message</p>

        <label htmlFor="postalCode">Postal Code</label>
        <input name="postalCode" type="text"/>
        <p>Error message</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;