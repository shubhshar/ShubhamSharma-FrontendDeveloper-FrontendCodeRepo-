import "./landingPage.css"
import spaceCap from "../images/sp2.png"

const LandingPage=()=>{
  return(<>
  <div className="lanPg">
    <div className="lanPg-left">
      <div className="lanPg-left-wrapper">
        <div className="lanPg-intro"> Welcome to </div>
        <div className="lanPg-name"> Space X </div>
        <div className="lanPg-desc"><b>Space Exploration Technologies Corp.</b> is an American spacecraft manufacturer, 
        launcher, and a satellite communications corporation 
        headquartered in Hawthorne, California.</div>
      </div>
    </div>
    <div className="lanPg-right">
      <div className="lanPg-bg"></div>
      <img src={spaceCap} alt="" className="lanPg-img" />
    </div>
  </div>
  </>)
}

export default LandingPage