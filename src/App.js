import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from "./landingPage/landingPage";
import HomeP from "./homePage/homeP";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">{isAuthenticated ? <HomeP /> : <LandingPage />}</div>
  );
}

export default App;
