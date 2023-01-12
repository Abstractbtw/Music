import React from 'react'
import './profile.css'
import { NavLink, useParams } from 'react-router-dom'


const Profile = () => {

  const params = useParams()
  const name = params.name

  return (
    <div className="product">
      {name}
    </div>
  )
}

export default Profile