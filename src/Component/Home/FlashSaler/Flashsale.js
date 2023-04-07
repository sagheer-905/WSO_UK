import React from 'react'
import { Link } from 'react-router-dom'
import Product1 from "../../../images/homepage/Product-banners/1.png"
import Product2 from "../../../images/homepage/Product-banners/2.png"
import Product3 from "../../../images/homepage/Product-banners/3.png"
import Product4 from "../../../images/homepage/Product-banners/4.png"
import Product5 from "../../../images/homepage/Product-banners/5.png"
import Product6 from "../../../images/homepage/Product-banners/6.png"
import Product7 from "../../../images/homepage/Product-banners/7.png"
import Product8 from "../../../images/homepage/Product-banners/8.png"
function Flashsale() {
  return (
    <div>
      {/*---------------- Flash Deals Collection Section Start ----------------*/}
<div className="flash-deal mx-3 mx-md-5">
  {/* flash deal header */}
  <div className="row justify-content-between align-items-center mb-2 m-0">
    {/* flast deals title */}
    <div className="col-sm-5">
      <h2 className="text-uppercase"><i className="bi bi-lightning-charge-fill" /> Flash Deals</h2>
    </div>
    {/* flast deals title */}
    {/* flast deals countdown timer */}
    <div className="col-sm-7 text-end">
      <div id="countdown" className="row countdown text-center justify-content-end">
        <div className="col-auto time_label text-uppercase pt-1">Ends in</div>
        <div className="col-auto time">
          <h6 id="days">01</h6>
          <small>DAYS</small>
        </div>
        <div className="col-auto divider p-0">:</div>
        <div className="col-auto time">
          <h6 id="hours">12</h6>
          <small>HRS</small>
        </div>
        <div className="col-auto divider p-0">:</div>
        <div className="col-auto time">
          <h6 id="minutes">06</h6>
          <small>MINS</small>
        </div>
        <div className="col-auto divider p-0">:</div>
        <div className="col-auto time">
          <h6 id="seconds" >23</h6>
          <small>SECS</small>
        </div>
      </div>
    </div>
    {/* flast deals countdown timer */}
  </div>
  {/* flash deal header */}
  {/* flash deal Product slider */}
  <div class="latest-collection mx-3 mx-md-5 my-5">
            {/* <h2 class="text-uppercase text-center">Latest Collection</h2> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="collection-list container-fluid px-lg-5">
        <div className="row">
        <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product1} alt="..." className="img-fluid" /></Link>
                {/* product buttons */}
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
                {/* product buttons */}
              </div>
              <div className="card-body p-3 text-center">
                <Link to='/product'><h6 className="my-2">Italian Layered Face In Hand Necklace Top</h6></Link>
                <p className="mb-1"><s className="text-secondary me-2">£11.50</s><span className="text-danger">£10.50
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
              {/* product tags */}
              <div className="product-label new-label">
                <h6 className="text-uppercase text-white">New</h6>
              </div>
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
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product2} alt="..." className="img-fluid" /></Link>
                {/* product buttons */}
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
                {/* product buttons */}
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
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product3} alt="..." className="img-fluid" /></Link>
                {/* product buttons */}
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
                {/* product buttons */}
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
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product4} alt="..." className="img-fluid" /></Link>
                {/* product buttons */}
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
                {/* product buttons */}
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
              {/* product tags */}
              <div className="product-label sale-label">
                <h6 className="text-uppercase text-white">Sale</h6>
              </div>
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
  
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="collection-list container-fluid px-lg-5">
        <div className="row">
        <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product5} alt="..." className="img-fluid" /></Link>
                {/* product buttons */}
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
                {/* product buttons */}
              </div>
              <div className="card-body p-3 text-center">
                <Link to='/product'><h6 className="my-2">Embroidered Floral Patchwork Top</h6></Link>
                <p className="fw-semibold mb-1"><s className="text-secondary me-2">£17.00</s><span className="text-danger">£15.00 (12% OFF)</span></p>
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
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product6} alt="..." className="img-fluid" /></Link>
                {/* product buttons */}
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
                {/* product buttons */}
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
              {/* product tags */}
              <div className="product-label new-label">
                <h6 className="text-uppercase text-white">New</h6>
              </div>
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
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product7}alt="..." className="img-fluid" /></Link>
                {/* product buttons */}
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
                {/* product buttons */}
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
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="card-img position-relative">
                <Link to='/product'><img src={Product8} alt="..." className="img-fluid" /></Link>
                {/* product buttons */}
                <div className="product-buttons">
                  <button className="btn wishlist-btn"><i className="bi bi-suit-heart" /></button>
                  <button className="btn pcart-btn"><i className="bi bi-cart" /></button>
                  <button className="btn share-btn"><i className="bi bi-share" /></button>
                </div>
                {/* product buttons */}
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
              {/* product tags */}
              <div className="product-label backstock-label">
                <h6 className="text-uppercase text-white">Back In Stock</h6>
              </div>
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
  
        </div>
      </div>
    </div>
 
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
  {/* flash deal Product slider */}
</div>
{/*---------------- Flash Deals Collection Section End ----------------*/}

    </div>
  )
}

export default Flashsale
