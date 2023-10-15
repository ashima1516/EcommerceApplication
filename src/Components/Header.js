import React from 'react';
import { Link,NavLink } from 'react-router-dom';

export const Header = () => {
  return (
<>
<header className="header-upper  py-3">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-2 ">
        <h2>
          <Link className="text-white mb-0">Shopify</Link>
        </h2>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-5 ">
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-0"
            id="text"
            placeholder="Search here for products"
          />
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-5 ">
        <div className="header-upper-links d-flex align-items-center justify-content-between">
          <div>
            <Link>
              <img src="/images/discount.png" height="45px" width="45px" alt="discount" />
            </Link>
            <p className="text-white mb-0">Exclusive<br />Discounts</p>
          </div>
          <div>
            <NavLink to='/login'>
              <img src="/images/login.png" height="35px" width="35px" alt="login" />
        <p className="text-white mb-0">Login <br />My account</p>  </NavLink>
          </div>
          <div>
            <NavLink to='/cart'>
              <img src="/images/cart.png" height="35px" width="35px" alt="cart" backgroundColor="white" />
            <p className="text-white mb-0">Cart <br />My cart</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<header className="header-bottom py-3">
  <div className="container">
    <div className="row">
        <div classname="col-sm-6 col-md-6 col-lg-12 ">
          <div className="menu-bottom d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Shop categories
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">One stop shop</a></li>
                <li><a className="dropdown-item" href="/">Niche Products</a></li>
                <li><a className="dropdown-item" href="/">Goods Industry</a></li>
              </ul>
            </div>
            <div classNameName="menu-links">
            <div className="menu-links d-flex align-items-center gap-3">
              <NavLink to='/' className="d-block d-sm-inline">Home</NavLink>
              <NavLink to='/store' className="d-block d-sm-inline">Store</NavLink>
              <NavLink to='/about' className="d-block d-sm-inline">About</NavLink>
              <NavLink to='/contact' className="d-block d-sm-inline">Contact</NavLink>
            </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</header>




</>
  )
}
