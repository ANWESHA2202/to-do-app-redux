import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    dark: "#002964",
    textLight: "#d6dbd6",
    textDefault: "black",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Correctly target the hover state for the border color
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#002964",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#002964",
            outline: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#002964",
          color: "#fff",
          border: "1px solid #002964",

          "&:hover": {
            backgroundColor: "#002964",
            color: "#fff",
          },
          "&.Mui-disabled": {
            backgroundColor: "#ccc",
            color: "gray",
            border: "1px solid #999",
            cursor: "not-allowed",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #d6dbd6",
          borderRadius: "5px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#002968",
        },
      },
    },
  },
});

export default theme;
