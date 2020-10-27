import React from "react"
import {
  Typography,
  Box,
  Grid,
  CardMedia,
  Link as MuiLink,
} from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import GitHubIcon from "@material-ui/icons/GitHub"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import { Link } from "react-router-dom"
import logoTransparent from "../../images/logo_transparent.png"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  media: {
    maxWidth: "120px",
  },
  icon: {
    margin: "0.5rem",
    padding: "0.5rem",
    border: "2px solid",
    borderRadius: "50%",
    fontSize: "1rem",
    color: theme.palette.primary.dark,
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.header}>
      <Grid item sm={2} xs={12}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link to="/">
            <CardMedia
              className={classes.media}
              src={logoTransparent}
              component="img"
            />
          </Link>
        </Box>
      </Grid>
      <Grid item sm={8} xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Typography variant="h3" align="center">
            REACT MINI PROJECTS
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={2} xs={12}>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          height="100%"
        >
          <Link to="/">
            <HomeIcon className={classes.icon} />
          </Link>
          <MuiLink
            href="https://github.com/yue-su/React-mini-projects"
            target="_blank"
          >
            <GitHubIcon className={classes.icon} />
          </MuiLink>
          <Link to="/admin">
            <SupervisorAccountIcon className={classes.icon} />
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header
