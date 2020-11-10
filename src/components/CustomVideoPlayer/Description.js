import React from "react"
import { Typography, Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined"
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined"

const useStyles = makeStyles(() => ({
  container: {
    padding: "1.5rem",
  },
}))

const Description = () => {
  const classes = useStyles()

  return (
    <Grid item md={6} xs={12}>
      <Paper className={classes.container}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Typography variant="subtitle1">
              <GradeOutlinedIcon />
              Features:
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              • The video player utilizes HTML5 meida API for a customized play,
              pause, replay user interface
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              <EmojiObjectsOutlinedIcon />
              Height:
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              • The tricky part is that you can not get the video length by
              video.duration(the html5 video/audio property) in the beginning
              when the video is loaded. You will get a NaN instead.
            </Typography>
            <Typography>
              • A solution for setting the actual length of the video is to put
              an function in the play button's handler. when the user hit the
              button, the duration function will be called and get the actual
              length.
            </Typography>
            <Typography>
              • an alternative solution is to set up an event called
              onLoadMetaData with a handler function. You can get the duration
              from destructing event.target object. This solution is suitable
              for auto-played interface.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Description
