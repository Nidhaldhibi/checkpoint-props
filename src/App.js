import React from "react";
import "./App.css";
import Profile from "./component/Profile/Profile.jsx";
import Photo from "./nidhal.jpg";

function App() {
  const handleName = (fullName) => alert(fullName);

  return (
    <>
      <div
        className="App"
        style={{ height: 600, fontFamily: "sans-serif", margin: 25 }}
      >
        <Profile
          fullName="DHIBI Nidhal"
          bio="Web developer.part of a Team Hackerspace Gafsa "
          profession=" JavaScript Full Stack Developer"
          handleName={handleName}
        >
          <img src={Photo} alt="nidhal.jpg"></img>
        </Profile>
      </div>
    </>
  );
}

export default App;
