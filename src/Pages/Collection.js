import React, { useEffect } from 'react'
import Banner from '../Component/Collection/Banner/Banner'
import BannerPro from '../Component/Collection/ProductBaner/Banner'
import Products from '../Component/Collection/Products/Products'
import LatestCollection from '../Component/Collection/LatestCollection/LatestCollection'
import FooterCollection from '../Component/Collection/FooterCollection/FooterCollection'
import Seocontant from '../Component/Collection/SEOcontent/Seocontant'
import Footer from '../Component/Home/Footer/Footer'
import { useAuth } from '../ContexApi/AuthContext'
function Collection() {
  const {home,Home}=useAuth()
  useEffect(()=>{
    home()
  },[])
  return (
    <div>
       <>
    {/* <Navbar/> */}
    {/* <!--------- Collection Brief Section ----------> */}
    <Banner/>
 {/* <!--------- Collection Filters Section ----------> */}
    <BannerPro/>
      {/*------- Collection List Section  --------*/}
    <Products/>
      {/*------- LatestCollection List Section  --------*/}
      <LatestCollection data={Home?.latest_products}/>

      <FooterCollection/>
<Seocontant/>
<Footer/>



    </>
    </div>
  )
}

export default Collection
