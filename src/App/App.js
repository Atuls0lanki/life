import { Grid, makeStyles } from "@material-ui/core";
import MainPage from "../Pages/MainPage";
import "./App.css";

const UseStyle = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    minHeight: "101vh",
    backgroundColor: "#eaeef3",
  },
});

function App() {
  const classes = UseStyle();
  return (
    <Grid className="App" className={classes.root}>
      <MainPage />
    </Grid>
  );
}

export default App;
