import React, { useContext } from 'react';
import {ShopContext} from '../Shopcontext/Shopcontext';


export const Ourstore = () => {
const{products,addToCart}=useContext(ShopContext);

  return (
  <>
    <header className="bg-primary text-white text-center justify-content-between py-2">
        <h1 className="bg-primary" >Product Store</h1>
        
      </header>
    
  
      <main className="container py-5">
        <section className="row" id="product-list">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description.length > 150 ?
    `${product.description.substring(0, 150)}...` : product.description}</p>
                  <p className="text-primary">${product.price.toFixed(2)}</p>
                  <button onClick={() => addToCart(product)} className="btn btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
  </>
  )
}
