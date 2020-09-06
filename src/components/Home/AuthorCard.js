import React from 'react'
import {
  
  Typography,
  
  
  Grid,
  Avatar,
  
} from "@material-ui/core"
import avatarRyan from "../../images/Avatar_Ryan.jpeg"
import avatarYue from "../../images/Avatar_Yue.JPG"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  media: {
    height: 240,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  author: {
    height: "50%",
      backgroundColor: theme.palette.grey[100],
    borderRadius: '10px'
  },
}))

const AuthorCard = () => {

    const classes = useStyles()

    return (
      <Grid sm={6} item container direction="column" spacing={1} justify='space-between'>
        <Grid
          item
          container
          direction="column"
          className={classes.author}
          spacing={1}
        >
          <Grid item>
            <Avatar src={avatarYue} className={classes.large}></Avatar>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              Yue Su
            </Typography>
            <Typography gutterBottom>Full-Stack Developer</Typography>
          </Grid>
          <Grid item>Contract</Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.author}
          spacing={1}
        >
          <Grid item>
            <Avatar src={avatarRyan} className={classes.large}></Avatar>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              Ryan Lee
            </Typography>
            <Typography gutterBottom>Full-Stack Developer</Typography>
          </Grid>
          <Grid item>Contract</Grid>
        </Grid>
        
      </Grid>
    )
}

export default AuthorCard
