import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Box, Grid} from '@material-ui/core'
import hero from '../../images/hero.jpg'
import { makeStyles } from "@material-ui/core/styles"
import { projects } from './projectsData'
import ProjectCard from './ProjectCard'
import AuthorCard from './AuthorCard'
import Introduction from './Introduction'

const useStyles = makeStyles(theme => ({
  media: {
    height: 240,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  author: {
    height: '50%',
    backgroundColor: theme.palette.grey[100]
  }
}))

const Home = () => {

  const classes = useStyles()

    return (
      <Box>
        <Card>
          <CardMedia className={classes.media} src={hero} component="img" />
          <CardContent>
            <Grid container spacing={3}>
              <AuthorCard />
              <Introduction />
            </Grid>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Box mt={3}>
          <ProjectCard projects={projects} />
        </Box>
      </Box>
    )
}

export default Home
