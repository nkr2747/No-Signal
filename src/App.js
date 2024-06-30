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
            className="col-9 bg-primary-subtle py-4"
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
