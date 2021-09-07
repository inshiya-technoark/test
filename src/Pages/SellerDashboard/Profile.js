import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import styled from "styled-components";


const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 0.5em;
  background: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 800;
  font-size: 0.8rem;
  &:first-child {
    padding-top: 0.5em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.4em;
  padding-top: 0rem;
  font-weight: 800;
  font-size: 1rem;
`;
const options = [<li className="nav-item">
                    <a className="nav-link"><Link to='/order'> In Progress</Link>  </a>
                  </li>,<li className="nav-item">
                    <a className="nav-link"><Link to='/completedorder'>Completed</Link>  </a>
                  </li>,<li className="nav-item">
                    <a className="nav-link"><Link to='/shipped'>Shipped</Link>  </a>
                  </li>,<li className="nav-item">
                    <a className="nav-link"><Link to='/canceled'>Canceled</Link>  </a>
                  </li>]

const optionz = [<li className="nav-item">
                    <a className="nav-link"><Link to='/products'>Recent Products</Link>  </a>
                  </li>,<li className="nav-item">
                    <a className="nav-link"><Link to='/allproducts'>All Products</Link>  </a>
                  </li>,<li className="nav-item">
                    <a className="nav-link"><Link to='/addproduct'>Add A Product</Link>  </a>
                  </li>];

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => {setIsOpen(!isOpen);setIsOn(false)}

  const [isOn, setIsOn] = useState(false);
  const toggling1 = () => {setIsOn(!isOn); setIsOpen(false)};
  
  const onOptionClicked = value => () => {
    console.log(selectedOption);
  };

  const onOptionzClicked = value => () => {
    console.log(selectedOption);
  };

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
                    <a className="nav-link" href="/overview"> <Link to='/overview'> Overview</Link></a>
                  </li>
                  <li className="nav-item has-submenu">
                    <a href="/products" onClick={toggling1} className="nav-link"><Link to='/products'> Products</Link>  <i className="fas fa-chevron-down" /></a>
                    
                      {isOn && (
                      <DropDownListContainer>
                        <DropDownList>
                          {optionz.map(option => (
                            <ListItem onClick={onOptionzClicked(optionz)}>
                              {option}
                            </ListItem>
                          ))}
                        </DropDownList>
                      </DropDownListContainer>
                      )}
                  </li>
                  <li className="nav-item has-submenu">
                    <a href="/order" onClick={toggling} className="nav-link"><Link to='/order'> Orders</Link>  <i className="fas fa-chevron-down" /></a>
                    
                      {isOpen && (
                      <DropDownListContainer className="abs">
                        <DropDownList >
                          {options.map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                              {option}
                            </ListItem>
                          ))}
                        </DropDownList>
                      </DropDownListContainer>
                      )}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/messages"><Link to='/messages'> Messages</Link>  </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="/payments"> <Link to='/payments'> Payments</Link></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/sellerhub"><Link to='/sellerhub'>My Account</Link></a>
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
                      <a className="nav-item " id="nav-account-tab" data-toggle="tab" href="#nav-account" role="tab" aria-controls="nav-account" aria-selected="false"><Link to='/sellerhub'>MY ACCOUNT</Link></a>
                      <a className="nav-item active " id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="true"><Link to='/profile'>SUBSCRIPTION</Link></a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-activeOrders" role="tabpanel" aria-labelledby="nav-activeOrders-tab">
                      <h1 className="text-center pt-3">Under Construction</h1>
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
        
      
    )
}

export default Profile

	
	
