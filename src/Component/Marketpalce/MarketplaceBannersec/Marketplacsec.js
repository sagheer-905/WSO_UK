import React from 'react'
import img1 from '../../../images/marketplace/bnr1-arrow.png'
import img2 from '../../../images/marketplace/Banner_01.png'
import img3 from "../../../images/marketplace/Banner_02.png"
import img4 from "../../../images/marketplace/Banner_03.png" 
import img5 from "../../../images/marketplace/Banner_04.png"
import img6 from "../../../images/marketplace/bnr4-arrow.png"
import img7 from "../../../images/marketplace/bnr3-arrow.png"
import img8 from "../../../images/marketplace/Slide_1.png"
import img9 from"../../../images/marketplace/Slide_2.png"
import img10 from"../../../images/marketplace/Slide_3.png"
import img11 from"../../../images/marketplace/Slide_4.png"
import img12 from"../../../images/marketplace/Slide_5.png"
import img13 from "../../../images/marketplace/map_banner.png"
import img14 from "../../../images/marketplace/bnr2-arrow.png"
import img15 from "../../../images/marketplace/footer_banner.png" 
function Marketplacsec() {
  return (
    <div>


      <div className="market_innerWrap">
        {/*------ Established platform Section Start ------*/}
        <div className="establishted-platform px-2 px-md-0">
          <div className="vendor-heading pt-4 pb-3 pt-md-5 pb-md-4 text-center">
            <h3>Wholesale Marketplace: Key reasons to sell with us</h3>
          </div>
          <div className="row justify-content-center align-items-end">
            <div className="col-12 col-md-5 col-xl-4 pb-md-4 pb-lg-5 position-relative order-2 order-md-1">
              <img src={img1} alt="..." className="img-fluid w-100" />
              <div className="establisht_content px-md-5">
                <h6 className="fw-bold text-uppercase mb-0">USE AN ALREADY ESTABLISHED
                  PLATFORM TO SELL.</h6>
                <p className="m-0">Here at WS marketplace, you can reach to maximum customers by enlisting
                  your products.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xl-3 order-1 order-md-2">
              <img src={img2} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        {/*------ Established platform Section End ------*/}
        {/*------ Payment Options Section Start ------*/}
        <div className="payment_Options pt-4 px-2 px-md-0">
          <div className="row justify-content-center position-relative">
            <div className="col-12 col-md-11 col-xl-10">
              <img src={img3} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-12 col-md-5 pt-3 pt-md-0">
              <img src={img14} alt="..." className="img-fluid w-100" />
              <div className="payment_content px-5">
                <h6 className="fw-bold text-uppercase mb-0">MULTIPLE PAYMENT OPTIONS
                  FOR MORE EASE.</h6>
                <p className="m-0">We do what suits you the best. Guaranteed on-time payments with handy
                  payment methods.</p>
              </div>
            </div>
          </div>
        </div>
        {/*------ Payment Options Section End ------*/}
        {/*------ Why WS Section Start ------*/}
        <div className="why_ws px-3 px-md-0" id="whyWS">
          <div className="row justify-content-center position-relative">
            <div className="col-12 col-md-11 col-xl-10">
              <div className="vendor-heading pt-4 pb-2 text-center">
                <h3>Why WS? Collaborate with Ideal Marketplace</h3>
              </div>
              <p>We are one of the best marketplaces concerning service and commission. We offer vast
                opportunities for future growth. You can avail of several benefits by dealing with us.
                Our present growth is the proof of success and we offer equal opportunities to our
                partners in business. As compared to other marketplaces we are credible and certified.
                By maintaining our service standard, we have increased our clients. We still aren’t
                happy with it rather planning to take more measures to facilitate our clients.</p>
              <div className="Why_wsBtn text-center">
                <a href="#startselling"><button className="btn rounded-pill text-uppercase">Start Selling</button></a>
              </div>
            </div>
          </div>
        </div>
        {/*------ Why WS Section End ------*/}
        {/*------ Marketing Strategies Section Start ------*/}
        <div className="Marketing_strategies py-4 py-md-5 px-2 px-md-0">
          <div className="row justify-content-center align-items-end">
            <div className="col-12 col-md-4 col-xl-3">
              <img src={img4}alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-12 col-md-5 col-xl-4 pb-md-4 pb-lg-5 position-relative">
              <img src={img7} alt="..." className="img-fluid w-100" />
              <div className="strategy_content px-md-5">
                <h6 className="fw-bold text-uppercase mb-0">EXPERT MARKETING STRATEGIES</h6>
                <p className="m-0">Our highly skilled marketing team works hard to not just bring customers
                  to your products, but we make sure the customers retention. </p>
              </div>
            </div>
          </div>
        </div>
        {/*------ Marketing Strategies Section End ------*/}
        {/*------ Product Listing Fee Section Start ------*/}
        <div className="prodListing_fee px-2 px-md-0">
          <div className="row justify-content-center align-items-end">
            <div className="col-12 col-md-5 col-xl-4 pb-md-4 pb-lg-5 position-relative order-2 order-md-1">
              <img src={img6} alt="..." className="img-fluid w-100" />
              <div className="prodListing_content px-md-5">
                <h6 className="fw-bold text-uppercase mb-0">NO PRODUCT LISTING OR
                  PROMOTIONAL FEE</h6>
                <p className="m-0">Enroll your brand right now and we’ll sell your products with no listing
                  and promotional fee.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xl-3 order-1 order-md-2">
              <img src={img5} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        {/*------ Product Listing Fee Section End ------*/}
        {/*------ Marketplace Map Section Start ------*/}
        <div className="market_map px-2 px-md-0">
          <div className="vendor-heading pt-4 pb-2 text-center">
            <h3>ENROLL NOW AND TAKE YOUR<br />
              BUSINESS BEYOND THE FOUR WALLS</h3>
          </div>
          <img src={img13} alt="..." className="img-fluid w-100" />
        </div>
        {/*------ Marketplace Map Section End ------*/}
        <div className="MarketFooter_div">
          {/*------ Marketplace Slider Section Start ------*/}
          <div className="marketplace_slide hi-slide">
            <div className="hi-prev " />
            <div className="hi-next " />
            <ul className="list-unstyled">
              <li>
                <img src={img8} alt="..." className="img-fluid" />
              </li>
              <li>
                <img src={img9} alt="..." className="img-fluid" />
              </li>
              <li>
                <img src={img10} alt="..." className="img-fluid" />
              </li>
              <li>
                <img src={img11} alt="..." className="img-fluid" />
              </li>
              <li>
                <img src={img12} alt="..." className="img-fluid" />
              </li>
            </ul>
          </div>
          {/*------ Marketplace Slider Section End ------*/}
          {/*------ Marketplace Accordian Section Start ------*/}
          <div className="market_accordion py-4 px-3 px-md-0">
            <div className="vendor-heading pt-4 pb-2 text-center">
              <h3>YOU MAY BE WONDERING...</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9 col-xl-8">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        WHAT IS YOUR COMMISSION STRUCTURE?
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body px-0">WE WILL CHARGE 20% COMMISSION EXCLUDING VAT
                        ON
                        EACH
                        PRODUCT YOU SELL ON THE WEBSITE OR ANY OTHER LINKED CHANNEL OF THE
                        WHOLESALE
                        SHOPPING WEBSITE AS SERVICE CHARGES.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        SHOULD I HAVE TO PAY THE SHIPPING FEE?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body px-0">YOU JUST NEED TO PRINT THE PRE-PAID
                        SHIPPING
                        LABEL
                        FROM THE PORTAL OF THE PRODUCTS. WE DON’T CHARGE SHIPPING TAXES TO
                        VENDORS,
                        WE SHIP THE PRODUCTS TO CUSTOMERS, THAT’S WHY WE BEAR THIS COST.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        HOW AND WHEN DO I GET PAID?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body px-0">YOU WILL RECEIVE THE ORDER PAYMENT AMOUNT
                        FROM
                        US
                        AFTER COMPLETING THE DAYS OF A CLAIM BY THE CUSTOMER OF THE PRODUCT (3
                        WORKING DAYS ARE THE CLAIM TIME AFTER DELIVERY OF GOODS). WE SEND THE
                        MONEY
                        TO YOUR BANK ACCOUNT USING ELECTRONIC FUNDS TRANSFER. IT CAN TAKE UP TO
                        FIVE
                        BUSINESS DAYS FOR THE MONEY TO APPEAR IN YOUR BANK ACCOUNT AFTER WE
                        INITIATE
                        A PAYMENT.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        IS THERE ANY LIMIT OF THE PRODUCTS THAT I CAN LIST?
                      </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body px-0">NO, THERE IS NO LIMIT OF PRODUCT LISTING.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*------ Marketplace Accordian Section End ------*/}
          {/*------ Marketplace Footer Banner Section Start ------*/}
          <div className="mFooter_bnr mb-5 position-relative" id="getStarted">
            <img src={img15} alt="..." className="img-fluid w-100" />
            <div className="mFooter-bnrContent text-center">
              <h4 className="mb-2 mb-sm-4">Why put extra efforts when we’re here to sell your stock.</h4>
              <a href="#startselling"><button className="btn rounded-pill text-uppercase">Start Selling</button></a>
            </div>
          </div>
          {/*------ Marketplace Footer Banner Section End ------*/}
        </div>
      </div>
 
    </div>
  )
}

export default Marketplacsec
