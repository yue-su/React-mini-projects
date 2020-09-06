import React from "react"
import { Typography, Grid, Paper, Box } from "@material-ui/core"

const CustomVideoPlayer = () => {

    
    
  return (
    <Grid container spacing={1}>
      <Grid item md={6} xs={12}>
        <Paper>
          <Typography variant="h6" align="center">
            Custom Video Player
          </Typography>
          <Typography>
            Description
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
                  
        </Box>
      </Grid>
    </Grid>
  )
}

export default CustomVideoPlayer
