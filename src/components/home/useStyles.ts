import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 10,
  },
  items: {
    marginTop: 20,
    padding: 20,
    cursor: "pointer"
  },
  loginBtn: {
    marginTop: 20,
    marginBottom: 20,
  },
  subContainer: {
    marginTop: 10,
  },
}));
