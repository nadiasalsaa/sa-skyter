import React from 'react'
import Header from './Header'
import './asset/Feeds.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width:'40px',
        height: '40px',
        marginLeft: '10px',
        border: '2px solid #FFFFFF',
        filter: 'drop-shadow(-1px 1px 4px rgba(120, 130, 146, 0.5))',
      }
}));
function Notification() {

    const classes = useStyles();
    return (
        <div>
            <Header/>
            <Card className="card">
                <CardHeader 
                avatar={
                    <Avatar src="https://pbs.twimg.com/media/EwrIYDsVkAMiMkE?format=jpg&name=large" className="avap"/>
                }

                subheader={
                    <div>
                        <a className="nametif">Cierra Vega </a>
                        <a className="notify">likes your post. </a>
                        <a className="notify">1d </a>
                    </div>
                  }
               
                />
                <hr />
                <CardHeader 
                avatar={
                    <Avatar src="https://pbs.twimg.com/media/EtOtSFvWYAES9ib?format=jpg&name=large" className={classes.avatar}/>
                }

                subheader={
                    <div>
                        <a className="nametif">Alden Cantrell </a>
                        <a className="notify">commented on your post. </a>
                        <a className="notify">6d </a>
                    </div>
                  }
                />
                <hr />
                <CardHeader 
                avatar={
                    <Avatar src="https://pbs.twimg.com/media/Eq2-vQaUcAIPFWs?format=jpg&name=large" className="avap"/>
                }
                subheader={
                    <div>
                        <a className="nametif">Kierra Gentry </a>
                        <a className="notify">follows you. </a>
                        <a className="notify">7d </a>
                    </div>
                  }
                />
                <hr />
                <CardHeader 
                avatar={
                    <Avatar src="https://pbs.twimg.com/media/EoHuYeBVQAEVBYJ?format=jpg&name=medium" className={classes.avatar}/>
                }
                subheader={
                    <div>
                        <a className="nametif">Bradyn Kramer </a>
                        <a className="notify">commented on your post. </a>
                        <a className="notify">7d </a>
                    </div>
                  }
                />
            </Card>
            
        </div>
    )
}

export default Notification
