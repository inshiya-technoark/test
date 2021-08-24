import React from 'react'
import { Link } from 'react-router-dom';
function Order() {
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
                  <li className="nav-item ">
                    <a className="nav-link" href="seller-dashboard-myAccount.html"> <Link to='/sellerhub'> My Account </Link> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="payments.html"> <Link to='/payments'>  Payments</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="overview.html"> <Link to='/overview'> Overview </Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="messages.html"> <Link to='/messages'> Messages </Link> </a>
                  </li>
                  <li className="nav-item has-submenu">
                    <a className="nav-link" ><Link to='/order'> Orders</Link> <i className="fas fa-chevron-down" onClick={<Link to='/order'></Link>} /></a>
                    <ul className="submenu collapse">
                      <li><a className="nav-link" ><Link to='/order'> Active Orders</Link></a></li>
                      <li><a className="nav-link" >Completed Orders</a></li>
                      <li><a className="nav-link" >Returns</a> </li>
                      <li><a className="nav-link" >Canceled</a> </li>
                    </ul>
                  </li>
                  <li className="nav-item has-submenu">
                    <a className="nav-link" href="quotes.html"> <Link to='/quotes'>  Quotes</Link> <i className="fas fa-chevron-down" /></a>
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
                      <a className="nav-item active" id="nav-activeOrders-tab" data-toggle="tab" href="#nav-activeOrders" role="tab" aria-controls="nav-activeOrders" aria-selected="true">Active Orders</a>
                      <div className="order-right-filter">
                        <div className="search-blk">
                          <input type="text" placeholder="Search all orders" className="form-control" />
                          <input type="submit" defaultValue="Search" className="btn-search" />
                        </div>
                        <div className="filter-order">
                          | &nbsp; &nbsp; <a href="#"> Filter &gt; </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-activeOrders" role="tabpanel" aria-labelledby="nav-activeOrders-tab">
                      <div className="form-sec" id="order-details-sec">
                        <div className="row order-details">
                          <div className="col-md-8 ">
                            <h3>Chris Wattson</h3>
                            <p className="order-number">Order Number: <strong>#5896254</strong></p>
                            <p>Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730</p>
                            <button type="button" className="view-more pt-3" data-toggle="modal" data-target="#viewOrderDetail">
                              View Details
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="viewOrderDetail" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog  modal-md" role="document">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="order-details brdr-none">
                                      <h2>ORDER DETAILS</h2>
                                      <div className="od-list">
                                        <label>Order Date:</label> July 19, 2021
                                      </div>
                                      <div className="od-list">
                                        <label>Order Number:</label> #5896254
                                      </div>
                                      <div className="od-list">
                                        <label>Order Total:</label> $5,900
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PRODUCT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Product</strong> <br />
                                        Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730
                                      </div>
                                      <div className="od-list mt-2 mb-2">
                                        <img src="assets/images/img-02.jpg" alt="" />
                                      </div>
                                      <div className="od-list">
                                        <label>Catagory:</label> Test &amp; Measurement
                                      </div>
                                      <div className="od-list">
                                        <label>Brand:</label> Rigaku
                                      </div>
                                      <div className="od-list">
                                        <label>Seller:</label> SeqGen
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>SHIPPING DETAILS</h2>
                                      <div className="od-list">
                                        Chris Wattson
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Shipping Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PAYMENT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Payment DETAILS</strong> <br />
                                        Visa ending in 0986
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Billing Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-8 ">
                            <h3>Chris Wattson</h3>
                            <p className="order-number">Order Number: <strong>#5896254</strong></p>
                            <p>Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730</p>
                            <button type="button" className="view-more pt-3" data-toggle="modal" data-target="#viewOrderDetail">
                              View Details
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="viewOrderDetail" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog  modal-md" role="document">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="order-details brdr-none">
                                      <h2>ORDER DETAILS</h2>
                                      <div className="od-list">
                                        <label>Order Date:</label> July 19, 2021
                                      </div>
                                      <div className="od-list">
                                        <label>Order Number:</label> #5896254
                                      </div>
                                      <div className="od-list">
                                        <label>Order Total:</label> $5,900
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PRODUCT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Product</strong> <br />
                                        Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730
                                      </div>
                                      <div className="od-list mt-2 mb-2">
                                        <img src="assets/images/img-02.jpg" alt="" />
                                      </div>
                                      <div className="od-list">
                                        <label>Catagory:</label> Test &amp; Measurement
                                      </div>
                                      <div className="od-list">
                                        <label>Brand:</label> Rigaku
                                      </div>
                                      <div className="od-list">
                                        <label>Seller:</label> SeqGen
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>SHIPPING DETAILS</h2>
                                      <div className="od-list">
                                        Chris Wattson
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Shipping Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PAYMENT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Payment DETAILS</strong> <br />
                                        Visa ending in 0986
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Billing Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-8 ">
                            <h3>Chris Wattson</h3>
                            <p className="order-number">Order Number: <strong>#5896254</strong></p>
                            <p>Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730</p>
                            <button type="button" className="view-more pt-3" data-toggle="modal" data-target="#viewOrderDetail">
                              View Details
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="viewOrderDetail" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog  modal-md" role="document">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="order-details brdr-none">
                                      <h2>ORDER DETAILS</h2>
                                      <div className="od-list">
                                        <label>Order Date:</label> July 19, 2021
                                      </div>
                                      <div className="od-list">
                                        <label>Order Number:</label> #5896254
                                      </div>
                                      <div className="od-list">
                                        <label>Order Total:</label> $5,900
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PRODUCT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Product</strong> <br />
                                        Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730
                                      </div>
                                      <div className="od-list mt-2 mb-2">
                                        <img src="assets/images/img-02.jpg" alt="" />
                                      </div>
                                      <div className="od-list">
                                        <label>Catagory:</label> Test &amp; Measurement
                                      </div>
                                      <div className="od-list">
                                        <label>Brand:</label> Rigaku
                                      </div>
                                      <div className="od-list">
                                        <label>Seller:</label> SeqGen
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>SHIPPING DETAILS</h2>
                                      <div className="od-list">
                                        Chris Wattson
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Shipping Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PAYMENT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Payment DETAILS</strong> <br />
                                        Visa ending in 0986
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Billing Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-8 ">
                            <h3>Chris Wattson</h3>
                            <p className="order-number">Order Number: <strong>#5896254</strong></p>
                            <p>Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730</p>
                            <button type="button" className="view-more pt-3" data-toggle="modal" data-target="#viewOrderDetail">
                              View Details
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="viewOrderDetail" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog  modal-md" role="document">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="order-details brdr-none">
                                      <h2>ORDER DETAILS</h2>
                                      <div className="od-list">
                                        <label>Order Date:</label> July 19, 2021
                                      </div>
                                      <div className="od-list">
                                        <label>Order Number:</label> #5896254
                                      </div>
                                      <div className="od-list">
                                        <label>Order Total:</label> $5,900
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PRODUCT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Product</strong> <br />
                                        Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730
                                      </div>
                                      <div className="od-list mt-2 mb-2">
                                        <img src="assets/images/img-02.jpg" alt="" />
                                      </div>
                                      <div className="od-list">
                                        <label>Catagory:</label> Test &amp; Measurement
                                      </div>
                                      <div className="od-list">
                                        <label>Brand:</label> Rigaku
                                      </div>
                                      <div className="od-list">
                                        <label>Seller:</label> SeqGen
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>SHIPPING DETAILS</h2>
                                      <div className="od-list">
                                        Chris Wattson
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Shipping Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PAYMENT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Payment DETAILS</strong> <br />
                                        Visa ending in 0986
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Billing Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-8 ">
                            <h3>Chris Wattson</h3>
                            <p className="order-number">Order Number: <strong>#5896254</strong></p>
                            <p>Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730</p>
                            <button type="button" className="view-more pt-3" data-toggle="modal" data-target="#viewOrderDetail">
                              View Details
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="viewOrderDetail" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog  modal-md" role="document">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="order-details brdr-none">
                                      <h2>ORDER DETAILS</h2>
                                      <div className="od-list">
                                        <label>Order Date:</label> July 19, 2021
                                      </div>
                                      <div className="od-list">
                                        <label>Order Number:</label> #5896254
                                      </div>
                                      <div className="od-list">
                                        <label>Order Total:</label> $5,900
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PRODUCT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Product</strong> <br />
                                        Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730
                                      </div>
                                      <div className="od-list mt-2 mb-2">
                                        <img src="assets/images/img-02.jpg" alt="" />
                                      </div>
                                      <div className="od-list">
                                        <label>Catagory:</label> Test &amp; Measurement
                                      </div>
                                      <div className="od-list">
                                        <label>Brand:</label> Rigaku
                                      </div>
                                      <div className="od-list">
                                        <label>Seller:</label> SeqGen
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>SHIPPING DETAILS</h2>
                                      <div className="od-list">
                                        Chris Wattson
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Shipping Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PAYMENT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Payment DETAILS</strong> <br />
                                        Visa ending in 0986
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Billing Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-8 ">
                            <h3>Chris Wattson</h3>
                            <p className="order-number">Order Number: <strong>#5896254</strong></p>
                            <p>Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730</p>
                            <button type="button" className="view-more pt-3" data-toggle="modal" data-target="#viewOrderDetail">
                              View Details
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="viewOrderDetail" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog  modal-md" role="document">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="order-details brdr-none">
                                      <h2>ORDER DETAILS</h2>
                                      <div className="od-list">
                                        <label>Order Date:</label> July 19, 2021
                                      </div>
                                      <div className="od-list">
                                        <label>Order Number:</label> #5896254
                                      </div>
                                      <div className="od-list">
                                        <label>Order Total:</label> $5,900
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PRODUCT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Product</strong> <br />
                                        Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730
                                      </div>
                                      <div className="od-list mt-2 mb-2">
                                        <img src="assets/images/img-02.jpg" alt="" />
                                      </div>
                                      <div className="od-list">
                                        <label>Catagory:</label> Test &amp; Measurement
                                      </div>
                                      <div className="od-list">
                                        <label>Brand:</label> Rigaku
                                      </div>
                                      <div className="od-list">
                                        <label>Seller:</label> SeqGen
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>SHIPPING DETAILS</h2>
                                      <div className="od-list">
                                        Chris Wattson
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Shipping Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PAYMENT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Payment DETAILS</strong> <br />
                                        Visa ending in 0986
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Billing Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-8 ">
                            <h3>Chris Wattson</h3>
                            <p className="order-number">Order Number: <strong>#5896254</strong></p>
                            <p>Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730</p>
                            <button type="button" className="view-more pt-3" data-toggle="modal" data-target="#viewOrderDetail">
                              View Details
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="viewOrderDetail" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog  modal-md" role="document">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="order-details brdr-none">
                                      <h2>ORDER DETAILS</h2>
                                      <div className="od-list">
                                        <label>Order Date:</label> July 19, 2021
                                      </div>
                                      <div className="od-list">
                                        <label>Order Number:</label> #5896254
                                      </div>
                                      <div className="od-list">
                                        <label>Order Total:</label> $5,900
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PRODUCT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Product</strong> <br />
                                        Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730
                                      </div>
                                      <div className="od-list mt-2 mb-2">
                                        <img src="assets/images/img-02.jpg" alt="" />
                                      </div>
                                      <div className="od-list">
                                        <label>Catagory:</label> Test &amp; Measurement
                                      </div>
                                      <div className="od-list">
                                        <label>Brand:</label> Rigaku
                                      </div>
                                      <div className="od-list">
                                        <label>Seller:</label> SeqGen
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>SHIPPING DETAILS</h2>
                                      <div className="od-list">
                                        Chris Wattson
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Shipping Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PAYMENT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Payment DETAILS</strong> <br />
                                        Visa ending in 0986
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Billing Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
                        <div className="row order-details">
                          <div className="col-md-8 ">
                            <h3>Chris Wattson</h3>
                            <p className="order-number">Order Number: <strong>#5896254</strong></p>
                            <p>Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730</p>
                            <button type="button" className="view-more pt-3" data-toggle="modal" data-target="#viewOrderDetail">
                              View Details
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="viewOrderDetail" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog  modal-md" role="document">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="order-details brdr-none">
                                      <h2>ORDER DETAILS</h2>
                                      <div className="od-list">
                                        <label>Order Date:</label> July 19, 2021
                                      </div>
                                      <div className="od-list">
                                        <label>Order Number:</label> #5896254
                                      </div>
                                      <div className="od-list">
                                        <label>Order Total:</label> $5,900
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PRODUCT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Product</strong> <br />
                                        Beckman Coulter Life Science UV/Vis Spectrophotometer DU 730
                                      </div>
                                      <div className="od-list mt-2 mb-2">
                                        <img src="assets/images/img-02.jpg" alt="" />
                                      </div>
                                      <div className="od-list">
                                        <label>Catagory:</label> Test &amp; Measurement
                                      </div>
                                      <div className="od-list">
                                        <label>Brand:</label> Rigaku
                                      </div>
                                      <div className="od-list">
                                        <label>Seller:</label> SeqGen
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>SHIPPING DETAILS</h2>
                                      <div className="od-list">
                                        Chris Wattson
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Shipping Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                    <div className="order-details brdr-none">
                                      <h2>PAYMENT DETAILS</h2>
                                      <div className="od-list">
                                        <strong>Payment DETAILS</strong> <br />
                                        Visa ending in 0986
                                      </div>
                                      <div className="od-list mt-2">
                                        <strong>Billing Address</strong> <br />
                                        12345 Jones Rd. Suite #246 <br />
                                        Houston, TX 77075
                                      </div>
                                    </div>
                                    {/* end  order-details */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
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

export default Order

