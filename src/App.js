import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer';


function App() {
  return (
    <Router>
      
     
      {
         <Footer />
      }
    </Router>
  );
}

export default App;
