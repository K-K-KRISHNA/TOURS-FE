import { Box, Typography } from "@mui/material";
import CustomLoader from "./CustomLoader";
import Quote from "./Quote";
import { styles } from "./styles";

const LoadingScreen = () => {
  return (
    <Box boxSizing={"border-box"}>
      <Box sx={styles.loaderContainer}></Box>
      <Box sx={styles.loadingTextContainer}>
        <Typography
          variant="h2"
          color="#1F316F"
          fontWeight={600}
          textAlign={"center"}
        >
          Spiritual Sojourns
        </Typography>
        <Quote />
        <CustomLoader />
      </Box>
    </Box>
  );
};

export default LoadingScreen;
