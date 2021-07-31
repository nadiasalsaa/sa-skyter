import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import logo from './asset/image/shazam.png';
import './asset/header.css';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';

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
        <div>
            <div className="header">
                <div>
                <Link to="/feeds">
                    <img src={logo} alt="logo" className="logo" />
                 </Link> 
                </div>
                
                <div className="ban">
                    
                    <IconButton aria-label="show 4 new notifications" color="inherit" >
                    <Link to="/notif" >
                        <Badge badgeContent={4} color="secondary" className="notif">
                            <NotificationsIcon />
                        </Badge>
                    </Link>
                    </IconButton>
                    <Link to="/myprofile">
                        <Avatar alt="Remy Sharp" src="https://i.pinimg.com/474x/9e/78/31/9e78311e090612ccc81c766a6b92773f.jpg" className="avatar"/>
                    </Link>

                    
                </div>
                
            </div>
            {/* <AppBar position="static" background-color="#6fcced" className="hd">
                <Toolbar>
                 <Link to="/feeds">
                    <img src={logo} alt="logo" className="logo" />
                 </Link>   
                <div className={classes.grow} />
                <div className="ban">
                    
                    <IconButton aria-label="show 4 new notifications" color="inherit" >
                    <Link to="/notif" >
                        <Badge badgeContent={4} color="secondary" className="notif">
                            <NotificationsIcon />
                        </Badge>
                    </Link>
                    </IconButton>
                    <Link to="/myprofile">
                        <Avatar alt="Remy Sharp" src="https://i.pinimg.com/474x/9e/78/31/9e78311e090612ccc81c766a6b92773f.jpg" className="avap"/>
                    </Link>

                    
                </div>
                
                </Toolbar>
                
            </AppBar> */}
            
        </div>
    )
}