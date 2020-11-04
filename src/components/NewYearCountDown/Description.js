import React from "react"
import { Typography, Grid, Box, Paper } from "@material-ui/core"

const Description = () => {
  return (
    <Grid item md={6} xs={12}>
      <Paper>
        <Box px={2}>
          <Typography variant="h6" align="center" gutterBottom>
            Project Title
          </Typography>
          <Typography paragraph>paragraph 1</Typography>
          <Typography paragraph>paragraph 2</Typography>
          <Typography paragraph>paragraph 3</Typography>
          <Typography paragraph>paragraph 4</Typography>
        </Box>
      </Paper>
    </Grid>
  )
}

export default Description
