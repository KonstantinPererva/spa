import Profile from "./components/Profile/Profile";
import {BrowserRouter} from "react-router-dom";
import React from "react";

const App = (props) => {
  return (
      <BrowserRouter>
        <Profile state={props.state} addPost={props.addPost}/>
      </BrowserRouter>
  );
}

export default App;
