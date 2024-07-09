import React ,{useEffect,useState} from "react";
import Quotes from "./Quotes";
import NewArrivals from "./NewArrivals";
import axios from "axios";

import SearchBar from "./SearchBar";
import BookScroller from "./BookScroller"

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  return (
    <>
            <SearchBar />

            <div className="container-fluid border" >
              <div
                className="row my-5 position-relative "
             
              >
                <Quotes />

                <NewArrivals />
              </div>

              <div
                className="row p-1 my-5 border"
              >
                <div className="container" >
                  <h3>Good Morning</h3>
                  <BookScroller title="Reccomended for You" book={books}/>
                </div>
              </div>

              <div
                className="row my-5 border"
              >
                  <div className="container">
                  <BookScroller title='Computer Science' book={books}/>
                </div>
              </div>
              <div
                className="row my-5 border"
                style={{
                  height: "30vh",
                }}
              ></div>
              <div className="row my-5 border" style={{ height: "30vh" }}></div>
            </div>
    </>
  );
}
