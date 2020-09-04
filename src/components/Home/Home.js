import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {Link, Container, Card, CardMedia, CardContent, Typography, CardActions} from '@material-ui/core'
import hero from '../../images/hero.jpg'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  media: {
    height: 140,
  },
})

const Home = () => {

  const classes = useStyles()

    return (
      <Container>
        <Card>
          <CardMedia className={classes.media} src={hero} component="img" />
          <CardContent>
            <Typography>Introduction</Typography>
            <Typography></Typography>
          </CardContent>
          <CardActions>

          </CardActions>
        </Card>
        


        <Link
          component={RouterLink}
          to="/movie"
          color="primary"
          underline="none"
        >
          Movie Seat Booking
        </Link>
      </Container>
    )
}

export default Home
