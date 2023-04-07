import React, { useState } from 'react'
import { useAuth } from '../../../ContexApi/AuthContext'
function RegistrationForm() {
  const {register}=useAuth()
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  return (
 <>


      {/*---------- Login Page Container Start ------------*/}
      <div className="register-container container pt-4 pb-5 py-md-5">
        <div className="row mx-0 justify-content-center">
          <div className="col-md-8 col-xl-6 pe-md-4 pe-lg-5">
            <h3 className="text-uppercase text-center mb-4">Create Account</h3>
            {/* <form action className="form pt-2"> */}
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"  className="form-label">First Name<span className="text-danger">*</span></label>
                <input type="text" className="form-control rounded-pill" value={data.name} onChange={(e)=>setData({
      ...data,
      name: e.target.value
    })} id="exampleFormControlInput1" placeholder="Enter First Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name<span className="text-danger">*</span></label>
                <input type="text" className="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Enter Last Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email Address<span className="text-danger">*</span></label>
                <input type="email" className="form-control rounded-pill" id="exampleFormControlInput1" value={data.email} onChange={(e)=>setData({
      ...data,
      email: e.target.value
    })} placeholder="Enter Email Address" />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleFormControlInput2" className="form-label">Password<span className="text-danger">*</span></label>
                <input type="password" className="form-control rounded-pill" value={data.password} onChange={(e)=>setData({
      ...data,
      password: e.target.value
    })} id="exampleFormControlInput2" placeholder="Enter Password" />
              </div>
              <div className="text-center mb-3">
                <button className="btn text-uppercase rounded-pill register-btn" onClick={()=>register(data)}>Create Account</button>
              </div>
              <div className="text-center mb-4 mb-md-5">
                <p className="text-center mb-0 text-uppercase">Already have account? <a href="login.html" className="fRegister">Login</a></p>
              </div>
              <div className="orRegister-head mb-3">
                <h6 className="fw-normal text-uppercase">Or Register With</h6>
              </div>
              <div className="social-login">
                <button className="btn facebook-login rounded-pill w-100 mb-3">
                  <span className="d-flex justify-content-between align-items-center">
                    <span>Register with Facebook</span>
                    <i className="fa-brands fa-facebook-f" />
                  </span>
                </button>
                <button className="btn google-login rounded-pill w-100 mb-3">
                  <span className="d-flex justify-content-between align-items-center">
                    <span>Register with Google</span>
                    <i className="fa-brands fa-google" />
                  </span>
                </button>
              </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      {/*---------- Login Page Container End ------------*/}
 
 </>
  )
}

export default RegistrationForm
