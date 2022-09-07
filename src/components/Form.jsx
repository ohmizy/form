import React, { useState } from "react"

const Form = () => {
  const [firstName, setFirstName] = useState ("");
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastName, setLastName] = useState ("");
  const [LastNameError, setLastNameError] = useState(null);
  const [email, setEmail] = useState ("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState ("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState ("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const validateFirstName = () => {
    if (firstName.length < 3 ) {
      setFirstNameError("Name must be longer than 3 characters.")
    } else {
      setFirstNameError(null);
    }
  }

  const validateEmail = () => {
    if (email.length < 3 ) {
      setEmailError("Email must be longer than 3 characters.")
    } else {
      setEmailError(null);
    }
  }

  const validatePassword = () => {
    if (password.length < 3 ) {
      setPasswordError("Password must be longer than 3 characters.")
    } else {
      setPasswordError(null);
    }
  }
  const validateConfirmPassword = () => {
    if (password.length < 3 ) {
      setPasswordError("Password must be longer than 3 characters.")
    } else {
      setPasswordError(null);
    }
  }
  
  return (
    <form className="mt-3">
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-control"
          value = {firstName}
          onChange = { (e) => { setFirstName(e.target.value) } }
          onBlur={validateFirstName}
        />
        {
          firstNameError &&
          <span className="form-text text-danger">{ firstNameError }</span>
        }
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-control"
          value = {lastName}
          onChange = { (e) => { setLastName(e.target.value) } }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          value={email}
          onChange = {event => setEmail(event.target.value)}
          onBlur={validateEmail}
        />
        {
          emailError &&
          <span className="form-text text-danger">{ emailError }</span>
        }
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          value={password}
          onChange = {event => setPassword(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input
          type="confirmPassword"
          name="confirmPassword"
          id="confirmPassword"
          className="form-control"
          value={confirmPassword}
          onChange = {event => setConfirmPassword(event.target.value)}
          onBlur={validateConfirmPassword}
          />
          {
            confirmPasswordError &&
            <span className="form-text text-danger">{ confirmPasswordError }</span>
          }
      </div>
    </form>
  )
}

export default Form