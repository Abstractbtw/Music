import {React, useState} from 'react'
import './newtrack.css'
import { NavLink, useNavigate } from "react-router-dom"
import { HexColorPicker } from "react-colorful"

import {addtrack} from "../../controller/controller"


function Newtrack() {

  const [trackName, setTrackName] = useState("")
  const [trackLyrics, setTrackLyrics] = useState("")
  const [trackUser, setTrackUser] = useState("")
  const [trackAlbum, setTrackAlbum] = useState("")
  const [trackFile, setTrackFile] = useState("")
  const [trackColor, setTrackColor] = useState("#aabbcc")

  const User = localStorage.getItem('name')
  const navigate = useNavigate()
  

  return (
    <div className="newtrack">

      <div className="nav_bg"/>

      <div style={{background: `linear-gradient(#094FB9 0%, black 250%)`}} className="newtrack_header">
        <div className="newtrack_title">Добавить аудио</div>
      </div>

      <div className="newtrack_container">

        <div className="newtrack_main_text">Название</div>
        <input onChange={(event) => (setTrackName(event.target.value))} value={trackName} type="text" className="newtrack_main_input" />

        <div className="newtrack_space" />

        <div className="newtrack_main_text">Альбом</div>
        <input onChange={(event) => (setTrackAlbum(event.target.value))} value={trackAlbum} type="text" className="newtrack_main_input" />

        <div className="newtrack_space" />

        <div className="newtrack_main_text">Текст песни</div>
        <textarea onChange={(event) => (setTrackLyrics(event.target.value))} value={trackLyrics} type="text" className="newtrack_main_input" style={{height: "500px"}} />

        <div className="newtrack_space" />

        <div className="newtrack_main_text">Ссылка на аудио</div>
        <input onChange={(event) => (setTrackFile(event.target.value))} value={trackFile} type="text" className="newtrack_main_input" />

        <div className="newtrack_space" />

        <div className="newtrack_main_text">Цвет фона</div>
        <HexColorPicker color={trackColor} onChange={setTrackColor} style={{width: "50%"}} />

        <div className="newtrack_space" />
        
        <button onClick={() => (addtrack(trackName, trackLyrics, User, trackAlbum, trackFile, trackColor), navigate("/"))}>Добавить</button>

      </div>

      <div className="newtrack_bottom" style={{background: `linear-gradient(black -250%, #094FB9 100%)`}}></div>
      
    </div>
  )
}

export default Newtrack