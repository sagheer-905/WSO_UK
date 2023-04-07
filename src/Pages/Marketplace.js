import React from 'react'
import Footer from '../Component/Home/Footer/Footer'
import MarketplaceBanner from '../Component/Marketpalce/Marketplacebanner/MarketplaceBanner'
import Marketplacsec from '../Component/Marketpalce/MarketplaceBannersec/Marketplacsec'
import Header from '../Component/Marketpalce/MarketplaceHeader/Header'

function Marketplace() {
  return (
    <div>
      <Header/>
      <div class="marketplace-content container-fluid px-sm-4 px-lg-5">
        <MarketplaceBanner/>
        <Marketplacsec/>
        <Footer/>
        </div>
    </div>
  )
}

export default Marketplace
