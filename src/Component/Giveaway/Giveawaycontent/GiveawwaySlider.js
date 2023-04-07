import React from 'react'
import img1 from '../../../images/giveAwaypage/Influencer-Image1.jpg'
import img2 from '../../../images/giveAwaypage/Influencer-Image2.jpg'
import img3 from '../../../images/giveAwaypage/Influencer-Image3.jpg'
import img4 from '../../../images/giveAwaypage/Influencer-Image4.jpg'
import img5 from '../../../images/giveAwaypage/Influencer-Image5.jpg'
import img6 from '../../../images/giveAwaypage/Influencer-Image6.jpg'
import img7 from '../../../images/giveAwaypage/Influencer-Image7.jpg'
import img8 from '../../../images/giveAwaypage/Influencer-Image8.jpg'
import img9 from '../../../images/giveAwaypage/Influencer-Image9.jpg'
import img10 from '../../../images/giveAwaypage/Influencer-Image10.jpg'
function GiveawwaySlider() {
  return (
    <div>
       <div className="container-fluid fpage_content px-3 px-sm-5 pb-5">
       <div className="influencer">
          <h3 className="fw-bold mb-4 text-center">#New Influencer</h3>
          <div className="influiencer_slider">
            <div className="slider-container">
              <span><img src={img1} alt="..." className="img-fluid" /></span>
              <span><img src={img2} alt="..." className="img-fluid" /></span>
              <span><img src={img3} alt="..." className="img-fluid" /></span>
              <span><img src={img4} alt="..." className="img-fluid" /></span>
              <span><img src={img5} alt="..." className="img-fluid" /></span>
              <span><img src={img6} alt="..." className="img-fluid" /></span>
              <span><img src={img7} alt="..." className="img-fluid" /></span>
              <span><img src={img8} alt="..." className="img-fluid" /></span>
              <span><img src={img9} alt="..." className="img-fluid" /></span>
              <span><img src={img10} alt="..." className="img-fluid" /></span>
              {/* Repeat Same Images For Slider (Just copy and paste the above child elements) */}
              <span><img src={img1} alt="..." className="img-fluid" /></span>
              <span><img src={img2} alt="..." className="img-fluid" /></span>
              <span><img src={img3} alt="..." className="img-fluid" /></span>
              <span><img src={img4} alt="..." className="img-fluid" /></span>
              <span><img src={img5} alt="..." className="img-fluid" /></span>
              <span><img src={img6} alt="..." className="img-fluid" /></span>
              <span><img src={img7} alt="..." className="img-fluid" /></span>
              <span><img src={img8} alt="..." className="img-fluid" /></span>
              <span><img src={img9} alt="..." className="img-fluid" /></span>
              <span><img src={img10} alt="..." className="img-fluid" /></span>
            </div>
          </div>
        </div>
        </div>

    </div>
  )
}

export default GiveawwaySlider
