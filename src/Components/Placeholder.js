import { Fade, Grid, makeStyles, Modal, Backdrop } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },

  img: {
    maxWidth: "80%",
    maxHeight: "90vh",
  },
}));

function Placeholder(props) {
  const { data } = props;
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  var Api = "https://live.staticflickr.com";
  var server_id = data.server;
  var secret = data.secret;
  var id = data.id;

  var link = `${Api}/${server_id}/${id}_${secret}_w.jpg`;
  var fullsize = `${Api}/${server_id}/${id}_${secret}_b.jpg`;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item>
      <img src={link} loading="lazy" onClick={() => handleOpen()} />
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <img src={fullsize} loading="lazy" className={classes.img} />
        </Fade>
      </Modal>
    </Grid>
  );
}

export default Placeholder;
