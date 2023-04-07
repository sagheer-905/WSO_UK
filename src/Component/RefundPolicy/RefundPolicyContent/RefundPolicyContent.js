import React from 'react'
import { Link } from 'react-router-dom'

function RefundPolicyContent() {
  return (
    <div>
       {/* <!------- Footer pages Nav BreadCrumb Start -------> */}
<div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>Refund Policy</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}


      {/*---- Page Content Start -----*/}
      <div className="container-fluid fpage_content px-3 px-sm-5 pb-5">
        <h3 className="fw-bold mb-4 text-center">Refund Policy</h3>
        <h4 className="fw-bold mb-3">Return of Goods</h4>
        <p>Upon receiving notice, we will contact you and provide details of where you must return the Goods and
          other relevant instructions. You must then return the Goods to us without delay and at the latest within
          <span className="fw-bold">14-calendar days for UK orders</span> and <span className="fw-bold">14 days for international orders</span> of notifying us of your
          cancellation.</p>
        <p>You must return the Goods at your own risk and at your own cost unless we offer to pay the cost of return. We reserve the right, at our option, to collect the Goods from you. If we wish to collect the Goods, we will notify you of when we will collect them. We may charge you for the cost of collecting the Goods and may deduct this from any sum owed by us to you.</p>
        <p>You must return the goods to us in the same condition in which you received them with the original packaging and the original invoice.</p>
        <p>If the value of the Goods is reduced because of your handling of them beyond what is necessary to determine the nature, characteristics or functioning of the Goods, we will be entitled to claim this reduction in value from you and to deduct it from any money which you have paid us.</p>
        <p><span className="fw-bold">WE DO NOT ACCEPT RETURNS ON SALE GOODS UNLESS FAULTY.</span> If faulty, please refer to our standard return policy as stated above.</p>
        <p>Always return to our <span className="fw-bold">head office</span> located as follows:</p>
        <h5 className="fw-bold mb-3">Wholesale Shopping</h5>
        <p><span className="fw-bold">Address: </span>36C Broughton Street, Manchester, M8 8NN, United Kingdom</p>
        <p>Ensure you include a note specifying your Name, the reason for the return and order no.</p>
        <p>If you have any queries, feel free to contact us directly on:</p>
        <ul className="list-unstyled">
          <li><span className="fw-bold">Write on WhatsApp: </span><a rel="noreferrer" href="https://wa.me/447482071701" target="_blank">+44 7482 071701</a></li>
          <li><span className="fw-bold">Email: </span><a href="mailto:sales@wholesaleshopping.co.uk">Sales@wholesaleshopping.co.uk</a></li>
        </ul>
      </div>
      {/*---- Page Content End -----*/}

    </div>
  )
}

export default RefundPolicyContent
