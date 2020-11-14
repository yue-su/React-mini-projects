import React, { useState } from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import Description from "./Description"

const NewYearCountDown = () => {
  const [year, setYear] = useState("")

  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  return (
    <Grid container spacing={1}>
      <Grid item md={6} xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          border="2px solid purple"
          borderRadius="10px"
          padding="1rem"
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6">New Year Countdown</Typography>
            </Grid>
            <Grid item>
              <Typography>{year}</Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

export default NewYearCountDown
