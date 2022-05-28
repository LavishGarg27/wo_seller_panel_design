import React from 'react';
import Logo from "../images/Vector.png";
import oval from "../images/Oval.png"
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
        <div className="navbar">
            {/* <h3>Logo</h3> */}
            <img src={Logo} alt="Logo" className="logo"/>
            <div className="nav">
                <div className="search">
                    <div className="product">
                        <p>Product Name</p> 
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <input type="text" placeholder="Search..."/>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="menu">
                    <h1 className="feedback">Feedback</h1>
                    <h1 className="language">English <span><i class="fa fa-angle-down" aria-hidden="true"></i></span></h1>
                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                    <div className="user">
                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}
                        <img src={oval} alt="Oval" className="oval"/>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar