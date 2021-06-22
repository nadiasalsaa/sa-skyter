import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import logo from './asset/image/shazam.png';
import './asset/Feeds.css';
import FHome from './FHome'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 0.5,
  },


  // sectionMobile: {
  //   display: 'none',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'flex',
      
  //   },
  // },

    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    }
    
}));

export default function FProfile () {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
    <AppBar position="static" background-color="#6fcced" className="hd">
      <Toolbar>
          
        <img src={logo} alt="logo" className="logo" />
        <div className={classes.grow} />
        <div className="ban">
          
          <IconButton aria-label="show 17 new notifications" color="inherit" >
            <Badge badgeContent={17} color="secondary" className="notif">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/media/EeaVneQU8AAHgaW?format=jpg&name=medium" className="avap"/>

          
        </div>
        
      </Toolbar>
      
    </AppBar>
    <FHome/>
    
      
  </div>
  )
}
