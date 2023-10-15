import React from 'react';
import { Outlet } from 'react-router-dom';//outlet contain child elements or nested routes u can say.......
import { Footer } from './Footer';
import { Header } from './Header';


export const Layout = () => {

  return (
  
 <>
 <Header/>

 <Outlet/>
 <Footer/>
 </>
  )
}
