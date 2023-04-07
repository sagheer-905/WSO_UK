import React from 'react'
import icon from "../../../images/marketplace/sellerList/icon-user.png"
import img1 from "../../../images/marketplace/sellerList/primehide.jpg"
import img2 from "../../../images/marketplace/sellerList/aromaking.jpg"
import img3 from "../../../images/marketplace/sellerList/akacouture.jpg"
import img4 from "../../../images/marketplace/sellerList/beApparel.jpg"
import img5 from "../../../images/marketplace/sellerList/mlooksfashion.jpg"
import img6 from "../../../images/marketplace/sellerList/ysStitchltd.jpg"
import img7 from "../../../images/marketplace/sellerList/KRwholesale.jpg"
import img8 from "../../../images/marketplace/sellerList/europafashions.jpg"
import img9 from "../../../images/marketplace/sellerList/crazygirls.jpg"
import img10 from"../../../images/marketplace/sellerList/vfashion.jpg"
import img11 from "../../../images/marketplace/sellerList/mkglamour.jpg"
function SellerList() {
  return (
    <>
    <div>
 

      {/*------ Marketplace seller list Filter Start -----*/}
      <div className="mSellerList_filter container-fluid container-xl py-4 px-3 px-sm-5 px-xl-4 px-xxl-5">
        <div className="row align-items-end justify-content-between gy-4 gy-md-0">
          <div className="col-md-auto">
            <select className="form-select rounded-pill" aria-label="Default select example">
              <option selected>Sort By</option>
              <option value={1}>Name Ascending</option>
              <option value={2}>Name Descending</option>
              <option value={3}>Date Ascending</option>
              <option value={4}>Date Descending</option>
              <option value={5}>Hightest Rating</option>
              <option value={6}>Random Sellers</option>
            </select>
          </div>
          <div className="col-md-auto">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" aria-describedby="button-addon2" />
              <button className="btn" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass me-2" /> Search</button>
            </div>
          </div>
        </div>
      </div>
      {/*------ Marketplace seller list Filter Start -----*/}

    </div>

      
            {/*------ Marketplace seller list Container Start -----*/}
            <div className="mSellerList_container container-fluid container-xl pt-2 pb-5 px-3 px-sm-5 px-xl-0">
              <div className="row gy-5">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={icon} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">ZOUK</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={icon} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">Carnival Socks</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={icon} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">Elegant-363</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img1} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">PRIMEHIDE</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img2} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">Aroma King</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img3} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">AKA Couture</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img10} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">V Fashion</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img4} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">BE Apparel</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img5} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">M LOOKS FASHION LTD</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img6} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">YS STITCH LTD</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img7} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">KR WHOLESALE</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img8} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">EUROPA FASHIONS</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img9} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">CRAZY GIRL</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={img11} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">MK Glamour UK</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="seller_card text-center">
                    <a href="marketplace_sellerProfile.html">
                      <img src={icon} alt="..." className="img-fluid" />
                      <h5 className="seller_name fw-semibold mt-3">MARKAPLATFORM_TR</h5>
                      <div className="seller-rating">
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        <span className="star"><i className="fa-sharp fa-solid fa-star" /></span>
                        (<span className="rate_count">0</span>)
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*------ Marketplace seller list Container End -----*/}
   
    </>
  )
}

export default SellerList
