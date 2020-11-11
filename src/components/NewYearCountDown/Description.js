import React from "react"
import { Typography, Grid, Box, Paper } from "@material-ui/core"

const Description = () => {
  return (
    <Grid item md={6} xs={12}>
      <Paper>
        <Box px={2}>
          <Typography variant="h6" align="center" gutterBottom>
            Still in the proccess of development
          </Typography>
        </Box>
      </Paper>
    </Grid>
  )
}

export default Description
