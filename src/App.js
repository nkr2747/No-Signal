import "./App.css";
import MyShelf from "./components/MyShelf";
import ContributePanel from "./components/ContributePanel";
import Home from "./components/Home";
import SearchPanel from "./components/SearchPanel";
import Support from "./components/Support";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsConditions from "./components/TermsConditions";
import IssueBook from "./components/IssueBook";
import Layout from "./components/Layout";
import Loginpage from "./components/Loginpage";
import About from "./components/About"
import Expand from "./components/Expand";
import Alayout from "./admin/Alayout";
// import AaddNewStudent from "./admin/AaddNewStudent";
import AddBook from './admin/AddBook'
import DashBoard from "./admin/DashBoard";
import AaddNewStudent from "./admin/AaddNewStudent";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/> }>
        <Route index element={<Home />} />
          <Route path="searchpanel" element={<SearchPanel />} />
          <Route path="issuebook/:id" element={<IssueBook />} />
          <Route path="contributepanel" element={<ContributePanel />} />
          <Route
          path="/myshelf"
          element={
            // <ProtectedRoute>
              <MyShelf />
            // </ProtectedRoute>
          }
        />
          <Route path="support" element={<Support />} />
          <Route path="about" element={<About />} />
          <Route path="logout" element={<Logout />} />
          <Route path="recommended" element={<Expand category='Recommended for You'/> } />
          <Route path="newarrivals" element={<Expand category='New Arrivals'/> } />
          <Route path="termsconditions" element={<TermsConditions />} />
        </Route>
        <Route path="loginpage" element={<Loginpage/> }/>        
        <Route path="/admin" element={<Alayout/> }>
        <Route index element={<DashBoard />} />
        <Route path="addnewstudent" element={<AaddNewStudent/>} />
        <Route path="addnewbook" element={<AddBook />} />
        </Route>        
          
      </Routes>
    </Router>
  );
}

export default App;
