import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Profile() {
    return (
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
                  <li className="nav-item nav-active">
                    <a className="nav-link" href="seller-dashboard-myAccount.html"><Link to='/sellerhub'>My Account</Link></a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="payments.html"> <Link to='/payments'>  Payments</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="overview.html"> <Link to='/overview'> Overview</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="messages.html"> Messages </a>
                  </li>
                  <li className="nav-item has-submenu">
                    <a className="nav-link" href="orders.html"><Link to='/order'> Orders</Link>  <i className="fas fa-chevron-down" /></a>
                    <ul className="submenu collapse">
                      <li><a className="nav-link" href="orders.html">Active Orders</a></li>
                      <li><a className="nav-link" href="orders.html">Completed Orders</a></li>
                      <li><a className="nav-link" href="#">Returns</a> </li>
                      <li><a className="nav-link" href="#">Canceled</a> </li>
                    </ul>
                  </li>
                  <li className="nav-item has-submenu">
                    <a className="nav-link" href="quotes.html"> <Link to='/quotes'>  Quotes</Link>  <i className="fas fa-chevron-down" /></a>
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
          <div className="right-content equalColumn">
            
            <div className="box-content minColheight">
              <div className="row" id="dashboard-tabs">
                <div className="col-md-12">                     
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item " id="nav-account-tab" data-toggle="tab" href="#nav-account" role="tab" aria-controls="nav-account" aria-selected="false"><Link to='/sellerhub'>MY ACCOUNT</Link></a>
                      <a className="nav-item active " id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="true"><Link to='/profile'>PROFILE</Link></a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    
                    <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <div className="form-sec full-block mb-4">
                        <h3>Upload a public profile picture <small>(optional) </small></h3>
                        <div className="row">
                          <div className="col-md-8">
                            <a href="#."><img src="assets/images/upload-img.png" alt="" width={100} /></a>
                          </div>
                        </div>
                      </div>
                      <div className="form-sec full-block mb-4">
                        <h3>Public Name <small>(required) </small></h3>
                        <div className="row mt-2">
                          <div className="col-md-4">
                            <input type="input" name="First Name" placeholder="First Name" className="form-control" />
                          </div>
                          <div className="col-md-4">
                            <input type="input" name="Last Name" placeholder="Last Name" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                      </div>
                      {/* end full-block */}
                      <div className="form-sec full-block mb-4">
                        <h3>Company  <small>(optional) </small></h3>
                        <div className="row">
                          <div className="col-md-8">
                            <input type="input" name="Phone" placeholder="Company Name" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                      </div>
                      {/* end full-block */}
                      <div className="form-sec full-block mb-4">
                        <h3>Phone Number  <small>(optional) </small></h3>
                        <div className="row">
                          <div className="col-md-8">
                            <input type="input" name="Phone" placeholder="_ _ _  _ _ _  _ _ _ _" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="form-sec full-block mb-4">
                        <h3>Location <small>(optional) </small></h3>
                        <div className="row mt-3">
                          <div className="col-md-8">
                            <input type="input" name="address" placeholder="City, State" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                      </div>
                      {/* end full-block */}
                      <div className="full-block mt-3">
                        <button className="btn btn-style1 btn-green">Save</button>
                      </div>
                      {/* end full-block */}
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
          </div>
        </div>
          {/* end right -sidebar */}
        
        </div>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
      
    )
}

export default Profile

	
	
