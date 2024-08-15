import { createTheme } from "@mui/material";

export const fonts = {
  primary: "lato",
  secondry: "Arial",
};

const lightTheme = {
  primary: "#BBF246",
  secondry: "#36CC55",
  title: "#192126",
  subTitle: "#19212680",
  description: "#8593A8",
  error: "#EB001BE5",
  background: "#E4F4FC",
  white: "#FFFFFF",
  black: "#000000",
};

const darkTheme = {
  primary: "#BBF246",
  secondry: "#36CC55",
  title: "#192126",
  subTitle: "#19212680",
  description: "#8593A8",
  error: "#EB001BE5",
  background: "#E4F4FC",
  white: "#FFFFFF",
  black: "#000000",
};

const isDarkMode = false;

export const colors = isDarkMode ? darkTheme : lightTheme;

export const theme = createTheme({
  // You can change styling here for material-ui component to reflect it globally
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondry,
      contrastText: colors.white,
    },
  },
  typography: {
    fontFamily: [fonts.primary].join(","),
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "46px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "46px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label:not(.Mui-focused):not(.MuiFormLabel-filled)": {
            top: "-4px",
          },
          inputProps: {
            style: {
              height: 40,
              padding: "0 14px",
            },
          },
        },
      },
    },
  },
});

export const hex2rgba = (hex: string, alpha = 1) => {
  const matchs = hex.match(/\w\w/g);
  if (!matchs) {
    return hex;
  }
  const [r, g, b] = matchs.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
