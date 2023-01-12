import React, {useState, useEffect} from 'react'
import './main.css'
import { NavLink, useNavigate } from "react-router-dom"

const {getTracks} = require("../../service/service")



function Main() {

  const [tracks, setTracks] = useState([])

  useEffect(() => {
    getTracks().then((res) => setTracks(res.data))
  }, [])

  const navigate = useNavigate()


  return (
    <div className="main">

      <div className="main_bg"/>

      <div className="main_middle">

      <div style={{fontSize: "80px"}}>Чарты</div>

      <table className="main_table">
        <tbody>

        {tracks.map((track, index) => (
              <tr key={index} className="main_tr" style={{fontSize: "25px"}} onClick={() => navigate(`/${track.user}/${track.link}`)}>
                <td style={{padding: "5px 20px"}}>{index + 1}</td>
                <td style={{padding: "5px 20px"}}><div className="main_picture" ></div></td>
                <td style={{padding: "5px 20px", overflow: "hidden"}}>{track.name}</td>
                <td style={{padding: "5px 20px", overflow: "hidden"}}>{track.user}</td>
              </tr>
          ))}

        </tbody>
      </table>

      <NavLink to="/addtrack"><button>Добавить</button></NavLink>

      </div>

      
    </div>
  )
}

export default Main