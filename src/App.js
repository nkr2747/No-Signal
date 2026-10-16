import { API_URL } from "./config";
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
import ForgotPassword from "./components/ForgotPassword";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Expand from "./components/Expand";
import Alayout from "./admin/Alayout";
// import AaddNewStudent from "./admin/AaddNewStudent";
import AddBook from "./admin/AddBook";
import DashBoard from "./admin/DashBoard";
import AaddNewStudent from "./admin/AaddNewStudent";
import Logout from "./components/Logout";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { UserContext } from "./UserContext";
import { initialState, reducer } from "./reducer/UseReducer";
import PresentStatus from "./admin/PresentStatus";
import AdminReturnRequests from "./admin/ReturnReq";
import Loginpageadmin from "./admin/AdminLogin";
import AaddNewAdmin from "./admin/AddNewAdmin";
import Logoutadmin from "./admin/Logoutadmin";
import ContributionRequests from "./admin/ContributionRequests";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [authChecked, setAuthChecked] = useState(false);
  const startupLogout = useRef(null);

  useEffect(() => {
    if (!startupLogout.current) {
      startupLogout.current = Promise.allSettled([
        fetch(`https://no-signal.onrender.com/logout`, { credentials: "include" }),
        fetch(`https://no-signal.onrender.com/logoutadmin`, { credentials: "include" }),
      ]).finally(() => setAuthChecked(true));
    }
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch, authChecked }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="searchpanel" element={<SearchPanel />} />
            <Route path="issuebook/:id" element={<IssueBook />} />
            <Route path="contributepanel" element={<ContributePanel />} />
            <Route path="/myshelf" element={<MyShelf />}/>
            <Route path="support" element={<Support />} />
            <Route path="about" element={<About />} />
            <Route path="logout" element={<Logout />} />
            <Route
              path="recommended"
              element={<Expand category="Recommended for You" />}
            />
            <Route
              path="newarrivals"
              element={<Expand category="New Arrivals" />}
            />
            <Route path="termsconditions" element={<TermsConditions />} />
          </Route>
          <Route path="loginpage" element={<Loginpage />} />
          <Route path="loginpageadmin" element={<Loginpageadmin />} />
          <Route path="forgotpassword" element={<ForgotPassword role="student" />} />
          <Route path="forgotpasswordadmin" element={<ForgotPassword role="admin" />} />
          <Route path="registeradmin" element={<AaddNewAdmin />} />
          <Route path="/admin" element={<Alayout />}>
            <Route index element={<DashBoard />} />
            <Route path="addnewstudent" element={<AaddNewStudent />} />
            <Route path="addnewbook" element={<AddBook />} />
            
            <Route path="presentstatus" element={<PresentStatus />} />
            
            <Route path="presentstatuspage" element={<PresentStatus />} />
            <Route path="returnrequest" element={<AdminReturnRequests />} />
            <Route path="contributionrequests" element={<ContributionRequests />} />
            <Route path="logoutadmin" element={<Logoutadmin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
