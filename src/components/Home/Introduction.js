import React from "react"
import { Typography, Grid, Link } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"

const Introduction = () => {
  return (
    <Grid md={7} xs={12} item alignContent="center" justify="center" container spacing={3} >
      <Grid item>
        <Typography variant="h5" paragraph align="center">
          Why mini projects ?
        </Typography>
      </Grid>
      <Grid item align='justify'>
        <Typography paragraph>
          As a front-end developer, it is imperative to keep sharpening your
          skills, updating knowledge, and tapping into some unfamiliar
          territories. Although there are tons of tutorials, articles, books,
          talks or codepens, nothing could compare to real hands-on projects.
          It's time to get your hands dirty, make mistakes, break things, fix
          things, slowly buildup a sturdy understanding of the hardcore
          concepts, and gain some real experiences.
        </Typography>
        <Typography paragraph>
          This website is a project about implementing some of the key concepts
          I learned when studying in{" "}
          <Link variant="body1" href="https://lambdaschool.com/">
            Lambda School
          </Link>
          . It is a demonstration of a series of projects that are all made by
          React and other related technology such as React-Router, Hooks,
          Material-UI, etc. These projects are inspired by{" "}
          <Link variant="body1" href="https://twitter.com/traversymedia">
            Brad Travery
          </Link>
          's Udemy course--{" "}
          <Link
            variant="body1"
            href="https://www.udemy.com/course/web-projects-with-vanilla-javascript"
          >
            20 Web Projects With Vanilla JavaScript
          </Link>
          . Each project emphasizes different things, including JavaScript
          fundamentals, DOM Manipulation, API & JSON, High Order Array Methods
          and more.
        </Typography>
        {/* <Typography paragraph>
          We encourage anyone, especially junior developers interested in React,
          to take on some of the projects. Write some code and compare what you
          did with our Github repo. Chances are you would do better, or you
          might have some blockers. Either way, we could all gain something in
          the end.
        </Typography> */}
      </Grid>
      <Grid item>
        <Typography align="center">
          <Link href="https://github.com/yue-su/React-mini-projects">
            <GitHubIcon />
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Introduction
