import './requirelogin.css'
import {useState, useEffect } from "react"
import { useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom";
function RequireLogin() {

     const currentUser = useSelector((state) => state.session.user);
     const navigate = useNavigate();
  useEffect(()=>{

    if (currentUser) navigate(`/Cart/${currentUser.id}`);
  },[currentUser])

  return (
    <div className='require-login-page'>Almost there - log in to finish check out. don't have an account? sign up</div>
  )
}

export default RequireLogin