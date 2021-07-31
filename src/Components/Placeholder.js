import { Grid } from "@material-ui/core";
import React from "react";

function Placeholder(props) {
  const { data } = props;
  var Api = "https://live.staticflickr.com";
  var server_id = data.server;
  var secret = data.secret;
  var id = data.id;

  var link = `${Api}/${server_id}/${id}_${secret}_w.jpg`;
  return (
    <Grid item>
      <img src={link} />
    </Grid>
  );
}

export default Placeholder;
