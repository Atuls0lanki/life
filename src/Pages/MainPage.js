import { Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import MainBody from "../Components/MainBody";
import NavBar from "../Components/NavBar";

function MainPage() {
  return (
    <>
      <Grid>
        <NavBar />
        <MainBody />
      </Grid>
    </>
  );
}

export default MainPage;
