import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './AlertDialogRegister.css';

export default function AlertDialogRegister() {
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
        Buat Akun Baru
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <ThemeProvider>
          <DialogTitle id="form-dialog-title">Daftar</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Daftar cepat dan mudah.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nama"
              type="text"
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
            <TextField
              
              margin="dense"
              id="email"
              label="Email"
              type="email"
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
            <TextField
              
              margin="dense"
              id="password1"
              label="Kata Sandi"
              type="password"
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
            <TextField
              
              margin="dense"
              id="password2"
              label="Konfirmasi Kata Sandi"
              type="password"
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="cancel-button" color="primary">
              Batal
            </button>
            <button onClick={handleClose} className="register-button" color="primary">
              Buat Akun Baru
            </button>
          </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}