import React from 'react'
import { Typography, Box, Grid, CardMedia } from '@material-ui/core'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import { Link } from "react-router-dom"
import logoTransparent from '../../images/logo_transparent.png'

const Header = () => {
    return (
      <Box>
        <Grid container>
          <Grid item sm={2}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CardMedia src={logoTransparent} component="img" />
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Typography variant="h3" align="center">
                React Mini Projects
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={2}>
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
      </Box>
    )
}

export default Header
