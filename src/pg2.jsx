import "./App.css";
import React from "react";
import Compose from "./assets/components/composebutton";
import Footer from "./assets/components/footer";
import Navbar from "./assets/components/navigationbar";
import Showitem from "./assets/components/listdisplay";

function Pg2(){
  return (
    <div className="App">
      <Navbar />
      <Showitem state="outward"/>
      <Compose />
      <Footer />      
    </div>
  );
}

export default Pg2;