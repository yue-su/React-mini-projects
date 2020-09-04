import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {Link, Container, Card, CardMedia, CardContent, Typography, CardActions, Box, Paper, Grid, Avatar} from '@material-ui/core'
import hero from '../../images/hero.jpg'
import project1 from '../../images/project-1.png'
import { makeStyles } from "@material-ui/core/styles"
import { projects } from './projectsData'

const useStyles = makeStyles(theme => ({
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}))

const Home = () => {

  const classes = useStyles()

    return (
      <Container>
        <Card>
          <CardMedia className={classes.media} src={hero} component="img" />
          <CardContent>
            <Typography>Introduction</Typography>
            <Typography></Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Box mt={3}>
          <Grid container spacing={2} justify="left" wrap>
            {projects.map((project) => {
              //const image = require(project.image)
              return (
                <Grid item key={project.id} sm={4}>
                  <Paper>
                    <Box>
                      <Card>
                        <CardMedia src={project.image} component='img'/>
                        <CardContent>
                          <Typography variant="subtitle1">
                            {project.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <Link
          component={RouterLink}
          to="/movie"
          color="primary"
          underline="none"
        >
          Movie Seat Booking
        </Link>
      </Container>
    )
}

export default Home
