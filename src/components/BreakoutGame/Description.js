import React from "react"
import { Typography, Grid, Paper } from "@material-ui/core"

const Description = () => {
  return (
    <Grid item md={6} xs={12}>
      <Paper>
        <Grid container>
          <Grid item>
            <Typography>Introduction</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Use the right and left keys to move the paddle to bounce the ball
              up and break the blocks.
            </Typography>
            <Typography>
              If the ball is missing, the score and the blocks will reset.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Description
