import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../../images/giveAwaypage/Giveaway_Banner_1.jpg"
function GiveawwayForm() {
  return (
    <div>
       {/* <!------- Footer pages Nav BreadCrumb Start -------> */}
<div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>Give Away</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}


      {/*---- Page Content Start -----*/}
      <div className="container-fluid fpage_content px-3 px-sm-5 pb-5">
        <h3 className="fw-bold mb-4 text-center">Give Away Form</h3>
        <p className="mb-5">Select your favorite product from the navigation bar, add product links or details in the message box.
          Leave us your name, email, phone number, and profile link. We’ll send you the product. You’ll take a
          photo with the product, post it on social media, tag us with the image on social media, give us the
          reviews, like and follow our page.</p>
        <div className="row give-away gy-5 gy-lg-0 mb-5">
          <div className="col-lg-6 pe-lg-4">
            <img src={img} alt="..." className="img-fluid" />
          </div>
          <div className="col-lg-6 ps-lg-4">
            <form action className="form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">Your Name<span className="text-danger">*</span></label>
                  <input type="text" className="form-control rounded-pill" id="name" placeholder="Your Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Your Email<span className="text-danger">*</span></label>
                  <input type="email" className="form-control rounded-pill" id="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label htmlFor="phoneNum" className="form-label">Your Phone Number<span className="text-danger">*</span></label>
                  <input type="text" className="form-control rounded-pill" id="phoneNum" placeholder="Your Phone Number" />
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="insta-link" className="form-label">Instagram Profile Link<span className="text-danger">*</span></label>
                  <input type="text" className="form-control rounded-pill" id="insta-link" placeholder="Instagram Profile Link" />
                </div>
              </div>
              <div className="row mb-4 gy-4 gy-md-0">
                <div className="col-6 col-md-3">
                  <h6 className="fw-semibold mb-3">Facebook</h6>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="facebookpost" />
                    <label className="form-check-label" htmlFor="facebookpost">Post</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="facebookstory" />
                    <label className="form-check-label" htmlFor="facebookstory">Story</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="facebooktag" />
                    <label className="form-check-label" htmlFor="facebooktag">Tag</label>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <h6 className="fw-semibold mb-3">Instagram</h6>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="Instapost" />
                    <label className="form-check-label" htmlFor="Instapost">Post</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="Instastory" />
                    <label className="form-check-label" htmlFor="Instastory">Story</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="Instatag" />
                    <label className="form-check-label" htmlFor="Instatag">Tag</label>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <h6 className="fw-semibold mb-3">Tikotok</h6>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="tikotokpost" />
                    <label className="form-check-label" htmlFor="tikotokpost">Video</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="tikotokstory" />
                    <label className="form-check-label" htmlFor="tikotokstory">Story</label>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <h6 className="fw-semibold mb-3">Reviews</h6>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="trustpilot" />
                    <label className="form-check-label" htmlFor="trustpilot">Trustpilot</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="googleReview" />
                    <label className="form-check-label" htmlFor="googleReview">Google</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="mobileReview" />
                    <label className="form-check-label" htmlFor="mobileReview">Mobile App</label>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Your Message<span className="text-danger">*</span></label>
                <textarea type="text" className="form-control rounded-4" id="message" rows={5} placeholder="Write Your Message Here...." defaultValue={""} />
              </div>
              <div className="row gy-3 gy-sm-0 justify-content-sm-between">
                <div className="col-sm-auto">
                  <button className="btn rounded-pill text-uppercase">Join Now as a Influencer</button>
                </div>
                <div className="col-sm-auto">
                  <button className="btn rounded-pill text-uppercase">Send a Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>   
       
      </div>
      {/*---- Page Content End -----*/}

        
    </div>
  )
}

export default GiveawwayForm
