import React from 'react'
import { Link } from 'react-router-dom'

function CareerContent() {
  return (
    <div>
        {/* <!------- Footer pages Nav BreadCrumb Start -------> */}
<div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>Career</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}


      {/*---- Page Content Start -----*/}
      <div className="container-fluid fpage_content px-3 px-sm-5 pb-5">
        <h3 className="fw-bold mb-4">Careers</h3>
        <p>We are an ever-expanding company and we are always on the lookout for valuable team members who can
          bring lots to the table and join us on our journey. The ability to get the best from subordinates is
          equally important along with the capability to work closely with colleagues.</p>
        <p>This is an excellent opportunity to join a very busy &amp; growing Fashion Business in Manchester with big
          plans for the future.</p>
        <p className="fw-bold">Current Vacancies:</p>
        <p>Fashion Retail Buyer and B2B Sales Manager</p>
        <p className="fw-bold">We are always looking for candidates with experience in:</p>
        <p>E-Commerce Management</p>
        <p>PR &amp; social media</p>
        <p>Customer Service and Administration</p>
        <p>Digital Web Designing and Graphics</p>
        <p>IT Project Management</p>
        <p>Operational Management</p>
        <p>Warehouse Management</p>
        <p>Accounts Executive</p>
        <p>We are also interested in taking in apprentices regarding the above positions or we can happily offer
          internships to those with relevant experience and drive.</p>
        <p className="fw-bold">Please send your CV along with a covering letter to:</p>
        <p className="fw-bold">WhatsApp: <a href="https://wa.me/447482071701" rel="noreferrer"  target="_blank" className="fw-normal">+44 7482 071701</a></p>
        <p className="fw-bold">Email: <a href="mailto:sales@wholesaleshopping.co.uk" className="fw-normal">sales@wholesaleshopping.co.uk</a></p>
      </div>
      {/*---- Page Content End -----*/}

    </div>
  )
}

export default CareerContent
