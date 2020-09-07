import React from 'react'
import { Typography, Box, Grid, CardMedia } from '@material-ui/core'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import { Link } from "react-router-dom"
import logoTransparent from '../../images/logo_transparent.png'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  media: {
        maxWidth: '120px',
    },
    icon: {
        margin: '0.5rem',
        padding: '0.75rem',
        border: '2px solid',
        borderRadius: '50%'
    }
}))

const Header = () => {

    const classes = useStyles()

    return (
        <Grid container>
          <Grid item sm={2} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CardMedia
                className={classes.media}
                src={logoTransparent}
                component="img"
              />
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
              <Link to="/admin">
                <SupervisorAccountIcon className={classes.icon} />
              </Link>
            </Box>
          </Grid>
        </Grid>
    )
}

export default Header
