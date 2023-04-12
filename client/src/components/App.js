// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import { ParallaxProvider } from 'react-scroll-parallax';
import { GlobalStyles } from "./GlobalStyles";
import Layout from "./Layout";
import About from "./About";
import Contact from "./Contact";
import IndividualSport from "./IndividualSport";
import Callback from "./Callback";
import Settings from "./Settings";


//
//  ParallaxProvider for use of the parallax npm
//

function App() {

  return (

  <ParallaxProvider>
    <Router>
      <GlobalStyles/>
      <Layout/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sports/:sportKey/odds" element={<IndividualSport/>} />
        <Route path="/callback" element={<Callback/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </Router>
  </ParallaxProvider>
  );
}

export default App;
