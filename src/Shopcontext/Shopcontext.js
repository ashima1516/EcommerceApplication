import React, { createContext, useEffect, useState} from 'react';

export const ShopContext=createContext(null);

export const ShopContextProvider= (props) => {

  

   const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    // console.log('product is',product)
    setCart([...cart, product]);
    const userid=localStorage.getItem('userid');
    const productid=product.id;
    console.log({userid:userid,productid:productid})
    // console.log('clicked')
  }
  const removeCart = (removeprodId) => {
    const updatedCart = cart.filter(item => item.id!==removeprodId );
    // console.log(updatedCart)
    setCart(updatedCart);
    // console.log('clicked')
  }
  const[products,setProducts]=useState([]);
  const fetchProductData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      // console.log(data)
      setProducts(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  const contextValues={products,addToCart,removeCart,cart};
    return( <ShopContext.Provider value={contextValues}>{props.children}</ShopContext.Provider>)
  
}
