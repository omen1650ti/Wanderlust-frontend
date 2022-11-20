import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import { Button } from '@mui/material'
import DisplayCards from './DisplayCards'
import CustomTitle from '../../utils/CustomTitle'
import axios from 'axios'
import baseUrl from '../../utils/Urls'
const Dashboard = () => {
  const[curr_username,setCurr_username]=useState('')
  useEffect(()=>{
    axios.get(`${baseUrl}/current-user/`).then((response)=>{
      console.log(response)
    },(error)=>{
      console.log(error)
    })
  },[])
  
  return (
    <div>
      <CustomTitle title="Dashboard"/>
      <Mainlayout>
        <div className="dash__main_container">
        <div className="booking__main">
          <div className="booked__header_container">
            <div className="booked__title">My Bookings</div>
            <div className="booked_tabs">
              <span className="booked_places">Places</span>
              <span className="booked_stays">Stays</span>
              <span className="booked_travels">Travels</span>
            </div>
          </div>
          <div className='booked_container'>
          <DisplayCards/>
          <DisplayCards/>
          <DisplayCards/>
          <DisplayCards/>
          <DisplayCards/>
          <DisplayCards/>
          <DisplayCards/>
          
          </div>
          <Button variant="contained" sx={{ width: 200, backgroundColor:"#2B4865" }}>New Travel</Button>
        </div>
        <div className="profile__box">
         <img src="https://avatars.githubusercontent.com/u/43471295?v=4" className='user_profile__image' alt="profile_icon" />
         <p className='full__name'>Achyuth Mohan</p>
         <p className='user__name'>achyut</p>
         <p className='contact__number'>1234567890</p>
         <p className='user__email'>achyuthmohan1@gmail.com</p>
        </div>
        </div>
        
      </Mainlayout>

    </div>
  )
}

export default Dashboard