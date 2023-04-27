import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from "../context/AppContext"


export const Register = () =>{
  const {
    setUserName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSubmit,
    setUserId
  } = useAppContext()

    return(
        <div className="register">
         <div id="wrapper">
             <div id="left">
              <div id = "register">
              <h1>F T C.co</h1>
              <h2>Sign-up</h2>
           <form className='form-group' onSubmit={handleSubmit}>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  className="text-input"
                  id="username"
                  onChange={(e) => setUserName(e.target.value)}
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label>ID_NO</label>
                <input
                  type="text"
                  className="text-input"
                  id="userId"
                  onChange={(e) => setUserId(e.target.value)}
                  name="userId"
                  placeholder="ID_NO"
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  className="text-input"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Email"
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
              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="text-input"
                  id="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button type="submit" className="primary-btn" >
                Sign up
              </button>
            </form>
            
            <div className="links">
            </div>
            <div className="or">
              <hr className="bar" />
              <span>OR</span>
              <hr className="bar" />
            </div>
            <Link to="/login" className="secondary-btn">
              Sign in Here
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
        </div>
    )
}