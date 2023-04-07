import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../ContexApi/AuthContext'

function Faqcontent() {
    const {About,faqs}=useAuth()
    useEffect(()=>{
      faqs()
    })
  return (
    <div>
        {/* <!------- Footer pages Nav BreadCrumb Start -------> */}
<div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>Faqs</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}
        {/* <!------ Page Content Start -------> */}
        <div class="container-fluid fpage_content px-3 px-sm-5 pb-5">
            {/* <h3 class="fw-bold mb-4">General Information</h3> */}
            <div dangerouslySetInnerHTML={{__html:About}}></div>
        </div>
        {/* <!------ Page Content End -------> */}
    </div>
  )
}

export default Faqcontent
