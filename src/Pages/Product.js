import React, { useEffect } from 'react'
import Footer from '../Component/Home/Footer/Footer'
import LatestCollection from '../Component/Collection/LatestCollection/LatestCollection'
import Productdetail from '../Component/Product/Product/Productdetail'
import RelatedCollection from '../Component/Product/RelatedCollection/RelatedCollection'
import SaleBanner from '../Component/Product/SaleBanner/SaleBanner'
import { useAuth } from '../ContexApi/AuthContext'
import { useParams } from 'react-router'

function Product() {
  const {productDetail}=useAuth()
  const parm=useParams()
  const {Home}=useAuth()
  console.log(Home);
  useEffect(()=>{
    var id=parm.id
    productDetail(id)
  },[])
  return (
    <div>
      <Productdetail data={Home?.product}/>
      <RelatedCollection data={Home?.related_products}/>
      <SaleBanner/>
      <LatestCollection  data={Home?.latest_products}/>
      <Footer/>
    </div>
  )
}

export default Product
