import React, { useEffect, useRef } from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import Description from "./Description"
import "./BreakoutGame.css"

const BreakoutGame = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    context.fillStyle = "green"
    context.fillRect(10, 10, 150, 100)
  }, [])

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
          <Grid container>
            <Grid item>
              <Typography>Breakout Game</Typography>
            </Grid>
            <Grid item>
              <canvas ref={canvasRef}></canvas>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

export default BreakoutGame
