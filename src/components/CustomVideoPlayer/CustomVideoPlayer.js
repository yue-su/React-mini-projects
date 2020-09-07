import React, { useState, useEffect } from "react"
import {
  Grid,
  Box,
  Card,
  CardMedia,
  CardActionArea,
} from "@material-ui/core"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import PauseIcon from "@material-ui/icons/Pause"
import ReplayIcon from "@material-ui/icons/Replay"
import doggy from "../../video/doggy.mp4"
import Description from "./Description"


const CustomVideoPlayer = () => {

const [video, setVideo] = useState(null)
const [currentTime, setCurrentTime] = useState(0)
const [length, setLength] = useState(null)

//once the dom rendered, set the video with the actually dom element.
//this can not be done by const video = document.getElementByID, becasue the first time it runs the dom has not been rendered.
  useEffect(() => {
    const video = document.getElementById("video")
    setVideo(video)

    setInterval(() => {
      setCurrentTime(video.currentTime)
    }, 10)
  }, [])


  const duration = () => {
    const duration = video.duration.toFixed()
    setLength(duration)
}

const handleMeta = (event) => {
  const { duration } = event.target
  setLength(duration)
}

const handelPlay = () => {
  duration()
  video.play()
}

const handlePause = () => {
  video.pause()
}

const handleReplay = () => {
  video.load()
  video.play()
}

const handleTime = (event) => {
  const { value } = event.target
  video.currentTime = value
  setCurrentTime(value)
}

    
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
          <Card>
            <CardMedia
              id="video"
              component="video"
              src={doggy}
              onLoadedMetadata={handleMeta}
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
                value={currentTime}
                step={0.1}
                min={0}
                max={length}
              />
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

export default CustomVideoPlayer
