import React from 'react'
import { Link } from 'react-router-dom'
import login from "../../../images/wishlist/login.png"
function WishlistBanner() {
  return (
    <div>
              {/* <!------- Footer pages Nav BreadCrumb Start -------> */}
        <div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>Wishlist</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}
   

      {/*---- Page Content Start -----*/}
      <div className="wishlist-container container-fluid px-3 px-sm-5 pb-5">
        {/* wishlist header */}
        <div className="wishlist-header border-bottom py-2">
          <div className="row">
            <div className="col-auto">
              <h4 className="fw-bold text-uppercase">My Wishlist</h4>
            </div>
            <div className="col-auto ms-auto">
              {/* Button trigger modal */}
              <button className="btn" data-bs-toggle="modal" data-bs-target="#guestshopper_modal">
                <img src={login} alt="...." className="img-fluid me-2" />
                Guest Shopper
              </button>
              {/* Modal */}
              <div className="modal fade" id="guestshopper_modal" tabIndex={-1} aria-labelledby="guestshopper_modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content py-2 px-3">
                    <div className="modal-header border-0 pb-0">
                      <h1 className="modal-title fs-4 fw-semibold" id="guestshopper_modalLabel">Save Your
                        List</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <div className="first_div">
                        <p className="mb-4">You are currently shopping anonymously. Either log in or
                          save your wishlist items by entering your email address.</p>
                        <a href="login.html"><button className="btn rounded-pill w-100 fw-semibold text-uppercase mb-4 login-btn">Login</button></a>
                        <button className="btn rounded-pill w-100 fw-semibold text-uppercase mb-4 saveList-btn">Save
                          List</button>
                      </div>
                      <div className="second_div">
                        <p>Please enter your email address. You will be sent a validation link to
                          click on.</p>
                        <div className="mb-3">
                          <label htmlFor="fname" className="form-label">First Name</label>
                          <input type="email" className="form-control rounded-pill" id="fname" placeholder="First Name (Optional)" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="lname" className="form-label">Last Name</label>
                          <input type="email" className="form-control rounded-pill" id="lname" placeholder="Last Name (Optional)" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email address <span className="text-danger">*</span></label>
                          <input type="email" className="form-control rounded-pill" id="email" placeholder="Enter Your Email Address" />
                        </div>
                        <small><span className="text-danger">*</span> -Required
                          Fields</small>
                        <div className="row my-3">
                          <div className="col-6">
                            <button className="btn rounded-pill text-uppercase back-btn w-100">Back</button>
                          </div>
                          <div className="col-6">
                            <button className="btn rounded-pill text-uppercase save-btn w-100">Save List</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* wishlist header */}
    
      </div>
      {/*---- Page Content End -----*/}
  
    </div>
  )
}

export default WishlistBanner
