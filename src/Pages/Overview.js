import React from 'react'
import { Link } from 'react-router-dom';
function Overview() {
    return (
        <div>
            <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/css/brands.css" />
        <link rel="stylesheet" href="assets/css/solid.css" /> 
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>The Xchange Marketplace</title>
        <div id="dashboard" className="col-2-layout">
          <div className="left-sidebar equalColumn">
            <div className="box-content">
              <div className="logo">
                <img src="assets/images/logo-full.png" alt="" className="img-fluid" />
              </div>
              {/* end logo */}
              <nav className="sidebar card">
                <ul className="nav flex-column" id="nav_accordion">
                  <li className="nav-item">
                    <a className="nav-link" href="seller-dashboard-myAccount.html"><Link to='/sellerhub'>My Account</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="payments.html"> <Link to='/payments'> Payments </Link></a>
                  </li>
                  <li className="nav-item  nav-active">
                    <a className="nav-link" href="overview.html"> <Link to='/overview'> Overview </Link> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="messages.html"><Link to='/messages'> Messages</Link>  </a>
                  </li>
                  <li className="nav-item has-submenu">
                    <a className="nav-link" href="orders.html"> <Link to='/order'> Orders</Link>  <i className="fas fa-chevron-down" /></a>
                    <ul className="submenu collapse">
                      <li><a className="nav-link" href="orders.html">Active Orders</a></li>
                      <li><a className="nav-link" href="orders.html">Completed Orders</a></li>
                      <li><a className="nav-link" href="#">Returns</a> </li>
                      <li><a className="nav-link" href="#">Canceled</a> </li>
                    </ul>
                  </li>
                  <li className="nav-item has-submenu">
                    <a className="nav-link" href="quotes.html"> Quotes <i className="fas fa-chevron-down" /></a>
                    <ul className="submenu collapse">
                      <li><a className="nav-link" href="quotes.html">New Request</a></li>
                      <li><a className="nav-link" href="quotes.html">In Progress</a></li>
                      <li><a className="nav-link" href="quotes.html">Archive Request </a></li>                  
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="logout-btn">
                <a href="#">
                  <img src="assets/images/icon-logout.png" alt="" />
                  Logout
                </a>
              </div>
            </div>
          </div>
          {/* end left-sidebar */}
          <div className="right-content equalColumn">
            <div className="box-content title-box">
              <div className="page-title">
                seller Hub
              </div>
              <div className="right-top-link">
                <a href="#" className="link-alert"><i className="fas fa-bell" /></a>
                <h3>
                  Hello, James William &nbsp; 
                  <a href="#"> <i className="fas fa-chevron-down" /></a>
                </h3>
              </div>
            </div>
            {/* end box-content */}
            <div className="box-content minColheight">
              <div className="row" id="dashboard-tabs">
                <div className="col-md-12">           
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item active" id="nav-activeOrders-tab" data-toggle="tab" href="#nav-activeOrders" role="tab" aria-controls="nav-activeOrders" aria-selected="true">Overview</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-activeOrders" role="tabpanel" aria-labelledby="nav-activeOrders-tab">
                      <h1 className="text-center pt-3">Under Construction</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end right -sidebar */}
        </div>
        
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
        </div>
    )
}

export default Overview

