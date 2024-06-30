import NewArrivals from "./components/NewArrivals";
import Recommended from "./components/Recommended";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

document.body.style.overflow = "hidden";
function App() {
  return (
    <>
      <div className="container-fluid h-100 ">
        <div className="row">
          <SideBar/>
          <div
            className="col-12 col-lg-9 bg-primary-subtle py-4" //note : iss line ka mtlb hai ki col-12 rhe jb size chota rhe (kyuki iss time sidebar gayab ho jaega aur aur jb wapas aa jayega lg breakpoint ke bad tb col-9 ho jaye)
            style={{
              height: "100vh",
              overflowY: "scroll",
            }}
          >
            <SearchBar/>
            <NewArrivals/>
            <Recommended/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
