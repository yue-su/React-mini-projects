import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {Link} from '@material-ui/core'

const Home = () => {
    return (
      <div>
        <Link component={RouterLink} to="/movie" color='primary' underline='none'>
          Movie Seat Booking
        </Link>
      </div>
    )
}

export default Home
