import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../../images/blog/WSO-Blog_1.webp"
import img2 from "../../../images/blog/WSO-Blog_1.webp"
import img3 from "../../../images/blog/WSO-Blog_2.webp"
import img4 from "../../../images/blog/WSO-Blog_3.webp"
import img5 from "../../../images/blog/WSO-Blog_4.webp"
import img6 from "../../../images/blog/WSO-Blog_5.webp"
import  img7 from "../../../images/blog/saleProd1.webp"
import img8 from "../../../images/blog/saleProd2.webp"
import  img9 from "../../../images/blog/saleProd3.webp"
import img10 from "../../../images/blog/saleProd4.webp"
import img11 from "../../../images/blog/saleProd5.webp"
import img12 from "../../../images/blog/WSO-Blog_2.webp"
import img13 from "../../../images/blog/WSO-Blog_3.webp"
import img14 from "../../../images/blog/WSO-Blog_4.webp"
import img15 from "../../../images/blog/WSO-Blog_5.webp"
import img16 from "../../../images/blog/WSO-Blog_6.webp"
import img17 from "../../../images/blog/WSO-Blog_7.webp"
import img18 from "../../../images/blog/WSO-Blog_8.webp"
import img19 from "../../../images/blog/WSO-Blog_9.webp"
import img20 from "../../../images/blog/WSO-Blog_10.webp"
import img21 from "../../../images/blog/WSO-Blog_11.webp"
import img22 from "../../../images/blog/WSO-Blog_12.webp"
import img23 from "../../../images/blog/WSO-Blog_13.webp"
import img24 from "../../../images/blog/WSO-Blog_14.webp"
import img25 from "../../../images/blog/WSO-Blog_15.webp"
import img26 from "../../../images/blog/WSO-Blog_16.webp"
import img27 from "../../../images/blog/WSO-Blog_17.webp"
import img28 from "../../../images/blog/WSO-Blog_18.webp"
import img29 from "../../../images/blog/WSO-Blog_19.webp"
import img30 from "../../../images/blog/WSO-Blog_20.webp"
import img31 from "../../../images/blog/WSO-Blog_21.webp"
import img32 from "../../../images/blog/WSO-Blog_22.webp"
import img33 from "../../../images/blog/WSO-Blog_23.webp"
// import img34 from "../../../images/blog/WSO-Blog_24.webp"


function Blogcontent() {
  return (
    <div>
        {/* <!------- Footer pages Nav BreadCrumb Start -------> */}
<div class="footerPages_breadcrumb container-fluid px-3 px-sm-5 pb-4 pt-3">
            {/* <nav style="--bs-breadcrumb-divider: url(&/34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&/34;);"
                aria-label="breadcrumb"> */}
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link>Blog</Link></li>
                </ol>
            {/* </nav> */}
        </div>
        {/* <!------- Footer pages Nav BreadCrumb End -------> */}


      {/*---- Page Content Start -----*/}
      <div className="container-fluid fpage_content px-3 px-sm-5 pt-3">
        <div className="blog-page">
          <div className="row justify-content-between">
            <div className="col-md-8 col-xxl-9 pe-md-4">
              <div className="article_list">
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">21</h4>
                      <small className="month text-uppercase fw-semibold">Dec</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Top New Years’ Eve Dress Ideas in 2022</h3>
                    <p className="article-description">
                      Are you looking for new years’ eve dress ideas in 2022? Are you
                      stocking for the 2022 new years’ eve as a fashion retailer? If yes, then this post
                      is
                      completely for you so that you can...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img12} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">09</h4>
                      <small className="month text-uppercase fw-semibold">Dec</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Christmas Outfits: What to Wear in 2022?</h3>
                    <p className="article-description">
                      Have you received your Christmas party invitation? Have you prepared your Christmas
                      clothes or not? Well, Christmas is on the way coming soon, and you need to get
                      yourself
                      ready for the festive day. Still, deciding on...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img13} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">05</h4>
                      <small className="month text-uppercase fw-semibold">Dec</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">How to Start an Online Clothing Store in the UK
                    </h3>
                    <p className="article-description">
                      Are you looking to start your online clothing store in the UK? Are you stocking and
                      retailing wholesale clothing items at your retail store? If yes, then this post will
                      be
                      a firm support for your retail...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img14} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">10</h4>
                      <small className="month text-uppercase fw-semibold">Nov</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Find Wholesale Clothing in the UK</h3>
                    <p className="article-description">
                      Buy in bulk from UK's leading wholesale supplier at affordable rates. Wholesale
                      buying
                      has many advantages for organisation services and entrepreneurial projects. Products
                      bought at wholesale rates can significantly boost your time and cost savings. The
                      strategy...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img15} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">09</h4>
                      <small className="month text-uppercase fw-semibold">Nov</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Making Cyber Monday 2022 Worth Shopping with the Latest Deals for Clothing Retailers</h3>
                    <p className="article-description">
                      Are you looking for cyber-Monday deals, as a clothing retailer? Don’t you know the best fashion deals are waiting for you once again? Permit us to guide you regarding the latest fashion deals available online this...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img16} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">09</h4>
                      <small className="month text-uppercase fw-semibold">Nov</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">What you can have with our best Black Friday deals This year?</h3>
                    <p className="article-description">
                      Are you looking for the best black Friday deals, as a clothing retailer? Are you ready for stocking statement clothing pieces this black Friday for your loyal customers? We have the best fashion items for retailers...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img17} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">17</h4>
                      <small className="month text-uppercase fw-semibold">Oct</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">7 Important Facts That You Should Know About Clothing Sale</h3>
                    <p className="article-description">
                      Are you looking for a clothing sale at your nearby store or online? Are you not aware of some important facts regarding a clothing sale today? If yes, then go through this article till the...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img18} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">29</h4>
                      <small className="month text-uppercase fw-semibold">Sep</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">UK Clothing Retailers Must Plan for Halloween 2022 As It Actually Matters</h3>
                    <p className="article-description">
                      Do you know the importance of Halloween women’s clothing, as a UK clothing retailer? Do you know how to manage Halloween stock for your loyal customers? If not, then go through this post until its end...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img19} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">22</h4>
                      <small className="month text-uppercase fw-semibold">Sep</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">10 Ways to Generate more Sales by Stocking Wholesale Clothing in 2022</h3>
                    <p className="article-description">
                      Do you know how to get more sales by stocking wholesale clothing in 2022, as a retailer? Do you know tips to jazz up your retail sales effectively? If not, then go through this post...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="blog-detail.html"><img src={img20} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">09</h4>
                      <small className="month text-uppercase fw-semibold">Sep</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="blog.html">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="blog-detail.html">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Our Wholesale Winter Clothing Collection is Right There: What You Will Get This Winter to Stock?</h3>
                    <p className="article-description">
                      Are you looking to buy wholesale winter clothing, as a retailer? Are you not aware of the latest winter clothing items for women? Autumn is ongoing, and soon, the winter will come with its full...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img21} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">02</h4>
                      <small className="month text-uppercase fw-semibold">Sep</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Your Complete Guide to the Best Wholesale Clothing Vendors</h3>
                    <p className="article-description">
                      Wholesale Shopping is one of the best clothing suppliers. A guide designed to walk you through the process of opening a retail business with ease. We help you to set up an impressive store, give...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img22} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">19</h4>
                      <small className="month text-uppercase fw-semibold">Aug</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">7 Reasons to Shop Wholesale Clothing for Your Store</h3>
                    <p className="article-description">
                      Fashion is the everyday air, it can change according to weather and time. In the UK fashion market, wholesale shopping leading a great role and offers the best wholesale clothing for women. We have a...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img23} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">19</h4>
                      <small className="month text-uppercase fw-semibold">Aug</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">5 Best Sites to Buy Wholesale Clothing for Retailers</h3>
                    <p className="article-description">
                      Buy wholesale clothing is the first thing that retailers must consider. Only clothing vendors will be able to provide you with low-cost clothing. It will provide you with a golden opportunity to make a lot...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img24} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">25</h4>
                      <small className="month text-uppercase fw-semibold">Jul</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Hailey Bieber Just Wore Our Bold Avocado Corset Dress!</h3>
                    <p className="article-description">
                      Hailey Bieber's latest look is essentially a modern variant of Penelope Featherington's signature Bridgerton look. The look also had a glossy theme. Hailey Bieber's entire body was covered in her signature "glazed donut skin" glow,...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img24} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">13</h4>
                      <small className="month text-uppercase fw-semibold">Jul</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Paris Hilton's Stylish Outfit Setting the Internet on Fire!</h3>
                    <p className="article-description">
                      Paris Hilton's coming back to our lives makes me extremely happy, and I'm even delighted that she's bringing her most glamorous outfit with her stylish look. You're right, ladies. The one and only Hilton, possibly... 
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img25} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">07</h4>
                      <small className="month text-uppercase fw-semibold">Jul</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">10 Tips on How to Find Wholesale Clothing Distributors to Supply Your Small Business in 2022</h3>
                    <p className="article-description">
                      Retailers should have access to the right Wholesale Clothing vendors to furnish their rails. This content will help you to search and find a wholesaler to fill your store according to the demand of the...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img26} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">04</h4>
                      <small className="month text-uppercase fw-semibold">Jul</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Jennifer Lopez Wore Backless LBD and Shows her Stylish Attitude this Summer</h3>
                    <p className="article-description">
                      Jennifer Lopez is shirking major trends in favor of timeless summer staples when it comes to her life off the red carpet. On June 23, Lopez was spotted out and about in Los Angeles sporting...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img27} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">04</h4>
                      <small className="month text-uppercase fw-semibold">Jul</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Dua Lipa Queen of Fashionista Just Added an Italian Twist to the Canadian Tuxedo!</h3>
                    <p className="article-description">
                      Dua Lipa is showing once more that she is a Vogue Hottie. It's no secret that the singer is one of the designer’s many inspirations, and her affection for the brand was evident backstage at...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img28} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">25</h4>
                      <small className="month text-uppercase fw-semibold">May</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Celebrity Happenings: Nicola Peltz Marries Brooklyn Beckham in a Decadent Valentino Gown</h3>
                    <p className="article-description">
                      The wedding ceremony of Nicola Peltz, an actress, a 27-year-old billionaire and a Brooklyn Beckham the 23-year-old son of a football player David Beckham and former designer Victoria Beckham opened the gateway for the upcoming...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img29} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">17</h4>
                      <small className="month text-uppercase fw-semibold">May</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Against Fast Fashion: Young Women are at the Front According to Recent Survey</h3>
                    <p className="article-description">
                      Do you know what is fast fashion? Do you know what is the problem with fast fashion today? This post will talk about the decline fast fashion is now facing as many people are going...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img30} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">13</h4>
                      <small className="month text-uppercase fw-semibold">May</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Kylie Jenner and Travis Scott’s 3-Months old Baby Boy in Public Appearance</h3>
                    <p className="article-description">
                      Kylie Jenner and Travis Scott’s 3-month-old baby boy appeared publicly on Mother’s Day. Even after the Mother’s Day, Kylie Jenner did not stop celebrating, and she shared a heart-touching video of her daughter and baby...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img31} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">22</h4>
                      <small className="month text-uppercase fw-semibold">April</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Jahleel Weaver Revealing about Inadequate Rihanna’s Maternity Looks</h3>
                    <p className="article-description">
                      In the initial maternal period, stars like Rihanna were not ready for the world to know about their changing body shapes. Weaver, Rihanna’s stylist, claimed that Rihanna appeared in her badgal look publicly and that...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img32} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">20</h4>
                      <small className="month text-uppercase fw-semibold">April</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Elite Brand Representation: The 2022 SAG Award Show and Alexandra Daddario’s Atelier Versace Appearance</h3>
                    <p className="article-description">
                      When it comes to fashion, Hollywood actors and actresses come in front, as they are purely fashion advocates and for many, they are fashion ideal in all ways. For the 28th Annual Screen Actor Guild...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
                <div className="article_container text-center rounded-2 mb-5">
                  <div className="article-figure position-relative">
                    <a href="/"><img src={img33} alt="..." className="img-fluid w-100" /></a>
                    <div className="article_date">
                      <h4 className="date m-0 fw-semibold">14</h4>
                      <small className="month text-uppercase fw-semibold">April</small>
                    </div>
                  </div>
                  <div className="article-body p-4">
                    <div className="article-metadata mb-3">
                      <span className="aricle-author"><i className="fa-solid fa-user-pen" /> Wholesale
                        Shopping</span>
                      <span className="article-category"><i className="fa-solid fa-tag" /> <a href="/">Trends</a></span>
                      <span className="article-comment"><i className="fa-solid fa-comments" /> <a href="/">Leave
                          a
                          comment</a></span>
                    </div>
                    <h3 className="article-title fw-semibold">Kim Kardashian Succeeding Balenciaga While Taking Control of Her Image and the North West Criticism</h3>
                    <p className="article-description">
                      You can’t approach your career peak without being criticized by others, as it works practically for all of us regardless of our personalities. It all depends on the way you take that criticism. Kim Kardashian...
                    </p>
                    <a href="blog-detail.html"><button className="btn rounded-pill article_readMore mb-3">Read More</button></a>
                  </div>
                </div>
              </div>
              <div id="pagination-container" className="mb-5" />
            </div>
            <div className="col-md-4 col-xxl-3 px-md-0 px-xl-3">
              <div className="blog_sideWidget mb-5">
                <div className="recent_posts p-4 p-xl-5 mb-5">
                  <h6 className="fw-semibold text-uppercase mb-2">Recent Posts</h6>
                  <div className="row border-bottom py-3">
                    <div className="col-4 col-md-5 col-xxl-4 pt-1">
                      <a href="blog-detail.html"><img src={img2} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-8 col-md-7 col-xxl-8 ps-0">
                      <a href="blog-detail.html" className="recentPosts_title">Top New Years’ Eve Dress Ideas in
                        2022</a>
                      <span className="recentPost_date">Dec 21, 2022</span>
                    </div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-4 col-md-5 col-xxl-4 pt-1">
                      <a href="blog-detail.html"><img src={img3} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-8 col-md-7 col-xxl-8 ps-0">
                      <a href="blog-detail.html" className="recentPosts_title">Christmas Outfits: What to Wear in
                        2022?</a>
                      <span className="recentPost_date">Dec 09, 2022</span>
                    </div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-4 col-md-5 col-xxl-4 pt-1">
                      <a href="blog-detail.html"><img src={img4} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-8 col-md-7 col-xxl-8 ps-0">
                      <a href="blog-detail.html" className="recentPosts_title">How to Start an Online Clothing Store in
                        the UK</a>
                      <span className="recentPost_date">Dec 05, 2022</span>
                    </div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-4 col-md-5 col-xxl-4 pt-1">
                      <a href="blog-detail.html"><img src={img5} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-8 col-md-7 col-xxl-8 ps-0">
                      <a href="blog-detail.html" className="recentPosts_title">Find Wholesale Clothing in the UK</a>
                      <span className="recentPost_date">Nov 10, 2022</span>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-4 col-md-5 col-xxl-4 pt-1">
                      <a href="blog-detail.html"><img src={img6} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-8 col-md-7 col-xxl-8 ps-0">
                      <a href="blog-detail.html" className="recentPosts_title">Making Cyber Monday 2022 Worth Shopping
                        with the Latest Deals for Clothing Retailers</a>
                      <span className="recentPost_date">Nov 09, 2022</span>
                    </div>
                  </div>
                </div>
                <div className="sale_products p-4 p-xl-5">
                  <h6 className="fw-semibold text-uppercase mb-2">Sale Products</h6>
                  <div className="row border-bottom py-3">
                    <div className="col-3 col-md-4 pt-1">
                      <a href="product.html"><img src={img7} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-9 col-md-8 ps-0">
                      <a href="product.html" className="saleProd_title text-uppercase">Crinkle Textured Tiered Hem Necklace Top</a>
                      <span className="saleProd_price">£10.00</span>
                    </div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-3 col-md-4 pt-1">
                      <a href="product.html"><img src={img8} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-9 col-md-8 ps-0">
                      <a href="product.html" className="saleProd_title text-uppercase">CRINKLE TEXTURED BUTTON UP SHIRT</a>
                      <span className="saleProd_price">£10.50</span>
                    </div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-3 col-md-4 pt-1">
                      <a href="product.html"><img src={img9} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-9 col-md-8 ps-0">
                      <a href="product.html" className="saleProd_title text-uppercase">MERRY CHRISTMAS TREES PRINT BAGGY TUNIC TOP</a>
                      <span className="saleProd_price">£8.00</span>
                    </div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-3 col-md-4 pt-1">
                      <a href="product.html"><img src={img10} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-9 col-md-8 ps-0">
                      <a href="product.html" className="saleProd_title text-uppercase">EMBROIDERED SUEDE MID-CALF WESTERN BOOTS</a>
                      <span className="saleProd_price">£288.00</span>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-3 col-md-4 pt-1">
                      <a href="product.html"><img src={img11} alt="..." className="img-fluid" /></a>
                    </div>
                    <div className="col-9 col-md-8 ps-0">
                      <a href="product.html" className="saleProd_title text-uppercase">ABSTRACT LOVE TEXT PRINT SPLIT HEM TUNIC TOP</a>
                      <span className="saleProd_price">£14.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---- Page Content End -----*/}
;
    </div>
  )
}

export default Blogcontent
