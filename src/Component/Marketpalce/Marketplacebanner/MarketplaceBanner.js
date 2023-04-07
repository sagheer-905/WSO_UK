import React from 'react'
import img from '../../../images/marketplace/VP_Main_Banner.png'
import mobile from "../../../images/marketplace/VP_Mobile_App_Banner.png"
import icon from "../../../images/marketplace/Sign-Up-Icon_1.png"
function MarketplaceBanner() {
  return (
    <div>
                 {/* <!---------- Main Banner Start ---------> */}
            <div class="market-Mainbnr position-relative" id="startselling">
                <img src={img} alt="..." class="img-fluid d-none d-md-block w-100"/>
                <img src={mobile} alt="..." class="img-fluid d-md-none w-100"/>
                <div class="mainBnr-content text-center">
                    <img src={icon} alt="..." class="img-fluid icon mb-2"/>
                    <div class="signup-heading position-relative">
                        <h2 class="m-0">Sign Up</h2>
                    </div>
                    <h2 class="fw-bold mt-2 mb-3">Enroll now and increase your<br/>reach to boost your sales right now.
                    </h2>
                    <div class="row justify-content-center gap-2">
                        <div class="col-11 col-sm-8 col-md-5 col-lg-4 col-xxl-3 px-sm-0">
                            <input type="email" class="form-control rounded-pill border-0" placeholder="Email:"/>
                        </div>
                        <div class="col-auto px-sm-0">
                            <button class="btn rounded-pill btn-primary" id="startsell-btn">Start Selling</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!---------- Main Banner End ---------></img> */}
    </div>
  )
}

export default MarketplaceBanner
