import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataRequest, DataSuccess } from "../Redux/data/action";
import Placeholder from "./Placeholder";

const useStyle = makeStyles({
  root: {},
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
      <Grid container spacing={5}>
        {allpics()}
      </Grid>
    </>
  );
}

export default MainBody;
