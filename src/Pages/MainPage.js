import { Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import MainBody from "../Components/MainBody";
import NavBar from "../Components/NavBar";
import MyImagelist from "../Components/MyImagelist";
import { useSelector } from "react-redux";
import MySearch from "../Components/MySearch";

function MainPage() {
  const state = useSelector((state) => state);

  const DataType = () => {
    if (state.search.search === "" || state.search.search === " ") {
      console.log(state.search.search);
      return <MyImagelist />;
    } else {
      console.log(state.search.search);
      return <MySearch />;
    }
  };
  return (
    <>
      <Grid style={{ width: "100%", height: "100%" }}>
        <NavBar />
        {DataType()}
      </Grid>
    </>
  );
}

export default MainPage;
