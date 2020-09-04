import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {Link, Container, Card, CardMedia, CardContent, Typography, CardActions, Box, Paper, Grid, Avatar, Chip} from '@material-ui/core'
import hero from '../../images/hero.jpg'
import project1 from '../../images/project-1.png'
import { makeStyles } from "@material-ui/core/styles"
import { projects } from './projectsData'
import ProjectCard from './ProjectCard'

const useStyles = makeStyles(theme => ({
  media: {
    height: 240,
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
          <ProjectCard projects={projects}/>
        </Box>
      </Container>
    )
}

export default Home
