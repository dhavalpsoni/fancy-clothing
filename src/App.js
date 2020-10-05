import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

// react-router-dom for router.  "Link" for redirect and re-render page from html.  <Link to="/topic">topic</Link>
// "History" to redirect from JS. props.history.push('/topic');
// "props.match.params" or "props.match.url"
//react router has three route params => history, match and location.
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
