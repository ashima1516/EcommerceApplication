import React, { useContext } from 'react';
import {ShopContext} from '../Shopcontext/Shopcontext';
import { Link } from 'react-router-dom';
import { Cartitem } from './Cartitem';



export const Cart = () => {
    const{cart}=useContext(ShopContext);

 return (
   <>
     
     <main className="container py-5">
        <section className="row justify-content-center" id="item-list">
            <div className='cart'>
          {cart.length===0?<>  <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card text-center">
            <div className="card-body-cart">
              <h1 className="card-title">Your Cart is Empty</h1>
              <p className="card-text">Start adding products to your cart to see them here.</p> 
              <img src="images/empty.png" alt="img" />
              <Link to='/store'><h2 className='text-warning'>Continue to shopping</h2></Link>
            </div>
          </div>
        </div>
      </div>
    </div></>: cart.map((item) => {
      return (<Cartitem key={item.id} item={item}/>)

    })}
          </div>
        </section>
      </main>
   </>
  )
}


