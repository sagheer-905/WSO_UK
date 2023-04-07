import React from 'react'
import img1 from "../../../images/cartpage/p1.jpg"
import img2 from "../../../images/cartpage/p2.jpg"
import img3 from "../../../images/cartpage/p3.jpg"

function Cartdata() {
  return (
    <div>


      {/*--------- Cart Container Start ----------*/}
      <div className="cart-container container-fluid pt-3 pb-5 px-4 px-xl-5">
        <form action className="form cart-form">
          <div className="cartTop-wrapper mx-xl-5">
            <div className="cart-header d-none d-md-block">
              <div className="row mx-0 justify-content-between">
                <div className="col-md-1 product-imgLabel">
                  <label>Product</label>
                </div>
                <div className="col-md-4 product-nameLabel">
                  <label>Product Name</label>
                </div>
                <div className="col-md-1 product-priceLabel text-center">
                  <label>Price</label>
                </div>
                <div className="col-md-2 product-QtyLabel text-center">
                  <label>Quantity</label>
                </div>
                <div className="col-md-1 product-totalLabel text-center">
                  <label>Total</label>
                </div>
                <div className="col-md-2 col-xl-1 text-center">
                  <label>Cart</label>
                </div>
              </div>
            </div>
            <div className="cart-body">
              <div className="row justify-content-end justify-content-md-between mx-0 align-items-md-center">
                <div className="col-4 col-md-1 product-img">
                  <a href="product.html">
                    <img src={img1} alt="..." className="img-fluid" />
                  </a>
                </div>
                <div className="col-8 col-md-4 product-name">
                  <a href="product.html" className="prodTitle"><span className="fw-semibold d-md-none">Product: </span>Coloured Stripe Knit Tassel Scarf</a>
                  <div className="prodColor mt-2"><span className="fw-semibold">Color: </span>Mix</div>
                </div>
                <div className="col-8 col-md-1 product-price text-md-center"><span className="fw-semibold d-md-none">Price: </span>£45.00</div>
                <div className="col-8 col-md-2 product-Qty text-md-center">
                  <div className="qty-options">
                    <span className="fw-semibold d-block d-md-none mb-2">Quantity: </span>
                    <div className="input-group justify-content-md-center">
                      <button className="btn btn-outline-secondary qty-minus-btn qty-button" type="button">−</button>
                      <input type="text" name="quantity" className="input-number" defaultValue={1} min={1} max={100} />
                      <button className="btn btn-outline-secondary qty-plus-btn qty-button" type="button">+</button>
                    </div>
                  </div>
                </div>
                <div className="col-8 col-md-1 product-total text-md-center"><span className="fw-semibold d-md-none">Total: </span>£45.00</div>
                <div className="col-8 col-md-2 col-xl-1 product-remove text-md-center">
                  <button className="btn btn-outline-danger text-uppercase rounded-pill">Remove</button>
                </div>
              </div>
              <div className="row justify-content-end justify-content-md-between mx-0 align-items-md-center">
                <div className="col-4 col-md-1 product-img">
                  <a href="product.html">
                    <img src={img2}  alt="..." className="img-fluid" />
                  </a>
                </div>
                <div className="col-8 col-md-4 product-name">
                  <a href="product.html" className="prodTitle"><span className="fw-semibold d-md-none">Product: </span>Abstract Animal Print Drawstring Top</a>
                  <div className="prodColor mt-2"><span className="fw-semibold">Color: </span>Rust</div>
                </div>
                <div className="col-8 col-md-1 product-price text-md-center"><span className="fw-semibold d-md-none">Price: </span>£10.00</div>
                <div className="col-8 col-md-2 product-Qty text-md-center">
                  <div className="qty-options">
                    <span className="fw-semibold d-block d-md-none mb-2">Quantity: </span>
                    <div className="input-group justify-content-md-center">
                      <button className="btn btn-outline-secondary qty-minus-btn qty-button" type="button">−</button>
                      <input type="text" name="quantity" className="input-number" defaultValue={1} min={1} max={100} />
                      <button className="btn btn-outline-secondary qty-plus-btn qty-button" type="button">+</button>
                    </div>
                  </div>
                </div>
                <div className="col-8 col-md-1 product-total text-md-center"><span className="fw-semibold d-md-none">Total: </span>£10.00</div>
                <div className="col-8 col-md-2 col-xl-1 product-remove text-md-center">
                  <button className="btn btn-outline-danger text-uppercase rounded-pill">Remove</button>
                </div>
              </div>
              <div className="row justify-content-end justify-content-md-between mx-0 align-items-md-center"> 
                <div className="col-4 col-md-1 product-img">
                  <a href="product.html">
                    <img src={img3}  alt="..." className="img-fluid" />
                  </a>
                </div>
                <div className="col-8 col-md-4 product-name">
                  <a href="product.html" className="prodTitle"><span className="fw-semibold d-md-none">Product: </span>Faux Leather Ankle Heel Boots</a>
                  <div className="prodColor mt-2"><span className="fw-semibold">Color: </span>Beige</div>
                </div>
                <div className="col-8 col-md-1 product-price text-md-center"><span className="fw-semibold d-md-none">Price: </span>£246.00</div>
                <div className="col-8 col-md-2 product-Qty text-md-center">
                  <div className="qty-options">
                    <span className="fw-semibold d-block d-md-none mb-2">Quantity: </span>
                    <div className="input-group justify-content-md-center">
                      <button className="btn btn-outline-secondary qty-minus-btn qty-button" type="button">−</button>
                      <input type="text" name="quantity" className="input-number" defaultValue={1} min={1} max={100} />
                      <button className="btn btn-outline-secondary qty-plus-btn qty-button" type="button">+</button>
                    </div>
                  </div>
                </div>
                <div className="col-8 col-md-1 product-total text-md-center"><span className="fw-semibold d-md-none">Total: </span>£246.00</div>
                <div className="col-8 col-md-2 col-xl-1 product-remove text-md-center">
                  <button className="btn btn-outline-danger text-uppercase rounded-pill">Remove</button>
                </div>
              </div>
            </div>
            <div className="cart-actions">
              <div className="row mx-0 align-items-center py-4 gy-4 gy-md-0">
                <div className="col-md-auto">
                  <a href="index.html"><button className="btn text-uppercase rounded-pill w-100">Continue Shopping</button></a>
                </div>
                <div className="col-md-auto ms-md-auto">
                  <button className="btn text-uppercase rounded-pill w-100">Update Shopping Cart</button>
                </div>
                <div className="col-md-auto">
                  <button className="btn text-uppercase rounded-pill w-100">Clear Shopping Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cartBottom-wrapper mt-5 mx-xl-5 py-5">
            <div className="row justify-content-evenly gy-4 gy-md-0 px-4 px-xl-0">
              <div className="col-md-6 col-xl-5">
                <h5 className="text-uppercase fw-bold">Special Instructions For Seller</h5>
                <hr />
                <textarea className="form-control" id="sellerInstructions" rows={5} defaultValue={""} />
              </div>
              <div className="col-md-6 col-xl-5">
                <h5 className="text-uppercase fw-bold">Cart Totals</h5>
                <hr />
                <div className="subTotalprice d-flex justify-content-between mb-3">
                  <span className="fw-semibold text-uppercase">Subtotal:</span>
                  <span>£301.00</span>
                </div>
                <div className="shippingCharges d-flex justify-content-between mb-3">
                  <span className="fw-semibold text-uppercase">Shipping:</span>
                  <span className="text-end">Shipping &amp; taxes calculated at checkout</span>
                </div>
                <div className="OrderTotal d-flex justify-content-between mb-4">
                  <span className="fw-semibold text-uppercase">Total:</span>
                  <span>£301.00</span>
                </div>
                <button className="btn text-uppercase fw-semibold rounded-pill w-100 chkOutbtn">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/*-------- Cart Container End ----------*/}

    </div>
  )
}

export default Cartdata
