import { makeStyles } from "@material-ui/core/styles";
import { grey, blueGrey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: blueGrey[900],
    padding: 10,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
    justifyContent: "flex-end",
  },

  navList: {
    textDecoration: "none",
    color: grey[100],
  },
  welcome: {
    height: "100vh",
  },
}));

export default useStyles;
