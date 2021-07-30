import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { CardHeader, Avatar, Container } from '@material-ui/core';
import AlertDialogEditProfile from '../components/AlertDialogEditProfile';
import { useHistory } from 'react-router-dom';
import AlertDialogNewPost from '../components/AlertDialogNewPost';

const useStyles = makeStyles((theme) => ({ 
    margin: {
        margin: theme.spacing(1),
        display: 'flex',
      },
}))
export default function MyHeader() {
    const classes = useStyles();
    let history = useHistory();
    const redirect = () => {
        history.push('/')
    }
    return (
        <div>
            <Container className="mypro">
                <Avatar aria-label="ava" className="myprofile" src="https://i.pinimg.com/474x/9e/78/31/9e78311e090612ccc81c766a6b92773f.jpg"></Avatar>
                <div>
                    <CardHeader 
                        title={
                            <a className="myname">Peter Parker</a>
                        }
                        action={
                        <div>
                            <AlertDialogEditProfile/>        
                            <button 
                                variant="contained" 
                                className="btn-logout" 
                                onClick={redirect}
                            > Logout </button>
                        </div>
                        }
                    ></CardHeader>
                    <div className={classes.margin}>
                        <a className="posts" >
                            364 
                            <a className="fthin">posts</a>
                        </a>
                        <a className="followers" >
                            16K 
                            <a className="fthin">followers</a>
                        </a>
                        <a className="following" >
                            16
                            <a className="fthin">following</a>
                        </a>
                    </div>
                    <a className="bio" >
                        Kadang mengganggu jika digigit
                    </a>
                    </div>
                
            </Container>
            <AlertDialogNewPost/>
        </div>
    )
}
