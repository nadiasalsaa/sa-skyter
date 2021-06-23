import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ThemeProvider } from '@material-ui/styles';
import './AlertDialogNewPost.css';

export default function AlertDialogNewPost() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="akun-baru-button" variant="outlined" color="primary" onClick={handleClickOpen}>
        Buat Post Baru
      </button>
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
            <button onClick={handleClose} className="post-button" color="primary">
              Post
            </button>
          </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}