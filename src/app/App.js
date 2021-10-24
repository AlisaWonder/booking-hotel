import NavBar from "../components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "../components/login";
import Registration from "../components/registration";
import Hotels from "../components/hotels";

function App() {
  return (
    <>
      <NavBar />
      <h1>Давай бронировать отель</h1>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/" component={Hotels} />
      </Switch>
    </>
  );
}

export default App;
