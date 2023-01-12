import React, {useState, useEffect} from 'react'
import './track.css'
import { NavLink, useParams } from 'react-router-dom'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const {getTracks} = require("../../service/service")


const Track = () => {

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

  sessionStorage.setItem("color", track.color)

  const src = `https://docs.google.com/uc?id=${track.file}`
  

  return (
    <div className="track">

      <div className="track_part">
        <div style={{width: "30%", marginLeft: "20%", marginTop: "5%", marginBottom: "10%", fontSize: "17px", whiteSpace: "pre-wrap"}}>
          {track.lyrics}
        </div>
      </div>

      <div className="audiotrack">
        <audio style={{width: "50%"}}
          controls
          src={src}>
        </audio>
      </div>
      
      <div className="track_bottom" style={{background: `linear-gradient(black -250%, ${track.color} 100%)`}}></div>
    </div>
  )
}

export default Track