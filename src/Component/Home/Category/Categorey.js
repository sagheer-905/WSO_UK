import React, { useEffect } from 'react'
import img1 from "../../../images/homepage/CategoryImages/loungewear.png"
import img2 from "../../../images/homepage/CategoryImages/loungewear2.png"
import img3 from "../../../images/homepage/CategoryImages/dresses.png"
import img4 from "../../../images/homepage/CategoryImages/dresses2.png"
import img5 from "../../../images/homepage/CategoryImages/trainer.png"
import img6 from "../../../images/homepage/CategoryImages/trainer2.png"
import img7 from"../../../images/homepage/CategoryImages/plussize.png"
import img8 from"../../../images/homepage/CategoryImages/plussize2.png"
import img9 from"../../../images/homepage/CategoryImages/tops.png"
import img10 from"../../../images/homepage/CategoryImages/tops2.png"
import img11 from"../../../images/homepage/CategoryImages/legging.png"
import img12 from"../../../images/homepage/CategoryImages/legging2.png"
import img13 from"../../../images/homepage/CategoryImages/china.png"
import img14 from"../../../images/homepage/CategoryImages/china2.png"
import img15 from"../../../images/homepage/CategoryImages/Turkey.png"
import img16 from"../../../images/homepage/CategoryImages/Turkey2.png"
import img17 from "../../../images/homepage/CategoryImages/Italy.png"
import img18 from "../../../images/homepage/CategoryImages/Italy2.png"
import img19 from "../../../images/homepage/CategoryImages/shirts.png"
import img20 from "../../../images/homepage/CategoryImages/shirts2.png"
import img21 from "../../../images/homepage/CategoryImages/handbag.png"
import img22 from "../../../images/homepage/CategoryImages/handbag2.png"
import img23 from "../../../images/homepage/CategoryImages/scarves.png"
import img24 from "../../../images/homepage/CategoryImages/scarves2.png"
import { Link } from 'react-router-dom'

import { useAuth } from '../../../ContexApi/AuthContext'
function Categorey() {
  const {cetagore,Categorey} =useAuth()
  useEffect(()=>{
    cetagore()
  },[])
  return (
    <div>
      {/*---------------- Shop By Category section Start ----------------*/}
      <div className="ShopBy mx-auto my-5">
        <h2 className="text-uppercase text-center mb-4 mb-md-5">Shop By Category</h2>
        <div className="row text-center justify-content-center px-4 px-md-0 gy-2">
          {Categorey?.map((item)=>{
            return(
              <div className="col-6 col-sm-4 col-lg-2">
              <Link to={`/collection/${item?.id}`}>
                <img src={item?.image} alt="..." className="img-fluid img-1" />
                <img src={img2} alt="..." className="img-fluid img-2" />
              </Link>         </div>
            )
          })}
          {/* <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img1} alt="..." className="img-fluid img-1" />
              <img src={img2} alt="..." className="img-fluid img-2" />
            </Link>         </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img3} alt="..." className="img-fluid img-1" />
              <img src={img4} alt="..." className="img-fluid img-2" />
            </Link>          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img5} alt="..." className="img-fluid img-1" />
              <img src={img6} alt="..." className="img-fluid img-2" />
            </Link>          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img7} alt="..." className="img-fluid img-1" />
              <img src={img8} alt="..." className="img-fluid img-2" />
            </Link>         </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img9} alt="..." className="img-fluid img-1" />
              <img src={img10} alt="..." className="img-fluid img-2" />
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img11} alt="..." className="img-fluid img-1" />
              <img src={img12} alt="..." className="img-fluid img-2" />
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img13} alt="..." className="img-fluid img-1" />
              <img src={img14} alt="..." className="img-fluid img-2" />
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img15} alt="..." className="img-fluid img-1" />
              <img src={img16} alt="..." className="img-fluid img-2" />
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img17} alt="..." className="img-fluid img-1" />
              <img src={img18} alt="..." className="img-fluid img-2" />
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img19} alt="..." className="img-fluid img-1" />
              <img src={img20} alt="..." className="img-fluid img-2" />
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img21} alt="..." className="img-fluid img-1" />
              <img src={img22} alt="..." className="img-fluid img-2" />
            </Link>
          </div>
          <div className="col-6 col-sm-4 col-lg-2">
            <Link to="/collection">
              <img src={img23} alt="..." className="img-fluid img-1" />
              <img src={img24} alt="..." className="img-fluid img-2" />
            </Link>
          </div> */}
        </div>
      </div>
      {/*---------------- Shop By Category section End ----------------*/}
    </div>
  )
}

export default Categorey
