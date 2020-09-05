import React from 'react'
import { Typography, Box, Grid, CardMedia, Container } from '@material-ui/core'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import { Link } from "react-router-dom"
import logoTransparent from '../../images/logo_transparent.png'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  media: {
        maxWidth: '200px',
  },
}))

const Header = () => {

    const classes = useStyles()

    return (
      <Container>
        <Grid container>
          <Grid item md={2} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CardMedia
                className={classes.media}
                src={logoTransparent}
                component="img"
              />
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
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
          <Grid item md={2} xs={12}>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              height="100%"
            >
              <Link to="/">
                <HomeIcon />
              </Link>
              <Link to="/admin">
                <SupervisorAccountIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Header
