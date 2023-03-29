import "./landingPage.css";
import spaceCap from "../images/sp2.png";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import LoginPage from "../loginPage/loginPage";

const LandingPage = () => {
  return (
    <>
      <div className="lanPg">
        <div className="lanPg-left">
          <div className="lanPg-left-wrapper">
            <div className="lanPg-intro"> Welcome to </div>
            <div className="lanPg-name"> Space X </div>
            <div className="lanPg-desc">
              
                <Router>
              
                <Link to ="/">Space Exploration Technologies Corp.</Link>is an American
              spacecraft manufacturer, launcher, and a satellite communications
              corporation headquartered in Hawthorne, California.
              <button><Link to="/login">
                Login
              </Link></button>
              <Routes>
                
                <Route path="/login" element={<LoginPage/>}/>
              </Routes>
            </Router>
            </div>
          </div>
        </div>
        <div className="lanPg-right">
          <div className="lanPg-bg"></div>
          <img src={spaceCap} alt="" className="lanPg-img" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
