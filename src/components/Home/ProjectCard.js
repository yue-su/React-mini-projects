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
} from "@material-ui/core"
import DetailsIcon from "@material-ui/icons/Details"
import { makeStyles } from "@material-ui/core/styles"
import { purple } from "@material-ui/core/colors"
import shortid from "shortid"
import { useSpring, a } from "react-spring"

const useStyles = makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(purple[600]),
    backgroundColor: purple[600],
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

  return (
    <Grid container spacing={4} justify="center">
      {projects.map((project) => {
        return (
          <Grid item key={project.id} md={4} sm={6}>
            <a.div style={lifting}>
              <Paper>
                <Card>
                  <CardMedia src={project.image} component="img" />
                  <CardContent>
                    <Grid container>
                      <Grid item xs={10}>
                        <Link
                          to={project.path}
                          component={RouterLink}
                          underline="none"
                          color="primary"
                        >
                          <Typography variant="subtitle2" align="left">
                            {project.name}
                          </Typography>
                        </Link>
                        <Typography variant="body2">
                          {project.description}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Link
                          component={RouterLink}
                          to={project.path}
                          underline="none"
                          color="inherit"
                        >
                          <Avatar className={classes.purple}>
                            <DetailsIcon />
                          </Avatar>
                        </Link>
                      </Grid>
                    </Grid>

                    <Box display="flex" flexWrap="wrap" mt={1}>
                      {project.heightlight.map((item) => {
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
