import bg from "./images/bg.png";
import "./App.css";
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import MyShelf from "./components/MyShelf";
// import ContibutePanel from "./components/ContibutePanel";
// import Home from "./components/Home";
// import SearchPanel from "./components/SearchPanel";


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
          {/* <Home/> */}
          {/* <SearchPanel/> */}
          {/* <ContibutePanel/> */}
          <MyShelf/>
        </div>
      </div>
    </div>
  );
}

export default App;
