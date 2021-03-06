import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';


function Modal({ open, title, close, markup, approve, reject, description }){
  const buildReject = () => {
    if (typeof reject.click === 'function') {
      return (
        <Button onClick={reject.click} color="primary">
          {reject.text}
        </Button>
      );
    }

    return (
      <a href={reject.click} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Button color="primary">
          {reject.text}
        </Button>
      </a>
    );
  };

  const buildApprove = () => {
    if (typeof approve.click === 'function') {
      return (
        <Button onClick={approve.click} color="primary" autoFocus>
          {approve.text}
        </Button>
      );
    }

    return (
      <a href={approve.click} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Button color="primary">
          {approve.text}
        </Button>
      </a>
    );
  };

  const buildModal = () => {
    return (
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <Typography component="p">
            {description}
          </Typography>
          {markup}
        </DialogContent>
        <DialogActions>
          {reject && buildReject()}
          {approve && buildApprove()}
        </DialogActions>
      </Dialog>
    );
  };

  if (!open) {
    return null;
  }

  return buildModal();
}


export default Modal;
