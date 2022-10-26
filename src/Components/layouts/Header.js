import { AppBar, Box } from "@mui/material";
import { Container } from "@mui/system";
import useStyles from "../UI/style";

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Container maxWidth="lg">
        <Box component="div" className={classes.nav}>
          <Box className={classes.navList} component="a" href="#">
            Home
          </Box>
          <Box className={classes.navList} component="a" href="#">
            Latest News
          </Box>
          <Box className={classes.navList} component="a" href="#">
            All News
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
