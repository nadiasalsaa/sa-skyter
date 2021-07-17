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
  const [data_profil, setDataProfil] = React.useState({
    img: "",
    nama: "",
    deskripsi: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeDataProfil = (event) => {
    const { value, id } = event.target;
    setDataProfil({...data_profil, [id]:value});
  }

  const submitProfil = () => {
    alert("image: " + data_profil.img + ", nama: " + data_profil.nama + ", deskripsi: " + data_profil.deskripsi);
  }

  return (
    <div>
      <button className="edit-profil-button" variant="contained" color="primary" onClick={handleClickOpen}>
        Edit Profile
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <ThemeProvider>
          <p id="form-dialog-title" className="form-dialog-title">Ubah Profil</p>
          <DialogContent>
          <input type="file" id="img" name="img" accept="image/*" value="" onChange={handleChangeDataProfil}/>
          <TextField
              margin="dense"
              id="nama"
              label=""
              variant="outlined"
              placeholder="Nama"
              type="textarea"
              onChange={handleChangeDataProfil}
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`, width: 150}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
            <TextField
              margin="dense"
              id="deskripsi"
              label=""
              variant="outlined"
              placeholder="Deskripsi"
              type="textarea"
              onChange={handleChangeDataProfil}
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
            <button onClick={() => submitProfil()} className="post-button" color="primary">
              Ubah Profil
            </button>
          </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}