import React from 'react'
import { Link } from 'react-router-dom'
import Carousel  from 'react-elastic-carousel'
import { useAuth } from '../../../ContexApi/AuthContext'

function LatestCollection({data}) {
  const {wishlist,addTocart} =useAuth()
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1100, itemsToShow: 4 },
]
  return (
    <>
         <div className="latest-collection mx-3 mx-md-5 my-5">
            <h2 className="text-uppercase text-center">Latest Collection</h2>
<Carousel className='item-carosul' breakPoints={breakPoints} >
        {data?.map((item)=>{
          return(
            <div className="item_row">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to={`/product/${item.id}`} ><img src={item.image} alt="..." className="img-fluid" /></Link>
                <div className="product-buttons">
                  <button onClick={()=>wishlist({product_id:item?.id})}  className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button onClick={()=>addTocart(item)} className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
              </div>
              <div className="card-body p-3 text-center">
                <Link to={`/product/${item.id}`} ><h6 className="my-2">{item.title}</h6></Link>
                <p className="mb-1"><s className="text-secondary me-2">£{item.price}</s><span className="text-danger">£{item.price}
                    (9% OFF)</span></p>
                <div className="review text-warning">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span className="text-dark ms-2">1 review</span>
                </div>
                <button type="button" className="btn text-uppercase rounded-pill quickview-btn my-2"><i className="bi bi-cart3" /> Quick Shop</button>
              </div>
              <div className="product-label new-label">
                <h6 className="text-uppercase text-white">New</h6>
              </div>
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
            </div>
          </div>
          )
        })}
        
          {/* <div className="item_row">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to={`/product/${item.id}`} ><img src={Product2} alt="..." className="img-fluid" /></Link>
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
              </div>
              <div className="card-body p-3 text-center">
                <Link to='/product'><h6 className="my-2">Italian Shirred Hem Gypsy <br />Top</h6></Link>
                <p className="fw-semibold mb-1"><s className="text-secondary me-2">£8.00</s><span className="text-danger">£6.50 (19% OFF)</span></p>
                <div className="review text-warning">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span className="text-dark ms-2">1 review</span>
                </div>
                <button type="button" className="btn text-uppercase rounded-pill quickview-btn my-2"><i className="bi bi-cart3" /> Quick Shop</button>
              </div>
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
            </div>
          </div>
          <div className="item_row">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product3} alt="..." className="img-fluid" /></Link>
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
              </div>
              <div className="card-body p-3 text-center">
                <Link to='/product'><h6 className="my-2">Diamante Side Strap Velvet Heels</h6></Link>
                <p className="fw-semibold mb-1"><s className="text-secondary me-2">£18.50</s><span className="text-danger">£17.50 (9% OFF)</span></p>
                <div className="review text-warning">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span className="text-dark ms-2">1 review</span>
                </div>
                <button type="button" className="btn text-uppercase rounded-pill quickview-btn my-2"><i className="bi bi-cart3" /> Quick Shop</button>
              </div>
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
            </div>
          </div>
          <div className="item_row">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product4} alt="..." className="img-fluid" /></Link>
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
              </div>
              <div className="card-body p-3 text-center">
                <Link to='/product'><h6 className="my-2">Fashion Embossed Croc Leopard Bowtie Tote Hand Bag</h6></Link>
                <p className="fw-semibold mb-1"><s className="text-secondary me-2">£22.00</s><span className="text-danger">£18.00 (19% OFF)</span></p>
                <div className="review text-warning">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span className="text-dark ms-2">1 review</span>
                </div>
                <button type="button" className="btn text-uppercase rounded-pill quickview-btn my-2"><i className="bi bi-cart3" /> Quick Shop</button>
              </div>
              <div className="product-label sale-label">
                <h6 className="text-uppercase text-white">Sale</h6>
              </div>
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
            </div>
          </div> */}
  

</Carousel>
        {/* </div> */}
</div>
    </>
  )
}

export default LatestCollection
