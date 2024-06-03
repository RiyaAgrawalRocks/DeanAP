import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Pg1 from "./pg1";
import Pg2 from "./pg2";
import NewEntry from "./assets/components/newEntry";
import EditEntry from "./assets/components/editentry";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pg1/>}/>
        <Route path="/:id" element={<EditEntry/>} />
        <Route path="/outward" element={<Pg2/>}/>
        <Route path="/new" element={<NewEntry/>}/>
        {/* <Route path="/edit" element={<EditEntry />}/> */}
      </Routes>
    </BrowserRouter>
  );
}