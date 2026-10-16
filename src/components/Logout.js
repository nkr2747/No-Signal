import { API_URL } from "../config";
import React,{useEffect,useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Logout() {
  const {state,dispatch}=useContext(UserContext)
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await axios.get(`https://no-signal.onrender.com/logout`, {
            withCredentials: true, 
          });
    
          console.log("hi")
          dispatch({type:"USER",payload:false})
          navigate('/');
        } catch (error) {
          console.error('Error logging out:', error);
          dispatch({type:"USER",payload:false});
          navigate('/');
        }
      };

    useEffect(()=>{
        handleLogout()
    }, [])
  return (
    <div>
      
    </div>
  )
}
