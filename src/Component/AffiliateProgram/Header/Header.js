import React from 'react'
import logo from "../../../images/homepage/wso-logo.png"
import img from "../../../images/affiliate/usericon.png"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      {/*------ Affiliate Header Start-----*/}
<header className="affiliate_header">
  <div className="container">
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/AffiliateProgram">
        <img src={logo} alt="...." className="img-fluid" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/collection">New In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">Loungewear</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">Dresses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">Tops</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">Jewellery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">Trainers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">Italy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">China</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">Turkey</Link>
          </li>
          <li className="nav-item d-lg-none">
            <Link className="nav-link" to="affiliate-register.html">Register</Link>
          </li>
          <li className="nav-item d-lg-none">
            <Link className="nav-link" to="affiliate-login.html">Login</Link>
          </li>
        </ul>
        <div className="dropdown d-none d-lg-block">
          <button className="btn" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={img} alt="..." className="img-fluid" />
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/registration">Register</Link></li>
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>
{/*------ Affiliate Header End-----*/}

    </div>
  )
}

export default Header
