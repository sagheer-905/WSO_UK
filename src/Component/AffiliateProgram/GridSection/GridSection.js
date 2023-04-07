import React from 'react'
import img from "../../../images/affiliate/Winter_Collection.jpg"
import img2 from "../../../images/affiliate/Best_Selling.jpg"
import img3 from "../../../images/affiliate/Women_Tops.jpg"
import img4 from "../../../images/affiliate/Footwear.jpg"
import img5 from "../../../images/affiliate/Dresses.jpg"
import img6 from "../../../images/affiliate/Made-In-Italy.jpg" 
import img7 from "../../../images/affiliate/text.png"
import img8 from "../../../images/affiliate/New-In.jpg"
import img9 from "../../../images/affiliate/winter_cardigan.jpg"
import img10 from "../../../images/affiliate/scarves.jpg"
import img11 from "../../../images/affiliate/loungewear.jpg"
import img12 from "../../../images/affiliate/featured_product.jpg"


function GridSection() {
  return (
    <div>
      <div>
  {/*----- Best Affiliate Program Section Start ------*/}
  <div className="affiliate_program py-5">
    <h2 className="text-center fw-semibold mb-3">Best Affiliate Program In UK</h2>
    <p>Time to hop in one of the Best Affiliate UK Program that we have introduced for our valued
      influencers, bloggers, and sellers. By enrolling, you will earn a 20% commission on the first sale,
      and then get going with a 7% commission. This Partner Program is a plum job for you as it is easy to
      follow and your referrals, orders, and earnings will be shared on the dashboard. This is indeed a
      smart move to the bigger payout so, enroll now and grow with us.</p>
    <div className="register-btn text-center">
      <a href="affiliate-register.html"><button className="btn rounded-pill">Register Now</button></a>
    </div>
  </div>
  {/*----- Best Affiliate Program Section End ------*/}
  {/*----- Affiliate Grid Section Start ------*/}
  <div className="affiliate_grid">
    <div className="image-grid">
      <div className="grid-item">
        <a href="collection.html"><img src={img} alt="..." /></a>
        <div className="textbox-1">
          <h5>Winter Collection</h5>
        </div>
      </div>
      <div className="grid-item">
        <a href="collection.html"><img src={img2} alt="..." /></a>
        <div className="textbox-1">
          <h5>Best Selling</h5>
        </div>
      </div>
      <div className="grid-item">
        <a href="collection.html"><img src={img3} alt="..." /></a>
        <div className="textbox-2">
          <h5>Women Tops</h5>
        </div>
      </div>
      <div className="grid-item">
        <a href="collection.html"><img src={img4} alt="..." /></a>
        <div className="textbox-3">
          <h5>Footwear</h5>
        </div>
      </div>
      <div className="grid-item">
        <a href="collection.html"><img src={img5} alt="..." /></a>
        <div className="textbox-2">
          <h5>Dresses</h5>
        </div>
      </div>
      <div className="grid-item">
        <a href="collection.html"><img src={img6} alt="..." /></a>
        <div className="textbox-4">
          <h5>Made in Italy</h5>
        </div>
      </div>
      <div className="grid-item">
        <img src={img7} alt="..." />
      </div>
    </div>
  </div>
  {/*----- Affiliate Grid Section End ------*/}
  {/*----- Affiliate Best Selling Collection Start ------*/}
  <div className="affiliate_bestSelling pb-5 py-md-5">
    <h2 className="text-center fw-semibold mb-4 mb-xl-5">BEST SELLING / BY THE MONTH</h2>
    <div className="row justify-content-between gy-2 gy-md-0">
      <div className="col-md-2 position-relative">
        <a href="collection.html">
          <img src={img8} alt="..." className="img-fluid w-100" />
          <div className="overlay" />
        </a>
      </div>
      <div className="col-md-2 position-relative">
        <a href="collection.html">
          <img src={img9} alt="..." className="img-fluid w-100" />
          <div className="overlay" />
        </a>
      </div>
      <div className="col-md-2 position-relative">
        <a href="collection.html">
          <img src={img10} alt="..." className="img-fluid w-100" />
          <div className="overlay" />
        </a>
      </div>
      <div className="col-md-2 position-relative">
        <a href="collection.html">
          <img src={img11} alt="..." className="img-fluid w-100" />
          <div className="overlay" />
        </a>
      </div>
      <div className="col-md-2 position-relative">
        <a href="collection.html">
          <img src={img12} alt="..." className="img-fluid w-100" />
          <div className="overlay" />
        </a>
      </div>
    </div>
  </div>
  {/*----- Affiliate Best Selling Collection End ------*/}
</div>

    </div>
  )
}

export default GridSection
