import React, { useState, useEffect } from "react"
import "./auth.css"
import { NavLink, useNavigate } from "react-router-dom"

import {login} from "../../controller/controller"

function Login() {

  const [Loginemail, setEmail] = useState("")
  const [Userpassword, setPassword] = useState("")

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const [checkUser, setCheckUser] = useState(false)

  return (
    <div className="auth">
      <div className="auth_left">
        <div className="auth_top">
          <div className="auth_text">Авторизация</div>
        </div>
        <div className="auth_bottom">
          <div style={{height: "3px", backgroundColor: "lightgray", marginBottom: "30px"}} />
          <input onChange={(event) => (setEmail(event.target.value), setCheckUser(false))} value={Loginemail} className="auth_input" type="text" placeholder="Email" />
          <input onChange={(event) => (setPassword(event.target.value))} value={Userpassword} className="auth_input" type="password" placeholder="Пароль" />
          <div style={{display: "flex", justifyContent: "space-between", width: "70%", margin: "10px auto"}}>
            <div onClick={() => navigate(-1)} className="auth_btn_back">Назад</div>
            <div className="auth_btn_next" onClick={() => (login(Loginemail, Userpassword), navigate("/"), document.location.reload())}>Вход</div>
          </div>
          <div style={{marginTop: "50px", textAlign: "center"}}>Нет аккаунта? <NavLink className="blue_text" to="/registration">Регистрация</NavLink></div>
        </div>
      </div>
      <div className="auth_right">
      </div>
    </div>
  )
}

export default Login