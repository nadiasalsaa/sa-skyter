import React,{useState} from 'react';
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
import Notification from './Pages/Notification';
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


function App () {
  // const [token, setToken] = useState();

  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
    
      
      return (
        <Router>
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route 
                path="/feeds"
                >
                  <Feeds />
              </Route>
              <Route path="/myprofile">
                  <MyProfile />
              </Route>
              <Route path="/fprofile">
                  <FProfile />
              </Route>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/notif">
                  <Notification />
              </Route>
          </Switch>
          </MuiThemeProvider>
        </Router>
      );
    }


export default App;
