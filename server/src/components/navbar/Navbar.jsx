import React, {useState, useEffect} from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  const User = localStorage.getItem('name')

  function Exit () {
    localStorage.setItem('name', "")
    localStorage.setItem('email', "")
    document.location.reload()
  }

  return (
    <div id="navbar" className="navbar" style={{background: `transparent`}}>
      <div style={{left: "0px", marginTop: "auto", marginBottom: "auto", width:"500px"}}>
        Поиск
      </div>
      <div style={{margin: "auto", fontSize: "18px"}}>
        <NavLink to="./login" className="navbar-middle">Популярное</NavLink>
        |
        <NavLink to="./login" className="navbar-middle">Подписки</NavLink>
        |
        <NavLink to="./login" className="navbar-middle">Избранное</NavLink>
      </div>
      <div style={{right: "0px", marginTop: "auto", marginBottom: "auto", width:"500px", textAlign:"right"}}>
        Аккаунт
        {User ? (
          <div style={{display: "inline", paddingLeft: "20px", fontSize: "20px"}}>
            {User}
            <div style={{display: "inline", paddingLeft: "20px", fontSize: "13px", cursor: "pointer"}} onClick={Exit}>Выход</div>
          </div>
        ):(
          <div style={{display: "inline"}}>
            <NavLink to="./login" className="navbar-middle">Вход</NavLink>
            |
            <NavLink to="./registration" className="navbar-middle">Регистрация</NavLink>
          </div>
        )}
        
        
      </div>
    </div>
  )
}

export default Navbar