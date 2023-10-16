import React from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Menu from "./components/Menu";
import Location from "./components/Location";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
   
      
        
       
        <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/Location" element={<Location />} />
          
        </Routes>
      
      </div>
      <Body />
      
    </Router>
     
   
   
</>
  );
}

export default App;
