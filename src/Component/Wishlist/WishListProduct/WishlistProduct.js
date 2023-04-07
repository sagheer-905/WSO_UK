import React, { useEffect } from 'react'
import { useAuth } from '../../../ContexApi/AuthContext'

function WishlistProduct() {
  const token = JSON.parse(localStorage.getItem('Auth'))
  const {getwishlist,wishtlistPro,remove} =useAuth()
  useEffect(()=>{
    getwishlist()
  },[])
  return (
    <div className="wishlist-container container-fluid px-3 px-sm-5 pb-5">
            {/* wishlist products conatiner */}
            <div className="wishlist_pContent pt-5">
          <div className="wishlist_productsList">
            <div className="row gy-5 gy-lg-0">
              {wishtlistPro?.map((item)=>{
                console.log(item);
                return(
                  <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <div className="card-img position-relative">
                    <a href="product.html"><img src={item?.product?.image} alt="..." className="img-fluid" /></a>
                    <div onClick={()=>remove(item.id)} className="removeProduct">
                      <i className="fa-solid fa-xmark" />
                    </div>
                  </div>
                  <div className="card-body p-3 text-center">
                    <a href="product.html"><h6 className="my-2">{item?.product?.title}</h6></a>
                    <p className="mb-1"><s className="text-secondary me-2">£{item?.product?.price}</s><span className="text-danger">£10.50
                        (9% OFF)</span></p>
                    <div className="review text-warning">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <span className="text-dark ms-2">1 review</span>
                    </div>
                    <button type="button" className="btn text-uppercase fw-semibold rounded-pill addTocart-btn my-2"><i className="bi bi-cart3 me-1" /> Add To Cart</button>
                  </div>
                  {/* product tags */}
                  <div className="product-label new-label">
                    <h6 className="text-uppercase text-white">New</h6>
                  </div>
                  {/* product tags */}
                </div>
              </div>
                )
              })}
           
            </div>
          </div>
          <div className="clear_Wishlist text-center mt-4 pt-3">
            <button className="btn rounded-pill fw-semibold"><i className="fa-solid fa-trash-can me-2" /> Clear
              List</button>
          </div>
        </div>
        {/* wishlist products conatiner */}
    </div>
  )
}

export default WishlistProduct
