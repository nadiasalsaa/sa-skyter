import React from 'react';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import './asset/Feeds.css'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Badge from '@material-ui/core/Badge';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import sl2 from './asset/image/sl2.jpg';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import AlertDialogNewPost from '../components/AlertDialogNewPost';
import AlertDialogEditProfile from '../components/AlertDialogEditProfile';
import AlertLike from '../components/AlertLike';



const useStyles = makeStyles((theme) => ({
  
 
  like:{
    marginLeft:'auto',
  },
  comment:{
    marginRight: '0px',
  },
  share:{
    marginRight: '10px',
  },
  avatar: {
    width:'50px',
    height: '50px',
    border: '2px solid #FFFFFF',
    filter: 'drop-shadow(-1px 1px 4px rgba(120, 130, 146, 0.5))',
  },
  ava: {
    width:'50px',
    height: '50px',
    border: '2px solid #FFFFFF',
    filter: 'drop-shadow(-1px 1px 4px rgba(120, 130, 146, 0.5))',
    marginLeft: '10px',
  },
  
  margin: {
    margin: theme.spacing(1),
    display: 'flex',
  },
  
  com: {
    borderRadius: 10,
    position: 'relative',
    color: '#000000',
    backgroundColor: '#F1F2F6',
    border: '1px solid #F1F2F6',
    fontSize: 12,
    width: '485px',
    height: '30px',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins', 
      'sans-serif',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade('#F1F2F6', 0.25)} 0 0 0 0.2rem`,
      borderColor: '#F1F2F6',
    },
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 10,
    position: 'relative',
    color: '#000000',
    backgroundColor: '#F1F2F6',
    border: '1px solid #F1F2F6',
    fontSize: 12,
    width: '485px',
    height: '30px',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins', 
      'sans-serif',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade('#F1F2F6', 0.25)} 0 0 0 0.2rem`,
      borderColor: '#F1F2F6',
    },
  },
}))(InputBase);


const options = [
  'Ubah Komentar',
  'Hapus Komentar',
]
const myprofiles = [
  'Edit Post',
  'Delete Post',
]
const MyHome = (props) => {
    
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

  

  let link = useHistory();
  const friend = () => {
    link.push('/fprofile')
  }
  let go = useHistory();
  const me = () => {
    go.push('/myprofile')
  }

  return (
    <div>
          {/* <Container className="mypro"> */}
              {/* <Avatar aria-label="ava" className="myprofile" src="https://i.pinimg.com/474x/9e/78/31/9e78311e090612ccc81c766a6b92773f.jpg"></Avatar>
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
              </div> */}
              {/* <div className={classes.margin}>
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
          </Container> */}
          
          
          
          <Card className="card">
                <CardHeader
                avatar={
                    <Avatar 
                        onClick={friend} 
                        aria-label="ava" 
                        className="pp" 
                        src={props.author_avatar}>
                    </Avatar>
                }
                
                title={
                    <a className="title">{props.author_name}</a>
                }
                
                
                subheader={
                    <a className="time">{props.created_time}</a>
                }
                />
                <CardContent className="txt">
                    <a className="pub" >
                    {props.content_text}
                    </a>
                </CardContent>
                <CardMedia
                    className="media"
                    image={props.content_image}
                />
                <CardActions disableSpacing>
                    <IconButton 
                    className="fav" 
                    aria-label="fav"
                    >
                    <AlertLike/>
                    </IconButton>
                    <IconButton 
                        className="comment" 
                        aria-label="comment"
                    >
                        <Badge badgeContent={props.comments_count}>
                        <MessageIcon />
                        </Badge>
                    </IconButton>
                    
                    <IconButton 
                        className="Share" 
                        aria-label="Share"
                    >
                        <Badge badgeContent={props.shares_count}>
                        <ShareIcon />
                        </Badge>
                    </IconButton>

                </CardActions>
                {props.comments.map((com) =>
                
                <div className="comm">
                    <Avatar 
                        aria-label="ava" 
                        onClick={friend} 
                        className="profile" 
                        src={com.comment_avatar}></Avatar>
                    <div className="ccard">
                        <p className="coname">
                            {com.comment_name} 
                        </p>
                        <p className="cpost">{com.comment}</p>
                    </div>
                    <IconButton
                        aria-label="more"
                        // aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        >
                        <MoreHorizIcon/>
                    </IconButton>

                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                        }}
                    >
                        {options.map((option) => (
                        <MenuItem key={option}  onClick={handleClose}>
                            {option}
                        </MenuItem>
                        ))}
                    </Menu>

                </div>
                )}
                    <FormControl className={classes.margin}>
                    <CardHeader className="commen"
                    avatar={
                        
                        <Avatar 
                          aria-label="ava" 
                          src="https://i.pinimg.com/474x/9e/78/31/9e78311e090612ccc81c766a6b92773f.jpg"
                          onClick={me} 
                        ></Avatar>
                    }
                    subheader={
                        <BootstrapInput placeholder="Tulis komentar kamu.."  id="bootstrap-input" className="ip" />
                    }
                    
                    />
                    </FormControl>
                  
      </Card>
    </div>

  );
}


export default MyHome
