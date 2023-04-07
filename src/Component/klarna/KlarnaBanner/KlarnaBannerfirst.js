import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner from "../../../images/klarnapage/Klarna-mainbnr.jpg"
import banner2 from "../../../images/klarnapage/klarna-mobilebnr.jpg"
import banner3 from "../../../images/klarnapage/Klarna-Page-Bottom-Banner-1.jpg"
import banner4 from "../../../images/klarnapage/Klarna-Page-Bottom-Banner-2.jpg"
import { useAuth } from '../../../ContexApi/AuthContext'

function KlarnaBannerfirst() {
  const {About,paylater}=useAuth()
  useEffect(()=>{
    paylater()
  })
  return (
    <div>
   {/* <!------- Footer pages Nav BreadCrumb Start -------> */}
<div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&/34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&/34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>KLARNA</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}


      {/*---- Page Content Start -----*/}
      <div className="container fpage_content klarna_page pt-3 pb-5">
      <div dangerouslySetInnerHTML={{__html:About}}></div>
{/* 
        <div className="row klarna_nav text-center mx-0">
          <div className="col-md-4">
            <a href="/">Women New In</a>
          </div>
          <div className="col-md-4">
            <a href="/">Shop Now With Klarna</a>
          </div>
          <div className="col-md-4">
            <a href="/">Trending Fashion</a>
          </div>
        </div>
        <div className="klarna_banner mb-3">
          <img src={banner} alt="...." className="img-fluid w-100 d-none d-md-block" />
          <img src={banner2} alt="...." className="img-fluid w-100 d-md-none" />
        </div>
        <h6 className="fw-bold text-center mb-3">Avail of Flexible Payment Options with Klarna</h6>
        <h6 className="fw-bold text-center text-uppercase mb-3">INTEREST-FREE PAYMENT IN THREE INSTALLMENTS <a href="/">HERE</a></h6>
        <p className="text-center mb-4">If you shop then payment will be collected automatically from your debit or
          credit cards after 30 days.
          A meager amount will be charged from your card in case you pay for the entire purchase in advance.</p>
        <p className="text-center mb-4"><i className="bi bi-suit-heart-fill" /></p>
        <h3 className="fw-bold text-center mb-4">How to Follow Klarna.</h3>
        <div className="row gy-3 gy-md-0 mb-5">
          <div className="col-md-6">
            <img src={banner3} alt="..." className="img-fluid w-100" />
          </div>
          <div className="col-md-6">
            <img src={banner4} alt="..." className="img-fluid w-100" />
          </div>
        </div>
        <h6 className="fw-bold text-center mb-3">Conditions:</h6>
        <p className="text-center mb-1">A UK bank Account</p>
        <p className="text-center mb-4">A UK residential address for registration</p>
        <p className="text-center mb-4"><i className="bi bi-suit-heart-fill" /></p>
        <h5 className="fw-bold mb-3">Turned down by Klarna</h5>
        <p className="mb-2">If you are having trouble while placing your order with Klarna, it could be one of the following reasons:
        </p>
        <p className="mb-2">Your application can be rejected to pay on account. You are recommended to follow another type of payment
          or place a smaller order.
          If you miss required data, such as filling in your date of birth.</p>
        <p>When you are using a pre-paid debit card.</p>
        <h5 className="fw-bold mb-3">Return Policy</h5>
        <p>In case, you want to return your order then Klarna will issue you with a new statement soon after the
          processing of your return. If you have an upcoming payment due. Sit back and wait. In case of delay,
          then Klarna will issue a new statement as a reminder of the order you want to keep.</p>
        <h5 className="fw-bold mb-3">Monthly Payment</h5>
        <p>If you want to pay monthly by following Klarna you can? Once you are accepted with Klarna then it will be
          made available for you automatically.</p>
        <h5 className="fw-bold mb-3">Klarna for Many Retailers</h5>
        <p>Yes, you can use it for multiple retailers that are registered as a payment option. all those who
          subscribed to klarna they will have an option at the end of check out.</p>
        <h5 className="fw-bold mb-3">In Case of Inconvenience</h5>
        <p>If you are having problems and unable to pay. Then you can enjoy freeze payment options. You can discuss
          this on the phone with Klarna. You can call between 9 am to 5 pm, Monday to Friday. You should know that
          it is an independent payment company and Wholesale Shopping has no influence over whether your payment
          with Klarna is accepted or not. In case of any trouble with your order then you can contact Klarna
          customer service.</p>
        <h6 className="fw-bold text-uppercase mb-4">GET THE LOW DOWN</h6>
        <h6 className="fw-bold text-uppercase mb-4">GOT ANOTHER QUESTION? FURTHER INFO ABOUT PAY LATER BY KLARNA, INTEREST RATES, ELIGIBILITY CRITERIA AND MORE CAN BE FOUND BY CHECKING OUT THE DEDICATED KLARNA HELP PAGE <a href="/">HERE</a></h6>
        <h6 className="fw-bold text-uppercase">FOR MORE INFORMATION AND KLARNA FREQUENTLY ASKED QUESTIONS CLICK <a href="/">HERE</a></h6> */}
      </div>
      {/*---- Page Content End -----*/}


    </div>
  )
}

export default KlarnaBannerfirst

