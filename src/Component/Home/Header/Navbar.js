import React, { useState } from 'react'
import img from "../../../images/homepage/wso-logo.png"
import cartpage from "../../../images/cartpage/p1.jpg"
import newIn from "../../../images/Navbar/newIn_1.jpg"
import newIn2 from "../../../images/Navbar/newIn_2.jpg"
import newIn3 from "../../../images/Navbar/newIn_3.jpg"
import newIn4 from "../../../images/Navbar/women_1.jpg"
import newIn5 from "../../../images/Navbar/women_2.jpg"
import newIn6 from "../../../images/Navbar/women_3.jpg"
import newIn7 from "../../../images/Navbar/winter_1.jpg"
import newIn8 from "../../../images/Navbar/winter_2.jpg"
import newIn9 from "../../../images/Navbar/winter_3.jpg"
import newIn10 from "../../../images/Navbar/men_1.jpg"
import newIn11 from "../../../images/Navbar/men_2.jpg"
import newIn12 from "../../../images/Navbar/men_3.jpg"
import newIn13 from "../../../images/Navbar/footwear_1.jpg"
import newIn14 from "../../../images/Navbar/footwear_2.jpg" 
import newIn15 from "../../../images/Navbar/footwear_3.jpg"
import newIn16 from "../../../images/Navbar/accessories_1.jpg"
import newIn17 from "../../../images/Navbar/accessories_2.jpg"
import newIn18 from "../../../images/Navbar/accessories_3.jpg"
import newIn19 from "../../../images/Navbar/vendor_1.png"
import newIn20 from "../../../images/Navbar/vendor_2.png"
import newIn21 from "../../../images/Navbar/vendor_3.png"
import newIn22 from "../../../images/Navbar/christmas_1.jpg"
import newIn23 from "../../../images/Navbar/christmas_2.jpg"
import newIn24 from "../../../images/Navbar/christmas_3.jpg"
import newIn25 from "../../../images/Navbar/sale_1.jpg"
import newIn26 from "../../../images/Navbar/sale_2.jpg"
import newIn27 from "../../../images/Navbar/sale_3.jpg"
import {AiOutlineHeart} from 'react-icons/ai'
import cartImg2 from "../../../images/cartpage/p2.jpg"
import cartImg3 from "../../../images/cartpage/p3.jpg"
import woslogo from "../../../images/homepage/wso-logo.png"
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../ContexApi/AuthContext'





function Navbar() {
        const[stike,setStike] = useState(true)
        const {wishtlistPro,Cart,removecart}=useAuth()
    window.addEventListener("scroll",()=>{
        if(window.scrollY>130){
            setStike(false)
        }
        else{
            setStike(true)
        }
    })
  return (
  <>
  {/*--------- Header Start ----------*/}
<header>
  {/*---------- Topbar Start ----------*/}
  <div className="topbar container-fluid text-center py-2">
    <h5 className="mb-0 text-uppercase">
      <span className="disc" /> <span className="content" /> <span className="code" />
    </h5>
  </div>
  {/*---------- Topbar End ----------*/}
  {/*-------- Logo Header Start ----------*/}
  <div className="logo-header py-2 px-sm-4 px-lg-5 position-relative">
    <div className="row w-100 align-items-center justify-content-between">
      {/* search & mobile Nav */}
      <div className="col-3 col-sm-3 col-lg-3">
        {/* mobile Navigation bar start */}
        <div className="mobile-nav d-lg-none">
          <button className="btn menubar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars" /></button>
          <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              {/* <h5 /> */}
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body p-0">
              {/* searchbar */}
              <div className="mobile-search py-2 px-3">
                <form className="position-relative search">
                  <input type="text" className="form-control rounded-pill bg-transparent text-white" placeholder="Search for products" />
                  <button className="btn rounded-pill">Search | <i className="fa-solid fa-magnifying-glass" /></button>
                </form>
              </div>
              {/* searchbar */}
              {/* navbar */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/collection' role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">New In</Link>
                  <ul className="dropdown-menu level1" aria-labelledby="dropdownMenuLink1">
                    <li className="dropdown">
                      <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevelDropdownMenu1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View All</Link>
                      <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevelDropdownMenu1">
                        <li><Link className="dropdown-item" to='/collection'>New In Women
                            Clothing</Link>
                        </li>
                        <li><Link className="dropdown-item" to='/collection'>New In Men Clothing</Link>
                        </li>
                        <li><Link className="dropdown-item" to='/collection'>New In Leggings</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>New In Loungewear</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>New In Footwear</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Dungarees</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/collection' role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Women</Link>
                  <ul className="dropdown-menu level1" aria-labelledby="dropdownMenuLink2">
                    <li className="dropdown">
                      <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevelDropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View All</Link>
                      <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevelDropdownMenu2">
                        <li><Link className="dropdown-item" to='/collection'>Tops</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Dresses</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Loungewear</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Women's Plus Size</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Made In Italy Clothing</Link>
                        </li>
                        <li><Link className="dropdown-item" to='/collection'>Made In Turkey
                            Clothing</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Made In China Clothing</Link>
                        </li>
                        <li><Link className="dropdown-item" to='/collection'>Gilet</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Leggings</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Featured Products</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Best Selling</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Lagen Look Clothing</Link>
                        </li>
                        <li><Link className="dropdown-item" to='/collection'>Shirts</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Lingeries</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/collection' role="button" id="dropdownMenuLink3" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    Winter
                  </Link>
                  <ul className="dropdown-menu level1" aria-labelledby="dropdownMenuLink3">
                    <li className="dropdown">
                      <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevelDropdownMenu3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View All</Link>
                      <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevelDropdownMenu3">
                        <li><Link className="dropdown-item" to='/collection'>Winter New In</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Winter Jumpers</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Winter Cardigan</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Winter Dresses</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Winter Tops</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Winter Boots</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/collection' role="button" id="dropdownMenuLink4" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Men</Link>
                  <ul className="dropdown-menu level1" aria-labelledby="dropdownMenuLink4">
                    <li className="dropdown">
                      <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevelDropdownMenu4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View All</Link>
                      <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevelDropdownMenu4">
                        <li><Link className="dropdown-item" to='/collection'>Hoodies</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Shorts</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Tracksuits &amp;
                            Loungewear</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/collection' role="button" id="dropdownMenuLink5" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Footwear</Link>
                  <ul className="dropdown-menu level1" aria-labelledby="dropdownMenuLink5">
                    <li className="dropdown">
                      <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevelDropdownMenu5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View All</Link>
                      <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevelDropdownMenu5">
                        <li><Link className="dropdown-item" to='/collection'>Leather</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Trainers</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Sneakers</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Slippers</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Footwear Sale</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/collection' role="button" id="dropdownMenuLink6" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Accessories</Link>
                  <ul className="dropdown-menu level1" aria-labelledby="dropdownMenuLink6">
                    <li className="dropdown">
                      <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevelDropdownMenu6" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">View All</Link>
                      <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevelDropdownMenu6">
                        <li><Link className="dropdown-item" to='/collection'>Jewellery</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Scarves</Link></li>
                        <li className="dropdown">
                          <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevel2DropdownMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Women
                            Bags</Link>
                          <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevel2DropdownMenu">
                            <li><Link className="dropdown-item" to='/collection'>Cross Body
                                Bags</Link></li>
                            <li><Link className="dropdown-item" to='/collection'>Shoulder Bags</Link>
                            </li>
                            <li><Link className="dropdown-item" to='/collection'>Hand Bags</Link></li>
                            <li><Link className="dropdown-item" to='/collection'>Clutch Bags</Link>
                            </li>
                            <li><Link className="dropdown-item" to='/collection'>Chain Bags</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/collection' role="button" id="dropdownMenuLink7" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Vendors</Link>
                  <ul className="dropdown-menu level1" aria-labelledby="dropdownMenuLink7">
                    <li className="dropdown">
                      <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevelDropdownMenu7" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View All</Link>
                      <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevelDropdownMenu7">
                        <li><Link className="dropdown-item" to='/collection'>M LOOKS FASHION LTD</Link>
                        </li>
                        <li><Link className="dropdown-item" to='/collection'>KR WHOLESALE</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>BE APPAREL</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>CRAZY GIRL</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>EUROPA FASHIONS</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>YS STITCH LTD</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/collection' role="button" id="dropdownMenuLink7" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Christmas</Link>
                  <ul className="dropdown-menu level1" aria-labelledby="dropdownMenuLink7">
                    <li className="dropdown">
                      <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevelDropdownMenu7" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View All</Link>
                      <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevelDropdownMenu7">
                        <li><Link className="dropdown-item" to='/collection'>Christmas Tops</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Christmas Dresses</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Christmas Loungewear</Link>
                        </li>
                        <li><Link className="dropdown-item" to='/collection'>Christmas Jumper</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/collection' role="button" id="dropdownMenuLink7" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Sale</Link>
                  <ul className="dropdown-menu level1" aria-labelledby="dropdownMenuLink7">
                    <li className="dropdown">
                      <Link className="dropdown-item dropdown-toggle" to='/collection' id="multilevelDropdownMenu7" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View All</Link>
                      <ul className="dropdown-menu p-0 level2" aria-labelledby="multilevelDropdownMenu7">
                        <li><Link className="dropdown-item" to='/collection'>Top Sale</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Footwear Sale</Link></li>
                        <li><Link className="dropdown-item" to='/collection'>Everything £5 &amp; Under</Link>
                        </li>
                        <li><Link className="dropdown-item" to='/collection'>£7 SHOP</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* navbar */}
            </div>
          </div>
        </div>
        {/* mobile Navigation bar end */}
        {/* search-form start */}
        <form className="position-relative d-none d-lg-block search">
          <input type="text" className="form-control rounded-pill" placeholder="Search for products" />
          <button className="btn rounded-pill">Search <i className="fa-solid fa-magnifying-glass border-start border-2 border-light ps-1" /></button>
        </form>
        {/* search-form start */}
      </div>
      {/* search & mobile Nav */}
      {/* Logo */}
      <div className="col-6 col-sm-4 col-lg-4 text-center">
        <Link to='/'>
          <img src={img} alt="..." className="img-fluid" />
          </Link>
      </div>
      {/* Logo */}
      {/* Icons Section */}
      <div className="col-3 col-sm-3 col-lg-3">
        <div className="row justify-content-end justify-content-lg-center align-items-center gap-2 gap-sm-4">
          {/* wishlist icon */}
          <div className="col-auto p-0 position-relative">
            <Link to='/wishlist'>
              <span className="wishlist-counter">{wishtlistPro?.length?wishtlistPro?.length:"0"}</span>
              <Link to="/wishlist">
              <AiOutlineHeart style={{color:"black",fontSize:"28px"}}/>
              </Link>

              {/* <svg xmlns:dc="http://purl.org/dc/elements/1.1/" title="Wishlist" id="header-icon--heart-both" filter="#6c6c6c" className="header-icon--heart-both" width={25} height={25} xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.38667 109.84" xmlSpace="preserve" version="1.1">
                <g transform="matrix(1.3333333,0,0,-1.3333333,0,109.84)" id="header-icon--heart-inner-outline" className="js-outline-heart">
                  <g transform="scale(0.1)" id="g12">
                    <path id="path14" style={{fillOpacity: 1, fillRule: 'nonzero', stroke: 'none'}} d="m 247.906,734.609 c 77.973,0 139.621,-89.308 140.18,-90.125 l 37.109,-55.648 37.094,55.621 c 0.609,0.902 61.645,90.152 140.203,90.152 15.219,0 30.664,-3.488 45.91,-10.339 51.239,-23.071 88.18,-64.84 104.047,-117.618 C 773.164,537.664 756.844,455.895 706.5,376.367 621.262,241.695 477.965,139.391 425.195,104.563 372.414,139.41 229.082,241.781 143.91,376.367 93.5625,455.902 77.2461,537.684 97.9727,606.66 c 15.8403,52.77 52.7693,94.539 104.0073,117.602 15.258,6.859 30.708,10.347 45.926,10.347 M 837.855,632.32 c -23.41,77.918 -77.691,139.457 -152.828,173.282 -26.863,12.082 -54.632,18.207 -82.535,18.207 -79.203,0 -141.976,-49.258 -177.297,-85.274 -35.304,36.016 -98.074,85.274 -177.289,85.274 -27.898,0 -55.668,-6.125 -82.531,-18.227 C 90.2383,771.777 35.9453,710.238 12.5352,632.32 -15.7266,538.227 4.16406,430.379 68.5352,328.656 186.758,141.852 393.813,18.4805 402.578,13.3203 L 425.195,0 447.84,13.3203 c 8.746,5.1602 215.812,128.5317 334.039,315.3357 64.351,101.742 84.258,209.571 55.976,303.664">
                    </path>
                  </g>
                </g>
              </svg> */}
            </Link>
          </div>
          {/* wishlist icon */}
          {/* User login Icon */}
          <div className="col-auto p-0 position-relative ws-dropdown dropdown">
            <Link to='/collection' data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                <path d="M10.1 11.2c-5.1 1-9 5.8-9 11.5 0 .6.5 1.2 1.2 1.2h19.6c.6 0 1.2-.5 1.2-1.2 0-5.7-3.9-10.4-9-11.5 2.2-.8 3.7-2.9 3.7-5.3 0-3.1-2.6-5.7-5.7-5.7S6.4 2.8 6.4 5.9c0 2.4 1.5 4.5 3.7 5.3zM3.5 21.5c.5-4.6 4.2-8.2 8.6-8.2 4.4 0 8 3.6 8.6 8.2H3.5zm8.6-12.2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4c-.1 1.9-1.6 3.4-3.4 3.4z">
                </path>
              </svg>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link className="dropdown-item"  to='/registration'>Register</Link></li>
              <li><Link to='login' className="dropdown-item" >Login</Link></li>
            </ul>
          </div>
          {/* User login Icon */}
          {/* Cart Icon */}
          <div className="col-auto p-0 position-relative">
            <button className="btn p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartoffcanvas" aria-controls="cartoffcanvas">
              <span className="cart-counter">{Cart.length?Cart.length:"0"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} title="Bag">
                <path d="M21.1 5.5c.6 0 1.1.5 1.1 1.1v16c0 .6-.5 1.1-1.1 1.1H2.9c-.6 0-1.1-.5-1.1-1.1v-16c0-.6.5-1.1 1.1-1.1h2.8C6.2 2.5 8.8.1 12 .1c3.2 0 5.8 2.3 6.3 5.4h2.8zm-5.1.1c-.5-1.8-2.1-3.1-4-3.1S8.5 3.8 8 5.6h8zm-11.9 16H20V7.8H4.1v13.8z">
                </path>
              </svg>
            </button>
            <div className="offcanvas offcanvas-end sideCart" tabIndex={-1} id="cartoffcanvas" aria-labelledby="offcanvasCartLabel">
              <div className="offcanvas-header">
                <h4 className="offcanvas-title text-uppercase" id="offcanvasCartLabel">Shopping Cart
                </h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body p-3">
                <div className="sidecart_products">
                  {Cart?.map((item)=>{
                    return (
                      <div className="row py-3 border-bottom mx-0">
                      <div className="col-3 px-0">
                        <Link to={`/product/${item.id}`}><img src={item.image} alt="..." className="img-fluid" /></Link>
                      </div>
                      <div className="col-7 col-md-8">
                        <Link to={`/product/${item.id}`} className="p_title">Coloured Stripe Knit Tassel
                          Scarf</Link>
                        <p className="p_color my-2 fw-semibold">Color: <span className="p_colorVal fw-normal">Mix</span></p>
                        <small className="p_quantity">1 x</small>
                      </div>
                      <div className="col-1">
                        <button onClick={()=>removecart(item.id)} className="btn border-0 p-0"><i className="fa-solid fa-xmark" /></button>
                      </div>
                    </div>
                    )
                  })}
                  {/* <div className="row py-3 border-bottom mx-0">
                    <div className="col-3 px-0">
                      <Link to='/product'><img src={cartpage} alt="..." className="img-fluid" /></Link>
                    </div>
                    <div className="col-7 col-md-8">
                      <Link to='/product' className="p_title">Coloured Stripe Knit Tassel
                        Scarf</Link>
                      <p className="p_color my-2 fw-semibold">Color: <span className="p_colorVal fw-normal">Mix</span></p>
                      <small className="p_quantity">1 x</small>
                    </div>
                    <div className="col-1">
                      <button className="btn border-0 p-0"><i className="fa-solid fa-xmark" /></button>
                    </div>
                  </div>
                  <div className="row py-3 border-bottom mx-0">
                    <div className="col-3 px-0">
                      <Link to='/product'><img src={cartImg2} alt="..." className="img-fluid" /></Link>
                    </div>
                    <div className="col-7 col-md-8">
                      <Link to='/product' className="p_title">Abstract Animal Print
                        Drawstring Top</Link>
                      <p className="p_color my-2 fw-semibold">Color: <span className="p_colorVal fw-normal">Rust</span></p>
                      <small className="p_quantity">1 x</small>
                    </div>
                    <div className="col-1">
                      <button className="btn border-0 p-0"><i className="fa-solid fa-xmark" /></button>
                    </div>
                  </div>
                  <div className="row py-3 border-bottom mx-0">
                    <div className="col-3 px-0">
                      <Link to='/product'><img src={cartImg3} alt="..." className="img-fluid" /></Link>
                    </div>
                    <div className="col-7 col-md-8">
                      <Link to='/product' className="p_title">Faux Leather Ankle Heel
                        Boots</Link>
                      <p className="p_color my-2 fw-semibold">Color: <span className="p_colorVal fw-normal">Beige</span></p>
                      <small className="p_quantity">1 x</small>
                    </div>
                    <div className="col-1">
                      <button className="btn border-0 p-0"><i className="fa-solid fa-xmark" /></button>
                    </div>
                  </div> */}
                </div>
                <div className="sidecart-instruction py-3 border-bottom">
                  <label htmlFor className="form-label">Special instructions for seller</label>
                  <textarea className="form-control rounded-4" rows={3} defaultValue={""} />
                </div>
                <div className="sidecart-subtotal d-flex justify-content-between align-items-center py-3 border-bottom">
                  <h6 className="fw-semibold text-uppercase m-0">SubTotal:</h6>
                  <p className="subtotal_price m-0">£301.00</p>
                </div>
                <div className="sidecart-btns py-3">
                  <Link to='/cartpage'><button className="btn rounded-pill text-uppercase w-100 sidecartBTn mb-3">View
                      Cart</button></Link>
                  <Link to="/checkout"><button className="btn rounded-pill text-uppercase w-100 sidecheckoutBTn">Proceed
                      to checkout</button></Link>
                </div>
              </div>
            </div>
          </div>
          {/* Cart Icon */}
        </div>
      </div>
      {/* Icons Section */}
    </div>
  </div>
  {/*-------- Logo Header End ----------*/}
  {/*--------- Desktop Navigation Bar Start ---------*/}
  <div className={stike?"navigation_bar  border-top pe-3 pe-sm-0 ps-2 ps-sm-0 ":"navigation_bar sticky_nav  border-top pe-3 pe-sm-0 ps-2 ps-sm-0 "} >
    <div className="row align-items-center justify-content-between justify-content-lg-center m-0">
      {/* sticky logo */}
      {stike?null:<div className="col-6 col-lg-2 ">
        <Link to={'/'}>
        <img src={woslogo} alt="..." className="img-fluid logo-img" />
        </Link>
      </div>}
      {/* sticky logo */}
      {/* Desktop Navigation */}
      <div className="col-lg-8 p-0">
        <nav className="navbar navbar-expand-lg py-0">
          <div className="container-fluid p-0">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1 gap-xl-3">
                <li className="nav-item dropdown mega-dropdown position-static">
                  <Link className="nav-link position-relative" to='/collection' aria-expanded="false">
                    New In
                    <span className="menu-label">hot</span>
                  </Link>
                  {/* mega dropdown */}
                  <div className="dropdown-menu">
                    <div className="row m-0">
                      <div className="col-lg-3">
                        <ul className="list-unstyled border-end">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>View All</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>New In
                              Women
                              Clothing</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>New In
                              Men
                              Clothing</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>New In
                              Leggings</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>New In
                              Loungewear</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>New In
                              Footwear</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Dungarees</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn} alt="..." className="img-fluid" />
                          <h6 className="my-2">Women Clothing</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn2} alt="..." className="img-fluid" />
                          <h6 className="my-2">Dungarees</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn3} alt="..." className="img-fluid" />
                          <h6 className="my-2">Loungewear</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega dropdown */}
                </li>
                <li className="nav-item dropdown mega-dropdown position-static">
                  <Link className="nav-link" to='/collection' aria-expanded="false">Women</Link>
                  {/* dropdown */}
                  <div className="dropdown-menu">
                    <div className="row m-0">
                      <div className="col-lg-3">
                        <ul className="list-unstyled border-end">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>View
                              All</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Tops</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Dresses</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Loungewear</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Women's Plus Size</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Made In Italy
                              Clothing</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Made In Turkey
                              Clothing</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Made In China
                              Clothing</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Gilet</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Leggings</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Featured Products</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Best Selling</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Lagen Look
                              Clothing</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Shirts</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Lingeries</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn4} alt="..." className="img-fluid" />
                          <h6 className="my-2">Tops</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn5} alt="..." className="img-fluid" />
                          <h6 className="my-2">Dresses</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn6} alt="..." className="img-fluid" />
                          <h6 className="my-2">Women's Plus Size</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* dropdown */}
                </li>
                <li className="nav-item dropdown mega-dropdown position-static">
                  <Link className="nav-link position-relative" to='/collection'  aria-expanded="false">
                    Winter
                    <span className="menu-label">Newest</span>
                  </Link>
                  {/* mega dropdown */}
                  <div className="dropdown-menu">
                    <div className="row m-0">
                      <div className="col-lg-3">
                        <ul className="list-unstyled border-end">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>WINTER</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Winter New In</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Winter Jumpers</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Winter Cardigan</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Winter Dresses</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Winter Tops</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Winter Boots</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn7} alt="..." className="img-fluid" />
                          <h6 className="my-2">Winter Jumper</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn8} alt="..." className="img-fluid" />
                          <h6 className="my-2">Winter Dresses</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn9} alt="..." className="img-fluid" />
                          <h6 className="my-2">Winter Cardigan</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega dropdown */}
                </li>
                <li className="nav-item dropdown mega-dropdown position-static">
                  <Link className="nav-link" to='/collection'  aria-expanded="false">Men</Link>
                  {/* mega dropdown */}
                  <div className="dropdown-menu">
                    <div className="row m-0">
                      <div className="col-lg-3">
                        <ul className="list-unstyled border-end">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>View
                              All</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Hoodies</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Shorts</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Tracksuit &amp;
                              Loungewear</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn10} alt="..." className="img-fluid" />
                          <h6 className="my-2">Tracksuit &amp; Loungewear</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn11} alt="..." className="img-fluid" />
                          <h6 className="my-2">Shorts</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn12} alt="..." className="img-fluid" />
                          <h6 className="my-2">Hoodies</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega dropdown */}
                </li>
                <li className="nav-item dropdown mega-dropdown position-static">
                  <Link className="nav-link" to='/collection'  aria-expanded="false">Footwear</Link>
                  {/* mega dropdown */}
                  <div className="dropdown-menu">
                    <div className="row m-0">
                      <div className="col-lg-3">
                        <ul className="list-unstyled border-end">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>View
                              All</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Leather</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Trainers</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Sneakers</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Slippers</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Footwear Sale</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn13} alt="..." className="img-fluid" />
                          <h6 className="my-2">Trainers</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn14} alt="..." className="img-fluid" />
                          <h6 className="my-2">Leather</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn15} alt="..." className="img-fluid" />
                          <h6 className="my-2">Slippers</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega dropdown */}
                </li>
                <li className="nav-item dropdown mega-dropdown position-static">
                  <Link className="nav-link" to='/collection'  aria-expanded="false">Accessories</Link>
                  {/* mega dropdown */}
                  <div className="dropdown-menu">
                    <div className="row m-0">
                      <div className="col-lg-3">
                        <ul className="list-unstyled">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>View
                              All</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Jewellery</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Scarves</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <ul className="list-unstyled border-end">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>Women
                              Bags</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Cross Body Bags</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Shoulder Bags</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Hand Bags</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Clutch Bags</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Chain Bags</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <div className="card border-0 text-center">
                          <img src={newIn16} alt="..." className="img-fluid" />
                          <h6 className="my-2">Hand Bags</h6>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="card border-0 text-center">
                          <img src={newIn17} alt="..." className="img-fluid" />
                          <h6 className="my-2">Scarves</h6>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="card border-0 text-center">
                          <img src={newIn18} alt="..." className="img-fluid" />
                          <h6 className="my-2">Jewellery</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega dropdown */}
                </li>
                <li className="nav-item dropdown mega-dropdown position-static">
                  <Link className="nav-link" to='/collection'  aria-expanded="false">Vendors</Link>
                  {/* mega dropdown */}
                  <div className="dropdown-menu">
                    <div className="row m-0">
                      <div className="col-lg-3">
                        <ul className="list-unstyled border-end">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>View
                              All</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>M Looks Fashion
                              LTD</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>KR WHolesale</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>BE Apparel</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Europa Fashions</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>YS Stitch LTD</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn19} alt="..." className="img-fluid" />
                          <h6 className="my-2">Crazy Girl</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn20} alt="..." className="img-fluid" />
                          <h6 className="my-2">Europa Fashions</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn21} alt="..." className="img-fluid" />
                          <h6 className="my-2">KR Wholesale</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega dropdown */}
                </li>
                <li className="nav-item dropdown mega-dropdown position-static">
                  <Link className="nav-link" to='/collection'  aria-expanded="false">Christmas</Link>
                  {/* mega dropdown */}
                  <div className="dropdown-menu">
                    <div className="row m-0">
                      <div className="col-lg-3">
                        <ul className="list-unstyled border-end">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>CHRISTMAS</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Christmas Tops</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Christmas
                              Lougewear</Link>
                          </li>
                          <li><Link className="dropdown-item" to='/collection'>Christmas Jumper</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn22} alt="..." className="img-fluid" />
                          <h6 className="my-2">Christmas Tops</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn23} alt="..." className="img-fluid" />
                          <h6 className="my-2">Christmas Jumpers</h6>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="card border-0 text-center">
                          <img src={newIn24} alt="..." className="img-fluid" />
                          <h6 className="my-2">Christmas Loungewear</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega dropdown */}
                </li>
                <li className="nav-item dropdown mega-dropdown position-static">
                  <Link className="nav-link position-relative" to='/collection'  aria-expanded="false">
                    Sale
                    <span className="menu-label saleMenu-label">Special Deals</span>
                  </Link>
                  {/* mega dropdown */}
                  <div className="dropdown-menu">
                    <div className="row m-0">
                      <div className="col-lg-3">
                        <ul className="list-unstyled">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>View
                              All</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Tops Sale</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Footwear Sale</Link></li>
                          <li><Link className="dropdown-item" to='/collection'>Everything £5 &amp;
                              Under</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <ul className="list-unstyled border-end">
                          <li><Link className="dropdown-item fw-bold text-uppercase fs-6" to='/collection'>£7
                              SHOP</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-2">
                        <div className="card border-0 text-center">
                          <img src={newIn25} alt="..." className="img-fluid" />
                          <h6 className="my-2">Sale</h6>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="card border-0 text-center">
                          <img src={newIn26} alt="..." className="img-fluid" />
                          <h6 className="my-2">Tops Sale</h6>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="card border-0 text-center">
                          <img src={newIn27} alt="..." className="img-fluid" />
                          <h6 className="my-2">Footwear Sale</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega dropdown */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Desktop Navigation */}
      {/* Sticky Icons Section */}
      {stike?null:<div className="col-5 col-lg-2">
        <div className="row justify-content-end justify-content-lg-center align-items-center gap-3 gap-xl-4 m-0">
          {/* sticky searchbar */}
          <div className="col-auto p-0">
            <div id="search-toggle">
              <button className="btn sToggleIcon p-0 border-0">
                {/* <Link to='/wishlist'>
              <LinkiOutlineHeart style={{color:"black",fontSize:"28px"}}/>
                </Link> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink" height="25px" version="1.1" viewBox="0 0 18 18" width="25px">
                  <title />
                  <desc />
                  <defs />
                  <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth={1}>
                    <g fill="#000000" id="Core" transform="translate(-339.000000, -381.000000)">
                      <g id="search" transform="translate(339.000000, 381.000000)">
                        <path d="M12.5,11 L11.7,11 L11.4,10.7 C12.4,9.6 13,8.1 13,6.5 C13,2.9 10.1,0 6.5,0 C2.9,0 0,2.9 0,6.5 C0,10.1 2.9,13 6.5,13 C8.1,13 9.6,12.4 10.7,11.4 L11,11.7 L11,12.5 L16,17.5 L17.5,16 L12.5,11 L12.5,11 Z M6.5,11 C4,11 2,9 2,6.5 C2,4 4,2 6.5,2 C9,2 11,4 11,6.5 C11,9 9,11 6.5,11 L6.5,11 Z" id="Shape" />
                      </g>
                    </g>
                  </g>
                </svg> */}
              </button>
              <button className="btn sToggleIcon p-0 border-0" style={{display: 'none'}}>
                <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 48 48" width={30}>
                  <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
                  <path d="M0 0h48v48h-48z" fill="none" /></svg>
              </button>
            </div>
            <div className="searchbardiv rounded" id="searchbardiv">
              <form role="search" method="get" id="searchform">
                <div className="input-group gap-2 gap-sm-4">
                  <input type="text" id="searchbox" className="form-control form-control-underlined" name="s" placeholder="Search for Products" />
                  <div className="input-group-btn">
                    <button className="btn rounded-pill" id="searchsubmit" type="submit">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* sticky searchbar */}
          {/* sticky wishlist Icon */}
          <div className="col-auto p-0 position-relative">
    
              <span className="wishlist-counter">{wishtlistPro?.length?wishtlistPro?.length:"0"}</span>
                 <Link to='/wishlist'>
              <AiOutlineHeart style={{color:"black",fontSize:"28px"}}/>
                </Link>
              {/* <svg xmlns:dc="http://purl.org/dc/elements/1.1/" title="Wishlist" id="header-icon--heart-both" filter="#6c6c6c" className="header-icon--heart-both" width={25} height={25} xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.38667 109.84" xmlSpace="preserve" version="1.1">
                <g transform="matrix(1.3333333,0,0,-1.3333333,0,109.84)" id="header-icon--heart-inner-outline" className="js-outline-heart">
                  <g transform="scale(0.1)" id="g12">
                    <path id="path14" style={{fillOpacity: 1, fillRule: 'nonzero', stroke: 'none'}} d="m 247.906,734.609 c 77.973,0 139.621,-89.308 140.18,-90.125 l 37.109,-55.648 37.094,55.621 c 0.609,0.902 61.645,90.152 140.203,90.152 15.219,0 30.664,-3.488 45.91,-10.339 51.239,-23.071 88.18,-64.84 104.047,-117.618 C 773.164,537.664 756.844,455.895 706.5,376.367 621.262,241.695 477.965,139.391 425.195,104.563 372.414,139.41 229.082,241.781 143.91,376.367 93.5625,455.902 77.2461,537.684 97.9727,606.66 c 15.8403,52.77 52.7693,94.539 104.0073,117.602 15.258,6.859 30.708,10.347 45.926,10.347 M 837.855,632.32 c -23.41,77.918 -77.691,139.457 -152.828,173.282 -26.863,12.082 -54.632,18.207 -82.535,18.207 -79.203,0 -141.976,-49.258 -177.297,-85.274 -35.304,36.016 -98.074,85.274 -177.289,85.274 -27.898,0 -55.668,-6.125 -82.531,-18.227 C 90.2383,771.777 35.9453,710.238 12.5352,632.32 -15.7266,538.227 4.16406,430.379 68.5352,328.656 186.758,141.852 393.813,18.4805 402.578,13.3203 L 425.195,0 447.84,13.3203 c 8.746,5.1602 215.812,128.5317 334.039,315.3357 64.351,101.742 84.258,209.571 55.976,303.664">
                    </path>
                  </g>
                </g>
              </svg> */}
          
          </div>
          {/* sticky wishlist Icon */}
          {/* sticky Cart Icon */}
          <div className="col-auto p-0 position-relative">
            <button className="btn p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartoffcanvas" aria-controls="cartoffcanvas">
              <span className="cart-counter">{Cart.length?Cart.length:"0"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} title="Bag">
                <path d="M21.1 5.5c.6 0 1.1.5 1.1 1.1v16c0 .6-.5 1.1-1.1 1.1H2.9c-.6 0-1.1-.5-1.1-1.1v-16c0-.6.5-1.1 1.1-1.1h2.8C6.2 2.5 8.8.1 12 .1c3.2 0 5.8 2.3 6.3 5.4h2.8zm-5.1.1c-.5-1.8-2.1-3.1-4-3.1S8.5 3.8 8 5.6h8zm-11.9 16H20V7.8H4.1v13.8z">
                </path>
              </svg>
            </button>
          </div>
          {/* sticky Cart Icon */}
        </div>
      </div>}
      {/* Sticky Icons Section */}
      {/* Sticky Burger Menu */}
      <div className="col-1 text-center">
        <button className="btn menubar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars" /></button>
      </div>
      {/* Sticky Burger Menu */}
    </div>
  </div>
  {/*--------- Desktop Navigation Bar End -----------*/}
  {/*-- Custom Nav Tab Section Start ----*/}
  <div className="custom-nav-tab container-fluid py-2 mb-4">
    <div className="row justify-content-center justify-content-lg-between align-items-center py-1">
      <div className="col-lg-4 text-center">
        <div className="mobile-code">
        <Link to='/registration'>
            <h6 className="text-uppercase m-0"><span className="disc" /> </h6>
            <p className="text-uppercase m-0">Use Code: <span className="code" /></p>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 text-center">
        <div className="delivery-text">
          <Link to="/deliveryinformation">
            <h6 className="text-uppercase m-0">Free Next Day Delivery To UK</h6>
            <p className="text-uppercase m-0">(Minimum Order £200)</p>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 text-center">
        <div className="website-code">
          <Link to='/registration'>
            <h6 className="text-uppercase m-0"><span className="disc" /> </h6>
            <p className="text-uppercase m-0">Use Code: <span className="code" /></p>
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/*-- Custom Nav Tab Section End ----*/}
</header>
{/*--------- Header End ----------*/}
<Outlet/>
  </>
  )
}

export default Navbar
