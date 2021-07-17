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
  const [data_register, setDataRegister] = React.useState({
    nama: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeDataRegister = (event) => {
    const { value, id } = event.target;
    setDataRegister({...data_register, [id]:value});
  }

  const submitRegister = () => {
    alert("nama: " + data_register.nama + ", email: " + data_register.email + ", password: " + data_register.password1 + ", konfirmasi password: " + data_register.password2);
  }

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
              id="nama"
              label="Nama"
              type="text"
              onChange={handleChangeDataRegister}
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
            <TextField
              
              margin="dense"
              id="email"
              label="Email"
              type="email"
              onChange={handleChangeDataRegister}
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
            <TextField
              
              margin="dense"
              id="password1"
              label="Kata Sandi"
              type="password"
              onChange={handleChangeDataRegister}
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
            <TextField
              
              margin="dense"
              id="password2"
              label="Konfirmasi Kata Sandi"
              type="password"
              onChange={handleChangeDataRegister}
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="cancel-button" color="primary">
              Batal
            </button>
            <button onClick={() => submitRegister()} className="register-button" color="primary">
              Buat Akun Baru
            </button>
          </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}