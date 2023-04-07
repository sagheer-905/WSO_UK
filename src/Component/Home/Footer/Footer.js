import React from 'react'
import visa from "../../../images/homepage/Payment-icons/visa.png"
import master from "../../../images/homepage/Payment-icons/master.png"
import paypal from "../../../images/homepage/Payment-icons/paypal.png"
import american from "../../../images/homepage/Payment-icons/american.png"
import visa2 from "../../../images/homepage/Payment-icons/visa2.png"
import maestro from "../../../images/homepage/Payment-icons/maestro.png"
import gpay from "../../../images/homepage/Payment-icons/GPay.png"
import apppay from "../../../images/homepage/Payment-icons/AppPay.png"
import klaran from "../../../images/homepage/Payment-icons/Klarna_x42.png"
import facbook from "../../../images/homepage/Social-Icons/Fb.png"
import insta from "../../../images/homepage/Social-Icons/Insta.png"
import pinterest from "../../../images/homepage/Social-Icons/Pinterest.png"
import linkedin from "../../../images/homepage/Social-Icons/Linkedin.png"
import tiktok from "../../../images/homepage/Social-Icons/Tiktok.png"
import youtube from "../../../images/homepage/Social-Icons/Youtube.png"
import twitter from "../../../images/homepage/Social-Icons/Twitter.png"
import appstore from "../../../images/homepage/App-Store.png"
import playstore from "../../../images/homepage/Play-Store.png" 
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>


      {/*------------ Footer Section Start ------------*/}
      <footer>
        <div className="footer px-4 px-xl-5">
          <a className="text-decoration-none text-dark" href="https://uk.trustpilot.com/review/wholesaleshopping.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount" rel='noreferrer' target="_blank">
            <p className="text-center pt-3 mb-5">See Our <span className="fw-bold">825</span> reviews on <i className="bi bi-star-fill text-success" /> <span className="fw-bold">Trustpilot</span></p>
          </a>
          {/*-- Footer Widget --*/}
          <div className="row footer-widget px-xl-5 gy-4 gy-lg-0">
            {/* col 1 */}
            <div className="col-lg-3">
              <div className="widget-title position-relative">
                <h5 className="text-uppercase">Our Projects</h5>
                <div className="toggle-icon">
                  <i className="fa-solid fa-angle-down" />
                </div>
              </div>
              <ul className="list-unstyled mb-0 widget-content">
                <li><Link to='/AffiliateProgram' className="text-decoration-none">Affiliate Program</Link></li>
                <li><Link to='/marketplace' className="text-decoration-none">Marketplace</Link></li>
                <li><Link to="/giveaway" className="text-decoration-none">Give Away</Link></li>
              </ul>
            </div>
            {/* col 1 */}
            {/* col 2 */}
            <div className="col-lg-3">
              <div className="widget-title position-relative">
                <h5 className="text-uppercase">About Us</h5>
                <div className="toggle-icon">
                  <i className="fa-solid fa-angle-down" />
                </div>
              </div>
              <ul className="list-unstyled mb-0 widget-content">
               
              <li><Link to="/aboutus" className="text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-decoration-none">Contact Us</Link></li>
              <li><Link to="/careers" className="text-decoration-none">Careers</Link></li>
              <li><Link to="/blog" className="text-decoration-none">Blog</Link></li>
              <li><Link to="/faq" className="text-decoration-none">FAQ's</Link></li>
      
              </ul>
            </div>
            {/* col 2 */}
            {/* col 3 */}
            <div className="col-lg-3">
              <div className="widget-title position-relative">
                <h5 className="text-uppercase">Help &amp; Information</h5>
                <div className="toggle-icon">
                  <i className="fa-solid fa-angle-down" />
                </div>
              </div>
              <ul className="list-unstyled mb-0 widget-content">
              <li><Link to="/privacypolicy" className="text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/retunspolicy" className="text-decoration-none">Returns Policy</Link></li>
              <li><Link to="/deliveryinformation" className="text-decoration-none">Delivery Information</Link></li>
             <li><Link to="/termcondition"  className="text-decoration-none">Terms &amp; Conditions</Link> </li>
              <li><Link to="/paylater" className="text-decoration-none">Klarna Pay Later</Link></li>
              <li><Link to="/termservices" className="text-decoration-none">Terms of Services</Link></li>
              <li><Link to="/refund" className="text-decoration-none">Refund Policy</Link></li>
              </ul>
            </div>
            {/* col 3 */}
            {/* col 4 */}
            <div className="col-lg-4">
              <h5 className="text-uppercase">Subscribe to our Newsletter</h5>
              <form className="position-relative">
                <div className="input-group my-3">
                  <input type="email" className="form-control text-uppercase rounded-pill border-0" placeholder="Your Email Address" />
                  <button type="submit" className="btn rounded-pill text-uppercase">Subscribe</button>
                </div>
              </form>
            </div>
            {/* col 4 */}
          </div>
          {/*-- Footer Widget --*/}
          {/* Icons section */}
          <div className="row align-items-center mt-4 mb-3 gy-3 gy-lg-0">
            {/* payment Icons */}
            <div className="col-lg-4">
              <div className="payment-icons">
                <ul className="payment-icons list-unstyled d-flex m-0 gap-2 align-items-center justify-content-center">
                  <li><a href="/"><img src={visa} alt="...." className="img-fluid" /></a></li>
                  <li><a href="/"><img src={master} alt="...." className="img-fluid" /></a></li>
                  <li><a href="/"><img src={paypal} alt="...." className="img-fluid" /></a></li>
                  <li><a href="/"><img src={american} alt="...." className="img-fluid" /></a></li>
                  <li><a href="/"><img src={visa2} alt="...." className="img-fluid" /></a></li>
                  <li><a href="/"><img src={maestro} alt="...." className="img-fluid" /></a></li>
                  <li><a href="/"><img src={gpay} alt="...." className="img-fluid" /></a></li>
                  <li><a href="/"><img src={apppay} alt="...." className="img-fluid" /></a></li>
                  <li><a href="/"><img src={klaran} alt="...." className="img-fluid" /></a>
                  </li>
                </ul></div>
            </div>
            {/* payment Icons */}
            {/* Social Icons */}
            <div className="col-lg-4">
              <div className="social-icons d-flex gap-2 align-items-center justify-content-center">
                <ul className="list-unstyled d-flex m-0 gap-2">
                  <li><a href="https://www.facebook.com/Wholesaleshopping.co.uk/" rel='noreferrer' target="_blank"><img src={facbook} alt="..." className="img-fluid" /></a>
                  </li>
                  <li><a href="https://www.instagram.com/wholesaleshopping.co.uk/" rel='noreferrer' target="_blank"><img src={insta} alt="..." className="img-fluid" /></a></li>
                  <li><a href="https://twitter.com/WholesaleSO" rel='noreferrer' target="_blank"><img src={twitter} alt="..." className="img-fluid" /></a></li>
                  <li><a href="https://www.pinterest.com/wholesaleshopping/italian-fashion-wholesale-clothing/" rel='noreferrer' target="_blank"><img src={pinterest} alt="..." className="img-fluid" /></a>
                  </li>
                  <li><a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F10673236%2F" rel='noreferrer' target="_blank"><img src={linkedin} alt="..." className="img-fluid" /></a>
                  </li>
                  <li><a href="https://www.tiktok.com/@wholesaleshopping.com" rel='noreferrer' target="_blank"><img src={tiktok} alt="..." className="img-fluid" /></a></li>
                  <li><a href="https://www.youtube.com/user/WholesaleShopping" rel='noreferrer' target="_blank"><img src={youtube} alt="..." className="img-fluid" /></a></li>
                </ul>
              </div>
            </div>
            {/* Social Icons */}
            {/* Apps Icons */}
            <div className="col-lg-4">
              <div className="app-links d-flex gap-1 justify-content-center">
                <a href="https://play.google.com/store/apps/details?id=com.shopify.wholesaleshopping&hl=en" rel='noreferrer' target="_blank"><img src={appstore} alt="..." className="img-fluid" /></a>
                <a href="https://apps.apple.com/app/wholesale-shopping-b2b-traders/id1547019574" rel='noreferrer' target="_blank"><img src={playstore} alt="..." className="img-fluid" /></a>
              </div>
            </div>
            {/* Apps Icons */}
          </div>
          {/* Icons section */}
          {/*--- CopyRight ---*/}
          <div className="copyright-section py-3 border-top">
            <div className="text-center">
              <p className="m-0">© Copyright 2023. All Rights Reserved By www.wholesaleshopping.co.uk</p>
            </div>
          </div>
          {/*--- CopyRight ---*/}
        </div>
        {/*-- backToTop Button Start ---*/}
        <button className="scrollToTopBtn"><i className="fa-solid fa-sort-up" /></button>
        {/*-- backToTop Button End ---*/}
      </footer>
      {/*------------ Footer Section End ------------*/}
 
    </div>
  )
}

export default Footer
