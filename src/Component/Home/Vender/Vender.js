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
function Vender() {
  return (
    <div>
      {/*---------------- Vendors Spotlight Section Start ----------------*/}
<div className="vendor-spotlight mx-3 mx-md-5 my-5">
  <h2 className="text-uppercase text-center mb-3">#Vendors Spotlight</h2>
  {/* vendor spotlight tab buttons */}
  <ul className="nav nav-pills mb-3 gap-3" id="pills-tab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link text-uppercase rounded-pill active" id="pills-mlook-tab" data-bs-toggle="pill" data-bs-target="#pills-mlook" type="button" role="tab" aria-controls="pills-mlook" aria-selected="true">M Looks Fashion</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link text-uppercase rounded-pill" id="pills-europa-tab" data-bs-toggle="pill" data-bs-target="#pills-europa" type="button" role="tab" aria-controls="pills-europa" aria-selected="false">Europa Fashions</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link text-uppercase rounded-pill" id="pills-cGirl-tab" data-bs-toggle="pill" data-bs-target="#pills-cGirl" type="button" role="tab" aria-controls="pills-cGirl" aria-selected="false">Crazy Girl</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link text-uppercase rounded-pill" id="pills-KRsale-tab" data-bs-toggle="pill" data-bs-target="#pills-KRsale" type="button" role="tab" aria-controls="pills-KRsale" aria-selected="false">KR Wholesale</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link text-uppercase rounded-pill" id="pills-BeApp-tab" data-bs-toggle="pill" data-bs-target="#pills-BeApp" type="button" role="tab" aria-controls="pills-BeApp" aria-selected="false">Be Apparel</button>
    </li>
  </ul>
  {/* vendor spotlight tab buttons */}
  {/* vendor spotlight Tab content */}
  <div className="tab-content" id="pills-tabContent">
    {/* M Looks Fashion Collection Start */}
    <div className="tab-pane fade show active" id="pills-mlook" role="tabpanel" aria-labelledby="pills-mlook-tab" tabIndex={0}>
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
    {/* M Looks Fashion Collection End */}
    {/* Europa Fashions Collection Start */}
    <div className="tab-pane fade" id="pills-europa" role="tabpanel" aria-labelledby="pills-europa-tab" tabIndex={0}>
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
    {/* Europa Fashions Collection End */}
    {/* Crazy Girl Collection Start */}
    <div className="tab-pane fade" id="pills-cGirl" role="tabpanel" aria-labelledby="pills-cGirl-tab" tabIndex={0}>
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
    {/* Crazy Girl Collection End */}
    {/* KR Wholesale Collection Start */}
    <div className="tab-pane fade" id="pills-KRsale" role="tabpanel" aria-labelledby="pills-KRsale-tab" tabIndex={0}>
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
    {/* KR Wholesale Collection End */}
    {/* Europa Fashions Collection Start */}
    <div className="tab-pane fade" id="pills-BeApp" role="tabpanel" aria-labelledby="pills-BeApp-tab" tabIndex={0}>
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
    {/* Europa Fashions Collection End */}
  </div>
  {/* vendor spotlight Tabcontent */}
</div>
{/*---------------- Vendors Spotlight Section End ----------------*/}

    </div>
  )
}

export default Vender
