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
import FProfile from './Pages/FProfile ';
import Login from './Pages/login';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6fcced'
    }
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
    "fontSize": 12,
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightBold: '700',
    
  }
  });


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

    render() {
      return (
        <Router>
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/">
                  <Feeds />
              </Route>
              <Route path="/MyProfile">
                  <MyProfile />
              </Route>
              <Route path="/FProfile">
                  <FProfile />
              </Route>
              <Route path="/Login">
                  <Login />
              </Route>
            </Switch>
          </MuiThemeProvider>
        </Router>
      );
    }
}

export default App;
