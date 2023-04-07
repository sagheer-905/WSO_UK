import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../ContexApi/AuthContext'

function Content() {
  const {About,about}=useAuth()

  useEffect(()=>{
    about()
  })
  return (
    <div>
{/* <!------- Footer pages Nav BreadCrumb Start -------> */}
<div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>About us</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}

      {/*---- Page Content Start -----*/}
      <div className="container-fluid fpage_content px-3 px-sm-5 pb-5">
        <h3 className="fw-bold mb-4">About Us</h3>
        <div dangerouslySetInnerHTML={{__html:About}}></div>
       
        {/* <p>Years ago, buying bulk clothing was a major task to accomplish. It wasn’t just about having the money to
          buy merchandise, it was also about knowing who and where to go to buy bulk fashion clothing. The
          internet has opened a whole new paradigm of retail fashion shop owners being able to virtually travel
          anywhere around the world just by punching in the website address of apparel and boutique.
        </p>
        <p>Being in the bulk clothing industry, especially in the fashion capital of Manchester, we took it upon
          ourselves to establish loyal relationships and network everlasting connections with top apparel and
          fashion manufacturers. Our years of digging in the right places to find the premier fashion allow us to
          bring to you our golden nuggets of women’s fashion clothing. No more do you have to search around the
          globe to find the best fashion designs to sell in your store. We did all of the work for you so you
          don’t have to.
        </p>
        <p>Here at <a href="index.html">wholesaleshopping.co.uk</a> we work very hard to bring you the best prices. We
          believe that everybody should dress with style. Fashion should be at a price everybody can afford which
          is why we keep our profit margins super low.
        </p>
        <p>You see, we are very selective in what we sell. We don’t just stack our inventory with countless items of
          ugly and pretty apparel like most others do. That just causes a huge salad of unnecessary items that
          both you, and we, know shouldn’t be on the site. Whatever is old and out of style, we don’t display nor
          sell.
        </p>
        <ul className="list-unstyled">
          <li className="fw-bold">Wholesale Shopping</li>
          <li>36C Broughton Street</li>
          <li>Manchester</li>
          <li>M8 8NN</li>
          <li>United Kingdom</li>
        </ul>
        
        <p className="fw-bold">
          
          WhatsApp on: <a href="https://wa.me/447482071701" rel="noreferrer" target="_blank" className="fw-normal">+447482071701</a> <i className="bi bi-alarm-fill" /> 9AM to 6
          PM Chat
        </p> */}
      </div>
      {/*---- Page Content End -----*/}
    
    </div>
  )
}

export default Content
