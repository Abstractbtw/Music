import React, {useState, useEffect} from 'react'
import './header.css'
import { NavLink, useParams } from 'react-router-dom'

const {getTracks} = require("../../service/service")


const Header = () => {

  const params = useParams()
  const tracklink = params.link
  const trackuser = params.user

  const [track, setTrack] = useState(false)

  useEffect(() => {
    getTracks().then((res) =>
      res.data.map(track => (
        (track.user === trackuser && track.link === tracklink ? (setTrack(track)):(""))
      ))
    )
  }, [])

  return (
    <div style={{background: `linear-gradient(${track.color} 0%, black 250%)`}} className="header">

      <div className="header_bg" style={{backgroundColor: track.color}}/>

      <div className="header-part">
        <div className="header-name">
          <div className="header-picture" />
          <div style={{marginLeft: "20px", marginTop: "70px"}}>
            <div style={{fontSize: "20px", cursor: "pointer"}}>{track.user}</div>
            <div style={{fontSize: "40px", cursor: "default"}}>{track.name}</div>
            {track.album ? (
              <div style={{fontSize: "20px", cursor: "pointer"}}>{track.album}</div>
            ):("")}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header