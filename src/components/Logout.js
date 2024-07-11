import React,{useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await axios.get('/logout', null, {
            withCredentials: true, // Ensure cookies are sent with the request
          });
    
          //localStorage.removeItem('token');
          console.log("hi")
          navigate('/loginpage');
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };

    useEffect(()=>{
        handleLogout()
    })
  return (
    <div>
      
    </div>
  )
}
