import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ThemeProvider } from '@material-ui/styles';
import './AlertDialogEditProfile.css';

export default function AlertDialogEditProfile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="akun-baru-button" variant="contained" color="primary" onClick={handleClickOpen}>
        Edit Profile
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <ThemeProvider>
          <p id="form-dialog-title" className="form-dialog-title">Ubah Profil</p>
          <DialogContent>
          <input type="file" id="img" name="img" accept="image/*" value=""/>
          <TextField
              margin="dense"
              id="status"
              label=""
              variant="outlined"
              value="Andika Amri"
              type="textarea"
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`, width: 150}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
            <TextField
              margin="dense"
              id="status"
              label=""
              variant="outlined"
              placeholder="Deskripsi"
              type="textarea"
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`, width: 320}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
              multiline
              rows={4}
            />
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="cancel-button" color="primary">
              Batal
            </button>
            <button onClick={handleClose} className="post-button" color="primary">
              Ubah Profil
            </button>
          </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}