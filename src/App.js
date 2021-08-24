import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer';
import SellerDashboard from './Pages/SellerDashboard/MyAccount';
import Profile from './Pages/SellerDashboard/Profile';

function App() {
  return (
    <Router>
    
      {
        <Switch>
         <Route path='/' exact component={SellerDashboard} />
         <Route path='/sellerhub' component={SellerDashboard} />
         <Route path='/profile' component={Profile} />
         </Switch>
      }
     
      {
         <Footer />
      }
    </Router>
  );
}

export default App;
