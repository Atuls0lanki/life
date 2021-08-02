import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataRequest, DataSuccess } from "../Redux/data/action";
import Placeholder from "./Placeholder";

const useStyle = makeStyles({
  root: {
    padding: "25px 0px",
    width: "100%",
    height: "100%",
    margin: "0px",
    overflowX: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#eaeef3",
      margin: "8px 0px",
    },
    "&::-webkit-scrollbar-thumb": {
      border: "4px solid grey",
      borderRadius: "10px",
    },
  },
});

function MainBody() {
  const dispatch = useDispatch();
  const [check, setcheck] = useState(false);

  useEffect(() => {
    dispatch(DataRequest());
    setcheck(true);
  }, []);
  const state = useSelector((state) => state);
  console.log(state);
  const classes = useStyle();

  const allpics = () => {
    if (!state.data.loading && check) {
      const allpicsdata = state.data.data.photos.photo;
      var img = allpicsdata.map((row, index) => {
        return <Placeholder data={row} key={index} />;
      });
      return img;
    }
  };

  return (
    <>
      <Grid
        style={{
          width: "100%",
          height: "calc(100% - 110px )",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          className={classes.root}
        >
          {allpics()}
        </Grid>
      </Grid>
    </>
  );
}

export default MainBody;
