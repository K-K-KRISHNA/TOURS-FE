import { SxProps } from "@mui/material";
import { homeBg } from "./assets";

export const styles = {
  loaderContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${homeBg})`,
    backgroundSize: "cover",
    filter: "blur(5px)",
    "-webkit-filter": "blur(5px)",
  },
  loadingTextContainer: {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  linearProgressBar: {
    "&.MuiLinearProgress-root": {
      height: "8px",
      borderRadius: "10px",
    },
    "& .MuiLinearProgress-dashed": {
      marginTop: "2px",
    },
    "& .MuiLinearProgress-bar2Buffer": {
      borderRadius: "10px",
    },
  },
} as Record<string, SxProps>;
