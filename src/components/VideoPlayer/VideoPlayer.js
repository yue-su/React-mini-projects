/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import {
  Typography,
  Container,
  Card,
  CardMedia,
  CardActionArea,
} from "@material-ui/core"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import PauseIcon from "@material-ui/icons/Pause"
import ReplayIcon from "@material-ui/icons/Replay"
//import StopIcon from "@material-ui/icons/Stop"

import doggy from "../../video/doggy.mp4"
import gone from "../../video/gone.mp4"

const initialState = {
  paused: false,
  currentTime: 0,
  length: null,
}

const VideoPlayer = () => {
  const [state, setState] = useState(initialState)

  //once the dom rendered, set the video with the actually dom element.
  //this can not be done by const video = document.getElementByID, becasue the first time it runs the dom has not been rendered.
  useEffect(() => {
    const video = document.getElementById("video")
    let dur = document.getElementById("video").duration
    dur = dur.toFixed()

    setState({
      ...state,
      length: dur,
    })

    setInterval(() => {
        setState({
            ...state,
            currentTime: video.currentTime,
            length: dur,
        })
    }, 10)

    setInterval(() => {
      //console.log(state.length)
    }, 1000)
  }, [])

  const handelPlay = () => {
    const video = document.getElementById("video")
    video.play()
  }

  const handlePause = () => {
    const video = document.getElementById("video")
    video.pause()
  }

  const handleReplay = () => {
    const video = document.getElementById("video")
    video.load()
    video.play()
  }

  const handleTime = (event) => {
    const video = document.getElementById("video")
    const { value } = event.target
    video.currentTime = value
    setState({ ...state, currentTime: value })
    //console.log(value)
  }

  return (
    <div>
      <Typography variant="h2" align="center">
        Video Player
      </Typography>
      <Container>
        <Card>
          <CardMedia
            id="video"
            component="video"
            src={gone}
            autoPlay
          ></CardMedia>
          <CardActionArea>
            <PlayArrowIcon onClick={handelPlay} />
            <PauseIcon onClick={handlePause} />
            <ReplayIcon onClick={handleReplay} />
            <input
              type="range"
              id="slider"
              name="slider"
              onChange={handleTime}
              value={state.currentTime}
              step={0.1}
              min={0}
              max={state.length}
            />
          </CardActionArea>
        </Card>
      </Container>
    </div>
  )
}

export default VideoPlayer
