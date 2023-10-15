import React from 'react';
import { Link } from 'react-router-dom';
import{BsInstagram,BsYoutube,BsLinkedin} from 'react-icons/bs';

export const Footer = () => {
  return (
<>
<footer className="py-4 text-white">
    <div className="container-xxl">
      <div className="row">
        <div className="col-4"><h4>Contact</h4>
       <div>
        <address className='text-white'>H.no 34,Alef <br />
        Rayya,Amritsar <br />Pin code:12332</address>
        <a href="tel:9812323"className='text-white mb-2'>+09984989</a><br />
        <a href="email:ashimabhatt725@gmail.com"className='text-white mb-2'>Email:abc5@gmail.com</a>
        <div className="social links d-flex flex-row gap-5">
<a className='text-white'href="link1"><BsInstagram className='fs-4'/></a><a className='text-white' href="link2"><BsYoutube className='fs-4'></BsYoutube></a><a className='text-white' href="link2"><BsLinkedin className='fs-4'></BsLinkedin></a>

        </div>
       </div>

        </div>
        <div className="col-3"><h4>Account</h4>
        <div className="footer-link d-flex flex-column">
          <Link className='text-white mb-1'>Customer account</Link>
          <Link className='text-white mb-1'>Employer account</Link>
          <Link className='text-white mb-1'>Employee account</Link>
          <Link className='text-white mb-1'>Foreign account</Link>
        </div></div>
        <div className="col-3"><h4>Information</h4>
        <div className="footer-link d-flex flex-column">
          <Link className='text-white mb-1'>Exclusive discounts</Link>
          <Link className='text-white mb-1'>Fast delivery</Link>
          <Link className='text-white mb-1'>24/7 Avalilability</Link>
          <Link className='text-white mb-1'>Helpline contacts</Link>
        </div>
        
        </div>
        <div className="col-2"><h4>Quick links</h4>
        <div className="footer-link d-flex flex-column">
          <Link className='text-white mb-1'>Facebook</Link>
          <Link className='text-white mb-1'>Snapshot</Link>
          <Link className='text-white mb-1'>Instagram</Link>
          <Link className='text-white mb-1'>Youtube</Link>
        </div>
        
        
        </div>
      </div>
    </div>
    
    </footer> 
   <footer className="py-4">
    <div className="container-xxl">
<div className="row">
  <div className="col-12">

    <p className="text-center mb-0 text-white">  &copy; ashshopify. All rights reserved.</p>
  </div>
</div>

    </div>
    
    </footer> 

</>
  )
}
