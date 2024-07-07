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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/> }>
        <Route index element={<Home />} />
          <Route path="searchpanel" element={<SearchPanel />} />
          <Route path="issuebook" element={<IssueBook />} />
          <Route path="contributepanel" element={<ContributePanel />} />
          <Route path="myshelf" element={<MyShelf />} />
          <Route path="support" element={<Support />} />
          <Route path="about" element={<About />} />
          <Route path="recommended" element={<Expand category='Recommended for You'/> } />
          <Route path="newarrivals" element={<Expand category='New Arrivals'/> } />
          <Route path="termsconditions" element={<TermsConditions />} />
        </Route>
        <Route path="loginpage" element={<Loginpage/> }>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
