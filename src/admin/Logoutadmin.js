import { API_URL } from "../config";
import React,{useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Logoutadmin() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await axios.get(`${API_URL}/logoutadmin`, {
            withCredentials: true, 
          });
    
          console.log("hi")
          navigate('/');
        } catch (error) {
          console.error('Error logging out:', error);
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
