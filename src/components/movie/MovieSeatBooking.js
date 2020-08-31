import React, { useState, useEffect } from 'react'
import { Typography, Container, FormControl, InputLabel, Select, MenuItem, Box, TextField, Button } from '@material-ui/core'
import EventSeatIcon from "@material-ui/icons/EventSeat"

const initialPrice = 10
const initialSeatArr = []
const initalTotalPrice = 0

const MovieSeatBooking = () => {

    const [price, setPrice] = useState(initialPrice)
    const [seatNumber, setSeatNumber] = useState(100)
    const [seatArr, setSeatArr] = useState(initialSeatArr)
    const [totalPrice, setTotalPrice] = useState(initalTotalPrice)
    
    const handleChange = event => {
        const { value } = event.target
        setPrice(value)
    }

    const handleInput = event => {
        const { value } = event.target
        setSeatNumber(value)
    }

    const handleClick = id => {
        const newArr = [...seatArr]
        newArr.forEach(item => {
            if (item.id === id) {
                item.color = 'secondary'
                item.booked = true
            }
        })
        setSeatArr(newArr)
        const bookedSeats = newArr.filter(item => item.booked === true)
        const newTotalPrice = price * bookedSeats.length
        setTotalPrice(newTotalPrice)
    }

    useEffect(() => {
        //initalize the seat array once the component mounted or the seatnumber changed
        let newArr = []
        for (let i = 0; i < seatNumber; i++) {
            newArr.push({id: i, booked: false, color: 'primary'})
        }
        setSeatArr(newArr)
    },[seatNumber])

    return (
      <div>
        <Typography variant="h2" align="center">
          Movie Seat Booking
        </Typography>
        <Container>
          <FormControl>
            <InputLabel id="ticket-price">Price</InputLabel>
            <Select
              labelId="ticket-price"
              name="price"
              onChange={handleChange}
              defaultValue={10}
            >
              <MenuItem value={10}>$10</MenuItem>
              <MenuItem value={15}>$15</MenuItem>
              <MenuItem value={20}>$20</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              label="seat-number"
              name="seatNumber"
              onChange={handleInput}
              value={seatNumber}
            />
          </FormControl>
          <Box>
            <Typography>Cinema</Typography>
            <Box display="flex" flexWrap="wrap" width="250px">
              {seatArr.map((seat) => {
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
          </Box>
          <Typography>Total Price is ${totalPrice}</Typography>
          <Button variant="contained" color='primary'>Save</Button>
          <Button variant="contained" color='secondary'>Clear</Button>
        </Container>
      </div>
    )
}


export default MovieSeatBooking
