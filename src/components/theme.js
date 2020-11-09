import { createMuiTheme } from "@material-ui/core/styles"
import orange from "@material-ui/core/colors/orange"
import grey from "@material-ui/core/colors/grey"
import { purple } from "@material-ui/core/colors"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[600],
      dark: purple[900],
    },
    secondary: {
      main: orange[900],
    },
    background: {
      paper: grey[200],
      default: grey[100],
    },
    text: {
      primary: grey[900],
      secondary: grey[50],
    },
  },
  typography: {
    body1: {
      fontSize: "1rem",
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
    },
    h3: {
      fontWeight: 400,
    },
    subtitle2: {
      color: purple[900],
    },
  },
})
