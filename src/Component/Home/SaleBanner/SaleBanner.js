import React from 'react'
import img from "../../../images/homepage/Klarna-Banner.jpg"
import img1 from "../../../images/homepage/klarna_banner2.jpg"

function SaleBanner() {
  return (
    <div>
        {/* <!----------------- Sale Banner Start ----------------> */}
        <div class="sale-bnr contaier-fluid px-4 px-md-5">
            <img src={img} alt="..." class="img-fluid d-none d-md-block w-100"/>
            <img src={img1} alt="..." class="img-fluid d-md-none w-100"/>
        </div>
        {/* <!----------------- Sale Banner End ----------------></img> */}
    </div>
  )
}

export default SaleBanner
