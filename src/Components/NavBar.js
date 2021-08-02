import React, { useEffect, useState } from "react";
import {
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { SetSearch } from "../Redux/Search/Saction";
import { useDispatch } from "react-redux";

const useStyle = makeStyles({
  root: {
    width: "100%",
    height: "110px",
    backgroundColor: "black",
    position: "fixed",
    zIndex: 100,
  },
  heading: {
    color: "white",
    margin: "5px 0px",
  },
  feild: {
    display: "flex",
    alignItems: "center",
    width: "450px",
    backgroundColor: "white",
    margin: "10px 0px",
  },
  icon: {
    padding: "0px 5px",
    cursor: "text",
  },
  input: {},
});

const inivalue = {
  search: "",
};

function NavBar() {
  const classes = useStyle();
  const [fval, setfval] = useState(inivalue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetSearch(fval.search));
  }, [fval]);

  const feildClick = () => {
    document.getElementById("serach").focus();
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setfval({
      ...fval,
      [name]: value,
    });
  };

  return (
    <>
      <Grid item xs={12} className={classes.root}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item>
            <Typography variant="h4" align="center" className={classes.heading}>
              Search Photos
            </Typography>
          </Grid>
          <Grid item>
            <Paper elevation={0} className={classes.feild}>
              <SearchIcon
                className={classes.icon}
                onClick={() => feildClick()}
              />
              <InputBase
                className={classes.input}
                type="search"
                placeholder="Search Here..."
                id="serach"
                name="search"
                fullWidth
                value={fval.search}
                onChange={(e) => inputChange(e)}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default NavBar;
