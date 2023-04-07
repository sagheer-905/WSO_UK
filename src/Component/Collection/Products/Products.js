import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../../../ContexApi/AuthContext'
import { useParams } from 'react-router-dom'
function Products() {
  const parms=useParams()

  const {allProduct,ProductData,wishlist,addTocart} =useAuth()
  useEffect(()=>{
    allProduct(parms?.id)
    // eslint-disable-next-line
  },[])
  return (
<>


      {/*------- Collection List Section Start --------*/}
      <div className="collection-list container-fluid px-lg-5">
        <div className="row">
          {ProductData?.products?.map((item)=>{
            return(

          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to={`/product${item.id}`}><img src={item.image} alt="..." className="img-fluid" /></Link>
                {/* product buttons */}
                <div className="product-buttons">
                  <button onClick={()=>wishlist({product_id:item?.id})} className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button onClick={()=>addTocart(item)} className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
                {/* product buttons */}
              </div>
              <div className="card-body p-3 text-center">
                <Link to={`/product${item.id}`}><h6 className="my-2">{item.title}</h6></Link>
                <p className="mb-1">{item.discount_price?<s className="text-secondary me-2">£{item.price}</s>:""}<span className="text-danger">£{item.price-1}
                    {item.discount_price?'(9% OFF)':""}</span></p>
                <div className="review text-warning">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span className="text-dark ms-2">{item?.rating?.rate} rating</span>
                </div>
                <button type="button" className="btn text-uppercase rounded-pill quickview-btn my-2"><i className="bi bi-cart3" /> Quick Shop</button>
              </div>
              {/* product tags */}
              {item?.rating?.rate>4.5?<div className="product-label new-label">
                <h6 className="text-uppercase text-white">New</h6>
              </div>:""}
              {/* product tags */}
              {/* quickshop modal */}
              <div className="quickshop_modal text-start p-3">
                <div className="quickshop_close text-end">
                  CLOSE <i className="fa-solid fa-xmark" />
                </div>
                <div className="quickshop_form">
                  <h6 className="fw-bold my-5">Colour:</h6>
                  <div className="row text-center">
                    <div className="col-3">
                      <span className="color_div" />
                      <span className="color_title">Camel</span>
                    </div>
                    <div className="col-3">
                      <span className="color_div" />
                      <span className="color_title">Grey</span>
                    </div>
                    <div className="col-3">
                      <span className="color_div" />
                      <span className="color_title">Khaki</span>
                    </div>
                    <div className="col-3">
                      <span className="color_div" />
                      <span className="color_title">Black</span>
                    </div>
                  </div>
                  <button className="btn addTocart text-uppercase my-4 w-100">Add To Cart</button>
                </div>
              </div>
              {/* quickshop modal */}
            </div>
          </div>
            )
          })}
         
        </div>
      </div>
      {/*------- Collection List Section End --------*/}
 
</>
  )
}

export default Products
