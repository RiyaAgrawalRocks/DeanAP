import "./App.css";
import React from "react";
import Compose from "./assets/components/composebutton";
import Footer from "./assets/components/footer";
import Navbar from "./assets/components/navigationbar";
import Showitem from "./assets/components/listdisplay";

function Pg1(){
  return (
    <div className="App">
      <Navbar />
      <Showitem state="inward"/>
      <Compose />
      <Footer />      
    </div>
  );
}

export default Pg1;
