import React,{useEffect,useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function Logout() {
  const {state,dispatch}=useContext(UserContext)
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await axios.get('https://no-signal.onrender.com/logout', null, {
            withCredentials: true, // Ensure cookies are sent with the request
          });
    
          //localStorage.removeItem('token');
          console.log("hi")
          dispatch({type:"USER",payload:false})
          navigate('https://no-signal.onrender.com/loginpage');
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
