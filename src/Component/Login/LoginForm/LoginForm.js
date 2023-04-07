import React, { useState } from 'react'
import { useAuth } from '../../../ContexApi/AuthContext'

function LoginForm() {
  const {login} =useAuth()
  const [data,setData]=useState({
    email:"",
    password:""
  })
  
  return (
    <div>
      {/*---------- Login Page Container Start ------------*/}
      <div className="login-container container pt-4 pb-5 py-md-5">
        <div className="row mx-0 align-items-center gy-4 gy-md-0">
          <div className="col-md-6 pe-md-4 pe-lg-5">
            <div className="login_wrapper">
              <h3 className="text-uppercase text-center mb-4">Login</h3>
              <p>Login to your existing account to track orders, manage your subscription and
                more!
              </p>
              {/* <form action className="form"> */}
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email Address<span className="text-danger">*</span></label>
                  <input type="email" className="form-control rounded-pill" value={data.email} onChange={(e)=>setData({
      ...data,
      email: e.target.value})} id="exampleFormControlInput1" placeholder="Enter Email Address" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput2" className="form-label">Password<span className="text-danger">*</span></label>
                  <input type="password" className="form-control rounded-pill" value={data.password} onChange={(e)=>setData({
      ...data,
      password: e.target.value})} id="exampleFormControlInput2" placeholder="Enter Password" />
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <div className="text-center mb-3">
                  <button className="btn text-uppercase rounded-pill login-btn" onClick={()=>login(data)}>Login</button>
                </div>
                <div className="text-center mb-2">
                  <a href="/" className="lost_pswd text-uppercase">Forgot Password?</a>
                </div>
                <div className="text-center mb-4 mb-md-5">
                  <p className="text-center mb-0 text-uppercase">Don't have account? <a href="registration.html" className="new_acc">Create New</a></p>
                </div>
                <div className="orLogin-head mb-3">
                  <h6 className="fw-normal text-uppercase">Or Login With</h6>
                </div>
                <div className="social-login">
                  <button className="btn facebook-login rounded-pill w-100 mb-3">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Login with Facebook</span>
                      <i className="fa-brands fa-facebook-f" />
                    </span>
                  </button>
                  <button className="btn google-login rounded-pill w-100 mb-3">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Login with Google</span>
                      <i className="fa-brands fa-google" />
                    </span>
                  </button>
                </div>
              {/* </form> */}
            </div>
            <div className="forgot_passwordWrapper">
              <h3 className="text-uppercase text-center mb-4">Forgot Password?</h3>
              <p>Please enter your email address. You will receive a link to create a new password via email.</p>
              <div className="mb-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email Address<span className="text-danger">*</span></label>
                <input type="email" className="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Enter Email Address" />
              </div>
              <div className="text-center mb-3">
                <button className="btn text-uppercase rounded-pill resetPSWD-btn">Reset Password</button>
              </div>
              <div className="text-center mb-3">
                <button className="btn text-uppercase rounded-pill backTologin-btn"><i className="fa-solid fa-arrow-left me-2" /> Back To Login</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 ps-md-4 ps-lg-5 text-center">
            <h3 className="text-uppercase text-center mb-4">New Customer</h3>
            <p className="mb-4">By creating an account with our store, you will be able to access your order
              status and history. Just fill in the fields on registration page, and we’ll get a new account
              set up for you in no time. We will only ask you for information necessary to make the purchase
              process faster and easier.
            </p>
            <a href="registration.html"><button className="btn rounded-pill createAcc-btn">Create Account</button></a>
          </div>
        </div>
      </div>
      {/*---------- Login Page Container End ------------*/}
    </div>
  )
}

export default LoginForm
