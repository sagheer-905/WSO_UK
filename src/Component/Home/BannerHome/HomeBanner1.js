import React from 'react'
import img3 from "../../../images/homepage/mobile-bnr1.jpg"
function HomeBanner1({data}) {
  console.log(data);
  return (
    <div>
      
      {/*--------------- Main Banner Start --------------*/}
      <div className="homeMain-bnr contaier-fluid">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {data?.map((item,i)=>{
              return( <div className={`carousel-item ${i==0?"active":""}`} data-bs-interval={10000}>
              <img src={item.image} style={{height:"80vh"}}  alt="..." className="img-fluid d-none d-md-block w-100" />
              <img src={img3} alt="..." className="img-fluid d-md-none w-100" />
            </div>
              )
           
            })}

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/*--------------- Main Banner End --------------*/}
    </div>
  )
}

export default HomeBanner1
