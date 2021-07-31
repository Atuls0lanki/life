import React from "react";
import {
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles({
  root: {
    width: "100%",
    height: "100px",
    backgroundColor: "black",
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
    margin: "5px 0px",
  },
  icon: {
    padding: "0px 5px",
  },
  input: {},
});

function NavBar() {
  const classes = useStyle();
  return (
    <>
      <Grid item xs={12} className={classes.root}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" align="center" className={classes.heading}>
              Search Photos
            </Typography>
          </Grid>
          <Grid item>
            <Paper elevation={0} className={classes.feild}>
              <SearchIcon className={classes.icon} />
              <InputBase
                className={classes.input}
                type="search"
                placeholder="Search Here..."
                id="serach"
                name="search"
                fullWidth
                // value={fval.email}
                // onChange={inputChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default NavBar;
