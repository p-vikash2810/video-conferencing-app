import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import { Switch, Route } from "react-router-dom";
import Room from "./components/Room/Room";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/room" component={Room} />
      </Switch>
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
