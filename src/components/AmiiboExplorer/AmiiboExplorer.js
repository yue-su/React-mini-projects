import React, { useEffect } from "react"
import { Grid, Box, Typography, Button } from "@material-ui/core"
import Description from "./Description"



const AmiiboExplorer = () => {

 

    return (
      
        <Grid container spacing={1}>
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
          <Description />
        </Grid>
      
    )
}

export default AmiiboExplorer
