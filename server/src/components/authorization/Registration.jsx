import React, { useState, useEffect } from "react"
import "./auth.css"
import { NavLink, useNavigate } from "react-router-dom"

import {registration} from "../../controller/controller"


function Registration() {

  const [Username, setName] = useState("")
  const [Userpassword, setPassword] = useState("")
  const [Useremail, setEmail] = useState("")

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const [checkUser, setCheckUser] = useState(false)

  return (
    <div className="auth">
      <div className="auth_left">
        <div className="auth_top">
          <div className="auth_text">Регистрация</div>
        </div>
        <div className="auth_bottom">
          <div style={{height: "3px", backgroundColor: "lightgray", marginBottom: "30px"}} />
          <input onChange={(event) => (setEmail(event.target.value), setCheckUser(false))} value={Useremail} className="auth_input" type="text" placeholder="Email" />
          <input onChange={(event) => (setName(event.target.value))} value={Username} className="auth_input" type="text" placeholder="Имя" />
          <input onChange={(event) => (setPassword(event.target.value))} value={Userpassword} className="auth_input" type="password" placeholder="Пароль" />
          <div style={{display: "flex", justifyContent: "space-between", width: "70%", margin: "10px auto"}}>
            <div onClick={() => navigate(-1)} className="auth_btn_back">Назад</div>
            <div className="auth_btn_next" onClick={() => registration(Useremail, Username, Userpassword)}>Вход</div>
          </div>
        </div>
      </div>
      <div className="auth_right">
      </div>
    </div>
  )
}

export default Registration