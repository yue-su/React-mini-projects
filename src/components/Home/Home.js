import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Box, Grid, Avatar} from '@material-ui/core'
import hero from '../../images/hero.jpg'
import { makeStyles, emphasize } from "@material-ui/core/styles"
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
      <Box>
        <Card>
          <CardMedia className={classes.media} src={hero} component="img" />
          <CardContent>
            <Grid container>
              <Grid
                sm={4}
                item
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <Avatar></Avatar>
                </Grid>
                <Grid item>Introduction</Grid>
                <Grid item>Contract</Grid>
              </Grid>
              <Grid sm={8} item>
                <Typography variant="h5" paragraph>
                  Introduction
                </Typography>
                <Typography paragraph>
                  <em>
                    As a front-end developer, it is imperative to keep
                    sharpening your skills, updating knowledge, and tapping into
                    some unfamiliar territory where you have never encountered.
                  </em>
                  Although there already are tons of tutorials, articles, books,
                  talks or codepens, nothing could ever compare to some real
                  hands-on projects. Get your hands dirty, make mistakes, break
                  things, fix things, slowly buildup a sturdy understanding of
                  the hardcore concepts, and gain some real experiences.
                </Typography>
                <Typography paragraph>
                  This website is a personal project about implementing some of
                  the key concepts I learned when studying in Lambda school. It
                  is a demonstration of a series of 20 projects that are all
                  made by React and other related technology such as
                  React-Router, Hooks, Material-UI, etc. These projects are
                  inspired by Brad Travery's Udemy course-- 20 Web Projects With
                  Vanilla JavaScript. Each project emphasizes different things,
                  including JavaScript fundamentals, DOM Manipulation, API &
                  JSON, High Order Array Methods and more.
                </Typography>
                <Typography paragraph>
                  I encourage anyone, especially junior developers interested in
                  React, to take on some of the projects. Write some code and
                  compare what you did with mine. Chances are you would do
                  better, or you might have some blockers as I did. Either way,
                  we could all gain something in the end.
                </Typography>
                <Typography paragraph>Yue</Typography>
              </Grid>
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
