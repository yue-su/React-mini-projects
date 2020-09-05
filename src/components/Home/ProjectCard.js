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

const useStyles = makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(purple[600]),
    backgroundColor: purple[600],
  }
}))

const ProjectCard = (props) => {

    const classes = useStyles()

  const { projects } = props

  return (
    <Grid container spacing={2} justify="left" wrap>
      {projects.map((project) => {
        //const image = require(project.image)
        return (
          <Grid item key={project.id} md={4} sm={6}>
            <Paper>
              <Box>
                <Card>
                  <CardMedia src={project.image} component="img" />
                  <CardContent>
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography variant="h6" align="left">
                          {project.name}
                        </Typography>
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
              </Box>
            </Paper>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProjectCard
