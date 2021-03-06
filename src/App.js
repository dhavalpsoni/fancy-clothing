import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
//import { render } from "node-sass";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

// react-router-dom for router.  "Link" for redirect and re-render page from html.  <Link to="/topic">topic</Link>
// "History" to redirect from JS. props.history.push('/topic');
// "props.match.params" or "props.match.url"
//react router has three route params => history, match and location.
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: userAuth,
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInAndSignPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
