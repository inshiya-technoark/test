import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer';
import SellerDashboard from './Pages/SellerDashboard/MyAccount';
import Profile from './Pages/SellerDashboard/Profile';
import Payments from './Pages/Payments';
import Overview from './Pages/Overview';
import Messages from './Pages/Messages';
import Orders from './Pages/Orders';
import Quotes from './Pages/Quotes';

function App() {
  return (
    <Router>
      
     { <Switch>
         <Route path='/' exact component={SellerDashboard} />
         <Route path='/sellerhub' exact component={SellerDashboard} />
         <Route path='/profile' component={Profile} />
         <Route path='/payments' component={Payments} />
         <Route path='/overview' component={Overview} />
         <Route path='/messages' component={Messages} />
         <Route path='/order' component={Orders} />
         <Route path='/quotes' component={Quotes} />
       </Switch> 
    }
      {
         <Footer />
      }
    </Router>
  );
}

export default App;
