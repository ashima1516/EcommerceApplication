import React, { useContext } from 'react';
import {ShopContext} from '../Shopcontext/Shopcontext';


export const Cartitem = (props) => {
    const{removeCart}=useContext(ShopContext);
    const {item}=props;
  return (
  <>
   <main className="container py-5">
        <section className="row justify-content-center" id="item-list">
            <div className='cart'>
            <div key={item.id} className="col-6 
            ">
              <div className="card mb-4 d-flex flex-row">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body ">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description.length > 150 ?
    `${item.description.substring(0, 150)}...` : item.description}</p><br />
    <h3>${item.price}</h3>
                  <button onClick={() => removeCart(item.id)}className="btn btn-primary">Remove from cart</button>
                </div>
              </div>
            </div>       
  </div>  </section>
      </main>
  
  
  </>
  )
}
