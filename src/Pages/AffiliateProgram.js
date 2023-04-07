import React from 'react'
import AffiliateFooter from '../Component/AffiliateProgram/AffiliateFooter/AffiliateFooter'
import BannerSection from '../Component/AffiliateProgram/BannerSection/BannerSection'
import CardSection from '../Component/AffiliateProgram/CardSection/CardSection'
import GridSection from '../Component/AffiliateProgram/GridSection/GridSection'
import Header from '../Component/AffiliateProgram/Header/Header'
import VedioBanner from '../Component/AffiliateProgram/VedioBanner/VedioBanner'
function AffiliateProgram() {
  return (
    <div>
      <Header/>
      <div className='container'>
      <VedioBanner/>
      <CardSection/>
      <BannerSection/>
      <GridSection/>
      <AffiliateFooter/>
      </div>
        
    </div>
  )
}

export default AffiliateProgram
