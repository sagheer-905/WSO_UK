import React from 'react'
import shipping from "../../../images/collectionpage/shipping.png"
import support from "../../../images/collectionpage/support.png"
import returnPro from "../../../images/collectionpage/return.png"
import payment from "../../../images/collectionpage/secure-payment.png"

function FooterCollection() {
  return (
    <div>
        <div class="footerFeatures container-fluid mb-5">
            <div class="row justify-content-center gy-3 gy-lg-0">
                <div class="col-sm-6 col-lg-3">
                    <div class="featureInner d-flex align-items-center gap-2">
                        <div class="featuresIcon">
                            <img src={shipping} alt="..." class="img-fluid"/>
                        </div>
                        <div class="featuresContent">
                            <h6 class="fw-bold text-uppercase m-0">Free Shipping</h6>
                            <p class="m-0">Join us and get 10% off on first order / over £200</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="featureInner d-flex align-items-center gap-2">
                        <div class="featuresIcon">
                            <img src={support} alt="..." class="img-fluid"/>
                        </div>
                        <div class="featuresContent">
                            <h6 class="fw-bold text-uppercase m-0">SUPPORT 24/7</h6>
                            <p class="m-0">Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="featureInner d-flex align-items-center gap-2">
                        <div class="featuresIcon">
                            <img src={returnPro} alt="..." class="img-fluid"/>
                        </div>
                        <div class="featuresContent">
                            <h6 class="fw-bold text-uppercase m-0">5 DAYS RETURN</h6>
                            <p class="m-0">Simply return it within 5 working days for an exchange</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="featureInner d-flex align-items-center gap-2">
                        <div class="featuresIcon">
                            <img src={payment} alt="..." class="img-fluid"/>
                        </div>
                        <div class="featuresContent">
                            <h6 class="fw-bold text-uppercase m-0">100% PAYMENT SECURE</h6>
                            <p class="m-0">We ensure secure payment with PEV</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterCollection
