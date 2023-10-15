import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';




export const Home = () => {

  return (
    <>
      <section className="home-wrraper-1 py-5">
        <div className="container-xxl">
          <div div className="row">
            <div className="col-12 col-md-4">
              <div className="main-banner position-relative p-3">
                <img src="/images/bannera.jpg" className='img-fluid rounded-3 'alt="" />
                <div className="main-banner-content position-absolute ">
                  <h2>Exclusive Headphones</h2>
                  <p className='text-warning'>$255 only</p>
                  <Link className="button">Buy now</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">


              <div className="card">
                <img src="images/watch.png" className='img-fluid rounded-3 ' alt="" />
                <div className="card-body"style={{backgroundColor:"#f5f5f7"}}>
                  <h5 className="card-title text-dark">Fire-Boltt </h5>
                  <p className="card-text text-dark">Fire-Boltt Phoenix Pro 1.39" Bluetooth Calling Smartwatch,
                  Analog Day Date Functioning Analog Day Date Functioning</p>
                
                  <h3 className="card-price">$99.99</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">

              <div className="card">
                <img src="/images/headphones.png" className="card-img-top" alt="" />
                <div className="card-body"style={{backgroundColor:"#f5f5f7"}}>
                  <h5 className="card-title">boAt Rockerz</h5>
                  <p className="card-text">boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups  (Buoyant Black).</p>
                  <h3 className="card-price">$55.99</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">

              <div className="card">
                <img src="/images/alexa.png" className="card-img-top" alt="" />
                <div className="card-body"style={{backgroundColor:"#f5f5f7"}}>
                  <h5 className="card-title"> Echo Dot</h5>
                  <p className="card-text">
All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor.</p>
                  <h3 className="card-price">$299.99</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">

              <div className="card">
                <img src="/images/earbuds.png" className="card-img-top" alt="" />
                <div className="card-body"style={{backgroundColor:"#f5f5f7"}}>
                  <h5 className="card-title">Redmi Buds</h5>
                  <p className="card-text">Redmi Buds 4 Active - Bass Black, 12mm Drivers(Premium Sound Quality), Up to 30 Hours Battery Life, Google Fast Pair, IPX4.</p>
                  <h3 className="card-price">$32.99</h3>
                </div>
              </div>
            </div>




          </div>  </div>
      </section>
      <section className="marquee-wrapper home-wrapper-2 py-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
      <p className='marquee-h1'>Our Brands</p>
        <div className="marquee-inner-wrraper card-wrapper">
          <Marquee className='d-flex'>
<div className='mx-2 w-15' >
<img src="images/puma.png" alt="" />
</div>
<div className='mx-2 w-15'>
<img src="images/round.png" alt="" />
</div>
<div className='mx-2 w-15'>
<img src="images/hyundai.png" alt="" />
</div>
<div className='mx-2 w-15'>

<img src="images/addidas.png" alt="" />
</div>
<div className='mx-2 w-15'>
<img src="images/gucci.png" alt="" />
</div>
          </Marquee>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
