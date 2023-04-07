import React from 'react'

import img21 from "../../../images/productpage/sizeChart.jpg"
import img22 from "../../../images/productpage/klarna-logo.png"
import img24 from "../../../images/productpage/rock.webp"
function Productdetail({data}) {
  console.log(data);

  return (
    <div>

      {/*------- Products Detail Section Start -----*/}
      <div className="product-content py-2 py-md-4 px-sm-3 px-lg-5">
        <div className="container-fluid">
          {/* products details start*/}
          <div className="row mb-5">
            <div className="col-lg-7 col-xl-6 pe-xl-4">
              <div className="product-slider">
                <div className="rtl-slider-flex">
                  <div className="rtl-slider-nav">
                    {data?.images?.map((item)=>{
                      return(
                        <div className="rtl-slider-slide">
                        <img src={item.path} alt="..." className="img-fluid" />
                      </div>
                      )
                    })}
              
                  
                  </div>
                  <div className="rtl-slider">
                    <div className="rtl-slider-slide">
                      <img src={data?.image} alt="..." className="img-fluid" />

                    </div>
                    
                  </div>
                  <span className="thumb-prev"><i className="fa fa-angle-up fa-lg" /></span>
                  <span className="thumb-next"><i className="fa fa-angle-down fa-lg" /><span>
                    </span></span></div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 ps-xl-4 pt-2 pt-md-3 pt-lg-0">
              <div className="product-details">
                {/* product title */}
                <h5 className="product-title text-uppercase fw-bold mb-3">{data?.title}</h5>
                {/* product title */}
                {/* product sku */}
                <div className="product-sku mb-3">
                  <label>SKU: </label>
                  <span className="sku-code">11480111-11747-Leaves-AGreen</span>
                </div>
                {/* product sku */}
                {/* product review */}
                <div className="prodReviews d-flex align-items-center gap-2 mb-3 text-danger">
                  <div className="review-group d-flex align-items-center gap-2">
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="review-count">(0 reviews)</div>
                  </div>
                  <span className="divider">|</span>
                  <a href="/" className="writereview text-danger">Write Review</a>
                </div>
                {/* product review */}
                {/* prices */}
                <div className="prices mb-2">
                  <div className="unitprice mb-1">
                    <label>Unit Price:</label>
                    <span className="price">£{data?.price}</span>
                  </div>
                  <div className="packqty mb-1">
                    <label>Pack Quantity:</label>
                    <span className="qty">1</span>
                  </div>
                  <div className="packprice mb-3">
                    <label>Pack Price:</label>
                    <span className="price">£10.50</span>
                  </div>
                </div>
                {/* prices */}
                {/* available stock Detail */}
                <div className="stock-wrapper d-flex gap-3 mb-3 flex-wrap">
                  <label className="stockavailable pt-2">Availability:{data?.stock} </label>
                  <div className="dropdown">
                    <button className="btn dropdown-toggle rounded-pill" type="button" id="stockAvailability" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width={45} height={30} version="1.1" viewBox="0 0 700 540" style={{fill: '#fff'}}>
                        <path d="m350 36.734c-2.1328 0-4.2383 0.48828-6.1523 1.4219l-202.56 99.094c-0.41406 0.25391-0.81641 0.52734-1.2031 0.82031-0.52344 0.30469-1.0234 0.64453-1.5039 1.0156-0.48828 0.42187-0.94531 0.87891-1.3672 1.3672-0.35156 0.37109-0.67969 0.76562-0.98438 1.1758-0.40625 0.55469-0.77344 1.1406-1.0938 1.75-0.085937 0.125-0.16797 0.25-0.24609 0.37891-0.078125 0.21875-0.15234 0.4375-0.21875 0.65625-0.34766 0.78516-0.62109 1.6016-0.82031 2.4336-0.089844 0.48047-0.15234 0.96484-0.19141 1.4492-0.10156 0.51562-0.17578 1.0352-0.21875 1.5586v240.3c-0.011719 5.3594 3.0352 10.254 7.8477 12.605l84.137 41.234c3.3555 1.6523 7.2305 1.8984 10.766 0.67578 3.5312-1.2227 6.4297-3.8086 8.0469-7.1797 1.6172-3.3477 1.8359-7.1992 0.60938-10.707s-3.7969-6.3867-7.1445-7.9961l-76.262-37.324v-209.12l174.56 85.422v59.008c0.007812 3.7188 1.4922 7.2773 4.1289 9.8984 2.6367 2.625 6.207 4.0859 9.9258 4.0742 7.6992-0.03125 13.93-6.2734 13.945-13.973v-59.008l174.56-85.422v209.12l-76.289 37.324c-6.9219 3.4062-9.7812 11.77-6.3984 18.703 1.6172 3.3438 4.4961 5.9062 8.0039 7.1289 3.5078 1.2188 7.3555 0.99609 10.699-0.62109l84.137-41.234c4.8125-2.3555 7.8594-7.25 7.8477-12.605v-240.3c0.011719-5.3594-3.0352-10.25-7.8477-12.605l-202.56-99.094c-1.9141-0.9375-4.0195-1.4219-6.1523-1.4219zm0.054688 29.535 63.328 31.031-170.68 83.594-63.328-31.012zm95.211 46.676 75.387 36.941-170.6 83.59-75.551-36.996zm-95.211 234.53c-48.359 0-87.965 39.453-87.965 87.828s39.605 87.965 87.965 87.965c48.359 0 87.828-39.59 87.828-87.965s-39.469-87.828-87.828-87.828zm0 27.891c33.219 0 59.828 26.688 59.828 59.938s-26.609 59.965-59.828 59.965-59.938-26.715-59.938-59.965 26.719-59.938 59.938-59.938zm29.148 28.328v-0.003906c-3.7266 0.003906-7.2969 1.4883-9.9258 4.1289l-30.488 31.199-9.2969-9.707c-2.5859-2.6797-6.1367-4.2188-9.8633-4.2773-3.7266-0.054688-7.3203 1.375-9.9883 3.9766-2.6719 2.5859-4.207 6.1328-4.2617 9.8516-0.058594 3.7188 1.3672 7.3086 3.9609 9.9727l19.305 19.961c2.6211 2.7266 6.2305 4.2734 10.012 4.293 3.7812 0.023437 7.4102-1.4844 10.059-4.1797l40.605-41.453c2.6133-2.6562 4.0586-6.2461 4.0195-9.9688-0.042969-3.7266-1.5664-7.2852-4.2383-9.8828-2.6562-2.5547-6.2109-3.9609-9.8984-3.9102z" />
                      </svg>
                      Only <span className="stockqty">84</span> Packs Left In Stock
                    </button>
                    <div className="dropdown-menu" aria-labelledby="stockAvailability">
                      <table className="table">
                        <thead className="table-light border-bottom">
                          <tr>
                            <th className="text-uppercase pt-2 pb-2">Product Name</th>
                            <th className="text-uppercase pt-2 pb-2 last">qty</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Apple Green</td>
                            <td className="last">12</td>
                          </tr>
                          <tr>
                            <td>Orange</td>
                            <td className="last">11</td>
                          </tr>
                          <tr>
                            <td>White</td>
                            <td className="last">2</td>
                          </tr>
                          <tr>
                            <td>Black</td>
                            <td className="last">12</td>
                          </tr>
                          <tr>
                            <td>Violet</td>
                            <td className="last">12</td>
                          </tr>
                          <tr>
                            <td>Fuchsia Pink</td>
                            <td className="last">11</td>
                          </tr>
                          <tr>
                            <td>Royal Blue</td>
                            <td className="last">12</td>
                          </tr>
                          <tr>
                            <td className="pb-2">Gucci Green</td>
                            <td className="pb-2 last">12</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* available stock Detail */}
                {/* available colors */}
                <div className="availableColors mb-4">
                  <h6 className="fw-semibold mb-3">Available Colors</h6>
                  <div className="colorSwatches-group d-flex flex-wrap gap-3 align-items-center ps-1">
                  {data?.images?.map((item)=>{
                      return(
                        <button className="btn activeSwatch">
                      <div className="swatch-img">
                        <img src={item.path} alt="..." className="img-fluid" />
                      </div>
                      <div className="colorTitle">Apple Green</div>
                    </button>
                      )
                    })}
                  
                   
                  </div>
                </div>
                {/* available colors */}
                {/* size Guide container */}
                <div className="sizesContainer mb-3">
                  <table className="table table-bordered packSizes mb-3">
                    <tbody>
                      <tr>
                        <td>Pack Sizes (UK)</td>
                        <td className="last">One Size Uk Fit (10 - 20)</td>
                      </tr>
                      <tr>
                        <td>Pack Ratio</td>
                        <td className="last">1</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="sizeGuide">
                    {/* Size Guide Button */}
                    <button type="button" className="btn sizeGuidebtn" data-bs-toggle="modal" data-bs-target="#sizeChartModal">Size Guide</button>
                    {/* Size Chart Modal */}
                    <div className="modal fade" id="sizeChartModal" tabIndex={-1} aria-labelledby="sizeChartModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                          <div className="modal-body p-0">
                            <img src={img21} alt="..." className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Size Chart Modal */}
                  </div>
                </div>
                {/* size Guide container */}
                {/* klarna option */}
                <div className="klarna mb-3">
                  <img src={img21} alt="..." className="img-fluid" />
                  <span className="klarna-text">Pay in <b>30</b> days. Interest free.</span>
                </div>
                {/* klarna option */}
                {/* paypal option */}
                <div className="paypal mb-4">
                  <img src={img22} alt="..." className="img-fluid" />
                  <span className="paypal-text">Pay in <b>3</b> interest-free payments on purchases from
                    £30-£2,000. <a href="/">Learn more.</a></span>
                </div>
                {/* paypal option */}
                {/* Add to cart div */}
                <div className="row buying-options align-items-center justify-content-center justify-content-sm-start mb-4 gy-3 gy-sm-0">
                  <div className="col-7 col-sm-auto order-1">
                    <div className="qty-options">
                      <div className="input-group">
                        <button className="btn btn-outline-secondary qty-minus-btn" type="button">−</button>
                        <input type="text" id="quantity" name="quantity" className="input-number" defaultValue={1} min={1} max={100} />
                        <button className="btn btn-outline-secondary qty-plus-btn" type="button">+</button>
                      </div>
                    </div>
                  </div>
                  <div className="col order-3 order-sm-2">
                    <div className="addToCart">
                      <button className="btn rounded-pill w-100"><i className="bi bi-cart-plus me-2" /> Add
                        to Cart</button>
                    </div>
                  </div>
                  <div className="col-4 col-sm-auto order-2 order-sm-3">
                    <div className="prodWishlist rounded-2">
                      <i className="bi bi-suit-heart" />
                    </div>
                  </div>
                </div>
                {/* Add to cart div */}
                {/* stock availability notice */}
                <div className="positive-stockNotice text-center mb-4">
                  <span className="dispatch-notice">USUALLY DISPATCHED IN <b>24</b> HRS </span>
                  <span className="separator fw-bold">/ </span>
                  <span className="positive-status">ITEM IN STOCK
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 80 80">
                      <defs>
                        <style dangerouslySetInnerHTML={{__html: "\n                                                .cls-1 {\n                                                    fill: #000;\n                                                }\n\n                                                .cls-2 {\n                                                    fill: #00daaa;\n                                                }\n                                            " }} />
                      </defs>
                      <title>tick mark</title>
                      <path className="cls-1" d="M70.94,31.08a31,31,0,0,1,.85,4.2,36.7,36.7,0,0,1,.29,6.2A34.85,34.85,0,0,1,67,58.37,35.09,35.09,0,0,1,53.05,71.29a34.56,34.56,0,0,1-11.2,3.55,35.26,35.26,0,0,1-8.83.1,34.44,34.44,0,0,1-11.57-3.39A35.1,35.1,0,0,1,2.07,36.37,34.49,34.49,0,0,1,8.36,19.74,35,35,0,0,1,22.28,8.16,34.31,34.31,0,0,1,32.45,5.23a35.5,35.5,0,0,1,8.24-.1,34.63,34.63,0,0,1,15.17,5.31c1,.6,1.85,1.26,2.75,1.93.2.15.21.23,0,.41-1.16,1.14-2.3,2.28-3.44,3.44-.15.16-.25.15-.42,0a29.71,29.71,0,0,0-6.34-3.62A29.72,29.72,0,0,0,13,22.58a29.15,29.15,0,0,0-5.34,13,29.7,29.7,0,0,0,31.67,34.1,29.2,29.2,0,0,0,10.89-3,29.78,29.78,0,0,0,10.91-9.23,29.24,29.24,0,0,0,4.14-8.07A29.85,29.85,0,0,0,66.7,39.08a25.16,25.16,0,0,0-.29-3.24.41.41,0,0,1,.11-.38c1.43-1.41,2.85-2.84,4.28-4.26A.94.94,0,0,1,70.94,31.08Z">
                      </path>
                      <path className="cls-2" d="M77.46,16.8c0,.13-.12.18-.19.25l-7.58,7.59L56.61,37.72,42.93,51.39l-5.69,5.7c-.2.21-.3.2-.5,0Q29.7,50,22.65,43q-3.42-3.44-6.85-6.84c-.18-.19-.17-.29,0-.48l4.67-7c.35-.53.71-1.05,1.05-1.59.17-.27.27-.31.52-.07,2.3,2.33,4.62,4.64,6.94,7,2.59,2.59,5.19,5.18,7.77,7.78.21.2.32.25.55,0q8-8.06,16.07-16.08L70.85,8.2c.53-.53.53-.52.94.1l5.4,8.07Z">
                      </path>
                    </svg>
                  </span>
                </div>
                {/* stock availability notice */}
                {/* rock section */}
                <div className="rock-section">
                  <h5 className="text-uppercase text-center fw-semibold mb-3">Why we Rock!</h5>
                  <img src={img24} alt="..." className="img-fluid" />
                </div>
                {/* rock section */}
              </div>
            </div>
          </div>
          {/* products details End */}
          {/* product Description Tabs start */}
          <div className="productDesc-tabs mb-5">
            <ul className="nav nav-tabs nav-fill mb-4" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="desc-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="measure-tab" data-bs-toggle="tab" data-bs-target="#Measurement" type="button" role="tab" aria-controls="Measurement" aria-selected="false">Measurements</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="material-tab" data-bs-toggle="tab" data-bs-target="#material" type="button" role="tab" aria-controls="material" aria-selected="false">Material</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="country-tab" data-bs-toggle="tab" data-bs-target="#country" type="button" role="tab" aria-controls="country" aria-selected="false">Country of
                  Origin</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="disclaim-tab" data-bs-toggle="tab" data-bs-target="#disclaimer" type="button" role="tab" aria-controls="disclaimer" aria-selected="false">Disclaimers</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="shipping-tab" data-bs-toggle="tab" data-bs-target="#shipping" type="button" role="tab" aria-controls="shipping" aria-selected="false">Shipping &amp;
                  Delivery</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false">About</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="desc-tab" >
               <div dangerouslySetInnerHTML={{__html:data?.description}}></div>
                <ul>
                  <li>Can be worn Off Shoulder</li>
                  <li>Seamless leaves print</li>
                  <li>Full length flared sleeves</li>
                  <li>Drawstring Tassel Neckline</li>
                  <li>Tiered Hem</li>
                </ul>
              </div>
              <div className="tab-pane fade" id="Measurement" role="tabpanel" aria-labelledby="measure-tab">
                <ul>
                  <li>SHOULDER TO SHOULDER: 60cm</li>
                  <li>CHEST: 69cm</li>
                  <li>SLEEVE: 32cm</li>
                  <li>LENGTH: 88cm</li>
                </ul>
              </div>
              <div className="tab-pane fade" id="material" role="tabpanel" aria-labelledby="material-tab">
                <p>Exact Material: 95% Polyester, 5% Elastane</p>
              </div>
              <div className="tab-pane fade" id="country" role="tabpanel" aria-labelledby="country-tab">
                <p>Made in Italy</p>
              </div>
              <div className="tab-pane fade" id="disclaimer" role="tabpanel" aria-labelledby="disclaim-tab">
                <ul>
                  <li>All measurements are approximate.</li>
                  <li>All pictures and colors may vary slightly due to lighting effects in the studio. Any jewellery/accessories are not included in the sale.</li>
                  <li>We supply wholesale plus size fashion clothing to Manchester, Birmingham, London &amp; all over the UK, Europe &amp; worldwide.</li>
                  <li>We offer the latest high street fashion at the most affordable wholesale prices to the retailers</li>
                </ul>
              </div>
              <div className="tab-pane fade" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
                <img src="../../images/productpage/cnaged-3.avif" alt="..." className="img-fluid mb-3 w-100" />
                <p>
                  Once we receive your order we will forward this to our warehouse for immediate picking, and we aim to dispatch 
                  your items on the same day so you have your order the very next day. For orders placed over the weekends or 
                  late in the afternoon these will be processed the following day. On the rare occasion that an item is not 
                  available we will always offer you an alternative, or as a substitute, we’ll reimburse you for this product. 
                  For shipping costs or information, please visit the Delivery Information Page displayed at the bottom of the 
                  page.
                </p>
              </div>
              <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                <p>We wholesale shopping is one of the leading clothing suppliers that deal in Italian fashion. We offer the 
                  latest trends and styles whether you deal with men's or women's clothing. Be it tops or trousers, dresses or 
                  loungewear, lingeries or gym wear, footwear, or jewellery, we have covered you all.
                </p>
              </div>
            </div>
          </div>
          {/* product Description Tabs start */}
          {/* Product Review Section Start */}
          <div className="prodReviews container-fluid mb-5">
            <div className="row">
              <div className="col-md-6 text-center">
                <h4>Customer Reviews</h4>
                <div className="reviewWrite d-flex justify-content-center align-items-center gap-2">
                  <div className="stars">
                    <i className="bi bi-star" />
                    <i className="bi bi-star" />
                    <i className="bi bi-star" />
                    <i className="bi bi-star" />
                    <i className="bi bi-star" />
                  </div>
                  <p className="mb-0">Be the first to write a review</p>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <h4>Customer Service</h4>
                <div className="reviewWrite d-flex justify-content-center gap-2">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={40} height={40} viewBox="0 0 80 80" style={{enableBackground: 'new 0 0 80 80'}} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{__html: ".st0{display:none;}.st1{display:inline;fill:none;stroke:#939598;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}.st2{display:inline;fill:none;stroke:#939598;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:8.844,5.306,0,5.306;}.st3{display:inline}.st4{display:inline}.st5{display:inline}.st6{display:inline}" }} /><g className="st0"><circle className="st1" cx="46.5" cy={20} r={5} /><circle className="st1" cx="-0.5" cy={20} r={5} /><polyline className="st1" points="58.3,13.2 58.3,20 56.6,20 " /><polyline className="st1" points="41.5,20 11.3,20 11.3,-22 58.3,-22 58.3,3.2 " /><polyline className="st1" points="9.6,20 11.3,20 11.3,-13.6 -0.5,-13.6 -12.2,3.2 -12.2,20 -5.5,20 " /><polyline className="st1" points="-12.2,3.2 4.6,3.2 4.6,-13.6 " /><line className="st1" x1="58.3" y1="14.9" x2="-12.2" y2="14.9" /><line className="st2" x1="61.6" y1="8.2" x2="46.5" y2="8.2" /><line className="st1" x1="46.5" y1="-3.5" x2="61.6" y2="-3.5" /><line className="st2" x1="51.6" y1="-15.3" x2="46.5" y2="-15.3" /><line className="st1" x1="4.6" y1="8.2" x2="2.9" y2="8.2" /><circle className="st1" cx="-0.5" cy={20} r="0.4" /><circle className="st1" cx="46.5" cy={20} r="0.4" /><line className="st2" x1="19.7" y1={25} x2="4.6" y2={25} /><circle className="st1" cx="34.8" cy="-3.5" r="11.7" /><line className="st1" x1="34.8" y1="-10.3" x2="34.8" y2="-3.5" /><line className="st1" x1="28.1" y1="-3.5" x2="34.8" y2="-3.5" /></g><g className="st0"><path className="st1" d="M36.6,38h-24C6.3,38,1.3,33,1.3,26.8v-50.6C1.3-30,6.3-35,12.5-35h24c6.2,0,11.2,5,11.2,11.2v50.6C47.8,33,42.8,38,36.6,38z" /><line className="st1" x1="22.9" y1="33.1" x2="26.2" y2="33.1" /><line className="st1" x1="1.3" y1="28.1" x2="47.8" y2="28.1" /><line className="st1" x1="21.2" y1="-33.3" x2="27.9" y2="-33.3" /><polyline className="st1" points="8,-13.4 8,-18.4 12.9,-18.4 " /><polyline className="st1" points="41.2,-13.4 41.2,-18.4 36.2,-18.4 " /><polyline className="st1" points="8,9.8 8,14.8 12.9,14.8 " /><polyline className="st1" points="41.2,9.8 41.2,14.8 36.2,14.8 " /><line className="st1" x1="19.6" y1="8.2" x2="19.6" y2="-8.4" /><line className="st1" x1="24.6" y1="8.2" x2="24.6" y2="-11.8" /><line className="st1" x1="29.5" y1="8.2" x2="29.5" y2="-3.5" /><line className="st1" x1="34.5" y1="8.2" x2="34.5" y2="-11.8" /><line className="st1" x1="14.6" y1="8.2" x2="14.6" y2="-11.8" /></g><g className="st0"><rect x="6.2" y="33.6" className="st1" width="34.6" height="37.6" /><polyline className="st1" points="25.8,29.1 25.8,17 72.4,17 72.4,65.2 45.3,65.2 " /><path className="st1" d="M60.4,26.1v-9.8C60.4,10.1,55.3,5,49.1,5c-6.2,0-11.3,5.1-11.3,11.3v9.8" /><circle className="st1" cx="37.8" cy="26.1" r="1.5" /><circle className="st1" cx="60.4" cy="26.1" r="1.5" /><path className="st1" d="M30.3,41.1v3.8c0,3.7-3,6.8-6.8,6.8s-6.8-3-6.8-6.8v-3.8" /><line className="st1" x1="15.2" y1="41.1" x2="18.2" y2="41.1" /><line className="st1" x1="28.8" y1="41.1" x2="31.8" y2="41.1" /><line className="st1" x1="34.8" y1="65.2" x2="6.2" y2="65.2" /><polyline className="st1" points="66.4,42.6 66.4,59.2 49.8,59.2 " /></g><g className="st0"><polyline className="st1" points="61.7,46.1 61.7,28.6 10.8,28.6 " /><path className="st1" d="M6,23.8v44.5c0,2.6,2.1,4.8,4.8,4.8h50.9V55.7" /><polyline className="st1" points="69.6,46.1 69.6,19.1 55.3,19.1 " /><polyline className="st1" points="61.7,63.6 69.6,63.6 69.6,55.7 " /><path className="st1" d="M10.8,28.6c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8h4.8" /><path className="st1" d="M69.6,46.1H52.1c-2.6,0-4.8,2.1-4.8,4.8c0,2.6,2.1,4.8,4.8,4.8h19.1c2.6,0,4.8-2.1,4.8-4.8v-9.5" /><path className="st1" d="M71.2,46.1h-1.6v-9.5h1.6c2.6,0,4.8,2.1,4.8,4.8C76,44,73.9,46.1,71.2,46.1z" /><circle className="st1" cx="52.1" cy="50.9" r="0.4" /><path className="st1" d="M39.6,11.1H23.3c-4.3,0-7.8,3.5-7.8,7.8v9.7h31.8v-9.7C47.4,14.6,43.9,11.1,39.6,11.1z" /><polyline className="st1" points="23.5,28.6 55.3,28.6 55.3,6.3 23.5,6.3 23.5,11.1 " /><path className="st1" d="M38.6,46.1L38.6,46.1c0-1.8-1.4-3.2-3.2-3.2h-3.2c-1.8,0-3.2,1.4-3.2,3.2v1.6c0,1.8,1.4,3.2,3.2,3.2h3.2c1.8,0,3.2,1.4,3.2,3.2v1.6c0,1.8-1.4,3.2-3.2,3.2h-3.2c-1.8,0-3.2-1.4-3.2-3.2" /><line className="st1" x1="33.8" y1="39.8" x2="33.8" y2="42.9" /><line className="st1" x1="33.8" y1={62} x2="33.8" y2="58.8" /></g><g className="st0"><path className="st3" fill="#FFC727" d="M75,40.8C75,60,59.4,75.6,40.2,75.6C21,75.6,5.4,60,5.4,40.8C5.4,21.6,21,6,40.2,6C59.4,6,75,21.6,75,40.8" /><path className="st4" fill="#37474F" d="M61.7,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9C59.5,29,61.7,31.2,61.7,33.9" /><path className="st4" fill="#37474F" d="M28.5,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9s2.2-4.9,4.9-4.9S28.5,31.2,28.5,33.9" /><path className="st4" fill="#37474F" d="M49,31.8c0,2.1-0.7,4-2,5.5c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c-1.2-1.5-1.9-3.4-1.9-5.5H49z" /><path className="st5" fill="#DD6A57" d="M47.1,37.3c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c1.8-1.6,4.2-2.5,6.9-2.5C42.9,34.8,45.3,35.7,47.1,37.3" /></g><g className="st0"><path className="st6" fill="#EBEBEB" d="M75.6,39.7c0,19.7-16,35.7-35.7,35.7c-19.7,0-35.7-16-35.7-35.7C4.2,20,20.1,4,39.9,4C59.6,4,75.6,20,75.6,39.7" /><path className="st4" fill="#37474F" d="M61.9,32.6c0,2.8-2.3,5-5,5c-2.8,0-5-2.3-5-5c0-2.8,2.3-5,5-5C59.7,27.6,61.9,29.9,61.9,32.6" /><path className="st4" fill="#37474F" d="M27.8,32.6c0,2.8-2.3,5-5,5c-2.8,0-5-2.3-5-5s2.3-5,5-5C25.6,27.6,27.8,29.9,27.8,32.6" /><path className="st4" fill="#37474F" d="M30.8,30.5c0.6,2.2,1.7,4.1,3.3,5.5c1.6,1.3,3.6,1.9,5.7,1.9c2.1,0.1,4.1-0.5,5.7-1.8c1.6-1.3,2.8-3.2,3.5-5.3c-0.1,2.3-1,4.6-2.6,6.3c-0.8,0.9-1.9,1.5-3,2c-1.2,0.4-2.4,0.6-3.6,0.6c-1.2,0-2.4-0.2-3.5-0.7c-1.1-0.5-2.2-1.1-3-2C31.5,35.1,30.7,32.7,30.8,30.5" /></g><g className="st0"><path className="st6" fill="#EBEBEB" d="M76,40.1c0,20.1-16.3,36.3-36.3,36.3c-20.1,0-36.3-16.3-36.3-36.3C3.4,20,19.6,3.8,39.7,3.8C59.7,3.8,76,20.1,76,40.1" /><path className="st4" fill="#37474F" d="M62.1,32.9c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1C59.8,27.8,62.1,30.1,62.1,32.9" /><path className="st4" fill="#37474F" d="M27.5,32.9c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1C25.2,27.8,27.5,30.1,27.5,32.9" /><path className="st4" fill="#37474F" d="M29.8,34.3c3.3-0.6,6.6-0.7,9.9-0.7c3.3,0,6.6,0.2,9.9,0.7c-3.3,0.6-6.6,0.7-9.9,0.7C36.4,35,33.1,34.9,29.8,34.3" /></g><g className="st0"><path className="st6" fill="#EBEBEB" d="M76,40.1C76,60,59.8,76.2,39.9,76.2C20,76.2,3.8,60,3.8,40.1C3.8,20.2,20,4,39.9,4C59.8,4,76,20.2,76,40.1" /><path className="st4" fill="#37474F" d="M62.2,33c0,2.8-2.3,5.1-5.1,5.1s-5.1-2.3-5.1-5.1s2.3-5.1,5.1-5.1S62.2,30.1,62.2,33" /><path className="st4" fill="#37474F" d="M27.8,33c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1C25.5,27.9,27.8,30.1,27.8,33" /><path className="st4" fill="#37474F" d="M30.7,35.3c2.3-2.5,5.8-3.6,9.2-3.6c1.7,0.1,3.4,0.3,5,1c1.6,0.6,3,1.5,4.2,2.6c-1.6-0.3-3.2-0.7-4.7-1c-1.5-0.3-3-0.4-4.5-0.4c-1.5-0.1-3,0.1-4.5,0.3C33.8,34.5,32.3,34.8,30.7,35.3" /></g><g><path className="st7" fill="#EBEBEB" d="M76,40c0,19.9-16.1,36-36,36c-19.9,0-36-16.1-36-36c0-19.9,16.1-36,36-36C59.9,4,76,20.1,76,40" /><path className="st8" fill="#37474F" d="M62.3,32.9c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1C60,27.8,62.3,30.1,62.3,32.9" /><path className="st8" fill="#37474F" d="M27.9,32.9c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1s2.3-5.1,5.1-5.1C25.6,27.8,27.9,30.1,27.9,32.9" /><path className="st8" fill="#37474F" d="M49.2,39.8c-0.6-2.2-1.7-4.2-3.3-5.5c-1.6-1.3-3.6-1.9-5.7-1.9c-2.1-0.1-4.1,0.5-5.7,1.8c-1.6,1.3-2.8,3.2-3.6,5.4c0.1-2.3,1-4.6,2.7-6.3c0.8-0.9,1.9-1.5,3.1-2c1.2-0.4,2.4-0.6,3.6-0.6c1.2,0,2.4,0.2,3.6,0.7c1.1,0.5,2.2,1.1,3,2C48.5,35.1,49.2,37.5,49.2,39.8" /></g></svg>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={40} height={40} viewBox="0 0 80 80" style={{enableBackground: 'new 0 0 80 80'}} xmlSpace="preserve"> <style type="text/css" dangerouslySetInnerHTML={{__html: " .st0 { display: none; } .st1 { display: inline; fill: none; stroke: #939598; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; } .st2 { display: inline; fill: none; stroke: #939598; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 8.844, 5.306, 0, 5.306; } .st3 { display: inline; } .st4 { display: inline; } .st5 { display: inline; } .st6 { display: inline; } " }} /> <g className="st0"> <circle className="st1" cx="46.5" cy={20} r={5} /> <circle className="st1" cx="-0.5" cy={20} r={5} /> <polyline className="st1" points="58.3,13.2 58.3,20 56.6,20 " /> <polyline className="st1" points="41.5,20 11.3,20 11.3,-22 58.3,-22 58.3,3.2 " /> <polyline className="st1" points="9.6,20 11.3,20 11.3,-13.6 -0.5,-13.6 -12.2,3.2 -12.2,20 -5.5,20 " /> <polyline className="st1" points="-12.2,3.2 4.6,3.2 4.6,-13.6 " /> <line className="st1" x1="58.3" y1="14.9" x2="-12.2" y2="14.9" /> <line className="st2" x1="61.6" y1="8.2" x2="46.5" y2="8.2" /> <line className="st1" x1="46.5" y1="-3.5" x2="61.6" y2="-3.5" /> <line className="st2" x1="51.6" y1="-15.3" x2="46.5" y2="-15.3" /> <line className="st1" x1="4.6" y1="8.2" x2="2.9" y2="8.2" /> <circle className="st1" cx="-0.5" cy={20} r="0.4" /> <circle className="st1" cx="46.5" cy={20} r="0.4" /> <line className="st2" x1="19.7" y1={25} x2="4.6" y2={25} /> <circle className="st1" cx="34.8" cy="-3.5" r="11.7" /> <line className="st1" x1="34.8" y1="-10.3" x2="34.8" y2="-3.5" /> <line className="st1" x1="28.1" y1="-3.5" x2="34.8" y2="-3.5" /> </g> <g className="st0"> <path className="st1" d="M36.6,38h-24C6.3,38,1.3,33,1.3,26.8v-50.6C1.3-30,6.3-35,12.5-35h24c6.2,0,11.2,5,11.2,11.2v50.6C47.8,33,42.8,38,36.6,38z" /> <line className="st1" x1="22.9" y1="33.1" x2="26.2" y2="33.1" /> <line className="st1" x1="1.3" y1="28.1" x2="47.8" y2="28.1" /> <line className="st1" x1="21.2" y1="-33.3" x2="27.9" y2="-33.3" /> <polyline className="st1" points="8,-13.4 8,-18.4 12.9,-18.4 " /> <polyline className="st1" points="41.2,-13.4 41.2,-18.4 36.2,-18.4 " /> <polyline className="st1" points="8,9.8 8,14.8 12.9,14.8 " /> <polyline className="st1" points="41.2,9.8 41.2,14.8 36.2,14.8 " /> <line className="st1" x1="19.6" y1="8.2" x2="19.6" y2="-8.4" /> <line className="st1" x1="24.6" y1="8.2" x2="24.6" y2="-11.8" /> <line className="st1" x1="29.5" y1="8.2" x2="29.5" y2="-3.5" /> <line className="st1" x1="34.5" y1="8.2" x2="34.5" y2="-11.8" /> <line className="st1" x1="14.6" y1="8.2" x2="14.6" y2="-11.8" /> </g> <g className="st0"> <rect x="6.2" y="33.6" className="st1" width="34.6" height="37.6" /> <polyline className="st1" points="25.8,29.1 25.8,17 72.4,17 72.4,65.2 45.3,65.2 " /> <path className="st1" d="M60.4,26.1v-9.8C60.4,10.1,55.3,5,49.1,5c-6.2,0-11.3,5.1-11.3,11.3v9.8" /> <circle className="st1" cx="37.8" cy="26.1" r="1.5" /> <circle className="st1" cx="60.4" cy="26.1" r="1.5" /> <path className="st1" d="M30.3,41.1v3.8c0,3.7-3,6.8-6.8,6.8s-6.8-3-6.8-6.8v-3.8" /> <line className="st1" x1="15.2" y1="41.1" x2="18.2" y2="41.1" /> <line className="st1" x1="28.8" y1="41.1" x2="31.8" y2="41.1" /> <line className="st1" x1="34.8" y1="65.2" x2="6.2" y2="65.2" /> <polyline className="st1" points="66.4,42.6 66.4,59.2 49.8,59.2 " /> </g> <g className="st0"> <polyline className="st1" points="61.7,46.1 61.7,28.6 10.8,28.6 " /> <path className="st1" d="M6,23.8v44.5c0,2.6,2.1,4.8,4.8,4.8h50.9V55.7" /> <polyline className="st1" points="69.6,46.1 69.6,19.1 55.3,19.1 " /> <polyline className="st1" points="61.7,63.6 69.6,63.6 69.6,55.7 " /> <path className="st1" d="M10.8,28.6c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8h4.8" /> <path className="st1" d="M69.6,46.1H52.1c-2.6,0-4.8,2.1-4.8,4.8c0,2.6,2.1,4.8,4.8,4.8h19.1c2.6,0,4.8-2.1,4.8-4.8v-9.5" /> <path className="st1" d="M71.2,46.1h-1.6v-9.5h1.6c2.6,0,4.8,2.1,4.8,4.8C76,44,73.9,46.1,71.2,46.1z" /> <circle className="st1" cx="52.1" cy="50.9" r="0.4" /> <path className="st1" d="M39.6,11.1H23.3c-4.3,0-7.8,3.5-7.8,7.8v9.7h31.8v-9.7C47.4,14.6,43.9,11.1,39.6,11.1z" /> <polyline className="st1" points="23.5,28.6 55.3,28.6 55.3,6.3 23.5,6.3 23.5,11.1 " /> <path className="st1" d="M38.6,46.1L38.6,46.1c0-1.8-1.4-3.2-3.2-3.2h-3.2c-1.8,0-3.2,1.4-3.2,3.2v1.6c0,1.8,1.4,3.2,3.2,3.2h3.2c1.8,0,3.2,1.4,3.2,3.2v1.6c0,1.8-1.4,3.2-3.2,3.2h-3.2c-1.8,0-3.2-1.4-3.2-3.2" /> <line className="st1" x1="33.8" y1="39.8" x2="33.8" y2="42.9" /> <line className="st1" x1="33.8" y1={62} x2="33.8" y2="58.8" /> </g> <g className="st0"> <path className="st3" fill="#FFC727" d="M75,40.8C75,60,59.4,75.6,40.2,75.6C21,75.6,5.4,60,5.4,40.8C5.4,21.6,21,6,40.2,6C59.4,6,75,21.6,75,40.8" /> <path className="st4" fill="#37474F" d="M61.7,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9C59.5,29,61.7,31.2,61.7,33.9" /> <path className="st4" fill="#37474F" d="M28.5,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9s2.2-4.9,4.9-4.9S28.5,31.2,28.5,33.9" /> <path className="st4" fill="#37474F" d="M49,31.8c0,2.1-0.7,4-2,5.5c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c-1.2-1.5-1.9-3.4-1.9-5.5H49z" /> <path className="st5" fill="#37474F" d="M47.1,37.3c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c1.8-1.6,4.2-2.5,6.9-2.5C42.9,34.8,45.3,35.7,47.1,37.3" /> </g> <g className="st0"> <path className="st6" fill="#EBEBEB" d="M75.6,39.7c0,19.7-16,35.7-35.7,35.7c-19.7,0-35.7-16-35.7-35.7C4.2,20,20.1,4,39.9,4C59.6,4,75.6,20,75.6,39.7" /> <path className="st4" fill="#37474F" d="M61.9,32.6c0,2.8-2.3,5-5,5c-2.8,0-5-2.3-5-5c0-2.8,2.3-5,5-5C59.7,27.6,61.9,29.9,61.9,32.6" /> <path className="st4" fill="#37474F" d="M27.8,32.6c0,2.8-2.3,5-5,5c-2.8,0-5-2.3-5-5s2.3-5,5-5C25.6,27.6,27.8,29.9,27.8,32.6" /> <path className="st4" fill="#37474F" d="M30.8,30.5c0.6,2.2,1.7,4.1,3.3,5.5c1.6,1.3,3.6,1.9,5.7,1.9c2.1,0.1,4.1-0.5,5.7-1.8c1.6-1.3,2.8-3.2,3.5-5.3c-0.1,2.3-1,4.6-2.6,6.3c-0.8,0.9-1.9,1.5-3,2c-1.2,0.4-2.4,0.6-3.6,0.6c-1.2,0-2.4-0.2-3.5-0.7c-1.1-0.5-2.2-1.1-3-2C31.5,35.1,30.7,32.7,30.8,30.5" /> </g> <g className="st0"> <path className="st6" fill="#EBEBEB" d="M76,40.1c0,20.1-16.3,36.3-36.3,36.3c-20.1,0-36.3-16.3-36.3-36.3C3.4,20,19.6,3.8,39.7,3.8C59.7,3.8,76,20.1,76,40.1" /> <path className="st4" fill="#37474F" d="M62.1,32.9c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1C59.8,27.8,62.1,30.1,62.1,32.9" /> <path className="st4" fill="#37474F" d="M27.5,32.9c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1C25.2,27.8,27.5,30.1,27.5,32.9" /> <path className="st4" fill="#37474F" d="M29.8,34.3c3.3-0.6,6.6-0.7,9.9-0.7c3.3,0,6.6,0.2,9.9,0.7c-3.3,0.6-6.6,0.7-9.9,0.7C36.4,35,33.1,34.9,29.8,34.3" /> </g> <g> <path className="st7" fill="#EBEBEB" d="M76,40.1C76,60,59.8,76.2,39.9,76.2C20,76.2,3.8,60,3.8,40.1C3.8,20.2,20,4,39.9,4C59.8,4,76,20.2,76,40.1" /> <path className="st8" fill="#37474F" d="M62.2,33c0,2.8-2.3,5.1-5.1,5.1s-5.1-2.3-5.1-5.1s2.3-5.1,5.1-5.1S62.2,30.1,62.2,33" /> <path className="st8" fill="#37474F" d="M27.8,33c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1C25.5,27.9,27.8,30.1,27.8,33" /> <path className="st8" fill="#37474F" d="M30.7,35.3c2.3-2.5,5.8-3.6,9.2-3.6c1.7,0.1,3.4,0.3,5,1c1.6,0.6,3,1.5,4.2,2.6c-1.6-0.3-3.2-0.7-4.7-1c-1.5-0.3-3-0.4-4.5-0.4c-1.5-0.1-3,0.1-4.5,0.3C33.8,34.5,32.3,34.8,30.7,35.3" /> </g></svg>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={40} height={40} viewBox="0 0 80 80" style={{enableBackground: 'new 0 0 80 80'}} xmlSpace="preserve"> <style type="text/css" dangerouslySetInnerHTML={{__html: " .st0 { display: none; } .st1 { display: inline; fill: none; stroke: #939598; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; } .st2 { display: inline; fill: none; stroke: #939598; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 8.844, 5.306, 0, 5.306; } .st3 { display: inline; } .st4 { display: inline; } .st5 { display: inline; } .st6 { display: inline; } " }} /> <g className="st0"> <circle className="st1" cx="46.5" cy={20} r={5} /> <circle className="st1" cx="-0.5" cy={20} r={5} /> <polyline className="st1" points="58.3,13.2 58.3,20 56.6,20 " /> <polyline className="st1" points="41.5,20 11.3,20 11.3,-22 58.3,-22 58.3,3.2 " /> <polyline className="st1" points="9.6,20 11.3,20 11.3,-13.6 -0.5,-13.6 -12.2,3.2 -12.2,20 -5.5,20 " /> <polyline className="st1" points="-12.2,3.2 4.6,3.2 4.6,-13.6 " /> <line className="st1" x1="58.3" y1="14.9" x2="-12.2" y2="14.9" /> <line className="st2" x1="61.6" y1="8.2" x2="46.5" y2="8.2" /> <line className="st1" x1="46.5" y1="-3.5" x2="61.6" y2="-3.5" /> <line className="st2" x1="51.6" y1="-15.3" x2="46.5" y2="-15.3" /> <line className="st1" x1="4.6" y1="8.2" x2="2.9" y2="8.2" /> <circle className="st1" cx="-0.5" cy={20} r="0.4" /> <circle className="st1" cx="46.5" cy={20} r="0.4" /> <line className="st2" x1="19.7" y1={25} x2="4.6" y2={25} /> <circle className="st1" cx="34.8" cy="-3.5" r="11.7" /> <line className="st1" x1="34.8" y1="-10.3" x2="34.8" y2="-3.5" /> <line className="st1" x1="28.1" y1="-3.5" x2="34.8" y2="-3.5" /> </g> <g className="st0"> <path className="st1" d="M36.6,38h-24C6.3,38,1.3,33,1.3,26.8v-50.6C1.3-30,6.3-35,12.5-35h24c6.2,0,11.2,5,11.2,11.2v50.6C47.8,33,42.8,38,36.6,38z" /> <line className="st1" x1="22.9" y1="33.1" x2="26.2" y2="33.1" /> <line className="st1" x1="1.3" y1="28.1" x2="47.8" y2="28.1" /> <line className="st1" x1="21.2" y1="-33.3" x2="27.9" y2="-33.3" /> <polyline className="st1" points="8,-13.4 8,-18.4 12.9,-18.4 " /> <polyline className="st1" points="41.2,-13.4 41.2,-18.4 36.2,-18.4 " /> <polyline className="st1" points="8,9.8 8,14.8 12.9,14.8 " /> <polyline className="st1" points="41.2,9.8 41.2,14.8 36.2,14.8 " /> <line className="st1" x1="19.6" y1="8.2" x2="19.6" y2="-8.4" /> <line className="st1" x1="24.6" y1="8.2" x2="24.6" y2="-11.8" /> <line className="st1" x1="29.5" y1="8.2" x2="29.5" y2="-3.5" /> <line className="st1" x1="34.5" y1="8.2" x2="34.5" y2="-11.8" /> <line className="st1" x1="14.6" y1="8.2" x2="14.6" y2="-11.8" /> </g> <g className="st0"> <rect x="6.2" y="33.6" className="st1" width="34.6" height="37.6" /> <polyline className="st1" points="25.8,29.1 25.8,17 72.4,17 72.4,65.2 45.3,65.2 " /> <path className="st1" d="M60.4,26.1v-9.8C60.4,10.1,55.3,5,49.1,5c-6.2,0-11.3,5.1-11.3,11.3v9.8" /> <circle className="st1" cx="37.8" cy="26.1" r="1.5" /> <circle className="st1" cx="60.4" cy="26.1" r="1.5" /> <path className="st1" d="M30.3,41.1v3.8c0,3.7-3,6.8-6.8,6.8s-6.8-3-6.8-6.8v-3.8" /> <line className="st1" x1="15.2" y1="41.1" x2="18.2" y2="41.1" /> <line className="st1" x1="28.8" y1="41.1" x2="31.8" y2="41.1" /> <line className="st1" x1="34.8" y1="65.2" x2="6.2" y2="65.2" /> <polyline className="st1" points="66.4,42.6 66.4,59.2 49.8,59.2 " /> </g> <g className="st0"> <polyline className="st1" points="61.7,46.1 61.7,28.6 10.8,28.6 " /> <path className="st1" d="M6,23.8v44.5c0,2.6,2.1,4.8,4.8,4.8h50.9V55.7" /> <polyline className="st1" points="69.6,46.1 69.6,19.1 55.3,19.1 " /> <polyline className="st1" points="61.7,63.6 69.6,63.6 69.6,55.7 " /> <path className="st1" d="M10.8,28.6c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8h4.8" /> <path className="st1" d="M69.6,46.1H52.1c-2.6,0-4.8,2.1-4.8,4.8c0,2.6,2.1,4.8,4.8,4.8h19.1c2.6,0,4.8-2.1,4.8-4.8v-9.5" /> <path className="st1" d="M71.2,46.1h-1.6v-9.5h1.6c2.6,0,4.8,2.1,4.8,4.8C76,44,73.9,46.1,71.2,46.1z" /> <circle className="st1" cx="52.1" cy="50.9" r="0.4" /> <path className="st1" d="M39.6,11.1H23.3c-4.3,0-7.8,3.5-7.8,7.8v9.7h31.8v-9.7C47.4,14.6,43.9,11.1,39.6,11.1z" /> <polyline className="st1" points="23.5,28.6 55.3,28.6 55.3,6.3 23.5,6.3 23.5,11.1 " /> <path className="st1" d="M38.6,46.1L38.6,46.1c0-1.8-1.4-3.2-3.2-3.2h-3.2c-1.8,0-3.2,1.4-3.2,3.2v1.6c0,1.8,1.4,3.2,3.2,3.2h3.2c1.8,0,3.2,1.4,3.2,3.2v1.6c0,1.8-1.4,3.2-3.2,3.2h-3.2c-1.8,0-3.2-1.4-3.2-3.2" /> <line className="st1" x1="33.8" y1="39.8" x2="33.8" y2="42.9" /> <line className="st1" x1="33.8" y1={62} x2="33.8" y2="58.8" /> </g> <g className="st0"> <path className="st3" fill="#FFC727" d="M75,40.8C75,60,59.4,75.6,40.2,75.6C21,75.6,5.4,60,5.4,40.8C5.4,21.6,21,6,40.2,6C59.4,6,75,21.6,75,40.8" /> <path className="st4" fill="#37474F" d="M61.7,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9C59.5,29,61.7,31.2,61.7,33.9" /> <path className="st4" fill="#37474F" d="M28.5,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9s2.2-4.9,4.9-4.9S28.5,31.2,28.5,33.9" /> <path className="st4" fill="#37474F" d="M49,31.8c0,2.1-0.7,4-2,5.5c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c-1.2-1.5-1.9-3.4-1.9-5.5H49z" /> <path className="st5" fill="#DD6A57" d="M47.1,37.3c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c1.8-1.6,4.2-2.5,6.9-2.5C42.9,34.8,45.3,35.7,47.1,37.3" /> </g> <g className="st0"> <path className="st6" fill="#EBEBEB" d="M75.6,39.7c0,19.7-16,35.7-35.7,35.7c-19.7,0-35.7-16-35.7-35.7C4.2,20,20.1,4,39.9,4C59.6,4,75.6,20,75.6,39.7" /> <path className="st4" fill="#37474F" d="M61.9,32.6c0,2.8-2.3,5-5,5c-2.8,0-5-2.3-5-5c0-2.8,2.3-5,5-5C59.7,27.6,61.9,29.9,61.9,32.6" /> <path className="st4" fill="#37474F" d="M27.8,32.6c0,2.8-2.3,5-5,5c-2.8,0-5-2.3-5-5s2.3-5,5-5C25.6,27.6,27.8,29.9,27.8,32.6" /> <path className="st4" fill="#37474F" d="M30.8,30.5c0.6,2.2,1.7,4.1,3.3,5.5c1.6,1.3,3.6,1.9,5.7,1.9c2.1,0.1,4.1-0.5,5.7-1.8c1.6-1.3,2.8-3.2,3.5-5.3c-0.1,2.3-1,4.6-2.6,6.3c-0.8,0.9-1.9,1.5-3,2c-1.2,0.4-2.4,0.6-3.6,0.6c-1.2,0-2.4-0.2-3.5-0.7c-1.1-0.5-2.2-1.1-3-2C31.5,35.1,30.7,32.7,30.8,30.5" /> </g> <g> <path className="st7" fill="#EBEBEB" d="M76,40.1c0,20.1-16.3,36.3-36.3,36.3c-20.1,0-36.3-16.3-36.3-36.3C3.4,20,19.6,3.8,39.7,3.8C59.7,3.8,76,20.1,76,40.1" /> <path className="st8" fill="#37474F" d="M62.1,32.9c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1C59.8,27.8,62.1,30.1,62.1,32.9" /> <path className="st8" fill="#37474F" d="M27.5,32.9c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1C25.2,27.8,27.5,30.1,27.5,32.9" /> <path className="st8" fill="#37474F" d="M29.8,34.3c3.3-0.6,6.6-0.7,9.9-0.7c3.3,0,6.6,0.2,9.9,0.7c-3.3,0.6-6.6,0.7-9.9,0.7C36.4,35,33.1,34.9,29.8,34.3" /> </g></svg>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={40} height={40} viewBox="0 0 80 80" style={{enableBackground: 'new 0 0 80 80'}} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{__html: ".st0{display:none;}.st1{display:inline;fill:none;stroke:#939598;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}.st2{display:inline;fill:none;stroke:#939598;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:8.844,5.306,0,5.306;}.st3{display:inline;}.st4{display:inline;}.st5{display:inline;}" }} /><g className="st0"><circle className="st1" cx="46.5" cy={20} r={5} /><circle className="st1" cx="-0.5" cy={20} r={5} /><polyline className="st1" points="58.3,13.2 58.3,20 56.6,20 " /><polyline className="st1" points="41.5,20 11.3,20 11.3,-22 58.3,-22 58.3,3.2 " /><polyline className="st1" points="9.6,20 11.3,20 11.3,-13.6 -0.5,-13.6 -12.2,3.2 -12.2,20 -5.5,20 " /><polyline className="st1" points="-12.2,3.2 4.6,3.2 4.6,-13.6 " /><line className="st1" x1="58.3" y1="14.9" x2="-12.2" y2="14.9" /><line className="st2" x1="61.6" y1="8.2" x2="46.5" y2="8.2" /><line className="st1" x1="46.5" y1="-3.5" x2="61.6" y2="-3.5" /><line className="st2" x1="51.6" y1="-15.3" x2="46.5" y2="-15.3" /><line className="st1" x1="4.6" y1="8.2" x2="2.9" y2="8.2" /><circle className="st1" cx="-0.5" cy={20} r="0.4" /><circle className="st1" cx="46.5" cy={20} r="0.4" /><line className="st2" x1="19.7" y1={25} x2="4.6" y2={25} /><circle className="st1" cx="34.8" cy="-3.5" r="11.7" /><line className="st1" x1="34.8" y1="-10.3" x2="34.8" y2="-3.5" /><line className="st1" x1="28.1" y1="-3.5" x2="34.8" y2="-3.5" /></g><g className="st0"><path className="st1" d="M36.6,38h-24C6.3,38,1.3,33,1.3,26.8v-50.6C1.3-30,6.3-35,12.5-35h24c6.2,0,11.2,5,11.2,11.2v50.6C47.8,33,42.8,38,36.6,38z" /><line className="st1" x1="22.9" y1="33.1" x2="26.2" y2="33.1" /><line className="st1" x1="1.3" y1="28.1" x2="47.8" y2="28.1" /><line className="st1" x1="21.2" y1="-33.3" x2="27.9" y2="-33.3" /><polyline className="st1" points="8,-13.4 8,-18.4 12.9,-18.4 " /><polyline className="st1" points="41.2,-13.4 41.2,-18.4 36.2,-18.4 " /><polyline className="st1" points="8,9.8 8,14.8 12.9,14.8 " /><polyline className="st1" points="41.2,9.8 41.2,14.8 36.2,14.8 " /><line className="st1" x1="19.6" y1="8.2" x2="19.6" y2="-8.4" /><line className="st1" x1="24.6" y1="8.2" x2="24.6" y2="-11.8" /><line className="st1" x1="29.5" y1="8.2" x2="29.5" y2="-3.5" /><line className="st1" x1="34.5" y1="8.2" x2="34.5" y2="-11.8" /><line className="st1" x1="14.6" y1="8.2" x2="14.6" y2="-11.8" /></g><g className="st0"><rect x="6.2" y="33.6" className="st1" width="34.6" height="37.6" /><polyline className="st1" points="25.8,29.1 25.8,17 72.4,17 72.4,65.2 45.3,65.2 " /><path className="st1" d="M60.4,26.1v-9.8C60.4,10.1,55.3,5,49.1,5c-6.2,0-11.3,5.1-11.3,11.3v9.8" /><circle className="st1" cx="37.8" cy="26.1" r="1.5" /><circle className="st1" cx="60.4" cy="26.1" r="1.5" /><path className="st1" d="M30.3,41.1v3.8c0,3.7-3,6.8-6.8,6.8s-6.8-3-6.8-6.8v-3.8" /><line className="st1" x1="15.2" y1="41.1" x2="18.2" y2="41.1" /><line className="st1" x1="28.8" y1="41.1" x2="31.8" y2="41.1" /><line className="st1" x1="34.8" y1="65.2" x2="6.2" y2="65.2" /><polyline className="st1" points="66.4,42.6 66.4,59.2 49.8,59.2 " /></g><g className="st0"><polyline className="st1" points="61.7,46.1 61.7,28.6 10.8,28.6 " /><path className="st1" d="M6,23.8v44.5c0,2.6,2.1,4.8,4.8,4.8h50.9V55.7" /><polyline className="st1" points="69.6,46.1 69.6,19.1 55.3,19.1 " /><polyline className="st1" points="61.7,63.6 69.6,63.6 69.6,55.7 " /><path className="st1" d="M10.8,28.6c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8h4.8" /><path className="st1" d="M69.6,46.1H52.1c-2.6,0-4.8,2.1-4.8,4.8c0,2.6,2.1,4.8,4.8,4.8h19.1c2.6,0,4.8-2.1,4.8-4.8v-9.5" /><path className="st1" d="M71.2,46.1h-1.6v-9.5h1.6c2.6,0,4.8,2.1,4.8,4.8C76,44,73.9,46.1,71.2,46.1z" /><circle className="st1" cx="52.1" cy="50.9" r="0.4" /><path className="st1" d="M39.6,11.1H23.3c-4.3,0-7.8,3.5-7.8,7.8v9.7h31.8v-9.7C47.4,14.6,43.9,11.1,39.6,11.1z" /><polyline className="st1" points="23.5,28.6 55.3,28.6 55.3,6.3 23.5,6.3 23.5,11.1 " /><path className="st1" d="M38.6,46.1L38.6,46.1c0-1.8-1.4-3.2-3.2-3.2h-3.2c-1.8,0-3.2,1.4-3.2,3.2v1.6c0,1.8,1.4,3.2,3.2,3.2h3.2c1.8,0,3.2,1.4,3.2,3.2v1.6c0,1.8-1.4,3.2-3.2,3.2h-3.2c-1.8,0-3.2-1.4-3.2-3.2" /><line className="st1" x1="33.8" y1="39.8" x2="33.8" y2="42.9" /><line className="st1" x1="33.8" y1={62} x2="33.8" y2="58.8" /></g><g className="st0"><path className="st3" fill="#FFC727" d="M75,40.8C75,60,59.4,75.6,40.2,75.6C21,75.6,5.4,60,5.4,40.8C5.4,21.6,21,6,40.2,6C59.4,6,75,21.6,75,40.8" /><path className="st4" fill="#37474F" d="M61.7,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9C59.5,29,61.7,31.2,61.7,33.9" /><path className="st4" fill="#37474F" d="M28.5,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9s2.2-4.9,4.9-4.9S28.5,31.2,28.5,33.9" /><path className="st4" fill="#37474F" d="M49,31.8c0,2.1-0.7,4-2,5.5c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c-1.2-1.5-1.9-3.4-1.9-5.5H49z" /><path className="st5" fill="#DD6A57" d="M47.1,37.3c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c1.8-1.6,4.2-2.5,6.9-2.5C42.9,34.8,45.3,35.7,47.1,37.3" /></g><g><path className="st6" fill="#EBEBEB" d="M75.6,39.7c0,19.7-16,35.7-35.7,35.7c-19.7,0-35.7-16-35.7-35.7C4.2,20,20.1,4,39.9,4C59.6,4,75.6,20,75.6,39.7" /><path className="st7" fill="#37474F" d="M61.9,32.6c0,2.8-2.3,5-5,5c-2.8,0-5-2.3-5-5c0-2.8,2.3-5,5-5C59.7,27.6,61.9,29.9,61.9,32.6" /><path className="st7" fill="#37474F" d="M27.8,32.6c0,2.8-2.3,5-5,5c-2.8,0-5-2.3-5-5s2.3-5,5-5C25.6,27.6,27.8,29.9,27.8,32.6" /><path className="st7" fill="#37474F" d="M30.8,30.5c0.6,2.2,1.7,4.1,3.3,5.5c1.6,1.3,3.6,1.9,5.7,1.9c2.1,0.1,4.1-0.5,5.7-1.8c1.6-1.3,2.8-3.2,3.5-5.3c-0.1,2.3-1,4.6-2.6,6.3c-0.8,0.9-1.9,1.5-3,2c-1.2,0.4-2.4,0.6-3.6,0.6c-1.2,0-2.4-0.2-3.5-0.7c-1.1-0.5-2.2-1.1-3-2C31.5,35.1,30.7,32.7,30.8,30.5" /></g></svg>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={40} height={40} viewBox="0 0 80 80" style={{enableBackground: 'new 0 0 80 80'}} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{__html: ".st0{display:none;}.st1{display:inline;fill:none;stroke:#939598;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}.st2{display:inline;fill:none;stroke:#939598;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:8.844,5.306,0,5.306;}" }} /><g className="st0"><circle className="st1" cx="46.5" cy={20} r={5} /><circle className="st1" cx="-0.5" cy={20} r={5} /><polyline className="st1" points="58.3,13.2 58.3,20 56.6,20 " /><polyline className="st1" points="41.5,20 11.3,20 11.3,-22 58.3,-22 58.3,3.2 " /><polyline className="st1" points="9.6,20 11.3,20 11.3,-13.6 -0.5,-13.6 -12.2,3.2 -12.2,20 -5.5,20 " /><polyline className="st1" points="-12.2,3.2 4.6,3.2 4.6,-13.6 " /><line className="st1" x1="58.3" y1="14.9" x2="-12.2" y2="14.9" /><line className="st2" x1="61.6" y1="8.2" x2="46.5" y2="8.2" /><line className="st1" x1="46.5" y1="-3.5" x2="61.6" y2="-3.5" /><line className="st2" x1="51.6" y1="-15.3" x2="46.5" y2="-15.3" /><line className="st1" x1="4.6" y1="8.2" x2="2.9" y2="8.2" /><circle className="st1" cx="-0.5" cy={20} r="0.4" /><circle className="st1" cx="46.5" cy={20} r="0.4" /><line className="st2" x1="19.7" y1={25} x2="4.6" y2={25} /><circle className="st1" cx="34.8" cy="-3.5" r="11.7" /><line className="st1" x1="34.8" y1="-10.3" x2="34.8" y2="-3.5" /><line className="st1" x1="28.1" y1="-3.5" x2="34.8" y2="-3.5" /></g><g className="st0"><path className="st1" d="M36.6,38h-24C6.3,38,1.3,33,1.3,26.8v-50.6C1.3-30,6.3-35,12.5-35h24c6.2,0,11.2,5,11.2,11.2v50.6C47.8,33,42.8,38,36.6,38z" /><line className="st1" x1="22.9" y1="33.1" x2="26.2" y2="33.1" /><line className="st1" x1="1.3" y1="28.1" x2="47.8" y2="28.1" /><line className="st1" x1="21.2" y1="-33.3" x2="27.9" y2="-33.3" /><polyline className="st1" points="8,-13.4 8,-18.4 12.9,-18.4 " /><polyline className="st1" points="41.2,-13.4 41.2,-18.4 36.2,-18.4 " /><polyline className="st1" points="8,9.8 8,14.8 12.9,14.8 " /><polyline className="st1" points="41.2,9.8 41.2,14.8 36.2,14.8 " /><line className="st1" x1="19.6" y1="8.2" x2="19.6" y2="-8.4" /><line className="st1" x1="24.6" y1="8.2" x2="24.6" y2="-11.8" /><line className="st1" x1="29.5" y1="8.2" x2="29.5" y2="-3.5" /><line className="st1" x1="34.5" y1="8.2" x2="34.5" y2="-11.8" /><line className="st1" x1="14.6" y1="8.2" x2="14.6" y2="-11.8" /></g><g className="st0"><rect x="6.2" y="33.6" className="st1" width="34.6" height="37.6" /><polyline className="st1" points="25.8,29.1 25.8,17 72.4,17 72.4,65.2 45.3,65.2 " /><path className="st1" d="M60.4,26.1v-9.8C60.4,10.1,55.3,5,49.1,5c-6.2,0-11.3,5.1-11.3,11.3v9.8" /><circle className="st1" cx="37.8" cy="26.1" r="1.5" /><circle className="st1" cx="60.4" cy="26.1" r="1.5" /><path className="st1" d="M30.3,41.1v3.8c0,3.7-3,6.8-6.8,6.8s-6.8-3-6.8-6.8v-3.8" /><line className="st1" x1="15.2" y1="41.1" x2="18.2" y2="41.1" /><line className="st1" x1="28.8" y1="41.1" x2="31.8" y2="41.1" /><line className="st1" x1="34.8" y1="65.2" x2="6.2" y2="65.2" /><polyline className="st1" points="66.4,42.6 66.4,59.2 49.8,59.2 " /></g><g className="st0"><polyline className="st1" points="61.7,46.1 61.7,28.6 10.8,28.6 " /><path className="st1" d="M6,23.8v44.5c0,2.6,2.1,4.8,4.8,4.8h50.9V55.7" /><polyline className="st1" points="69.6,46.1 69.6,19.1 55.3,19.1 " /><polyline className="st1" points="61.7,63.6 69.6,63.6 69.6,55.7 " /><path className="st1" d="M10.8,28.6c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8h4.8" /><path className="st1" d="M69.6,46.1H52.1c-2.6,0-4.8,2.1-4.8,4.8c0,2.6,2.1,4.8,4.8,4.8h19.1c2.6,0,4.8-2.1,4.8-4.8v-9.5" /><path className="st1" d="M71.2,46.1h-1.6v-9.5h1.6c2.6,0,4.8,2.1,4.8,4.8C76,44,73.9,46.1,71.2,46.1z" /><circle className="st1" cx="52.1" cy="50.9" r="0.4" /><path className="st1" d="M39.6,11.1H23.3c-4.3,0-7.8,3.5-7.8,7.8v9.7h31.8v-9.7C47.4,14.6,43.9,11.1,39.6,11.1z" /><polyline className="st1" points="23.5,28.6 55.3,28.6 55.3,6.3 23.5,6.3 23.5,11.1 " /><path className="st1" d="M38.6,46.1L38.6,46.1c0-1.8-1.4-3.2-3.2-3.2h-3.2c-1.8,0-3.2,1.4-3.2,3.2v1.6c0,1.8,1.4,3.2,3.2,3.2h3.2c1.8,0,3.2,1.4,3.2,3.2v1.6c0,1.8-1.4,3.2-3.2,3.2h-3.2c-1.8,0-3.2-1.4-3.2-3.2" /><line className="st1" x1="33.8" y1="39.8" x2="33.8" y2="42.9" /><line className="st1" x1="33.8" y1={62} x2="33.8" y2="58.8" /></g><g><path className="st3" fill="#EBEBEB" d="M75,40.8C75,60,59.4,75.6,40.2,75.6C21,75.6,5.4,60,5.4,40.8C5.4,21.6,21,6,40.2,6C59.4,6,75,21.6,75,40.8" /><path className="st4" fill="#37474F" d="M61.7,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9C59.5,29,61.7,31.2,61.7,33.9" /><path className="st4" fill="#37474F" d="M28.5,33.9c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9s2.2-4.9,4.9-4.9S28.5,31.2,28.5,33.9" /><path className="st4" fill="#37474F" d="M49,31.8c0,2.1-0.7,4-2,5.5c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c-1.2-1.5-1.9-3.4-1.9-5.5H49z" /><path className="st5" fill="#DD6A57" d="M47.1,37.3c-1.6,2-4.1,3.3-6.9,3.3c-2.8,0-5.3-1.3-6.9-3.3c1.8-1.6,4.2-2.5,6.9-2.5C42.9,34.8,45.3,35.7,47.1,37.3" /></g></svg>
                </div>
              </div>
            </div>
          </div>
          {/* Product Review Section End */}
        </div>
      </div>
      {/*------- Products Detail Section End -----*/}

    </div>
  )
}

export default Productdetail
