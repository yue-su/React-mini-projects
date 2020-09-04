import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {Link} from '@material-ui/core'

const Home = () => {
    return (
      <div>
        <Link component={RouterLink} to="/movie" color='primary' underline='none'>
          Movie Seat Booking
        </Link>
        <Link component={RouterLink} to='/video-player' color='primary' underline='none'>
          Video Player
        </Link>
      </div>
    )
}

export default Home
