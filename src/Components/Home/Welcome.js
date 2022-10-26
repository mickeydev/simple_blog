import useStyles from "../UI/style";
import HomeJPG from "../../Assets/home.jpg";
import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Container } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Welcome = () => {
  const classes = useStyles();

  return (
    <Box
      component="div"
      className={classes.welcome}
      sx={{
        backgroundImage: `url(${HomeJPG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
        }}
      >
        <Box
          component="div"
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="div">
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                paddingTop: 10,
              }}
            >
              Welcome to
            </Typography>
          </Box>

          <Box component="div">
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                color: "#fff",
              }}
            >
              READWIDE
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
              }}
            >
              Read wider...
            </Typography>
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: blueGrey[50],
            }}
          >
            <Typography variant="h6">Scroll Down</Typography>
            <KeyboardArrowDownIcon fontSize="large" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Welcome;
