import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {Link, Container} from '@material-ui/core'

const Home = () => {
    return (
      <div>
        <Container>
          <Link
            component={RouterLink}
            to="/movie"
            color="primary"
            underline="none"
          >
            Movie Seat Booking
          </Link>
          <Link
            component={RouterLink}
            to="/video-player"
            color="primary"
            underline="none"
          >
            Video Player
          </Link>
        </Container>
      </div>
    )
}

export default Home
