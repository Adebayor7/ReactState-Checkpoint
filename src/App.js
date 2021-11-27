import "./App.css";
import React, { Component } from "react";
import Profile from "./Components/Profile";
// import image from "./Assets/image.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Profile />
          {/* <image /> */}
        </div>
      </div>
    );
  }
}

export default App;
