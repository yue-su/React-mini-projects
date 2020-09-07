import React from "react"
import { Grid, Box } from "@material-ui/core"
import Description from "./Description"

//The sub grid could be changed to column stacks to better accommodate larger apps

const ExchangeRateCalculator = () => {
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
          This is where to put the actual project JSX
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

export default ExchangeRateCalculator
