import React, { useEffect, useRef, useState } from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import Description from "./Description"
import "./BreakoutGame.css"

const ballInit = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  dx: 0,
  dy: 0,
}
const paddleInit = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  speed: 0,
  dx: 0,
}

const BreakoutGame = () => {
  const canvasRef = useRef(null)

  const [ball, setBall] = useState(ballInit)
  const [paddle, setPaddle] = useState(paddleInit)

  const drawBall = (ctx, ball) => {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
    ctx.fillStyle = "#0095dd"
    ctx.fill()
    ctx.closePath()
  }

  const drawPaddle = (ctx, paddle) => {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = "#0095dd"
    ctx.fill()
    ctx.closePath()
  }

  //set up canvas with useRef
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    setBall({
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: 5,
      speed: 4,
      dx: 4,
      dy: -4,
      //nature movement of the y is going down, so in order to go up here the value is -4.
    })

    setPaddle({
      x: canvas.width / 2 - 40,
      y: canvas.height - 20,
      w: 80,
      h: 10,
      speed: 8,
      dx: 0,
    })

    drawBall(ctx, ball)
    drawPaddle(ctx, paddle)
  }, [ball, paddle])

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
          <Grid container direction="column">
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
