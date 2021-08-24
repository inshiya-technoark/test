import React from 'react'
import { Link } from 'react-router-dom';
function Messages() {
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
                    <a className="nav-link" href="seller-dashboard-myAccount.html"> <Link to='/sellerhub'>My Account</Link> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="payments.html"> <Link to='/payments'>  Payments</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="overview.html"> <Link to='/overview'> Overview </Link></a>
                  </li>
                  <li className="nav-item nav-active">
                    <a className="nav-link" href="messages.html"> <Link to='/messages'> Messages</Link>  </a>
                  </li>
                  <li className="nav-item has-submenu">
                    <a className="nav-link" href="orders.html"> <Link to='/order'> Orders</Link> <i className="fas fa-chevron-down" /></a>
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
            <div className="box-content minColheight">
              <div className="row" id="dashboard-tabs">
                <div className="col-md-12">           
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item active" id="nav-activeOrders-tab" data-toggle="tab" href="#nav-activeOrders" role="tab" aria-controls="nav-activeOrders" aria-selected="true">Messages</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-activeOrders" role="tabpanel" aria-labelledby="nav-activeOrders-tab">
                      <div className="form-sec" id="messages-sec">
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-11">
                            <h3>Chris Wattson</h3>
                            <p>Biotech Equipment Sales <br />
                              Houston, TX<br />
                              832-963-5269</p>
                            <p className="ms-date">07/19/21</p>
                            <p className="ms-delete">
                              <a href="#"><img src="assets/images/icon-delete.png" alt="" width={16} /></a>
                            </p>                    
                          </div>
                        </div>
                        {/* end row */}
                      </div>
                      <div className="messages-sec-right">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="full-block mt-3 btn-reply">
                          <button className="btn btn-style1 btn-green">Reply</button>
                        </div>
                      </div>
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

export default Messages

