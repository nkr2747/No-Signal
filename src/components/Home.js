import React ,{useEffect,useState} from "react";
import Quotes from "./Quotes";
import NewArrivals from "./NewArrivals";
import axios from "axios";
// import { UserContext } from "../App";

import SearchBar from "./SearchBar";
import BookScroller from "./BookScroller"

export default function Home() {
  // const {state,dispatch} = useContext(UserContext)
  const [userData, setUserData] = useState(null);
  const [books, setBooks] = useState([]);
  const time= new Date()
  const hour=time.getHours()


  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      
      // console.log(data)
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
      
    } catch (err) {
      console.log(err);
    }
  };

useEffect(()=>{
callAboutPage()
},[])

  useEffect(() => {
    axios.get('http://localhost:3000/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);
  const Greet=()=>{
    if(hour<12)
    {
      return(
        <>
        
        <h3>Good Morning</h3>
        </>
      )
    }
    else if(hour<17)
      {
        return(
          <>
          <h3>Good Afternoon</h3>
          </>
        )
      }
      else{
        return(
          <>
          <h3>Good Evening</h3>
          </>
        )
      }
  }

  const State=()=>{
    if(userData){
      return (
        <SearchBar state={true} />
      )
    }
    else{
      return(
        <SearchBar state={false} />
      )
    }
  }

  const RenderRecommendation=()=>{
    console.log(userData)
    if(userData){

      return(
        <>        
         <BookScroller department={userData.branch} recommendation={true}/>
        </>
      )
    }
    else{
      return(
        <>
         
        </>
      )
    }
  }

  return (
    <>
            <State/>

            <div className="container-fluid " >
              <div
                className="row my-5 position-relative "
             
              >
                <Quotes />

                <NewArrivals />
              </div>

              <div
                className="row p-1 my-5 "
              >
                <div className="container" >
                  {/* <h3>{time}</h3> */}
                  <Greet/>
                  <RenderRecommendation/>
                </div>
              </div>

              <div
                className="row my-5 "
              >
                  <div className="container">
                  <BookScroller department="Computer Science"/>
                </div>
              </div>
              <div
                className="row my-5"
              >
                <div className="container">
                  <BookScroller  department="Electrical Engineering"/>
                </div>
              </div>
              <div className="row my-5 " >
              <div className="container">
                  <BookScroller  department="Mechanical Engineering"/>
                </div>
              </div>
              <div className="row my-5 " >
              <div className="container">
                  <BookScroller  department="Civil Engineering"/>
                </div>
              </div>
              <div className="row my-5 " >
              <div className="container">
                  <BookScroller  department="Chemical Engineering"/>
                </div>
              </div>
              <div className="row my-5 " >
              <div className="container">
                  <BookScroller  department="Engineering Physics"/>
                </div>
              </div>
            </div>
    </>
  );
}
