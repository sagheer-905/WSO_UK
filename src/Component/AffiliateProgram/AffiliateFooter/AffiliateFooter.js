import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../../images/affiliate/document_1.pdf"
function AffiliateFooter() {
  return (
    <div>
      {/*------ Affiliate Footer Start -----*/}
<footer className="affiliate_footer border-top py-4 py-lg-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="f_title position-relative">
          <h6 className="fw-semibold">Learn</h6>
          <div className="f_toggleIcon">
            <i className="fa-solid fa-angle-down" />
          </div>
        </div>
        <ul className="f_dropdown list-unstyled">
          <Link to="/AffiliateComissions" >
            <li>Comissions</li>
          </Link>
          <Link to='/AffiliateTool'>
            <li>Tools</li>
          </Link>
          <Link to="/AffiliateReporting" >
            <li>Reporting</li>
          </Link>
        </ul>
      </div>
      <div className="col-lg-3">
        <div className="f_title position-relative">
          <h6 className="fw-semibold">Customer Support</h6>
          <div className="f_toggleIcon">
            <i className="fa-solid fa-angle-down" />
          </div>
        </div>
        <ul className="f_dropdown list-unstyled">
          <Link to="/affiliatecontact">
            <li>Contact Us</li>
          </Link>
          <a href={img} target="_blank" rel="noreferrer">
            <li>Documentation</li>
          </a>
          <Link to='/giveaway' >
            <li>Give Away</li>
          </Link>
        </ul>
      </div>
      <div className="col-lg-3">
        <div className="f_title position-relative">
          <h6 className="fw-semibold">Legal</h6>
          <div className="f_toggleIcon">
            <i className="fa-solid fa-angle-down" />
          </div>
        </div>
        <ul className="f_dropdown list-unstyled">
          <Link to='/termcondition'>
            <li>Terms &amp; Conditions</li>
          </Link>
          <Link to='/privacypolicy'>
            <li>Privacy Policy</li>
          </Link>
          <Link to='/Faq'>
            <li>FAQ</li>
          </Link>
        </ul>
      </div>
      <div className="col-lg-3 text-center text-lg-start">
        <ul className="list-unstyled">
          <li>
            <p className="m-0">©2023.</p>
          </li>
          <Link to="/" >
            <li>www.wholesaleshopping.co.uk</li>
          </Link>
          <li>
            <select className="form-select-sm border-0 p-0">
              <option value={1}>English</option>
              <option value={2}>French</option> 
              <option value={3}>Spanish</option>
              <option value={4}>German</option>
              <option value={5}>Portuguese</option>
              <option value={6}>Italian</option>
              <option value={7}>Russian</option>
              <option value={8}>Turkish</option>
              <option value={9}>Swedish</option>
              <option value={10}>Greek</option>
              <option value={11}>Norwegian</option>
              <option value={12}>Polish</option>
              <option value={13}>Hebrew</option>
              <option value={14}>Arabic</option>
              <option value={15}>Dutch</option>
              <option value={16} selected>Chinese (Simplified)</option>
              <option value={17}>Chinese (Traditional)</option>
              <option value={18}>Hungarian</option>
              <option value={19}>Veitnamese</option>
              <option value={20}>Korean</option>
              <option value={21}>Japanese</option>
              <option value={22}>Finnish</option>
              <option value={23}>Czech</option>
              <option value={24}>Danish</option>
              <option value={25}>Romanian</option>
              <option value={26}>Lithuanian</option>
              <option value={27}>Malay</option>
              <option value={28}>Thai</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
{/*------ Affiliate Footer End -----*/}

    </div>
  )
}

export default AffiliateFooter
