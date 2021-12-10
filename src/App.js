import Splash from "./page/Splash/Splash";
import SignUp from "./page/SignUp/SignUp";
import "./index.css";
import { initializeApp } from "firebase/app";
import "./firebase/index";
import Home from "./page/Home/Home";

// Set the configuration for your app

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Home />
    </div>
  );
}

export default App;
