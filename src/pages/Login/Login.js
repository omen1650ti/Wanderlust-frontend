import React, { useEffect } from 'react'
import '../signup/SignUp.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import travel_gif from '../../assets/gifs/world_gif.gif'
import Aos from 'aos'

const Login = () => {
    useEffect(()=>{
        Aos.init({duration:1100})
    },[])

  return (
    <div>
        <Mainlayout>
            <div className="signup__main">
                    <img src={travel_gif} alt="" className='signup_animation' />
                <div className="signup__form"data-aos="zoom-in"data-aos-delay="150">
                    <div className="su_form_container">
                        <p className='su__header' >Sign In</p>
                        <div className="data_input_su">
                        <label htmlFor="" className='su__username'>Email: </label>
                            <input className='input__su' placeholder='Email' type="text" />
                       
                    
                        
                        <label htmlFor=""className='su__username'data-aos="zoom-in"data-aos-delay="150">Password</label>
                            <input className='input__su' placeholder='Password' type="password" />

                            
                        </div>
                        <div className='login_buttons'>
                        <button className="about_btn InBtn"data-aos="zoom-in"data-aos-delay="150">SignIn</button>
                        <button className="about_btn regBtn"data-aos="zoom-in"data-aos-delay="150">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </Mainlayout>
    </div>
  )
}

export default Login