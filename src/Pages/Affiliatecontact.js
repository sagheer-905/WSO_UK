import React from 'react'
import AffiliateFooter from '../Component/AffiliateProgram/AffiliateFooter/AffiliateFooter'
import Header from '../Component/AffiliateProgram/Header/Header'

function Affiliatecontact() {
  return (
    <div>
      <Header/>
      {/*------ Affiliate Header End-----*/}
<div className="container affiliate-contactPage py-5">
  <div className="row justify-content-center mx-0">
    <div className="col-md-8 col-lg-7 rounded-4 py-5 px-4 p-sm-5">
      <h2 className="fw-semibold text-center text-uppercase mb-4">Contact Us</h2>
      <p className="text-center mb-5">Send us your queries, suggestions, issues etc. using the form below. We will get back to you as soon as possible</p>
      <div className="mb-3">
        <label htmlFor className="form-label">Your Name <span className="text-danger">*</span></label>
        <input type="text" className="form-control rounded-pill" placeholder="Enter Your Name" />
      </div>
      <div className="mb-3">
        <label htmlFor className="form-label">Email Address <span className="text-danger">*</span></label>
        <input type="text" className="form-control rounded-pill" placeholder="Enter Email Address" />
      </div>
      <div className="mb-3">
        <label htmlFor className="form-label">Select Issue Type</label>
        <select className="form-select rounded-pill">
          <option value="General Issues / Queries">General Issues / Queries</option>
          <option value="Technical Issues / Queries">Technical Issues / Queries</option>
          <option value="Feedback / Suggestions">Feedback / Suggestions</option>
          <option value="Payment Issues / Queries">Payment Issues / Queries</option>
          <option value="Request Deletion Account">Request Deletion Account</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor className="form-label">Your Message</label>
        <textarea className="form-control rounded-4" rows={4} defaultValue={""} />
      </div>
      <div className="mb-3 text-end">
        <small className="text-danger">* - * - Required</small>
      </div>
      <div className="text-center">
        <button className="btn text-uppercase rounded-pill">Send Message</button>
      </div>
    </div>
  </div>
</div>
{/*------ Affiliate Footer Start -----*/}
<AffiliateFooter/>
    </div>
  )
}

export default Affiliatecontact
