import React from "react"
import { Typography, Grid, Paper, Box } from "@material-ui/core"

const Template = () => {
  return (
    <Grid container spacing={1}>
      <Grid item md={6} xs={12}>
        <Paper>
          <Typography variant="h6" align="center">
            This is where to put the project title.
          </Typography>
          <Typography>
            This is where to put the project description. Technical challenges.
            etc.
          </Typography>
        </Paper>
      </Grid>

      <Grid item md={6} xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="2px solid purple"
          borderRadius="10px"
          padding="1rem"
        >
          This is where to put the actual project JSX
        </Box>
      </Grid>
    </Grid>
  )
}

export default Template
