import React from 'react'
import img1 from "../../../images/homepage/QR-salebnr.jpg"
import img2 from "../../../images/homepage/QR-salebnr2.jpg"
import img3 from "../../../images/homepage/QR-mobilebnr.jpg"
import img4 from "../../../images/homepage/QR-mobilebnr2.jpg"
function DoubleBanner() {
  return (
    <div>
      {/*---------------- QR Banners Section Start ---------------*/}
<div className="QR-banner mx-3 mx-md-5 mb-5">
  <div className="row gy-3 gy-md-0">
    {/* banner 1 */}
    <div className="col-md-6 px-md-3">
      <img src={img1} alt="....." className="img-fluid d-none d-md-block w-100" />
      <img src={img2} alt="....." className="img-fluid d-md-none w-100" />
    </div>
    {/* banner 1 */}
    {/* banner 2 */}
    <div className="col-md-6 px-xl-4">
      <img src={img3} alt="....." className="img-fluid d-none d-md-block w-100" />
      <img src={img4} alt="....." className="img-fluid d-md-none w-100" />
    </div>
    {/* banner 2 */}
  </div>
</div>
{/*---------------- QR Banners Section Start ---------------*/}

    </div>
  )
}

export default DoubleBanner
