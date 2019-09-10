import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Wrapper from "./components/Wrapper";

import Search from "./pages/Search";
import Saved from "./pages/Saved";
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
