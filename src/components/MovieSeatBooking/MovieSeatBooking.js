import React, { useState, useEffect } from "react"
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  Button,
  Grid,
} from "@material-ui/core"
import EventSeatIcon from "@material-ui/icons/EventSeat"
import Description from "./Description"

// asign local value from localstorage or from a empty obj
const initialCinema = JSON.parse(localStorage.getItem("movieData")) || {
  price: 10,
  seatNumber: 100,
  seatArr: [],
  totalPrice: 0,
}

const MovieSeatBooking = () => {
  const [cinema, setCinema] = useState(initialCinema)

  //update price
  const handleChange = (event) => {
    const { value } = event.target
    setCinema({
      ...cinema,
      price: value,
    })
  }
  //update seats
  const handleInput = (event) => {
    const { value } = event.target
    setCinema({
      ...cinema,
      seatNumber: value,
    })
  }

  //toggle color and booked state, come up with a total price
  const handleClick = (id) => {
    const newArr = [...cinema.seatArr]
    newArr.forEach((item) => {
      if (item.id === id) {
        item.booked = !item.booked
        if (item.color === "primary") {
          item.color = "secondary"
        } else item.color = "primary"
      }
    })
    setCinema({
      ...cinema,
      seatArr: newArr,
    })

    const bookedSeats = newArr.filter((item) => item.booked === true)
    const newTotalPrice = cinema.price * bookedSeats.length
    setCinema({
      ...cinema,
      totalPrice: newTotalPrice,
    })
  }

  useEffect(() => {
    //initalize the seat array once the component mounted or the seatnumber changed
    //if the localstory is true, user can not change the seat-number (will overwrite by the local storage)
    let newArr = []
    for (let i = 0; i < cinema.seatNumber; i++) {
      newArr.push({ id: i, booked: false, color: "primary" })
    }
    setCinema(
      localStorage.getItem("movieData")
        ? JSON.parse(localStorage.getItem("movieData"))
        : {
            ...cinema,
            seatArr: newArr,
          }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cinema.seatNumber])

  const handleSave = () => {
    localStorage.setItem("movieData", JSON.stringify(cinema))
  }

  const handleClear = () => {
    localStorage.clear()
    clearSeat()
  }

  const clearSeat = () => {
    let newArr = []
    for (let i = 0; i < cinema.seatNumber; i++) {
      newArr.push({ id: i, booked: false, color: "primary" })
    }
    setCinema({
      price: cinema.price,
      seatNumber: cinema.seatNumber,
      totalPrice: 0,
      seatArr: newArr,
    })
  }

  return (
    <Grid container spacing={1}>
      <Grid item md={6} xs={12}>
        <Grid container justify="center" direction="column" spacing={2}>
          <Grid item container justify="center">
            <Typography variant="h6">Movie Seat Booking</Typography>
          </Grid>
          <Grid item container spacing={2} justify="center">
            <Grid item>
              <FormControl>
                <InputLabel id="ticket-price">Price</InputLabel>
                <Select
                  labelId="ticket-price"
                  name="price"
                  onChange={handleChange}
                  value={cinema.price}
                >
                  <MenuItem value={10}>$10</MenuItem>
                  <MenuItem value={15}>$15</MenuItem>
                  <MenuItem value={20}>$20</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  label="Total Seat Number"
                  name="seatNumber"
                  onChange={handleInput}
                  value={cinema.seatNumber}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Typography>Cinema</Typography>
            </Grid>
            <Grid item>
              <Box display="flex" flexWrap="wrap" width="250px">
                {cinema.seatArr.map((seat) => {
                  return (
                    <Box key={seat.id} width="25px">
                      <EventSeatIcon
                        color={seat.color}
                        onClick={() => handleClick(seat.id)}
                      />
                    </Box>
                  )
                })}
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            spacing={1}
            alignItems="center"
          >
            <Grid item>
              <Typography>Total Price is ${cinema.totalPrice}</Typography>
            </Grid>
            <Grid item container justify="center" spacing={1}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Description />
    </Grid>
  )
}

export default MovieSeatBooking
