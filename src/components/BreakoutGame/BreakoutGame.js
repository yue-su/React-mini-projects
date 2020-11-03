import React, { useEffect, useRef, useState } from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import Description from "./Description"
import "./BreakoutGame.css"
import { Score } from "@material-ui/icons"

const dpi = window.devicePixelRatio

const ball = {
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
}
const paddle = {
  w: 80,
  h: 20,
  speed: 8,
  dx: 0,
}

const brick = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
}

const BreakoutGame = () => {
  const canvasRef = useRef(null)

  const [score, setScore] = useState(0)

  const drawBall = (ctx, ball, canvas) => {
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, ball.size, 0, Math.PI * 2)
    ctx.fillStyle = "#0095dd"
    ctx.fill()
    ctx.closePath()
  }

  const drawPaddle = (ctx, paddle, canvas) => {
    ctx.beginPath()
    ctx.rect(canvas.width / 2 - 40, canvas.height - 20, paddle.w, paddle.h)
    ctx.fillStyle = "#0095dd"
    ctx.fill()
    ctx.closePath()
  }

  const drawScore = (ctx, score, canvas) => {
    ctx.font = "20px Roboto"
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30)
  }

  const drawBricks = (ctx, row, column) => {
    const bricks = []
    for (let i = 0; i < row; i++) {
      bricks[i] = []
      for (let j = 0; j < column; j++) {
        const x = i * (brick.w + brick.padding) + brick.offsetX
        const y = j * (brick.h + brick.padding) + brick.offsetY
        bricks[i][j] = { x, y, ...brick }
      }
    }

    bricks.forEach((column) => {
      column.forEach((brick) => {
        ctx.beginPath()
        ctx.rect(brick.x, brick.y, brick.w, brick.h)
        ctx.fillStyle = brick.visible ? "#0095dd" : "transparent"
        ctx.fill()
        ctx.closePath()
      })
    })
  }

  const handleKeyUp = (event) => {
    console.log(1)
  }
  const handleKeyDown = (event) => {
    console.log(0)
  }

  const movePaddle = () => {}

  //set up canvas with useRef
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    fix_dpi(canvas)

    const draw = () => {
      drawBall(ctx, ball, canvas)
      drawPaddle(ctx, paddle, canvas)
      drawScore(ctx, score, canvas)
      drawBricks(ctx, 9, 5)
    }

    const update = () => {
      movePaddle(canvas)
      draw()
      requestAnimationFrame(update)
    }

    update()
  }, [score])

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
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography>Breakout Game</Typography>
            </Grid>
            <Grid item>
              <canvas
                ref={canvasRef}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
              ></canvas>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

function fix_dpi(canvas) {
  //create a style object that returns width and height
  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2)
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2)
    },
  }
  //set the correct attributes for a crystal clear image!
  canvas.setAttribute("width", style.width() * dpi)
  canvas.setAttribute("height", style.height() * dpi)
}

export default BreakoutGame
