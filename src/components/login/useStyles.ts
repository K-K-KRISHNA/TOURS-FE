import { SxProps, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

export const style = {
  text: {
    backgroundColor: "black",
  }
} satisfies Record<string, SxProps>
