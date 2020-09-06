import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Grid,
  Avatar,
  Paper,
} from "@material-ui/core"


const Introduction = () => {
    return (
      <Grid sm={6} item>
        <Typography variant="h5" paragraph>
          Introduction
        </Typography>
        <Typography paragraph>
          <em>
            As a front-end developer, it is imperative to keep sharpening your
            skills, updating knowledge, and tapping into some unfamiliar
            territory where you have never encountered.
          </em>
          Although there already are tons of tutorials, articles, books, talks
          or codepens, nothing could ever compare to some real hands-on
          projects. Get your hands dirty, make mistakes, break things, fix
          things, slowly buildup a sturdy understanding of the hardcore
          concepts, and gain some real experiences.
        </Typography>
        <Typography paragraph>
          This website is a personal project about implementing some of the key
          concepts I learned when studying in Lambda school. It is a
          demonstration of a series of 20 projects that are all made by React
          and other related technology such as React-Router, Hooks, Material-UI,
          etc. These projects are inspired by Brad Travery's Udemy course-- 20
          Web Projects With Vanilla JavaScript. Each project emphasizes
          different things, including JavaScript fundamentals, DOM Manipulation,
          API & JSON, High Order Array Methods and more.
        </Typography>
        <Typography paragraph>
          I encourage anyone, especially junior developers interested in React,
          to take on some of the projects. Write some code and compare what you
          did with mine. Chances are you would do better, or you might have some
          blockers as I did. Either way, we could all gain something in the end.
        </Typography>
        <Typography paragraph>Yue</Typography>
      </Grid>
    )
}

export default Introduction
