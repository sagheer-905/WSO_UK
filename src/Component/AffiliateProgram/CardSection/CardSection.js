import React from 'react'
import img from "../../../images/affiliate/commission.jpg"
import img2 from "../../../images/affiliate/sell_nd_excel.jpg"
import img3 from "../../../images/affiliate/report_tracking.jpg"

function CardSection() {
  return (
    <div>
      {/*------ Terms & Conditions Section Start --------*/}
<div className="affiliate_terms py-3 py-md-4 py-lg-5">
  <div className="row">
    <div className="col-md-4">
      <div className="card border-0">
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body pt-0">
          <h4 className="card-title fw-semibold text-center mb-3">COMMISSION</h4>
          <p className="card-text"><span className="num">7</span>% commission on each product to
            influencers, bloggers, and sellers. So, start your side income stream now and dive
            into the pool of top-notch articles with our affiliate program.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card border-0">
        <img src={img2} className="card-img-top img-fluid" alt="..." />
        <div className="card-body pt-0">
          <h4 className="card-title fw-semibold text-center mb-3">SELL &amp; EXCEL</h4>
          <p className="card-text"><span className="num">20</span>% commission on the first sale. Yes, you
            heard it right. Start with a bang and put your followers to better use. Make your
            own way to excel in your career with one of the best affiliate programs.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card border-0">
        <img src={img3} className="card-img-top img-fluid" alt="..." />
        <div className="card-body pt-0">
          <h4 className="card-title fw-semibold text-center mb-3">REPORT TRACKING</h4>
          <p className="card-text"><span className="num">T</span>rack your referrals, orders, sales and
            earnings using your dashboard. You can also get the detailed report on the number of
            products sold out.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/*------ Terms & Conditions Section End --------*/}

    </div>
  )
}

export default CardSection
