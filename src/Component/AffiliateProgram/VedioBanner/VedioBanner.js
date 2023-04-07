import React from 'react'
import video from "../../../images/affiliate/1645264925956.webm"
function VedioBanner() {
  return (
    <div>
      {/*----- Main Video Banner Start ------*/}
<div className="affiliate_bg_video">
  <video src={video} className="w-100" loop muted autoPlay>
  </video>
</div>
{/*----- Main Video Banner End ------*/}

    </div>
  )
}

export default VedioBanner
