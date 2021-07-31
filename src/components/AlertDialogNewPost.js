import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ThemeProvider } from '@material-ui/styles';
import './AlertDialogNewPost.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function AlertDialogNewPost() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmit = () => {
  //   const [posts, id] = React.useState(true);
  //   const url = id ? `http://localhost:3030/posts/${id}` : "http://localhost:3030/posts"; 
  //   fetch(url, {
  //     method: id ? "PUT" : "POST",
  //     nody: JSON.stringify({
  //       posts: posts
  //     }),
  //   }).then(response => response.json())
  //   .then(json => console.log(json))
  // }
  return (
    <div>
      {/* <button className="akun-baru-button" variant="outlined" color="primary" onClick={handleClickOpen}>
        Buat Post Baru
      </button> */}
      <div className="card" onClick={handleClickOpen}>
        <CardHeader className="post"
            action={
              <IconButton aria-label="settings">
                <ArrowUpwardIcon />
              </IconButton>
            }
            
          subheader={
            <a className="time">What's on you mind, Peter?</a>
          }
          
            />
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <ThemeProvider>
          <p id="form-dialog-title" className="form-dialog-title">Buat Post Baru</p>
          <DialogContent>
            <TextField
              margin="dense"
              id="status"
              label=""
              variant="outlined"
              placeholder="Apa yang ada dalam pikiranmu, Amri?"
              type="textarea"
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`, width: 320}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
              multiline
              rows={4}
              
            />
            <input type="file" id="img" name="img" accept="image/*" />
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="cancel-button" color="primary">
              Batal
            </button>
            <button  className="post-button" color="primary">
              Post
            </button>
          </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}
