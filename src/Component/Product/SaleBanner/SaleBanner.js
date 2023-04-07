import React from 'react'
import img1 from "../../../images/homepage/Klarna-Banner.jpg"
import img2 from "../../../images/homepage/klarna_banner2.jpg"

function SaleBanner() {
  return (
    <div>
              {/* <!------- Sale Banner Start --------> */}
        <div class="sale-bnr mb-5">
            <img src={img1} alt="..." class="img-fluid d-none d-md-block w-100"/>
            <img src={img2} alt="..." class="img-fluid d-md-none w-100"/>
        </div>
        {/* <!------- Sale Banner End --------></img> */}
    </div>
  )
}

export default SaleBanner
