import React from 'react'
import { Link } from 'react-router-dom'

function ContactForm() {
  return (
    <div>
  {/* <!------- Footer pages Nav BreadCrumb Start -------> */}
<div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>Contact us</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}
      <div>
        {/*---- Page Content Start -----*/}
        <div className="container-fluid fpage_content px-3 px-sm-5 pb-5">
          <div className="row contact-us gy-4 gy-lg-0">
            <div className="col-lg-6 pe-lg-5">
              <h3 className="fw-bold mb-4 text-uppercase">Contact Us</h3>
              <form action className="form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name<span className="text-danger">*</span></label>
                  <input type="text" className="form-control rounded-pill" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email<span className="text-danger">*</span></label>
                  <input type="email" className="form-control rounded-pill" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNum" className="form-label">Your Phone Number<span className="text-danger">*</span></label>
                  <input type="text" className="form-control rounded-pill" id="phoneNum" placeholder="Your Phone Number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject<span className="text-danger">*</span></label>
                  <input type="text" className="form-control rounded-pill" id="subject" placeholder="Subject" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Your Message<span className="text-danger">*</span></label>
                  <textarea type="text" className="form-control rounded-4" id="message" rows={5} placeholder="Write Your Message Here...." defaultValue={""} />
                </div>
                <div className="mb-3 text-center">
                  <button className="btn rounded-pill text-uppercase">Send a Message</button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h3 className="fw-bold mb-4 text-uppercase">GET IN TOUCH</h3>
              <p>Ask us a question and we will write back to you promptly! Simply fill out the form below and click send E-mail. Items marked with an asterisk (*) are required fields. Thanks!!!</p>
              <h5 className="fw-bold mb-4 text-uppercase">MANCHESTER OFFICE:</h5>
              <h6 className="fw-semibold"><i className="fa-solid fa-location-dot me-2" /> Trading Address:</h6>
              <p>36C Broughton Street, Manchester, M8 8NN, United Kingdom</p>
              <h6 className="fw-semibold"><i className="fa-brands fa-whatsapp me-2" /> Join WhatsAPP:</h6>
              <p><a  rel="noreferrer" href="https://wa.me/447482071701" target="_blank">+44 7482 071701</a> <i className="bi bi-alarm me-1" /> 9AM to 6PM Chat</p>
              <h6 className="fw-semibold"><i className="fa-solid fa-envelope me-2" /> Support Email:</h6>
              <p><a href="mailto:sales@wholesaleshopping.co.uk">sales@wholesaleshopping.co.uk</a></p>
              <h6 className="fw-semibold">Company Registration:</h6>
              <p>8395791</p>
              <h6 className="fw-semibold">VAT Number:</h6>
              <p>GB 188546653</p>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9493.782176185512!2d-2.241786!3d53.496236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f3fcbbbb4789d6a!2sWholesale%20Shopping!5e0!3m2!1sen!2sus!4v1671447432998!5m2!1sen!2sus" width="100%" height="500px" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        {/*---- Page Content End -----*/}
      </div>
    
    </div>
  )
}

export default ContactForm
