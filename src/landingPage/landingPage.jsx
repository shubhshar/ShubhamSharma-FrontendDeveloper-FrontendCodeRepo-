import "./landingPage.css";
import spaceCap from "../images/sp2.png";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="lanPg">
        <div className="lanPg-left">
          <div className="lanPg-left-wrapper">
            <div className="lanPg-intro"> Welcome to </div>
            <div className="lanPg-name"> Space X </div>
            <div className="lanPg-desc">
              Space Exploration Technologies Corp. is an American spacecraft
              manufacturer, launcher, and a satellite communications corporation
              headquartered in Hawthorne, California.
            </div>
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>Login</button>
            )}
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
