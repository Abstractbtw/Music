import axios from 'axios'

export const getTracks = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/tracks`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

export const getTrack = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/gettrack`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

export const saveData = (name, email) => {
  localStorage.setItem('name', name)
  localStorage.setItem('email', email)
}     