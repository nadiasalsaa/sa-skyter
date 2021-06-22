import {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Feeds from './Pages/Feeds';
import MyProfile from './Pages/MyProfile';
// import FProfile from './Pages/FProfile ';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

    render() {
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                  <Feeds />
              </Route>
              <Route path="/MyProfile">
                  <MyProfile />
              </Route>
              {/* <Route path="/FProfile">
                  <FProfile />
              </Route> */}
          </Switch>
          </div>
        </Router>
      );
    }
}

export default App;
