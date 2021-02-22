import Profile from "./components/Profile/Profile";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
  );
}

export default App;
