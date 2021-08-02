import { Grid, ImageList, ImageListItem, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddAllData,
  DataAddonRequest,
  DataRequest,
} from "../Redux/data/action";
import Placeholder from "./Placeholder";

const useStyle = makeStyles({
  root: {
    display: "flex",
    padding: "25px 15px",
    paddingTop: "135px",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "calc(100% - 30px )",
    height: "100%",
    margin: "0px",
    overflowX: "hidden",
  },
});

function MyImagelist() {
  const dispatch = useDispatch();
  const [check, setcheck] = useState(false);
  const [check2, setcheck2] = useState(false);
  const state = useSelector((state) => state);
  const classes = useStyle();

  useEffect(() => {
    dispatch(DataRequest(state.data.lastPage));
    setcheck(true);
  }, []);

  useEffect(() => {
    if (check && check2 && !state.data.addLoading) {
      let firstdata = state.data.data;
      let seconddata = state.data.addonData;
      let finaldata = [...firstdata, ...seconddata];
      dispatch(AddAllData(finaldata));
    }
  }, [state.data.addonData]);

  if (state.search.search === "" || state.search.search === " ") {
    window.onscroll = function () {
      var total = document.body.offsetHeight;
      var current = window.innerHeight + window.scrollY;
      var distotal = total - 4000;
      if (
        current >= distotal &&
        !state.data.addLoading &&
        !state.data.loading
      ) {
        let page = parseInt(state.data.lastPage);
        page += 1;
        if (page > 100) page = 1;
        console.log(page);
        dispatch(DataAddonRequest(page));
        setcheck2(true);
      }
    };
  }

  const allpics = () => {
    if (!state.data.loading && check) {
      const allpicsdata = state.data.data;
      var img = allpicsdata.map((row, index) => {
        return (
          <ImageListItem rows={2} key={index}>
            <Placeholder data={row} />
          </ImageListItem>
        );
      });
      return img;
    }
  };

  return (
    <>
      <Grid className={classes.root}>
        <ImageList cols={5} gap={10} style={{ width: "100%" }}>
          {allpics()}
        </ImageList>
      </Grid>
    </>
  );
}

export default MyImagelist;
