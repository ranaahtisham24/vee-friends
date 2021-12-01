
import './App.css';
import React from 'react'
// import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import { Fragment } from 'react';
// import './style/style.css'


function App() {
  function scriptLoaded() {
    // window.A.sort();
  }
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => scriptLoaded();

  }, [])

  return (
    <Fragment >
      <Router >
        <Routes/>
      </Router>  
    </Fragment>
  )
}

export default App;
