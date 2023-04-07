import React from 'react'
import { Link } from 'react-router-dom'
import Product1 from "../../../images/homepage/Product-banners/1.png"
import Product2 from "../../../images/homepage/Product-banners/2.png"
import Product3 from "../../../images/homepage/Product-banners/3.png"
import Product4 from "../../../images/homepage/Product-banners/4.png"

function Multicollection() {
  return (
    <div>
      {/*---------------- Multi Collection Section Start ----------------*/}
<div className="multi-collection mx-3 mx-md-5 my-5">
  {/* multi collect tab buttons */}
  <ul className="nav nav-pills mb-3 justify-content-center gap-3" id="pills-tab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link text-uppercase rounded-pill active" id="pills-tops-tab" data-bs-toggle="pill" data-bs-target="#pills-tops" type="button" role="tab" aria-controls="pills-tops" aria-selected="true">Tops</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link text-uppercase rounded-pill" id="pills-dresses-tab" data-bs-toggle="pill" data-bs-target="#pills-dresses" type="button" role="tab" aria-controls="pills-dresses" aria-selected="false">Dresses</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link text-uppercase rounded-pill" id="pills-accessories-tab" data-bs-toggle="pill" data-bs-target="#pills-accessories" type="button" role="tab" aria-controls="pills-accessories" aria-selected="false">Accessories</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link text-uppercase rounded-pill" id="pills-footwear-tab" data-bs-toggle="pill" data-bs-target="#pills-footwear" type="button" role="tab" aria-controls="pills-footwear" aria-selected="false">Footwear</button>
    </li>
  </ul>
  {/* multi collect tab buttons */}
  {/* multi collect tab content */}
  <div className="tab-content" id="pills-tabContent">
    {/* Tops Collection Start */}
    <div className="tab-pane fade show active" id="pills-tops" role="tabpanel" aria-labelledby="pills-tops-tab" tabIndex={0}>
    <div class="latest-collection mx-3 mx-md-5 my-5">
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
      </div>        {/* <h2 class="text-uppercase text-center">Latest Collection</h2> */}

</div>
    </div>
    {/* Tops Collection End */}
    {/* Dresses Collection Start */}
    <div className="tab-pane fade" id="pills-dresses" role="tabpanel" aria-labelledby="pills-dresses-tab" tabIndex={0}>
    <div class="latest-collection mx-3 mx-md-5 my-5">
            {/* <h2 class="text-uppercase text-center">Latest Collection</h2> */}
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
    </div>
    {/* Dresses Collection End */}
    {/* Accessories Collection Start */}
    <div className="tab-pane fade" id="pills-accessories" role="tabpanel" aria-labelledby="pills-accessories-tab" tabIndex={0}>
    <div class="latest-collection mx-3 mx-md-5 my-5">
            {/* <h2 class="text-uppercase text-center">Latest Collection</h2> */}
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
    </div>
    {/* Accessories Collection End */}
    {/* Footwear Collection Start */}
    <div className="tab-pane fade" id="pills-footwear" role="tabpanel" aria-labelledby="pills-footwear-tab" tabIndex={0}>
    <div class="latest-collection mx-3 mx-md-5 my-5">
            {/* <h2 class="text-uppercase text-center">Latest Collection</h2> */}
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
    </div>
    {/* Footwear Collection End */}
  </div>
  {/* multi collect tab content */}
</div>
{/*---------------- Multi Collection Section End ----------------*/}

    </div>
  )
}

export default Multicollection
