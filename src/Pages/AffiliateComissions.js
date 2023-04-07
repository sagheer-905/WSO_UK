import React from 'react'
import { Link } from 'react-router-dom'
import img from "../images/homepage/wso-logo.png"
function AffiliateComissions() {
  return (
    <div>
      <div>
  {/*------ Affiliate Header Start-----*/}
  <header className="text-center py-4">
    <Link to="/AffiliateProgram">
      <img src={img} alt="..." className="img-fluid" />
    </Link>
  </header>
  {/*------ Affiliate Header End-----*/}
  {/*------ page content Start ------*/}
  <div className="container affiFooter_pageContent pt-2 pb-5">
    <ul className="nav nav-tabs gap-2" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <Link to="/AffiliateComissions">
          <button className="nav-link" id="reports-tab" data-bs-toggle="tab" data-bs-target="#reports-tab-pane" type="button" role="tab" aria-controls="reports-tab-pane" aria-selected="true">Reports</button>
        </Link>
      </li>
      <li className="nav-item" role="presentation">
        <Link to='/AffiliateTool'>
          <button className="nav-link" id="tools-tab" data-bs-toggle="tab" data-bs-target="#tools-tab-pane" type="button" role="tab" aria-controls="tools-tab-pane" aria-selected="false">Tools</button>
        </Link>
      </li>
      <li className="nav-item" role="presentation">
        <Link to="/AffiliateReporting">
          <button className="nav-link active" id="commission-tab" data-bs-toggle="tab" data-bs-target="#commission-tab-pane" type="button" role="tab" aria-controls="commission-tab-pane" aria-selected="false">Commission Details</button>
        </Link>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active pt-4" id="commission-tab-pane" role="tabpanel" aria-labelledby="commission-tab" tabIndex={0}>
        <h3 className="fw-semibold mb-3">Affiliate Program Commissions Schedule</h3>
        <p>For a better understanding of the program and related commission rates, here is a detailed
          commission structure:</p>
        <p>The commission will be rewarded on the actual price of the product that is stated on the website.
          It doesn’t involve any charges that are received for shipping, packing, service, taxes, credit
          card processing fees, or any such extra charges. Moreover, the commission structure is liable to
          changes in accordance with the Operating Agreement. Company reserves the right to manipulate
          commission ratio for the better interest of its affiliates, customers and the company itself.
          You will be notified about any such changes through mail, special notification, and an update of
          the commission structure section.</p>
        <p>We will determine the classification of products in each category set forth in Table 1 below or
          otherwise described on this page.</p>
        <h4 className="fw-semibold mb-3">Standard Commission Structure</h4>
        <p>A standard commission of <span className="fw-semibold">7%</span> is given on all products, excluding the ones listed below.</p>
        <h4 className="fw-semibold mb-3">Special Offers and Promotions</h4>
        <p>No special offers are running at the moment</p>
        <h4 className="fw-semibold mb-3">Important Note</h4>
        <p><span className="fw-semibold">20%</span> commission is entitled to a new affiliate on 1st withdrawal. <span className="fw-semibold">7%</span> commission will be given on
          each product (Best Selling Products) after the first sale. <span className="fw-semibold">7%</span> commission will be given for sales
          made by coupon code.</p>
        <p>All commission excludes shipping and VAT. We’ll Keep <span className="fw-semibold">10%</span> of affiliate’s commission for security
          purpose. We may notify you about these exclusions, rate changes, special offers or promotions by
          updating this page or through emails, blog posts, or other means.</p>
      </div>
    </div>
  </div>
  {/*------ page content Start ------*/}
</div>

    </div>
  )
}

export default AffiliateComissions
