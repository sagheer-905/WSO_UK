import React, { useEffect } from 'react'
import Flashsale from '../Component/Home/FlashSaler/Flashsale'
import LatestCollection from '../Component/Collection/LatestCollection/LatestCollection'
import HomeBanner1 from '../Component/Home/BannerHome/HomeBanner1'
import Categorey from '../Component/Home/Category/Categorey'
import Footer from '../Component/Home/Footer/Footer'
import Multicollection from '../Component/Home/Multicolection/Multicollection'
import SaleBanner from '../Component/Home/SaleBanner/SaleBanner'
import Vender from '../Component/Home/Vender/Vender'
import DoubleBanner from '../Component/Home/DoubleBanner/DoubleBanner'
import Lastreadmore from '../Component/Home/LastReadmore/Lastreadmore'
import { useAuth } from '../ContexApi/AuthContext'


function Home() {
  const {home,Home}=useAuth()
  useEffect(()=>{
    home()
  },[])
  return (
    <>
    <HomeBanner1 data={Home?.banners} />
    <Categorey/>
    <LatestCollection data={Home?.latest_products} />
    <SaleBanner/>
    <Multicollection/>
    <Flashsale/>
    <Vender data={Home?.vendors}/>
    <DoubleBanner/>
    <Lastreadmore/>
    <Footer/>



    </>

  )
}

export default Home
