import React from 'react'
import logo from "../../../images/homepage/wso-logo.png"
import img1 from "../../../images/cartpage/p1.jpg"
import img2 from "../../../images/cartpage/p2.jpg"
import img3 from "../../../images/cartpage/p3.jpg"
import { Link } from 'react-router-dom'
function CheackoutForm() {
  return (
    <div>


      
        {/*----- Checkout Container Start ------*/}
        <div className="checkout-container container-fluid px-0 px-lg-3">
          <div className="row">
            {/* left Column */} 
            <div className="col-lg-7 py-4 p-lg-5 border-end">
              <div className="shipping_details ps-xl-5">
                {/* logo */}
                <div className="logo px-4 px-md-5 px-lg-0 mb-4">
                  <Link to="/"><img src={logo} alt="..." className="img-fluid" /></Link>
                </div>
                {/* logo */}
                {/* mobile order summary dropdown */}
                <div className="dropdown d-lg-none order-dropdown">
                  <button className="btn order-dropbtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="d-flex justify-content-between px-4 px-md-5">
                      <span className="dropdown-toggle mSummary"><i className="bi bi-cart2 me-1" /> Show order summary</span>
                      <span>£451.00</span>
                    </span>
                  </button>
                  <div className="dropdown-menu">
                    <div className="order-summary p-lg-0 py-4 px-4 px-md-5">
                      <div className="checkout_products">
                        <div className="row align-items-center mb-4 mx-0">
                          <div className="col-3 col-sm-2 position-relative">
                            <img src={img1} alt='...' className="img-fluid" />
                            <span className="qty-count">1</span>
                          </div>
                          <div className="col-6 col-sm-8">
                            <p className="title mb-0">Coloured Stripe Knit Tassel Scarf</p>
                            <p className="color_title m-0">Mix</p>
                          </div>
                          <div className="col-3 col-sm-2">
                            <p className="price">£45.00</p>
                          </div>
                        </div>
                        <div className="row align-items-center mb-4 mx-0">
                          <div className="col-3 col-sm-2 position-relative">
                            <img src={img2} alt='...' className="img-fluid" />
                            <span className="qty-count">1</span>
                          </div>
                          <div className="col-6 col-sm-8">
                            <p className="title mb-0">Abstract Animal Print Drawstring Top</p>
                            <p className="color_title m-0">Rust</p>
                          </div>
                          <div className="col-3 col-sm-2">
                            <p className="price">£10.00</p>
                          </div>
                        </div>
                        <div className="row align-items-center mb-4 mx-0">
                          <div className="col-3 col-sm-2 position-relative">
                            <img src={img3} alt='...' className="img-fluid" />
                            <span className="qty-count">1</span>
                          </div>
                          <div className="col-6 col-sm-8">
                            <p className="title mb-0">Faux Leather Ankle Heel Boots</p>
                            <p className="color_title m-0">Beige</p>
                          </div>
                          <div className="col-3 col-sm-2">
                            <p className="price">£246.00</p>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="discount-code py-2">
                        <div className="row gy-3 gy-sm-0">
                          <div className="col-sm-9">
                            <div className="form-floating">
                              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                              <label htmlFor="floatingInput">Discount Code</label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <button className="btn w-100 h-100 rounded-pill discount-btn">Apply</button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="subTotalprice d-flex justify-content-between mb-3">
                        <span className="fw-semibold text-uppercase">Subtotal</span>
                        <span>£301.00</span>
                      </div>
                      <div className="shippingCharges d-flex justify-content-between mb-3">
                        <span className="fw-semibold text-uppercase">Shipping</span>
                        <span className="text-end">Calculated at next step</span>
                      </div>
                      <div className="estimate-tax d-flex justify-content-between mb-3">
                        <span className="fw-semibold text-uppercase">Estimated taxes</span>
                        <span className="text-end">£150.00</span>
                      </div>
                      <hr />
                      <div className="OrderTotal d-flex justify-content-between">
                        <span className="fw-semibold text-uppercase">Total</span>
                        <span>£451.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* mobile order summary dropdown */}
                <div className="pt-4 px-4 px-md-5 p-lg-0">
                  {/* breadcrumb */}
                  <nav className="mb-4" >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="cartpage.html">Cart</a></li>
                      <li className="breadcrumb-item"><a href="/">Information</a></li>
                      <li className="breadcrumb-item"><a href="/">Shipping</a></li>
                      <li className="breadcrumb-item"><a href="/">Payment</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Review</li>
                    </ol>
                  </nav>
                  {/* breadcrumb */}
                  {/* Express Checkout */}
                  <div className="express-checkout">
                    <div className="express-heading heading mb-2">
                      <h6 className="fw-normal">Express Checkout</h6>
                    </div>
                    <div className="row justify-content-center align-items-center mb-3 gy-3 gy-md-0">
                      <div className="col-sm-4">
                        <button className="btn w-100 shopPay">
                          <svg preserveAspectRatio="xMidYMid" width={85} height={25} viewBox="0 0 424 102" fill="inherit" className="_39qGk" title="Shop Pay" style={{fill: 'white'}}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M204.916 30.1c3.978-4.92 10.15-8.998 17.52-8.998 16.544 0 29.576 13.696 29.565 30.595 0 17.61-13.096 30.64-28.81 30.64-8.355 0-14.75-4.277-17.087-7.845h-.222v25.864a.585.585 0 01-.586.589h-14.727a.598.598 0 01-.6-.587v-78.68c0-.16.064-.31.177-.422a.594.594 0 01.423-.175h13.763a.59.59 0 01.415.18c.11.11.17.26.17.418V30.1zm16.263 37.243a15.623 15.623 0 01-11.66-4.689 15.628 15.628 0 01-4.2-13.715 15.61 15.61 0 0115.831-12.812 15.345 15.345 0 0110.777 4.61 15.348 15.348 0 014.37 10.957 15.46 15.46 0 01-1.086 5.93 15.413 15.413 0 01-14.033 9.716z">
                            </path>
                            <path d="M109.306 32.87c-3.402-7.136-9.852-11.746-19.57-11.746a19.486 19.486 0 00-15.304 7.868l-.354.432V1.454a.604.604 0 00-.18-.43.603.603 0 00-.43-.18h-13.74a.61.61 0 00-.599.61v80.23a.595.595 0 00.596.598h14.717a.612.612 0 00.61-.598v-34.21c0-6.647 4.433-11.357 11.525-11.357 7.757 0 9.718 6.383 9.718 12.888v32.68a.599.599 0 00.6.597h14.683a.61.61 0 00.61-.598v-34.63c0-1.185 0-2.35-.155-3.48a30.623 30.623 0 00-2.726-10.704zm-73.48 11.89s-7.49-1.76-10.25-2.47c-2.76-.71-7.58-2.217-7.58-5.863 0-3.646 3.89-4.81 7.833-4.81 3.944 0 8.332.954 8.675 5.33a.63.63 0 00.631.575l14.505-.055a.636.636 0 00.456-.198.631.631 0 00.164-.467c-.898-14.008-13.187-19.017-24.523-19.017-13.44 0-23.27 8.865-23.27 18.64 0 7.136 2.016 13.83 17.873 18.483 2.782.81 6.56 1.862 9.863 2.78 3.967 1.11 6.105 2.783 6.105 5.42 0 3.06-4.43 5.186-8.786 5.186-6.305 0-10.782-2.338-11.148-6.538a.636.636 0 00-.632-.555l-14.472.067a.63.63 0 00-.632.653c.666 13.22 13.432 20.346 25.334 20.346 17.73 0 25.742-9.973 25.742-19.315.022-4.388-.987-14.384-15.89-18.196zm110.558-27.116c-13.73 0-20.578 4.666-26.074 8.4l-.167.11c-.283.195-.483.49-.56.823-.075.335-.02.687.15.984l5.43 9.355c.102.175.24.325.408.44a1.41 1.41 0 001.146.199c.192-.052.37-.146.52-.275l.433-.356c2.824-2.372 7.357-5.54 18.327-6.405 6.106-.49 11.38 1.107 15.27 4.742 4.278 3.945 6.838 10.316 6.838 17.043 0 12.378-7.292 20.157-19.005 20.312-9.653-.055-16.135-5.086-16.135-12.522 0-3.945 1.784-6.516 5.263-9.087.266-.19.454-.47.53-.788a1.356 1.356 0 00-.12-.94l-4.876-9.22a1.43 1.43 0 00-1.423-.734c-.19.025-.376.09-.54.19-5.474 3.247-12.19 9.186-11.824 20.6.443 14.528 12.522 25.62 28.224 26.075h1.863c18.66-.61 32.136-14.46 32.136-33.244 0-17.242-12.568-35.704-35.817-35.704z">
                            </path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M282.375 1.044h125.652c8.672 0 15.703 7.03 15.703 15.703V85.54c0 8.672-7.03 15.702-15.703 15.702H282.375c-8.672 0-15.702-7.03-15.702-15.702V16.747c0-8.673 7.03-15.703 15.702-15.703zm28.19 54.488c10.484 0 17.986-7.647 17.986-18.362 0-10.66-7.5-18.35-17.983-18.35H292.06a.827.827 0 00-.831.83v50.786c0 .22.09.43.245.585a.836.836 0 00.584.248h6.96a.827.827 0 00.829-.831V56.363a.832.832 0 01.831-.831h9.885zm-.53-29c5.695 0 9.895 4.5 9.895 10.638 0 6.15-4.2 10.638-9.896 10.638h-9.352a.829.829 0 01-.832-.82V27.363a.844.844 0 01.832-.831h9.352zM330.6 61.526a9.903 9.903 0 01.988-4.757 9.86 9.86 0 013.136-3.71c2.704-2.03 6.892-3.08 13.11-3.325l6.592-.222v-1.95c0-3.89-2.615-5.54-6.815-5.54-4.197 0-6.846 1.484-7.466 3.91a.803.803 0 01-.798.577h-6.505a.802.802 0 01-.634-.277.81.81 0 01-.196-.664c.974-5.764 5.74-10.14 15.9-10.14 10.794 0 14.683 5.02 14.683 14.604V70.4a.792.792 0 01-.06.32.822.822 0 01-.77.523h-6.572a.842.842 0 01-.59-.244.845.845 0 01-.24-.595v-1.52a.634.634 0 00-.09-.38.633.633 0 00-.3-.25.644.644 0 00-.39-.02.626.626 0 00-.327.22c-1.962 2.137-5.153 3.69-10.24 3.69-7.457.02-12.41-3.88-12.41-10.617zm23.826-4.433V55.52l-8.532.444c-4.5.232-7.126 2.105-7.126 5.252 0 2.848 2.405 4.433 6.594 4.433 5.696 0 9.064-3.083 9.064-8.546v-.01zm14.772 23.626v5.927a.855.855 0 00.609.864c1.16.317 2.357.463 3.558.434 6.37 0 12.19-2.327 15.514-11.392l14.625-39.018a.846.846 0 00-.113-.753.848.848 0 00-.675-.354H395.9a.831.831 0 00-.798.577l-8.056 24.71a.832.832 0 01-.314.4c-.143.1-.312.152-.485.152s-.34-.053-.484-.15a.886.886 0 01-.313-.4l-9.286-24.78a.849.849 0 00-.31-.39.847.847 0 00-.477-.152h-6.648a.844.844 0 00-.786 1.109L381.62 72.63a.82.82 0 010 .565l-.432 1.363a7.878 7.878 0 01-7.945 5.621 16.409 16.409 0 01-3.048-.29.847.847 0 00-.996.834z">
                            </path>
                          </svg>
                        </button>
                      </div>
                      <div className="col-sm-4">
                        <button className="btn w-100 paypal">
                          <svg xmlns="http://www.w3.org/2000/svg" width={85} height={25} viewBox="0 0 101 32" preserveAspectRatio="xMinYMin meet">
                            <path fill="/003087" d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z" />
                            <path fill="/003087" d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z" />
                            <path fill="/003087" d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z" />
                            <path fill="/009cde" d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z" />
                            <path fill="/009cde" d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z" />
                            <path fill="/009cde" d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z" />
                          </svg>
                        </button>
                      </div>
                      <div className="col-sm-4">
                        <button className="btn w-100 gPay">
                          <svg xmlns="http://www.w3.org/2000/svg" width={41} height={17}>
                            <script xmlns /><g fill="none" fillRule="evenodd"><path d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zm7.668 2.287c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568m11.853.262l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z" fill="/FFF" /><path d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944" fill="/4285F4" /><path d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703" fill="/34A853" /><path d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z" fill="/FABB05" /><path d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774" fill="/E94235" /></g></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Express Checkout */}
                  {/* shipping form */}
                  <div className="shipping-form">
                    <div className="shipping-heading heading mb-2">
                      <h6 className="fw-normal">OR</h6>
                    </div>
                    {/* contact info */}
                    <div className="contact-info mb-5">
                      <form action className="form">
                        <div className="row">
                          <div className="col-sm-6">
                            <h5>Contact Information</h5>
                          </div>
                          <div className="col-sm-6 text-end">
                            <p>Already have an account? <a href="login.html">Log in</a></p>
                          </div>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Email me with news and offers
                          </label>
                        </div>
                      </form>
                    </div>
                    {/* contact info */}
                    {/* shipping address */}
                    <div className="shipping-address">
                      <h5 className="mb-3">Shipping Address</h5>
                      <form className="form" action>
                        <div className="form-floating mb-3">
                          <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>United Kingdom</option>
                          </select>
                          <label htmlFor="floatingSelect">Country/Region</label>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                              <label htmlFor="floatingInput">First Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                              <label htmlFor="floatingInput">Last Name</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label htmlFor="floatingInput">Company Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label htmlFor="floatingInput">Apartment, suite, etc. (optional)</label>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                              <label htmlFor="floatingInput">City</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                              <label htmlFor="floatingInput">Post Name</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label htmlFor="floatingInput">Phone</label>
                        </div>
                      </form>
                      <div className="row pt-4 pb-5 align-items-center gy-3 gy-md-0">
                        <div className="col-md-6 text-center text-md-start">
                          <a href="cartpage.html"><button className="btn rounded-pill returnCart-btn"><i className="fa-solid fa-chevron-left" />
                              Return to Cart</button></a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                          <a href="/"><button className="btn rounded-pill shipping-btn">Continue to Shipping</button></a>
                        </div>
                      </div>
                    </div>
                    {/* shipping address */}
                  </div>
                  {/* shipping form */}
                </div>
                {/* footer links */}
                <div className="checkout-footerLinks border-top d-flex gap-3 flex-wrap pt-3 px-4 px-md-5 px-lg-0">
                  {/* refund policy modal start */}
                  <a href="/" type="button" data-bs-toggle="modal" data-bs-target="/refundpolicy">Return Policy</a>
                  {/* Modal */}
                  <div className="modal fade" id="refundpolicy" tabIndex={-1} aria-labelledby="refundpolicyLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header px-4">
                          <h1 className="modal-title fs-3" id="refundpolicyLabel">Refund Policy</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body px-4">
                          <h4 className="fw-bold mb-3">Return of Goods</h4>
                          <p>Upon receiving notice, we will contact you and provide details of where you must return the Goods and
                            other relevant instructions. You must then return the Goods to us without delay and at the latest within
                            <span className="fw-bold">14-calendar days for UK orders</span> and <span className="fw-bold">14 days for international orders</span> of notifying us of your
                            cancellation.</p>
                          <p>You must return the Goods at your own risk and at your own cost unless we offer to pay the cost of return. We reserve the right, at our option, to collect the Goods from you. If we wish to collect the Goods, we will notify you of when we will collect them. We may charge you for the cost of collecting the Goods and may deduct this from any sum owed by us to you.</p>
                          <p>You must return the goods to us in the same condition in which you received them with the original packaging and the original invoice.</p>
                          <p>If the value of the Goods is reduced because of your handling of them beyond what is necessary to determine the nature, characteristics or functioning of the Goods, we will be entitled to claim this reduction in value from you and to deduct it from any money which you have paid us.</p>
                          <p><span className="fw-bold">WE DO NOT ACCEPT RETURNS ON SALE GOODS UNLESS FAULTY.</span> If faulty, please refer to our standard return policy as stated above.</p>
                          <p>Always return to our <span className="fw-bold">head office</span> located as follows:</p>
                          <h5 className="fw-bold mb-3">Wholesale Shopping</h5>
                          <p><span className="fw-bold">Address: </span>36C Broughton Street, Manchester, M8 8NN, United Kingdom</p>
                          <p>Ensure you include a note specifying your Name, the reason for the return and order no.</p>
                          <p>If you have any queries, feel free to contact us directly on:</p>
                          <ul className="list-unstyled">
                            <li><span className="fw-bold">Write on WhatsApp: </span><a rel="noreferrer" href="https://wa.me/447482071701" target="_blank">+44 7482 071701</a></li>
                            <li><span className="fw-bold">Email: </span><a href="mailto:sales@wholesaleshopping.co.uk">Sales@wholesaleshopping.co.uk</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* refund policy modal end */}
                  {/* Shipping Policy modal start */}
                  <a href="/" type="button" data-bs-toggle="modal" data-bs-target="/shippingpolicy">Shipping Policy</a>
                  {/* Modal */}
                  <div className="modal fade" id="shippingpolicy" tabIndex={-1} aria-labelledby="shippingpolicyLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header px-4">
                          <h1 className="modal-title fs-3" id="shippingpolicyLabel">Shipping Policy</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body px-4">
                          <h4 className="fw-bold mb-3">Pre Order</h4>
                          <p>We endeavour to fulfil all pre-order items within the prescribed timeframe of 1-2 weeks. This period may be subject to change and cancellation as pre-order items are not entirely guaranteed since these are pre-production lines. In the instance where you have purchased a pre-order item that has been cancelled, please be advised we will issue a full refund. This does not affect your statutory rights.</p>
                          <h4 className="fw-bold mb-3">Delivery</h4>
                          <p>All orders placed before 02 PM Monday to Friday will be dispatched for delivery on the same day, any orders placed after 02 PM will be dispatched the following working day.</p>
                          <p>All orders received on the weekend will be dispatched the following Monday. Where items are out of stock, we will endeavour to contact you on the same day to discuss any variations. Excluding bank holidays.</p>
                          <p>All orders received on the weekend will be dispatched the following Monday. Where items are out of stock, we will endeavour to contact you on the same day to discuss any variations. Excluding bank holidays.</p>
                          <h4 className="fw-bold mb-3">UK Delivery (1 - 2 Days)</h4>
                          <p>Orders placed before 02.00 PM Monday to Thursday are eligible for next working day delivery, however, this will depend on the service times in your area.</p>
                          <p>Orders placed on a Friday before 02:00 PM will be delivered on Monday</p>
                          <p>Orders placed Saturday to Sunday will be delivered Tuesday.</p>
                          <p>UK Delivery Charges: Orders Shipping Price:</p>
                          <p>Order Value Delivery Time Cost</p>
                          <p>£0 - £200 UK Standard Next Day Delivery £12.99</p>
                          <p>£200 - £400 UK Standard Next Day Delivery £9.99</p>
                          <p>£200 - Above UK Standard Next Day Delivery FREE</p>
                          <p>The prices stated represent our standard box weight of 15kg and dimensions: Height: 23.5-inch Length: 19.5-inch Width: 16 inches. Please note additional fees may apply where box capacity is not met. In this case, a member of our customer care team will contact you for payment before sending an order.</p>
                          <h4 className="fw-bold mb-3">Saturday Delivery</h4>
                          <p>Available from £30.00 Order by 2:00 PM</p>
                          <h4 className="fw-bold mb-3">The Highlands &amp; Islands of Scotland</h4>
                          <p>Orders Shipping Price: Postcodes IV, HS, KA27-28, KW, PA20-49, PA60-78, PH17-26, PH30- 44, PH49-50, ZE</p>
                          <p>£24.99 on orders over £200.00</p>
                          <p>Under £200 delivery is £29.99</p>
                          <p>Free on orders over £400</p>
                          <p>Northern Ireland, Isle of Man &amp; Isles of Scilly</p>
                          <p>Orders Shipping Price: Postcodes BT, IM, TR21-25</p>
                          <p>Under £200 delivery is £19.99</p>
                          <p>Free on orders over £400.00</p>
                          <p>UK Channel Island &amp; Northern Ireland delivery details: Orders placed before 02.00 PM estimated 1 - 2 working delivery days.</p>
                          <h4 className="fw-bold mb-3">UK Channel Islands &amp; Northern Ireland Delivery Charges:</h4>
                          <p>Orders Shipping Price:</p>
                          <p>Order Value Cost</p>
                          <p>£0 - £200 £29.99</p>
                          <p>£200 - £400 £39.99</p>
                          <p>EU Delivery (1-3 Working Days)</p>
                          <h4 className="fw-bold mb-3">Zone 1:</h4>
                          <p>Orders Shipping Price: Germany, Belgium, Luxembourg, Denmark, Chanel Islands, Netherlands</p>
                          <p>£14.99 on orders up to £399</p>
                          <p>Free on orders over £400</p>
                          <h4 className="fw-bold mb-3">Zone 2:</h4>
                          <p>Orders Shipping Price: France, Irish Republic, Italy</p>
                          <p>£14.99 on orders up to £399</p>
                          <p>Free on orders over £400</p>
                          <h4 className="fw-bold mb-3">Zone 3:</h4>
                          <p>Orders Shipping Price: Austria, Czech Republic, Croatia, Slovakia, Estonia, Spain, Finland, Hungary, Latvia, Lithuania, Poland, Portugal, Slovenia, Sweden, Switzerland</p>
                          <p>£19.99 on orders below £300</p>
                          <p>£14.99 on orders up to £399</p>
                          <p>Free on orders over £400</p>
                          <h4 className="fw-bold mb-3">Zone 4:</h4>
                          <p>Orders Shipping Price: Greece, Azores, Balearic Islands, Madeira, Sardinia, Sicily, Bulgaria, Romania, Turkey</p>
                          <p>£29.99 on orders up to £399</p>
                          <p>Free on orders over £400</p>
                          <p>Free EU shipping applies to selected countries with orders of £400 and above covering 1 box ONLY. Additional fees will apply for orders which use more than 1 box capacity.</p>
                          <h4 className="fw-bold mb-3">The Following Zones Are Not Applicable for FREE Shipping:</h4>
                          <h4 className="fw-bold mb-3">Zone 5:</h4>
                          <p>Orders Shipping Price: Andorra, Canary Islands, Gibraltar, Bosnia, Iceland, Norway, Serbia, Vatican City State, Malta, Cyprus</p>
                          <p>Order Value Cost</p>
                          <p>£0.00 - £399 £79.99</p>
                          <p>£400 - £800 £94.99</p>
                          <p>Rest of the World (4 - 7 Working Days)</p>
                          <h4 className="fw-bold mb-3">International Zone 1:</h4>
                          <p>Orders Shipping Price: USA and Canada</p>
                          <p>Order Value Cost</p>
                          <p>£0.00 – £200.00 £59.99</p>
                          <p>£201.00 – £400.00 £89.99</p>
                          <h4 className="fw-bold mb-3">International Zone 2:</h4>
                          <p>Orders Shipping Price: Australia and New Zealand</p>
                          <p>Order Value Cost</p>
                          <p>£0.00 – £200.00 £79.99 / £99.99</p>
                          <p>£201.00 – £500.00 £110.99 / £140.99</p>
                          <h4 className="fw-bold mb-3">International Zone 3:</h4>
                          <p>Orders Shipping Price: South Africa, Central America, and Belize</p>
                          <p>Order Value Cost</p>
                          <p>£0.00 – £200.00 £110.99</p>
                          <p>£201.00 – £500.00 £140.99 </p>
                          <h4 className="fw-bold mb-3">Click &amp; Collect:</h4>
                          <p>We offer a convenient Click &amp; Collect service from our showrooms in Manchester. This service is completely free - simply order online and allow up to 3-4 hours for your order to be picked. Click &amp; Collect is available from Monday-Friday 09 am to 06 pm, please bring some proof of ID with you verifying your name and address, along with confirmation of your order which will be sent to your email when you come to collect.</p>
                          <p>We also offer a simple buy-over-the-counter service from the Manchester showroom, so feel free to have a browse whilst you’re there. Our address &amp; telephone no. is as follows:</p>
                          <ul className="list-unstyled">
                            <li><span className="fw-bold">Wholesale Shopping</span></li>
                            <li>36C Broughton Street,</li>
                            <li>M8 8NN, Manchester,</li>
                            <li>United Kingdom</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li><span className="fw-bold">Company Registration: </span>8395791</li>
                            <li><span className="fw-bold">VAT Number: </span>GB188546653</li>
                          </ul>
                          <p>
                            <span className="fw-bold">Join What’s APP: </span> <a href="https://wa.me/447482071701" rel="noreferrer" target="_blank">+44 7482 071701</a>
                          </p>
                          <p>
                            <span className="fw-bold">Support Email: </span> <a href="mailto:sales@wholesaleshopping.co.uk">sales@wholesaleshopping.co.uk</a>
                          </p>
                          <h4 className="fw-bold mb-3">VAT Charges</h4>
                          <p>When registering your account online please ensure you have quoted your VAT registration number.
                            For EU orders please provide your VAT number on checkout otherwise our processing system will automatically charge VAT calculated at the destination country's standard rate.</p>
                          <p>If you have any questions, please contact us at <a href="mailto:sales@wholesaleshopping.co.uk">sales@wholesaleshopping.co.uk</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Shipping Policy modal end */}
                  {/* Privacy Policy modal start */}
                  <a href="/" type="button" data-bs-toggle="modal" data-bs-target="/privacypolicy">Privacy Policy</a>
                  {/* Modal */}
                  <div className="modal fade" id="privacypolicy" tabIndex={-1} aria-labelledby="privacypolicyLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header px-4">
                          <h1 className="modal-title fs-3" id="privacypolicyLabel">Privacy Policy</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body px-4">
                          <p>Your privacy is of the highest importance to us, and we promise never to release your details to any
                            outside company for mailing or marketing purposes. When you purchase from our website, we collect
                            certain personal information from you (for example your name, email address, payment address, and
                            details). All such information is held on secure servers. Our company complies fully with all applicable
                            Data Protection and consumer legislation and will treat all your personal information as fully
                            confidential.</p>
                          <p>To serve you best, we use Barclaycard and PayPal to process credit card transactions and order
                            fulfillment. They receive the information needed to verify and authorize your payment card and to
                            process your order. All such organizations are under strict obligation to keep your personal information
                            private.</p>
                          <p>This privacy policy sets out how our company uses and protects any information that you give us when you
                            use this website. We are committed to ensuring that your privacy is protected. If we ask you to provide
                            certain information by which you can be identified when using this website, then you can be assured that
                            it will only be used by this privacy statement. We may change this policy from time to time by updating
                            this page. You should check this page from time to time to ensure that you are happy with any changes.
                          </p>
                          <p>Our company complies fully with all applicable Data Protection and consumer legislation and will treat
                            all your personal information completely confidential. Our data protection officer is:</p>
                          <ul className="list-unstyled">
                            <li><span className="fw-bold">Name:</span> M Naveed</li>
                            <li><span className="fw-bold">Email: </span><a href="mailto:nav@wholesaleshopping.co.uk">nav@wholesaleshopping.co.uk</a></li>
                          </ul>
                          <p>We are registered with <a href="https://ico.org.uk/ESDWebPages/Entry/ZA364694" rel="noreferrer" target="_blank">ICO</a> (Information Commissioner's Office), the UK’s independent
                            authority set up to
                            uphold information rights in the public interest, promoting openness by public bodies and data privacy
                            for individuals. On May 25, 2018, a new European Union (EU) data protection law, the General Data
                            Protection Regulation (GDPR), takes effect. The <span className="fw-bold">GDPR</span> gives individuals in
                            the EU more control over how
                            their data is used and places certain obligations on businesses that process information of those
                            individuals. We’ve updated our Privacy Policy to consider the new requirements of the GDPR.</p>
                          <p>These changes will take effect for existing users of our services on May 23, 2018. Here are some of the
                            highlights of what’s changing:</p>
                          <ul className="list-unstyled">
                            <li><span className="fw-bold">Transparency:</span> We’ve provided additional details about the information
                              we
                              collect and how we use that information. We’ve also explained your choices and the control you have
                              over
                              your information.</li>
                            <li><span className="fw-bold">Personal data:</span> The GDPR applies to ‘personal data’ meaning any
                              information
                              relating to an identifiable person who can be directly or indirectly identified by reference to an
                              identifier.</li>
                          </ul>
                          <p>This definition provides for a wide range of personal identifiers to constitute personal data, including
                            name, identification number, location data, or online identifier, reflecting changes in technology and
                            the way organizations collect information about people.</p>
                          <p>The GDPR applies to both automated personal data and to manual filing systems where personal data are
                            accessible according to specific criteria. This could include chronologically ordered sets of manual
                            records containing personal data.</p>
                          <p>Personal data that has been pseudonymized – e.g., key-coded – can fall within the scope of the GDPR
                            depending on how difficult it is to attribute the pseudonym to a particular individual.</p>
                          <ul className="list-unstyled">
                            <li><span className="fw-bold">Functionality:</span> Depending on your location, we may provide you with the
                              ability to access, download, and request the deletion of your personal information.</li>
                          </ul>
                          <h4 className="fw-bold mb-3">What we collect?</h4>
                          <p>We may collect the following information:</p>
                          <ul>
                            <li>Full Name</li>
                            <li>Contact information including email address</li>
                            <li>Other information relevant to customers or offers</li>
                          </ul>
                          <h4 className="fw-bold mb-3">What we do with the information we gather?</h4>
                          <p>We require this information to understand your needs and provide you with a better service, and for the
                            following reasons:</p>
                          <ul>
                            <li>Internal record keeping.</li>
                            <li>We may use the information to improve our products and services.</li>
                            <li>We may periodically send promotional emails about new products, special offers, or other information
                              which we think you may find interesting using the email address which you have provided.</li>
                          </ul>
                          <p>From time to time, we may also use your information to contact you for market research purposes. We may
                            contact you by email, phone, fax, or mail. We may use the information to customize the website according
                            to your interests.</p>
                          <h4 className="fw-bold mb-3">Trustpilot</h4>
                          <p>Following an order, the <span className="fw-bold">Trustpilot</span> &amp; <span className="fw-bold">Trustpilot</span>
                            Badge is incorporated into this web page to display our <span className="fw-bold">Trustpilot</span>
                            Trustmark for buyers and the eventually collected reviews, as well as the <span className="fw-bold">Trustpilot</span> product offer.</p>
                          <p>Balancing the various interests serves to safeguard our legitimate prevailing interests in the optimized
                            marketing of our offer. The <span className="fw-bold">Trustpilot</span> Badge and the services advertised
                            are an offer of <span className="fw-bold">Trustpilot</span>.</p>
                          <p>Whenever a <span className="fw-bold">Trustpilot</span> Badge is called up, the web server automatically
                            stores a so-called server log file
                            which contains, for example, your IP address, the date and time of retrieval, the data volume
                            transferred, and the requesting provider (access data) and documents the retrieval. This access data
                            will not be evaluated and will be automatically overwritten seven days after you visit the page.</p>
                          <p>Other personal information will only be transferred to <span className="fw-bold">Trustpilot</span> shops if
                            you decide, after completing
                            an order, to use <span className="fw-bold">Trustpilot</span> shops products or have already registered for
                            their use. In this case, the
                            contractual agreement between you and <span className="fw-bold">Trustpilot</span> shops applies.</p>
                          <p>The new General Data Protection Regulation will be applicable starting on May 25, 2018. The changes will
                            have an impact on our automatic review collection feature, too.</p>
                          <p>Until now, this feature was automatically activated by default in the backend at the time of registering
                            with <span className="fw-bold">Trustpilot</span> shops. This means that the <span className="fw-bold">Trustpilot</span> Badge integrated into your online shop
                            automatically collects the e-mail addresses of all your customers and sends them a review reminder. To
                            do so, you are obliged to obtain your customers’ consent.</p>
                          <p>As of May 25, 2018, data protection must be guaranteed also by default, which means that the automatic
                            activation of this feature doesn’t meet the requirements of the new General Data Protection Regulation.
                            Products must be designed in such a way that, by default, they collect as little personal data as
                            possible and guarantee data protection by default.</p>
                          <p>For further understanding of how GDPR is changing how we preserve your data, please click here.</p>
                          <h4 className="fw-bold mb-3">Klarna’s Privacy Policy:</h4>
                          <p>“In order to offer you Klarna’s payment methods, we might in the checkout pass your personal data in the
                            form of contact and order details to Klarna, in order for Klarna to assess whether you qualify for their
                            payment methods and to tailor those payment methods for you. Your personal data transferred is processed
                            in line with <a rel="noreferrer" href="https://www.klarna.com/international/privacy-policy/" target="_blank">Klarna’s own privacy notice</a>.”</p>
                          <h4 className="fw-bold mb-3">Security</h4>
                          <p>We are committed to ensuring that your information is secure. To prevent unauthorized access or
                            disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard
                            and secure the information we collect online.</p>
                          <h4 className="fw-bold mb-3">How do we use cookies?</h4>
                          <p>A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree,
                            the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular
                            site. Cookies allow web applications to respond to you as an individual.</p>
                          <p>We use traffic log cookies to identify which pages are being used. This helps us analyze data about web
                            page traffic and improve our website to tailor it to customer needs. We only use this information for
                            statistical analysis purposes and then the data is removed from the system.</p>
                          <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you
                            find useful and which you do not. A cookie in no way gives us access to your computer or any information
                            about you, other than the data you choose to share with us. You can choose to accept or decline cookies.
                            Most web browsers automatically accept cookies, but you can usually modify your browser setting to
                            decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
                          <h4 className="fw-bold mb-3">Links to other websites</h4>
                          <p>Our website may contain links to other websites of interest. However, once you have used these links to
                            leave our site, you should note that we do not have any control over that other website. Therefore, we
                            cannot be responsible for the protection and privacy of any information which you provide whilst
                            visiting such sites, and such sites are not governed by this privacy statement. You should exercise
                            caution and look at the privacy statement applicable to the website in question.</p>
                          <h4 className="fw-bold mb-3">Opt-out</h4>
                          <p>We may use your e-mail address to send you information about products or services that are the same as or
                            like those that you have ordered from us and that we think you may find useful. We will do so only if
                            you have indicated that you do not object to being contacted for these purposes. At any stage you have
                            the right to ask us to stop using your data for direct marketing purposes by contacting us directly via
                            phone on:</p>
                          <p>
                            <span className="fw-bold">WhatsApp: </span><a rel="noreferrer" href="https://wa.me/447482071701" target="_blank">+44 7482 071701</a>
                          </p>
                          <p>
                            <span className="fw-bold">Email: </span><a href="mailto:sales@wholesaleshopping.co.uk">sales@wholesaleshopping.co.uk</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Privacy Policy modal end */}
                  {/* Terms of Services modal start */}
                  <a href="/" rel="noreferrer" type="button" data-bs-toggle="modal" data-bs-target="/termsofServices">Terms of Services</a>
                  {/* Modal */}
                  <div className="modal fade" id="termsofServices" tabIndex={-1} aria-labelledby="termsofServicesLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header px-4">
                          <h1 className="modal-title fs-3" id="termsofServicesLabel">Terms of Services</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body px-4">
                          <h4 className="fw-bold mb-3">Introduction</h4>
                          <p>This document (together with any documents referred to in it) tells you the terms and conditions (the
                            'Conditions') upon which we will sell the Goods listed on this website (the 'Website') to you.</p>
                          <p className="fw-bold">Before confirming your order please:</p>
                          <p>Read through these Conditions and in particular our cancellations and returns policy and limitation of
                            our liability</p>
                          <p>Print a copy for future reference</p>
                          <p>Read our privacy policy regarding your personal information</p>
                          <p>By ordering any of the Goods listed on this Website, you agree to be legally bound by these Conditions.
                            You will be unable to proceed with your transaction if you do not accept these terms and conditions as
                            may be modified or amended and posted on this Website from time to time.</p>
                          <p>We reserve the right to revise and amend the Website, our disclaimers, and the Conditions at any time
                            without notice to you. Your continued use of the Website (or any part thereof) following a change shall
                            be deemed to be your acceptance of such change. It is your responsibility to check regularly to
                            determine whether we have changed these Conditions.</p>
                          <h4 className="fw-bold mb-3">About us</h4>
                          <p>This Website is owned and operated by <span className="fw-bold">Europa Fashion (UK) Ltd T/A Wholesale
                              Shopping</span> ('we'/'us'/'our'), a
                            limited company registered in England and Wales under <span className="fw-bold">company number:
                              08395791</span> having our registered
                            office at Suite Ro Morgan Reach House, 136 Hagley Road, Birmingham, West Midlands, United Kingdom, B16
                            9NX. Our <span className="fw-bold">VAT Number is GB188546653</span>.</p>
                          <p>Our <span className="fw-bold">WhatsApp number</span> is <a rel="noreferrer" href="https://wa.me/447482071701" target="_blank">+44 7482 071701</a></p>
                          <h4 className="fw-bold mb-3">Communications</h4>
                          <p>You agree that email and other electronic communications can be used as a long-distance means of
                            communication and acknowledge that all contracts, notices, information, and other communications that we
                            provide to you electronically comply with legal requirements.</p>
                          <p>We will contact you by email or provide you with information by posting notices on our website.</p>
                          <h4 className="fw-bold mb-3">Overseas orders</h4>
                          <p>Our website is intended for use by customers resident in England, Wales, Scotland, and Northern Ireland
                            (the United Kingdom).</p>
                          <p>We do, accept orders from individuals located outside the United Kingdom and ship overseas subject to you
                            paying for the additional shipping or postage costs. You will have an opportunity to cancel your order
                            in case these costs are not acceptable.</p>
                          <p>Please note that when shipping products internationally, you should be aware that cross-border shipments
                            are subject to opening and inspection by customs authorities.</p>
                          <p>If we agree to supply any goods ordered from the Website for delivery outside the United Kingdom, they
                            may be subject to import duties and/or additional taxes or expenses incurred due to complying with
                            foreign regulatory requirements or laws. You will be responsible for payment of any such duties and/or
                            taxes in addition to our price including VAT and the cost of delivery. Please note that we have no
                            control over these charges and cannot predict their amount. Please contact your local customs office or
                            taxation authority for further information before placing your order.</p>
                          <p>You must comply with all applicable laws and regulations of the country for which the Goods are destined.
                            We will not be liable for any breach by you of any such laws.</p>
                          <h4 className="fw-bold mb-3">Registration</h4>
                          <p>When registering on the Website you must choose a username and password. You are responsible for all
                            actions taken under your chosen username and password.</p>
                          <p className="fw-bold">By registering on the Website, you undertake:</p>
                          <p>That all the details you provide to us to register on the Website and purchase the Goods are true,
                            accurate, current, and complete in all respects</p>
                          <p>To notify us immediately of any changes to the information provided on registration or to your personal
                            information</p>
                          <p>That you are over 18 or if under 18 you have a parent or guardian's permission to register with and
                            purchase the Goods from this Website in conjunction with and under their supervision</p>
                          <p>To only use the Website using your username and password</p>
                          <p>To make every effort to keep your password safe</p>
                          <p>Not to disclose your password to anyone</p>
                          <p>To change your password immediately upon discovering that it has been compromised</p>
                          <p>To neither transfer nor sell your username or password to anyone, nor permit, either directly or
                            indirectly, anyone other than you to use them</p>
                          <p>You authorize us to transmit your name, address and other personal information supplied by you (including
                            updated information) to obtain information from third parties about you, including, but not limited to,
                            credit reports and so that we may authenticate your identity.</p>
                          <h4 className="fw-bold mb-3">Eligibility to purchase from the Website</h4>
                          <p>To be eligible to purchase the Goods on this Website and lawfully enter and form contracts with us, you
                            must:</p>
                          <p>Be 18 years of age or over</p>
                          <p>Be legally capable of entering into a binding contract</p>
                          <p>Provide full details of a delivery address in the United Kingdom or the European Economic Area (if you
                            reside in the EEA)</p>
                          <p>If you are under 18, you may only use the Website in conjunction with, and under the supervision of, a
                            parent or guardian. If you do not qualify, you must not use our website.</p>
                          <h4 className="fw-bold mb-3">Price</h4>
                          <p>The prices of the Goods are quoted on the Website.</p>
                          <p>Delivery prices are quoted for delivery in the United Kingdom unless otherwise specified./p&gt;
                          </p><p>Unless otherwise stated, the prices quoted exclude VAT and delivery costs (in the case of goods)
                            which will be added to the total amount due from you. Details of our delivery charges can be located
                            on our website.</p>
                          <p>We reserve the right, by giving notice to you at any time before delivery or performance of our
                            obligations, to increase the price of the Goods to reflect any increase in the cost to us due to any
                            factor beyond our control (such as without limitation, any foreign exchange fluctuation, the
                            significant increase in the costs of labour, materials or other costs of manufacture).</p>
                          <h4 className="fw-bold mb-3">Payment</h4>
                          <p>Payment can be made by any major credit, debit card or electronic payment account as explained on the
                            order form. We also offer payment via bank transfer and PayPal.</p>
                          <p>By placing an order, you consent to payment being charged to your debit or credit card account or
                            electronic payment account as provided on the order form.</p>
                          <p>Payment will be debited and cleared from your account before the dispatch of the Goods to you.</p>
                          <p>When you pay for your order by card, we carry out certain checks which include obtaining
                            authorisation from your card issuer to ensure you have adequate funds and for security reasons. This
                            may involve validating your name, address and other personal information supplied by you during the
                            order process against appropriate third-party databases including the card issuer, registered credit
                            reference agencies and fraud prevention agencies.</p>
                          <p className="fw-bold">By accepting these Conditions, You:</p>
                          <p>Undertake that all the details you provide to us to purchase the Goods are correct and that the
                            payment card you are using is your own and that there are sufficient funds to cover the cost of the
                            goods ordered.</p>
                          <p>Undertake that any Goods ordered by you are for your own private or domestic use only.</p>
                          <p>Authorize us to transmit the payment and delivery information provided by you during the order
                            process (included any updated information) to obtain authorization from your card issuer to ensure
                            you have adequate funds, to authenticate your identity, to validate your payment card and for other
                            security reasons, such as fraud prevention.</p>
                          <p>We shall contact you should any problems occur with the authorization of your card.</p>
                          <p>We will take all reasonable care, in so far as it is in our power to do so, to keep the details of
                            your order and payment secure, but in the absence of negligence on our part, we cannot be held
                            liable for any loss you may suffer if a third party procures unauthorized access to any data you
                            provide when accessing or ordering from our website.</p>
                          <h4 className="fw-bold mb-3">Order Process and Formation of a Contract</h4>
                          <p>All orders are subject to acceptance and availability. If any Goods ordered are not available, you
                            will be notified by email and you will have the option either to wait until the item is available or
                            to cancel your order. It is your responsibility to provide us with a valid email address so that we
                            can contact you if necessary.</p>
                          <p className="fw-bold">Any order placed by you constitutes an offer to purchase the Goods from us.</p>
                          <p>All such offers received from you are subject to acceptance by us and we reserve the right to refuse
                            any order placed by you at any time before acceptance, without explaining.</p>
                          <p>You shall be responsible for ensuring the accuracy of the details provided by you during the order
                            process and we will not accept an order unless all details requested from you have been entered
                            correctly.</p>
                          <p>You agree that if we contact you to acknowledge receipt of your order such communication shall not
                            amount to our acceptance of your offer to purchase the Goods ordered by you from the Website.</p>
                          <p>A contract between you and us (the 'Contract') incorporating these Conditions will only subsist after
                            we have debited your payment card and have confirmed that we have dispatched the Goods. We will send
                            you an email to confirm this (a 'Confirmation Notice'). The Confirmation Notice will amount to an
                            acceptance of your offer to purchase from us. The Contract will be formed when we send you the
                            Confirmation Notice (whether or not you receive it).</p>
                          <p>The Contract will relate only to the Goods stated in the Confirmation Notice. We will not be obliged
                            to supply any other Goods which may have been part of your order until we have sent you a separate
                            Confirmation Notice relating to it.</p>
                          <p>You must check that the details contained in the Confirmation Notice are correct and you should print
                            out and keep a copy of it.</p>
                          <p className="fw-bold">You will be subject to the version of our policies and Conditions in force at
                            the time that you order the Goods from us, unless:</p>
                          <p>Any change to those policies or these Conditions is required to be made by law or governmental
                            authority</p>
                          <p>We notify you of any change to our policies or these Conditions before we send you the Confirmation
                            Notice, in which case, we are entitled to assume that you have accepted it unless we receive written
                            notification from you to the contrary within seven calendar days of receipt of the confirmation
                            notice</p>
                          <h4 className="fw-bold mb-3">Delivery</h4>
                          <p>The Goods will be delivered to you at the address you provided during the order process. </p>
                          <p>We employ professional carriers. Nevertheless, you must examine the Goods on arrival. If you are
                            asked for your signature on delivery, you must examine the Goods before signing for them.</p>
                          <p>All goods must be signed for by an adult aged 18 years or over on delivery.</p>
                          <p>Any dates quoted for delivery of the Goods are approximate only. If no date is specified, then it
                            will take place within 30 days of the date of the Confirmation Notice unless there are exceptional
                            circumstances.</p>
                          <p>We will not be liable for any delay in delivering the Goods, however, caused.</p>
                          <p>The Goods may be provided in instalments.</p>
                          <p>For Christmas deliveries, we recommend that you check our website for the last date of delivery. We
                            will endeavour to dispatch all Goods that are in stock within 24 hours. However, we cannot guarantee
                            delivery by 24th December.</p>
                          <h4 className="fw-bold mb-3">Risk and Title</h4>
                          <p>The Goods will be at your risk from the time of delivery.</p>
                          <p>Ownership of the Goods will only pass to you when we receive full payment of all sums due in respect
                            of them including VAT and the cost of delivery.</p>
                          <h4 className="fw-bold mb-3">Return of Goods</h4>
                          <p>Upon receiving notice, we will contact you and provide details of where you must return the Goods and
                            other relevant instructions. You must then return the Goods to us without delay and at the latest
                            within 14 calendar days for UK orders and 14 days for international orders of notifying us of your
                            cancellation.</p>
                          <p>You must return the Goods at your own risk and your own cost unless we offer to pay the cost of
                            return. We reserve the right, at our option, to collect the Goods from you. If we wish to collect
                            the Goods, we will notify you of when we will collect them. We may charge you for the cost of
                            collecting the Goods and may deduct this from any sum owed by us to you.</p>
                          <p>You must return the goods to us in the same condition in which you received them with the original
                            packaging and the original invoice.</p>
                          <p>If the value of the Goods is reduced because you handle them beyond what is necessary to determine
                            the nature, characteristics or functioning of the Goods, we will be entitled to claim this reduction
                            in value from you and to deduct it from any money which you have paid us.</p>
                          <p><span className="fw-bold">WE DO NOT ACCEPT RETURNS ON SALE GOODS UNLESS FAULTY.</span> If faulty, please
                            refer to our standard return policy as stated above.</p>
                          <h4 className="fw-bold mb-3">Delivery by Instalments</h4>
                          <p>The Goods may be sent to you in instalments. You may cancel the outstanding part of your order and
                            receive a refund of the balance of the price and any standard delivery costs you paid to us in
                            respect of the outstanding part of your order.</p>
                          <h4 className="fw-bold mb-3">Complaints </h4>
                          <p>If you have a comment, concern, or complaint about any Goods you have purchased from us, please
                            contact us via email at sales@wholesaleshopping.co.uk OR by post at </p>
                          <ul className="list-unstyled">
                            <li><span className="fw-bold">Wholesale Shopping</span></li>
                            <li>36C Broughton Street,</li>
                            <li>M8 8NN, Manchester,</li>
                            <li>United Kingdom</li>
                          </ul>
                          <h4 className="fw-bold mb-3">Intellectual Property</h4>
                          <p>Goods sold or licensed by us and Website content is subject to copyright, trademark or other
                            intellectual property rights in favour of third parties. We acknowledge those rights.</p>
                          <p>The content of the Website is protected by copyright (including design copyrights), trademarks,
                            patent, database and other intellectual property rights and similar proprietary rights which include
                            (without limitation), all rights in materials, works, techniques, computer programs, source codes,
                            data, technical information, trading business brand names, goodwill, service marks, utility models,
                            semiconductor topography rights, the style of presentation of the goods or services, creations,
                            inventions or improvements upon or additions to an invention, confidential information, know-how and
                            any research effort relating to Wholesale Shopping moral rights and any similar rights in any
                            country (whether registered or unregistered and including applications for and the right to apply
                            for them in any part of the world) and you acknowledge that the intellectual property rights in the
                            material and content supplied as part of the Website shall remain with us or our licensors.</p>
                          <p>You acknowledge that any other use of the material and content of this Website is strictly
                            prohibited, and you agree not to (and agree not to assist or facilitate any third party to) copy,
                            reproduce, transmit, publish, display, distribute, commercially exploit or create derivative works
                            from such material and content.</p>
                          <p>No licence is granted to you in these Conditions to use any of our trademarks or those of our
                            affiliated companies.</p>
                          <h4 className="fw-bold mb-3">Website Use</h4>
                          <p>You are permitted to use the Website and the material contained in it only as expressly authorized by
                            us under our terms of use.</p>
                          <h4 className="fw-bold mb-3">Liability and indemnity</h4>
                          <p>Notwithstanding any other provision in the Conditions, nothing will affect or limit your statutory
                            rights; or will exclude or limit our liability for:</p>
                          <p>Death or personal injury resulting from our negligence</p>
                          <p>Fraud or fraudulent misrepresentation</p>
                          <p>Action under section 2(3) of the Consumer Protection Act 1987</p>
                          <p>Any matter for which it would be unlawful for us to exclude or attempt to exclude our liability</p>
                          <p>The Website is provided on an 'as is' and 'as available basis without any representation or
                            endorsement made and we make no warranties or guarantees, whether express or implied, statutory or
                            otherwise (unless otherwise expressly stated in these Conditions or required by law) about the
                            information, materials, content or services found or offered on the Website for any particular
                            purpose or any transaction that may be conducted on or through the Website including but not limited
                            to implied warranties of non-infringement, compatibility, timeliness, performance, security,
                            accuracy, condition or completeness, or any implied warranty arising from course of dealing or usage
                            or trade custom.</p>
                          <p className="fw-bold">We will not be liable if the Website is unavailable at any time.</p>
                          <p>We make no representation or warranty of any kind express or implied statutory or otherwise regarding
                            the availability of the Website or that it will be timely or error-free, that defects will be
                            corrected, or that the Website or the server that makes it available are free of viruses or bugs.
                          </p>
                          <p>We will not be responsible or liable to you for any loss of content or material uploaded or
                            transmitted through the Website and we accept no liability of any kind for any loss or damage
                            resulting from action taken in reliance on material or information contained on the Website.</p>
                          <p>We cannot guarantee and cannot be responsible for the security or privacy of the Website and any
                            information provided by you. You must bear the risk associated with the use of the internet. In
                            particular, we will not be liable for any damage or loss caused by a distributed denial-of-service
                            attack, any viruses, Trojans, worms, logic bombs, keystroke loggers, spyware, adware or other
                            material which is malicious or technologically harmful that may infect your computer, peripheral
                            computer equipment, computer programs, data or other proprietary material as a result of your use of
                            the Website or as a result of your downloading, streaming or otherwise accessing any Digital Content
                            supplied on the Website or from any website linked to it.</p>
                          <p>We will use all reasonable endeavours to carry out our obligations within a reasonable period but
                            will not be liable to you for any loss, costs or expenses arising directly or indirectly from any
                            delays in doing so.</p>
                          <p className="fw-bold">We will not be liable, in contract or tort (including, without limitation,
                            negligence), or respect of pre-contract or other representations (other than fraudulent
                            misrepresentations) or otherwise for:</p>
                          <ul className="list-unstyled">
                            <p>any economic losses (including without limitation loss of revenues, profits, contracts, business
                              or anticipated savings and any loss related to your business, the extent of which was not
                              foreseeable at the time of the contract); or</p>
                            <p>any loss of goodwill or reputation; or</p>
                            <p>any special losses or losses not normally reasonably foreseeable at the time of the contract; or
                            </p>
                            <p>any loss of data; or</p>
                            <p>wasted management or office time; or</p>
                            <p>any other loss or damage of any kind suffered or incurred arising out of or in connection with
                              the provision of any matter under these Conditions and/or the Contract and/or the use of this
                              Website or any aspect related to your agreement to purchase the Goods even if such losses are
                              foreseeable or result from a deliberate breach of these Conditions by us that would entitle you
                              to terminate the Contract between us or as a result of any action we have taken in response to
                              your breach of these Conditions. Without prejudice to the terms of this clause and if we are
                              unable to rely upon it, our liability for all and any losses you suffer because of us breaking
                              the Contract, whether deliberate, including those listed in clauses 17.8.1 to 17.8.6, is
                              strictly limited to the total of the price of and any delivery charges you paid for the Goods.
                            </p>
                          </ul>
                          <p>You agree to fully indemnify, defend and hold us, and our officers, directors, employees and
                            suppliers, harmless immediately on demand, from and against all claims, including but not limited to
                            losses (including loss of profit, revenue, goodwill or reputation), costs and expenses, including
                            reasonable administrative and legal costs, arising out of any breach of these Conditions by you, or
                            any other liabilities arising out of your use of this Website or any other person accessing the
                            Website using your personal information with your authority.</p>
                          <p className="fw-bold">This clause does not affect your statutory rights as a consumer, nor does it affect
                            your contractual cancellation rights.</p>
                          <h4 className="fw-bold mb-3">GDPR Compliance</h4>
                          <p>The new General Data Protection Regulation will be applicable starting on May 25, 2018. The changes
                            will have an impact on our automatic review collection feature, too.</p>
                          <p>Until now, this feature was automatically activated by default in the backend at the time of
                            registering with Trustpilot. This means that the Trustpilot integrated into your online shop
                            automatically collects the e-mail addresses of all your customers and sends them a review reminder.
                            To do so, you are obliged to obtain your customers’ consent.</p>
                          <p>As of May 25, 2018, data protection must be guaranteed also by default, which means that the
                            automatic activation of this feature doesn’t meet the requirements of the new General Data
                            Protection Regulation. Products must be designed in such a way that, by default, they collect as
                            little personal data as possible and guarantee data protection by default.</p>
                          <h4 className="fw-bold mb-3">Reviews</h4>
                          <p>You acknowledge that any review, feedback, or rating which you leave may be published by us on the
                            Website and you agree that it may be displayed for as long as we consider appropriate and that the
                            content may be syndicated to our other websites, publications, or marketing materials.</p>
                          <p className="fw-bold">You undertake that any review, feedback, or rating that you write shall:</p>
                          <p>Comply with applicable law in the UK and the law in any country from which they are posted</p>
                          <p>Be factually accurate</p>
                          <p>Contain genuinely held opinions (where applicable)</p>
                          <p>Not contain any material which is either defamatory, threatening, obscene, abusive, offensive,
                            hateful, inflammatory or is likely to harass, upset, annoy, alarm, embarrass or invade the privacy
                            of, any person or be deceiving</p>
                          <p>Not promote or advocate an unlawful act or activity, discrimination, sexually explicit material, or
                            violence</p>
                          <p>Not infringe any trademark, copyright (including design rights), database right, or other
                            intellectual property rights of any other person or breach of any legal duty you owe to a third
                            party</p>
                          <p>Not be used to impersonate any person, or to misrepresent your identity</p>
                          <p>You agree to indemnify and hold us harmless against any claim or action brought by third parties,
                            arising out of or in connection with any review, feedback or rating posted by you on the Website,
                            including, without limitation, the violation of their privacy, defamatory statements, or
                            infringement of intellectual property rights.</p>
                          <p>You grant us and our affiliate companies a non-exclusive, royalty-free worldwide license to use or
                            edit any reviews posted by you.</p>
                          <p>We reserve the right to publish, edit or remove any reviews without notifying you.</p>
                          <h4 className="fw-bold mb-3">Termination</h4>
                          <p className="fw-bold">We reserve the right to terminate an agreement formed with you and to suspend or
                            terminate your access to the Website immediately and without notice to you if:</p>
                          <p>You fail to make any payment to us when due</p>
                          <p>You breach these Conditions (repeatedly or otherwise)</p>
                          <p>You are impersonating any other person or entity</p>
                          <p>When requested by us to do so, you fail to provide us within a reasonable time with sufficient
                            information to enable us to determine the accuracy and validity of any information supplied by you
                            or your identity</p>
                          <p>We suspect you have engaged, or are about to engage, or have in any way been involved, in fraudulent
                            or illegal activity on the website</p>
                          <h4 className="fw-bold mb-3">Events Outside Our Control</h4>
                          <p>Except for our obligations, we shall have no liability for delays or failures in delivery or
                            performance of our obligations to you resulting from any act, event, omission, failure, or accident
                            outside of our control ('Event outside Our Control'), which, without limitation, includes:</p>
                          <p>A strike, lock-out or other industrial action</p>
                          <p>Shortages of labour, fuel, power, raw materials where we could not take reasonable action to obtain
                            alternative supplies in time to perform this contract</p>
                          <p>Late, defective performance or non-performance by suppliers where we could not by taking reasonable
                            action obtain alternative supplies in time to perform this contract</p>
                          <p>Private or public telecommunication, computer network failures or breakdown of equipment</p>
                          <p>Civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether
                            declared or not) or threat or preparation for war</p>
                          <p>Fire, explosion, storm, flood, earthquake, subsidence, epidemic or other natural disaster or extreme
                            weather conditions</p>
                          <p>Impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or
                            private transport</p>
                          <p>Acts, decrees, legislation, regulations, or restrictions of any government</p>
                          <p>Other events, beyond our reasonable control</p>
                          <p>Our performance will be deemed to be suspended for the period that the Event Outside Our Control
                            continues, and we will have an extension of time for performance for the duration of that period. We
                            will use reasonable endeavours to minimize any delay caused by the Event outside our control or to
                            find a solution by which our obligations may be performed despite this event. We shall promptly
                            notify you of any event outside Our Control giving details of it and (where possible) the extent and
                            likely duration of any delay.</p>
                          <p>Where an event outside Our Control prevents us from performing our obligations to you within 25 days
                            from the date we sent you the Confirmation Notice, either you or we may terminate the Contract by
                            giving 5 days written notice to the other.</p>
                          <p>The Contract will terminate 5 days after service of this written notice of termination unless you
                            notify us in writing before the expiry of those 5 days that you will extend the time for performance
                            of this Contract to a specified date.</p>
                          <p>If the event outside Our Control prevents us from performing our obligations to you by the date to
                            which you specified, the contract will terminate on the date you specified.</p>
                          <p>If the contract is terminated due to an event outside Our Control, we will refund you any money you
                            have paid to us under the Contract.</p>
                          <h4 className="fw-bold mb-3">Privacy Policy</h4>
                          <p>To monitor and improve customer service, we sometimes record telephone calls.</p>
                          <p>We shall be entitled to process your data following the terms of our Privacy Policy. Please view this
                            document for further information. All information provided by you will be treated securely and by
                            the Data Protection Act 1998 (as amended).</p>
                          <p>You can find full details of our Privacy Policy on the Website.</p>
                          <h4 className="fw-bold mb-3">Shopify</h4>
                          <p>Our store is hosted on Shopify Inc. They provide us with an online e-commerce platform that allows us
                            to sell our products and services to you.</p>
                          <p>Your data is stored through Shopify's data storage, databases, and the general Shopify application.
                            They store your data on a secure server behind a firewall.</p>
                          <p><span className="fw-bold">Wholesale Shopping</span> does not store credit card details, nor do we share
                            customer details with any 3rd parties.</p>
                          <h4 className="fw-bold mb-3">Third-Party Rights</h4>
                          <p>Except for our affiliates, directors, employees or representatives, a person who is not a party to
                            the Contract has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any term
                            of the Contract, but this does not affect any right or remedy of a third party that exists or is
                            available apart from that Act.</p>
                          <h4 className="fw-bold mb-3">External Links</h4>
                          <p>To provide increased value and convenience to our users, we may provide links to other websites or
                            resources for you to access at your sole discretion and risk. You acknowledge and agree that, as you
                            have chosen to enter the linked website, we are not responsible for the availability of such
                            external sites or resources, and do not review or endorse and are not responsible or liable in any
                            way, whether directly or indirectly, for:</p>
                          <p>The privacy practices of such websites</p>
                          <p>The content of such websites, including (without limitation) any advertising, content, products,
                            goods or other materials or services on or available from such websites or resources</p>
                          <p>The use which others make of these websites; or any damage, loss or offence caused or alleged to be
                            caused to you, arising from or in connection with the use of or reliance upon any such advertising,
                            content, products, goods, materials, or services available on and/or purchased by you from such
                            external websites or resources</p>
                          <h4 className="fw-bold mb-3">Linking to the Website</h4>
                          <p>You must not create a link to the Website from another website, document, or any other source without
                            first obtaining our prior written consent.</p>
                          <p className="fw-bold">Any agreed link must be:</p>
                          <p>To the Website's homepage</p>
                          <p>Established from a website or document that is owned by you and does not contain content that is
                            offensive, controversial, infringes any intellectual property rights or other rights of any other
                            person or does not comply in any way with the law in the UK and the law in any country from which it
                            is hosted</p>
                          <p>Provided in such a way that is fair and legal and does not damage our reputation or take advantage of
                            it</p>
                          <p>Established in such a way that does not suggest any form of association, approval or endorsement on
                            our part where none exists</p>
                          <p>We have no obligation to inform you if the address of the Website home page changes and it is your
                            responsibility to ensure that any link you provide to our homepage is always accurate.</p>
                          <p>We reserve the right to withdraw our consent without notice and without providing any reasons for
                            withdrawal. Upon receiving such notice you must immediately remove the link and inform us once this
                            has been done.</p>
                          <h4 className="fw-bold mb-3">Notices</h4>
                          <p>All notices given by you to us must be given to us at sales@wholesaleshopping.co.uk or a letter to
                          </p>
                          <ul className="list-unstyled">
                            <li className="fw-bold">Wholesale Shopping</li>
                            <li>36C Broughton Street,</li>
                            <li>M8 8NN, Manchester,</li>
                            <li>United Kingdom</li>
                          </ul>
                          <p>We may give notice as described in clause 3.</p>
                          <p>Notice will be deemed received and properly served immediately when posted on our website, 24 hours
                            after an email is sent, or three days after the date of posting of any letter. In proving the
                            service of any notice, it will be sufficient to prove, in the case of a letter, that such letter was
                            properly addressed, stamped, and placed in the post and, in the case of an email that such email was
                            sent to the specified email address of the addressee.</p>
                          <h4 className="fw-bold mb-3">Entire Agreement</h4>
                          <p>The contract represents the entire agreement between us about the subject matter of the Contract and
                            supersedes any prior agreement, understanding or arrangement between us, whether oral or in writing.
                          </p>
                          <p>We each acknowledge that, in entering a contract, neither of us has relied on any express or implied
                            representation, undertaking or promise given by the other from anything said or written in any
                            negotiations between us before such Contract except as has been expressly incorporated in such
                            Contract.</p>
                          <p>Neither of us shall have any remedy in respect of any untrue statement made by the other, whether
                            orally or in writing, before the date of any Contract (unless such untrue statement was made
                            fraudulently) and the other party's only remedy shall be for breach of contract as provided in these
                            conditions.</p>
                          <h4 className="fw-bold mb-3">General</h4>
                          <p>We reserve the right to change the domain address of this website and any services, products, product
                            prices, product specifications and availability at any time.</p>
                          <p>All prices and descriptions supersede all previous publications. All product descriptions are
                            approximate.</p>
                          <p>Every effort is made to keep information regarding stock availability on the Website up to date.
                            However, we do not guarantee that this is the case, or that stock will always be available.</p>
                          <p>If any provision of these terms and conditions is held by any competent authority to be invalid or
                            unenforceable in whole or in part, the validity of the other provisions of the Contract and the
                            remainder of the provision in question will not be affected.</p>
                          <p>All Contracts are concluded and available in English only.</p>
                          <p>If we fail, at any time during the term of a contract, to insist upon strict performance of any of
                            your obligations under it or any of these terms and conditions, or if we fail to exercise any of the
                            rights or remedies to which we are entitled under the Contract, this shall not constitute a waiver
                            of such rights or remedies and shall not relieve you from compliance with your obligations.</p>
                          <p>A waiver by us of any default shall not constitute a waiver of any subsequent default.</p>
                          <p>No waiver by us of any of these conditions or any other term of a contract shall be effective unless
                            it is expressly stated to be a waiver and is communicated to you in writing by clause 3</p>
                          <p>Any contract between you and us is binding on you and us and our respective successors and assigns.
                            You may not transfer, assign, charge or otherwise dispose of the Contract, or any of your rights or
                            obligations arising under it, without our prior written consent. We may transfer, assign, charge,
                            sub-contract or otherwise dispose of a Contract, or any of our rights or obligations arising under
                            it, at any time during the term of the contract.</p>
                          <h4 className="fw-bold mb-3">Governing Law and Jurisdiction</h4>
                          <p>The Website is controlled and operated in the United Kingdom. Every purchase you make shall be deemed
                            performed in England and Wales.</p>
                          <p>The Conditions and any Contract brought into being because of usage of this Website will be governed
                            by the laws of England and Wales and you irrevocably agree to submit to the exclusive jurisdiction
                            of the courts of England and Wales.</p>
                          <h4 className="fw-bold mb-3">Privacy Policies &amp; Cookies</h4>
                          <p>This privacy policy sets out how wholesaleshopping.co.uk uses and protects any information that you
                            give us when you use this website. We are committed to ensuring that your privacy is protected.
                            Should we ask you to provide certain information by which you can be identified when using this
                            website, then you can be assured that it will only be used by this privacy statement? We may change
                            this policy from time to time by updating this page. You should check this page from time to time to
                            ensure that you are happy with any changes.</p>
                          <h4 className="fw-bold mb-3">What We Collect</h4>
                          <p>We may collect the following information:</p>
                          <p>Customer name</p>
                          <p>Contact information including email address</p>
                          <p>Other information relevant to customers and offers</p>
                          <p>For the exhaustive list of cookies, we collect see the List of cookies we collect section</p>
                          <h4 className="fw-bold mb-3">What We Do with the Information We Gather</h4>
                          <p>We require this information to understand your needs and provide you with a better service, and for
                            the following reasons:</p>
                          <p>Internal record keeping.</p>
                          <p>We may use the information to improve our products and services.</p>
                          <p>We may periodically send promotional emails about new products, special offers or other information
                            which we think you may find interesting using the email address which you have provided.</p>
                          <p>From time to time, we may also use your information to contact you for market research purposes. We
                            may contact you by email, phone, fax, or mail. We may use the information to customize the website
                            according to your interests.</p>
                          <h4 className="fw-bold mb-3">Security</h4>
                          <p>We are committed to ensuring that your information is secure. To prevent unauthorized access or
                            disclosure, we have put in place suitable physical, electronic and managerial procedures to
                            safeguard and secure the information we collect online.</p>
                          <h4 className="fw-bold mb-3">How We Use Cookies</h4>
                          <p>A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you
                            agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a
                            particular site. Cookies allow web applications to respond to you as an individual. The web
                            application can tailor its operations to your needs, likes and dislikes by gathering and remembering
                            information about your preferences.</p>
                          <p>We use traffic log cookies to identify which pages are being used. This helps us analyze data about
                            web page traffic and improve our website to tailor it to customer needs. We only use this
                            information for statistical analysis purposes and then the data is removed from the system.</p>
                          <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you
                            find useful and which you do not. A cookie in no way gives us access to your computer or any
                            information about you, other than the data you choose to share with us. You can choose to accept or
                            decline cookies. Most web browsers automatically accept cookies, but you can usually modify your
                            browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of
                            the website.</p>
                          <h4 className="fw-bold mb-3">Links to Other Websites</h4>
                          <p>Our website may contain links to other websites of interest. However, once you have used these links
                            to leave our site, you should note that we do not have any control over that other website.
                            Therefore, we cannot be responsible for the protection and privacy of any information which you
                            provide whilst visiting such sites and such sites are not governed by this privacy statement. You
                            should exercise caution and look at the privacy statement applicable to the website in question.</p>
                          <h4 className="fw-bold mb-3">List of Cookies We Collect</h4>
                          <p>The table below lists the cookies we collect and what information they store:</p>
                          <table className="table text-center table-bordered mb-4">
                            <thead>
                              <tr>
                                <th>Cookie Name</th>
                                <th>Cookie Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>CART</td>
                                <td>The association with your shopping cart.</td>
                              </tr>
                              <tr>
                                <td>CATEGORY INFO</td>
                                <td>Stores the category info on the page that allows displaying pages more quickly.</td>
                              </tr>
                              <tr>
                                <td>COMPARE</td>
                                <td>The items that you have in the Compare Products list.</td>
                              </tr>
                              <tr>
                                <td>CURRENCY</td>
                                <td>Your preferred currency.</td>
                              </tr>
                            </tbody>
                          </table>
                          <h4 className="fw-bold mb-3">Security &amp; Privacy</h4>
                          <h5 className="fw-bold mb-3">Forgotten Password</h5>
                          <p>If you've forgotten your password, just enter your email address on the forgotten your password page.
                            You will then receive an email containing a link to reset your password.</p>
                          <h5 className="fw-bold mb-3">Your Privacy</h5>
                          <p>Your privacy is of the highest importance to us, and we promise never to release your details to any
                            outside company for mailing or marketing purposes.</p>
                          <p>When you purchase from our website, we collect certain personal information from you (for example
                            your name, email address, payment address and details). All such information is held on secure
                            servers. Wholesaleshopping.co.uk complies fully with all applicable Data Protection and consumer
                            legislation and will treat all your personal information as fully confidential.</p>
                          <p>To serve you best, we use Barclaycard, Stripe, and PayPal to process credit card transactions and
                            order fulfilment. They receive the information needed to verify and authorize your payment card and
                            to process your order. All such organizations are under strict obligation to keep your personal
                            information private.</p>
                          <h5 className="fw-bold mb-3">Transaction Security</h5>
                          <p>Security and privacy of personal details are taken very seriously at wholesaleshopping.co.uk. We
                            maintain the highest level of security and our site uses SSL encryption technology. You can tell
                            whether a page is secure as 'HTTPS' will replace the 'HTTP' at the front of the
                            www.wholesaleshopping.co.uk in your browser address window. A small, locked padlock will also appear
                            in the bottom bar of your browser window.</p>
                          <p>To serve you best, we use Barclaycard, Stripe and PayPal to process credit card transactions and
                            order fulfilment. They receive the information needed to verify and authorize your payment card and
                            to process your order. All such organizations are under strict obligation to keep your personal
                            information private. In addition, we use 3D Secure services, Verified by Visa, and MasterCard Secure
                            Code. To use this service, you must first register with the bank or other organization that issued
                            your card.</p>
                          <h5 className="fw-bold mb-3">Phishing</h5>
                          <p>Phishing is the practice of tricking someone into giving confidential information. Examples include
                            falsely claiming to be a legitimate company when sending an e-mail to a user, in an attempt to get
                            the user to send private information that will be used for identity theft and fraud. We'll never ask
                            you to send any personal details via email. If we require such details, for security reasons we'll
                            ask you to contact us by phone. Should you receive an email claiming to be from
                            wholesaleshopping.co.uk requesting this kind of information, please do not respond but let us know?
                          </p>
                          <h4 className="fw-bold mb-3">Cookies</h4>
                          <p>Cookies are tiny text files stored on your computer when you visit certain web pages.
                            Wholesaleshopping.co.uk uses cookies to keep track of what you have in your basket and to remember
                            you when you return to our site. To shop at wholesaleshopping.co.uk you need to have all cookies
                            enabled, though you can still use the website for browsing and research purposes without them.</p>
                          <h4 className="fw-bold mb-3">Image Copyright</h4>
                          <p>Our images, Videos &amp; Contents are protected by <span className="fw-bold">Copyright Law</span> to <span className="fw-bold">Wholesale Shopping</span>. We do not authorize permission to use our trademark
                            which is an offence against section 92 of the Trademarks Acts 1994. images, Videos &amp; Contents are
                            not available for purchase with or of any of our products and we will proceed with legal action if
                            we have any reason to believe our copyright is in breach.</p>
                          <h4 className="fw-bold mb-3">Returns</h4>
                          <p>Damages, discrepancies &amp; returns must be notified to us within 2 days of receiving goods by e-mail to
                            sales@wholesaleshopping.co.uk, quoting your order number, name, address, description of the product
                            and reason for sending back. In the case of damages, a photo of the fault should also be provided.
                            Should you wish to return a faulty item/s, please ensure you return it in its original condition,
                            within 14 days of receiving it? Once we have received your returned item/s, it will be refunded,
                            exchanged, or credited towards your next order. We will not be able to accept any items which might
                            have been damaged by mishandling, during customization or alteration.</p>
                          <p>Please note that colours may sometimes vary because of the photographic studio or monitor
                            calibration. Garments are measured on a flat surface and all measurements are approximate.</p>
                          <h4 className="fw-bold mb-3">Sale</h4>
                          <p>Please note that sale prices are exclusive to online purchases only and our offers will not be
                            available at our warehouse. These promotions change frequently and may not be available at this
                            price once the offer has expired. Offers are subject to stock availability.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Terms of Services modal End */}
                </div>
                {/* footer links */}
              </div>
            </div>
            {/* left Column */}
            {/* right Column */}
            <div className="col-lg-5 py-5 px-4 p-md-5 d-none d-lg-block">
              <div className="order-summary pe-xl-5">
                <div className="checkout_products">
                  <div className="row align-items-center mb-4 mx-0">
                    <div className="col-3 col-sm-2 position-relative">
                      <img src={img1} alt='...' className="img-fluid" />
                      <span className="qty-count">1</span>
                    </div>
                    <div className="col-6 col-sm-8">
                      <p className="title mb-0">Coloured Stripe Knit Tassel Scarf</p>
                      <p className="color_title m-0">Mix</p>
                    </div>
                    <div className="col-3 col-sm-2">
                      <p className="price">£45.00</p>
                    </div>
                  </div>
                  <div className="row align-items-center mb-4 mx-0">
                    <div className="col-3 col-sm-2 position-relative">
                      <img src={img2} alt='...' className="img-fluid" />
                      <span className="qty-count">1</span>
                    </div>
                    <div className="col-6 col-sm-8">
                      <p className="title mb-0">Abstract Animal Print Drawstring Top</p>
                      <p className="color_title m-0">Rust</p>
                    </div>
                    <div className="col-3 col-sm-2">
                      <p className="price">£10.00</p>
                    </div>
                  </div>
                  <div className="row align-items-center mb-4 mx-0">
                    <div className="col-3 col-sm-2 position-relative">
                      <img src={img3} alt='...' className="img-fluid" />
                      <span className="qty-count">1</span>
                    </div>
                    <div className="col-6 col-sm-8">
                      <p className="title mb-0">Faux Leather Ankle Heel Boots</p>
                      <p className="color_title m-0">Beige</p>
                    </div>
                    <div className="col-3 col-sm-2">
                      <p className="price">£246.00</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="discount-code py-2">
                  <div className="row gy-3 gy-sm-0">
                    <div className="col-sm-8">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Discount Code</label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <button className="btn w-100 h-100 rounded-pill discount-btn">Apply</button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="subTotalprice d-flex justify-content-between mb-3">
                  <span className="fw-semibold text-uppercase">Subtotal</span>
                  <span>£301.00</span>
                </div>
                <div className="shippingCharges d-flex justify-content-between mb-3">
                  <span className="fw-semibold text-uppercase">Shipping</span>
                  <span className="text-end">Calculated at next step</span>
                </div>
                <div className="estimate-tax d-flex justify-content-between mb-3">
                  <span className="fw-semibold text-uppercase">Estimated taxes</span>
                  <span className="text-end">£150.00</span>
                </div>
                <hr />
                <div className="OrderTotal d-flex justify-content-between">
                  <span className="fw-semibold text-uppercase">Total</span>
                  <span>£451.00</span>
                </div>
              </div>
            </div>
            {/* right Column */}
          </div>
        </div>
        {/*----- Checkout Container End ------*/}
   

    </div>
  )
}

export default CheackoutForm
