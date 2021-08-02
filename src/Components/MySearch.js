import {
  Grid,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddAllSearch,
  SearchAddonRequest,
  SearchRequest,
} from "../Redux/Search/Saction";
import Placeholder from "./Placeholder";

const useStyle = makeStyles({
  root: {
    display: "flex",
    padding: "10px 15px",
    paddingTop: "115px",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "calc(100% - 30px )",
    height: "100%",
    margin: "0px",
    overflowX: "hidden",
  },
});

function MySearch() {
  const dispatch = useDispatch();
  const [check, setcheck] = useState(false);
  const [check2, setcheck2] = useState(false);
  const state = useSelector((state) => state);
  const classes = useStyle();

  useEffect(() => {
    dispatch(SearchRequest(state.search.search, state.search.lastPage));
    setcheck(true);
  }, [state.search.search]);

  useEffect(() => {
    if (check && check2 && !state.search.addLoading) {
      let firstdata = state.search.result;
      let seconddata = state.search.addonSearch;
      let finaldata = [...firstdata, ...seconddata];
      dispatch(AddAllSearch(finaldata));
    }
  }, [state.search.addonSearch]);

  if (state.search.search !== "" || state.search.search !== " ") {
    window.onscroll = function () {
      var total = document.body.offsetHeight;
      var current = window.innerHeight + window.scrollY;
      var distotal = total - 4000;
      if (
        current >= distotal &&
        !state.search.addLoading &&
        !state.search.loading
      ) {
        let page = parseInt(state.search.lastPage);
        page += 1;
        if (page > 100) page = 1;
        console.log(page);
        dispatch(SearchAddonRequest(state.search.search, page));
        setcheck2(true);
      }
    };
  }

  const result = () => {
    if (state.search.total > 0) {
      return (
        <Typography color="textPrimary" align="center" variant="h6">
          More than {state.search.total} results
        </Typography>
      );
    } else {
      return (
        <Typography color="error" align="center" variant="h6">
          0 results
        </Typography>
      );
    }
  };

  const allpics = () => {
    if (!state.search.loading && check) {
      const allpicsdata = state.search.result;
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
        {result()}
        <ImageList cols={5} gap={10} style={{ width: "100%" }}>
          {allpics()}
        </ImageList>
      </Grid>
    </>
  );
}

export default MySearch;
