import React from 'react';


function Footer() {
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
        <div className="footer">
        <div className="container">
          <footer className="pt-4 my-md-5 pt-md-5">
            <div className="row">  
              <div className="col-6 col-md">
                <h5>THE XCHANGE COMPANY</h5>
                <ul className="list-unstyled text-small">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Advertise with Us</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>SHOP ON the XCHANGE</h5>
                <ul className="list-unstyled text-small">
                  <li><a href="#">Shop by Category</a></li>
                  <li><a href="#">Shop by Brand</a></li>
                  <li><a href="#">Shop by Seller</a></li>
                  <li><a href="#">Shop by Price</a></li>
                  <li><a href="#">Shop by Location</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>SELL ON the XCHANGE</h5>
                <ul className="list-unstyled text-small">
                  <li><a href="#">How to Sell</a></li>
                  <li><a href="#">Sell Your Equipment</a></li>
                  <li><a href="#">My Account	</a></li>
                  <li><a href="#">Shipping</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>LEARN ABOUT the XCHANGE</h5>
                <ul className="list-unstyled text-small">
                  <li><a href="#">Service Connect</a></li>
                  <li><a href="#">Rent</a></li>
                  <li><a href="#">Lease</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>THE XCHANGE SUPPORT </h5>
                <ul className="list-unstyled text-small">
                  <li><a href="#">Support / Help</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="col-12 col-md" id="footer-last-col">
                <div className="row mt-4">
                  <div className="col-6">
                    <a className="btn btn-primary btn-sm btn-style1" href="#" role="button">Join Us</a>
                  </div>
                  <div className="col-6">
                    <h5>Follow us</h5>
                    <ul>
                      <li>
                        <img src="assets/images/icon-fb.png" alt="" />
                      </li>
                      <li>
                        <img src="assets/images/icon-insta.png" alt="" />
                      </li>
                      <li>
                        <img src="assets/images/icon-twiter.png" alt="" />
                      </li>
                    </ul>
                    <h5>Get the app</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <a href="#"><img alt="" src="assets/images/app-store.png" className="app-icon" /></a>
                  </div>
                  <div className="col-6">
                    <a href="#"><img alt="" src="assets/images/app-store-google.png" className="app-icon" /></a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="copyright">
          <div className="container">	
            Copyright © 2021 THE XCHANGE MARKETPLACE. All Rights Reserved. Website &amp; App Powered By K Business Solutions Inc.
          </div>
        </div>
      </div>
        </div>
    )
}

export default Footer
