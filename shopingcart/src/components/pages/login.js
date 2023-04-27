import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from "../context/AppContext"


export const Login = () =>{

  const {
    setEmail,
    setPassword,
    handleSubmitSuccess,
  } = useAppContext()

    return (<div className="login">
    <div id="wrapper">
    <div id="left">
      <div id="signin">
      <h1>F T C.co</h1>
      <h2>Login</h2>
        <form className='form-group' onSubmit={handleSubmitSuccess}>
          <div>
            <label>Email Or Username</label>
            <input
              type="text"
              className="text-input"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Username OR Email"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="text-input"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="password"
              required
            />
          </div>
          <button type="submit" className="primary-btn">
            Sign In
          </button>
        </form>
        <div className="links">
          <Link href="#">Forgot your password?</Link>
        </div>
        <div className="or">
          <hr className="bar" />
          <span>OR</span>
          <hr className="bar" />
        </div>
        <Link to="/Register" className="secondary-btn">
          Create an account
        </Link>
      </div>
      <footer id="main-footer">
        <p>F T C.co Brings you Top Quality Clothing Brands that are proudly made in RSA</p>
      </footer>
    </div>
    <div id="right">
      <div id="showcase">
        <div id="showcase-content">
          <h1 className="showcase-text">
          Giving You The Best In <strong>Every Brand.!!</strong>
          </h1>
          <Link href="#" className="secondary-btn">
            Start a FREE 7-day trial
          </Link>
        </div>
      </div>
    </div>
  </div>
    </div>)
}