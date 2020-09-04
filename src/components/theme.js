import { createMuiTheme } from "@material-ui/core/styles"
import orange from "@material-ui/core/colors/orange"
import grey from "@material-ui/core/colors/grey"
import { purple } from "@material-ui/core/colors"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: orange[900],
    },
    background: {
      paper: grey[100],
      default: grey[100],
    },
  },
})
