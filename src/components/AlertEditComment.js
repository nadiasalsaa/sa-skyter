import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ThemeProvider } from '@material-ui/styles';
import './AlertEditComment.css';

export default function AlertDialogEditProfile() {
  const [open, setOpen] = React.useState(false);
  const [data_komentar, setDataKomentar] = React.useState({
    komentar: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeDataKomentar = (event) => {
    const { value, id } = event.target;
    setDataKomentar({...data_komentar, [id]:value});
  }

  const submitKomentar = () => {
    alert("komentar: " + data_komentar.komentar);
  }

  return (
    <div>
      <button className="edit-comment-button" variant="contained" color="primary" onClick={handleClickOpen}>
        Ubah Komentar
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <ThemeProvider>
          <p id="form-dialog-title" className="form-dialog-title">Ubah Komentar</p>
          <DialogContent>
          <TextField
              margin="dense"
              id="komentar"
              label=""
              variant="outlined"
              placeholder="Komentar"
              type="text"
              onChange={handleChangeDataKomentar}
              inputProps={{style: {fontFamily: `'Poppins', sans-serif`, width: 150}}} // font size of input text
              InputLabelProps={{style: {fontFamily: `'Poppins', sans-serif`}}} // font size of input label
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="cancel-button" color="primary">
              Batal
            </button>
            <button onClick={() => submitKomentar()} className="post-button" color="primary">
              Ubah Komentar
            </button>
          </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}