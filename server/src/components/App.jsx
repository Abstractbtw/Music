import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Registration from "./authorization/Registration"
import Login from "./authorization/Login"
import Header from "./header/Header"
import Main from "./main/Main"
import Navbar from "./navbar/Navbar"
import Track from "./track/Track"
import Profile from "./profile/Profile"
import Newtrack from "./newtrack/Newtrack"
import './app.css'

function App() {

  return (
    <BrowserRouter>
      <div className='container'>
      <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Main /> }/>
            <Route path="/:user" element={<><Header /><Profile /></>} />
            <Route path="/:user/:link" element={<><Header /><Track /></>} />
            <Route path="/addtrack" element={<Newtrack />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
