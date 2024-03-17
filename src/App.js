import "./App.css";
import Left from "./pages/Left";
import Leftsecond from "./pages/Leftsecond";
import Profile from "./pages/Profile";
import Right from "./pages/Right";

function App() {
  return (
    <div className="App">
      <div className="row m-2">
        <div className="col-md-3 left-side">
          <Profile />
          <Left />
          <Leftsecond />
        </div>
        <div className="col-md-9">
          <Right />
        </div>
      </div>
    </div>
  );
}

export default App;
