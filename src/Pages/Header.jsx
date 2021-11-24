import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import logo from './asset/image/shazam.png';
import { Link } from "react-router-dom";
import './asset/Feeds.css';

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

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static" background-color="#6fcced" className="hd">
                <Toolbar>
                    
                <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
                <div className={classes.grow} />
                <div className="ban">
                    
                    <IconButton aria-label="show 17 new notifications" color="inherit" >
                    <Badge badgeContent={17} color="secondary" className="notif">
                    <Link to="/Notif"><NotificationsIcon /></Link>
                    </Badge>
                    </IconButton>
                    <Link to="/MyProfile"><Avatar alt="Remy Sharp" src="https://pbs.twimg.com/media/EeaVneQU8AAHgaW?format=jpg&name=medium" className="avap"/></Link>

                    
                </div>
                {/* <div className={classes.sectionMobile}>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </div> */}
                </Toolbar>
                
            </AppBar>
            
        </div>
    )
}
