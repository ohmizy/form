import React, { useState } from "react"

const Form = () => {
  const [name, setName] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("")
  
  return (
    <form className="mt-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">First Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value = {name}
          onChange = { (e) => { setName(e.target.value) } }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Last Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value = {name}
          onChange = { (e) => { setName(e.target.value) } }
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
        />
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
        <label htmlFor="password" className="form-label">Confirm Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          value={password}
          onChange = {event => setPassword(event.target.value)}
        />
      </div>
    </form>
  )
}

export default Form