import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
      <div className="header">
        <img src={logo} alt="" />
        <nav>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/review">Order Review</NavLink>
          <NavLink to="/manage-inventory">Manage Inventory here</NavLink>
          {user.email ? (
            <span>
              <span style={{color:"white" }}>{user.displayName} </span>
              <button onClick={() => logOut()}>Log Out</button>
            </span>
          ) : (
            <NavLink to="/login">Log In</NavLink>
          )}
        </nav>
      </div>
    );
};

export default Header;