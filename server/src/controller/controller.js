import axios from 'axios'
import { saveData } from '../service/service'
const bcrypt = require("bcryptjs")

export const registration = async (email, name, password) => {
  try{
    const hashPassword = await bcrypt.hash(password, 4)
    const telegram = "123"
    await axios.post(`${process.env.REACT_APP_API_URL}/api/registration`, {email, name, password, hashPassword, telegram})
  } catch (e) {
    console.log(e)
  }
}


export const login = async (email, password) => {
  try{
    console.log(email)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {email, password})
    saveData(response.data.name, response.data.email)
  } catch (e) {
    console.log(e)
  } 
}



export const addtrack = async (name, lyrics, user, album, trackfile, color) => {
  try{
    const cropfile = trackfile.slice(32)
    const file = cropfile.split('/')[0]

    var ru=("А-а-Б-б-В-в-Г-г-Д-д-Е-е-Ё-ё-Ж-ж-З-з-И-и-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я").split("-")   
    var en=("A-a-B-b-V-v-G-g-D-d-E-e-E-e-Zh-zh-Z-z-I-i-I-i-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-Ts-ts-Ch-ch-Sh-sh-Sch-sch-'-'-Y-y-'-'-E-e-Yu-yu-Ya-ya").split("-")   
 	  var str = ''
    var re = / /g

    for(var i=0, l=name.length; i<l; i++)
    { 
      var s = name.charAt(i), n = ru.indexOf(s); 
      if(n >= 0) { str += en[n]; } 
      else { str += s; } 
    } 

    var link = str.replace(re, '-');

    console.log(link)

    await axios.post(`${process.env.REACT_APP_API_URL}/api/addtrack`, {name, user, lyrics, album, link, file, color})
  } catch (e) {
    console.log(e)
  }
}