import React, { useEffect, useRef } from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import Description from "./Description"
import "./BreakoutGame.css"

const dpi = window.devicePixelRatio

const ball = {
  x: 400,
  y: 400,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
}
const paddle = {
  x: 360,
  y: 780,
  w: 100,
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

const bricks = []
const row = 9
const column = 5

for (let i = 0; i < row; i++) {
  bricks[i] = []
  for (let j = 0; j < column; j++) {
    const x = i * (brick.w + brick.padding) + brick.offsetX
    const y = j * (brick.h + brick.padding) + brick.offsetY
    bricks[i][j] = { x, y, ...brick }
  }
}

let score = 0

const BreakoutGame = () => {
  const canvasRef = useRef(null)

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

  const drawScore = (ctx, score, canvas) => {
    ctx.font = "20px Roboto"
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30)
  }

  const drawBricks = (ctx, row, column) => {
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

  const handleKeyUp = (e) => {
    if (
      e.key === "Right" ||
      e.key === "ArrowRight" ||
      e.key === "Left" ||
      e.key === "ArrowLeft"
    ) {
      paddle.dx = 0
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Right" || e.key === "ArrowRight") {
      paddle.dx = paddle.speed
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      paddle.dx = -paddle.speed
    }
  }

  document.addEventListener("keydown", handleKeyDown)
  document.addEventListener("keyup", handleKeyUp)

  const movePaddle = (canvas) => {
    paddle.x += paddle.dx

    // Wall detection
    if (paddle.x + paddle.w > canvas.width) {
      paddle.x = canvas.width - paddle.w
    }

    if (paddle.x < 0) {
      paddle.x = 0
    }
  }

  const showAllBricks = () => {
    bricks.forEach((column) => {
      column.forEach((brick) => (brick.visible = true))
    })
  }

  const increaseScore = (canvas) => {
    score++

    if (score % (row * column) === 0) {
      ball.visible = false
      paddle.visible = false

      //After 0.5 sec restart the game
      setTimeout(function () {
        showAllBricks()
        score = 0
        paddle.x = canvas.width / 2 - 40
        paddle.y = canvas.height - 20
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        ball.visible = true
        paddle.visible = true
      }, 500)
    }
  }

  const moveBall = (canvas) => {
    ball.x += ball.dx
    ball.y += ball.dy

    // Wall collision (right/left)
    if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
      ball.dx *= -1 // ball.dx = ball.dx * -1
    }

    // Wall collision (top/bottom)
    if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
      ball.dy *= -1
    }

    // console.log(ball.x, ball.y);

    // Paddle collision
    if (
      ball.x - ball.size > paddle.x &&
      ball.x + ball.size < paddle.x + paddle.w &&
      ball.y + ball.size > paddle.y
    ) {
      ball.dy = -ball.speed
    }

    // Brick collision
    bricks.forEach((column) => {
      column.forEach((brick) => {
        if (brick.visible) {
          if (
            ball.x - ball.size > brick.x && // left brick side check
            ball.x + ball.size < brick.x + brick.w && // right brick side check
            ball.y + ball.size > brick.y && // top brick side check
            ball.y - ball.size < brick.y + brick.h // bottom brick side check
          ) {
            ball.dy *= -1
            brick.visible = false

            increaseScore(canvas)
          }
        }
      })
    })

    // Hit bottom wall - Lose
    if (ball.y + ball.size > canvas.height) {
      showAllBricks()
      score = 0
    }
  }

  const draw = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall(ctx, ball)
    drawPaddle(ctx, paddle)
    drawScore(ctx, score, canvas)
    drawBricks(ctx, 9, 5)
  }

  //set up canvas with useRef
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    fix_dpi(canvas)

    let requestId

    const update = () => {
      movePaddle(canvas)
      moveBall(canvas)
      draw(ctx, canvas)
      requestId = requestAnimationFrame(update)
    }

    update()

    return () => {
      window.cancelAnimationFrame(requestId)
    }
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
          <Grid container direction="column" spacing={2}>
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
