import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function BookScroller(props) {
  const Heading=()=>{
    if(props.recommendation)
    {
      return(
        <>
        <p className='fs-5'>Recommended</p>
        </>
      )
    }
    else{
      return(
        <>
      <p className='fs-5'>{props.department}</p>
      </>
      )
    }
  }
    const [books,setBooks]=useState([])
    // const { department } = useParams();

    useEffect(() => {
      axios
        .get(`https://no-signal.vercel.app/booksdep/${props.department}`)
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the books!", error);
        });
    }, [props.department]);

    function myf(book) {
      return (
        <div
          className="d-inline-block justify mx-3  h-100"
          style={{
            width: "6rem",
          }}
        >
          <div
            className="card border border-0"
            style={{
              width: "6rem",
            }}
          > <Link to={`issuebook/${book._id}`}>
            <img
              src={book.image_url}
              className="card-img-top"
              alt="..."
              style={{
                height: "150px",
                objectFit: "cover",
              }}
            />
            </Link>
          </div>
        </div>
      );
    }
    return (
        <>
        <div className="d-flex justify-content-between">
                    <div>
                    {/* <p className='fs-5'>{props.department}</p> */}
                    <Heading/>
                    </div>

                    {/* <div className="fs-6 small">
                      <p>
                        <Link
                          className="link-secondary link-underline link-underline-opacity-0 small link-opacity-100-hover"
                          to="recommended"
                        >
                          Show all
                        </Link>
                      </p>
                    </div> */}
                  </div>
      <div className="col-12  px-0">
                <div className="overflow-x-auto  h-100 w-100  scrollable-container" >
                  <div
                    className=" text-center"
                    style={{
                      display: "inline-flex",
                      
                    }}
                  >
                    {books.map(myf)}
                  </div>
                </div>
              </div>
              </>
            
    )
}
BookScroller.defaultProps = {
  recommendation: false,
};

