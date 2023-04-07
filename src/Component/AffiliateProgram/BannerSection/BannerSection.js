import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../../images/affiliate/Affiliate-Main-Banner.jpg"
function BannerSection() {
  return (
    <div>
      {/*----- Main Image Banner Start ------*/}
<div className="affiliate_img_bg position-relative">
  <img src={img} alt="..." className="img-fluid w-100" />
  <Link to='/registration'><button className="btn rounded-pill">Join Now</button></Link>
</div>
{/*----- Main Image Banner End ------*/}
    </div>
  )
}

export default BannerSection
