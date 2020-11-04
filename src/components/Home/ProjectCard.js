import React from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  Link,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
  Avatar,
  Button,
} from "@material-ui/core"
import DetailsIcon from "@material-ui/icons/Details"
import { makeStyles } from "@material-ui/core/styles"
import { purple } from "@material-ui/core/colors"
import shortid from "shortid"
import { useSpring, a } from "react-spring"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles((theme) => ({
  purple: {
    color: purple[900],
  },
  chip: {
    fontSize: "0.75rem",
    marginRight: "2px",
  },
}))

const ProjectCard = (props) => {
  const classes = useStyles()

  const { projects } = props

  const lifting = useSpring({
    from: { transform: "translate3d(0,40px,50px)", opacity: 0 },
    transform: "translate3d(0,0px,0)",
    opacity: 1,
    delay: 1000,
  })

  const githubUrl =
    "https://github.com/yue-su/React-mini-projects/tree/master/src/components/"

  return (
    <Grid container spacing={4} justify="center">
      {projects.map((project) => {
        const { id, image, path, name, description, heightlight } = project
        const gitURL = githubUrl + name.split(" ").join("")

        return (
          <Grid item key={id} md={4} sm={6}>
            <a.div style={lifting}>
              <Paper>
                <Card>
                  <CardMedia src={image} component="img" />
                  <CardContent>
                    <Grid container>
                      <Grid item xs={10}>
                        <Link
                          to={path}
                          component={RouterLink}
                          underline="none"
                          color="primary"
                        >
                          <Button variant="text" align="left">
                            {name}
                          </Button>
                        </Link>
                        <Typography variant="body2">{description}</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Link
                          target="_blank"
                          href={gitURL}
                          underline="none"
                          color="inherit"
                        >
                          <GitHubIcon className={classes.purple} />
                        </Link>
                      </Grid>
                    </Grid>

                    <Box display="flex" flexWrap="wrap" mt={1}>
                      {heightlight.map((item) => {
                        return (
                          <Chip
                            key={shortid.generate()}
                            className={classes.chip}
                            label={item}
                            color="primary"
                            size="small"
                            variant="outlined"
                          />
                        )
                      })}
                    </Box>
                  </CardContent>
                </Card>
              </Paper>
            </a.div>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProjectCard
