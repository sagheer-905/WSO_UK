import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/homepage/wso-logo.png'
import usericon from '../../../images/marketplace/usericon.png'
function Header() {
  return (
    <div>


      {/*--------- Header Start ----------*/}
      <header className="container-fluid marketplace-header px-sm-4 px-lg-5">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="..." className="img-fluid" />
          </a>
          <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-lg-4 ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#whyWS">Why WS?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#getStarted">Get Started</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://uk.trustpilot.com/review/wholesaleshopping.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount" rel='noreferrer' target="_blank">Testimonials</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sellerlist" rel='noreferrer' target="_blank">Our Partners</Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link" to='/registration' >Register</Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link" to='/login' >Login</Link>
              </li>
              <li className="nav-item dropdown d-none d-lg-block">
                <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={usericon} alt="..." className="img-fluid" />
                </a>
                <ul className="dropdown-menu text-center">
                  <li><Link className="dropdown-item" to='/registration' >Register</Link></li>
                  <li><Link className="dropdown-item" to='/login' >Login</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/*--------- Header End ----------*/}

    </div>
  )
}

export default Header
