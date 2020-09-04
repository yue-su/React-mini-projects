import React, { Component } from 'react'
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
import doggy from "../../video/doggy.mp4"

export default class VideoPlayerClassRe extends Component {

    constructor() {
        super()
this.state = {
  video: null,
  currentTime: 0,
  length: null,
}
    }

    componentDidMount() {
        const video = document.getElementById("video")
        const duration = video.duration.toFixed()
        this.setState({
            video: video,
            length: duration
        })

        setInterval(()=>{this.setState({currentTime: video.currentTime})}, 10)
    }

    handleMeta = event => {
        const { duration } = event.target
    }

    handlePlay = () => { this.state.video.play() }
    handlePause = () => { this.state.video.pause() }
    handlePeplay = () => { this.state.video.load() }
    handleTime = (event) => { 
        const { value } = event.target
        let currentTime = this.state.video.currentTime
        currentTime = value
        this.setState({currentTime: value})
     }

    render() {
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
                  src={doggy}
                  autoPlay
                  loop
                  onLoadedMetadata={this.handleMeta}
                ></CardMedia>
                <CardActionArea>
                  <PlayArrowIcon onClick={this.handelPlay} />
                  <PauseIcon onClick={this.handlePause} />
                  <ReplayIcon onClick={this.handleReplay} />
                  <input
                    type="range"
                    id="slider"
                    name="slider"
                    onChange={this.handleTime}
                    value={this.state.currentTime}
                    step={0.1}
                    min={0}
                    max={this.state.length}
                  />
                </CardActionArea>
              </Card>
            </Container>
          </div>
        )
    }
}
