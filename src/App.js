import React, { useState } from 'react';
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {Contact} from './pages/Contact';
import { Ourstore } from './pages/Ourstore';
import { ShopContextProvider } from './Shopcontext/Shopcontext';
import { Cart } from './utils/cart';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Alerts } from './utils/Alerts';



function App() {
  
  const [alertState, setAlertState] = useState("");
  const showAlert = (message, Type) => {
    // console.log('i m clicked ye')
    setAlertState({
      msg: message,
      type: Type
    });
    setTimeout(() => {
      setAlertState(null);
    }, 4000);
  };
  

  return (
    <>
      <Alerts alert={alertState}/>
      <ShopContextProvider>
        <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/store" element={<Ourstore />} />
              <Route path="/login" element={<Login showAlerts={showAlert} />} />
              <Route path="/signup" element={<Signup showAlerts={showAlert} />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}


export default App;
// "start": "node index.js",
// "server": "nodemon index.js"