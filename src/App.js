import bg from "./images/bg.png";
import "./App.css";
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import Quotes from "./components/Quotes";
import NewArrivals from "./components/NewArrivals";
import Recommended from "./components/Recommended";
import about from "./components/about";
function App() {
  
  return (
    <div
      className="container-fluid p-4"
      style={{
        backgroundImage: `url(${bg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="row h-100">
        <SideBar />
        <div
          className="col-12 text-centre rounded-end h-100 col-lg-9 py-4 scrollable-container" //note : iss line ka mtlb hai ki col-12 rhe jb size chota rhe (kyuki iss time sidebar gayab ho jaega aur aur jb wapas aa jayega lg breakpoint ke bad tb col-9 ho jaye)
          style={{
            height: "100vh",
            overflowY: "scroll",
            backgroundColor: "#F3F3F7",
          }}
        >
          <SearchBar />
          <div
            className="row  my-5 "
            style={{
              height: "20vh",
            }}
          >
            <Quotes/>
            <NewArrivals/>
          </div>
          <div
            className="row p-1  my-5 border"
            style={{
              height: "35vh",
            }}
          >
            <div className="container">
              <h3>Good Morning</h3>
              <div class="d-flex justify-content-between">
                <div>
                  <p>Reccomended for You</p>
                </div>
                <div className="fs-6 small">
                <p><a class="link-secondary link-underline small link-underline-opacity-0 link-opacity-100-hover" href="/">Show all</a></p>
                </div>
              </div>
              <Recommended/>
            </div>
          </div>
          <div
            className="row  my-5 border"
            style={{
              height: "30vh",
            }}
          ></div>
          <div
            className="row  my-5 border"
            style={{
              height: "30vh",
            }}
          >
            <about/>
          </div>
          <div
            className="row  my-5 border"
            style={{
              height: "30vh",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
