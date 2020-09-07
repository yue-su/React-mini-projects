import React from "react"
import { Typography, Grid, Box, Paper } from "@material-ui/core"

const Description = () => {
  return (
    <Grid item md={6} xs={12}>
      <Paper>
        <Box px={2}>
          <Typography variant="h6" align="center" gutterBottom>
            Custom Video Player
          </Typography>
          <Typography paragraph>
            The tricky part is that you can not get the video length from the
            video.duration(the html5 video/audio property) in the beginning when
            the video is loaded. So, at first, when you try to get the length by
            setting the related state to the number of seconds returned by
            duration, you will get a NaN instead.
          </Typography>
          <Typography paragraph>There are two resolutions :</Typography>
          <Typography paragraph>
            One: Make a function to get the duration and setState. --> don't call
            the function with useEffect() when the application is loaded,
            instead, put the function in the play button's handler function. -->
            User hit the play button, the duration function will be called. -->
            get the actual length, and the state will be refreshed.
          </Typography>
          <Typography paragraph>
            Two: Use an event called "onLoadMetaData" with a handler function.
            --> get the duration from event.target --> setState and refresh the
            length state. The two resolutions could be combined, so no matter
            the video is auto-played or fired by the user, the actual length
            could both get.
          </Typography>
        </Box>
      </Paper>
    </Grid>
  )
}

export default Description
