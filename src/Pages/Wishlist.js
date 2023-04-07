import React from 'react'
import Footer from '../Component/Home/Footer/Footer'
import WishlistBanner from '../Component/Wishlist/WishlistBanner/WishlistBanner'
import WishlistProduct from '../Component/Wishlist/WishListProduct/WishlistProduct'

function Wishlist() {
  return (
    <div>
        <WishlistBanner/>
        <WishlistProduct/>
        <Footer/>
    </div>
  )
}

export default Wishlist
