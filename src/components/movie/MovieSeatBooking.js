import React, { useState, useEffect } from 'react'
import { Typography, Container, FormControl, InputLabel, Select, MenuItem, Box, TextField, Button } from '@material-ui/core'
import EventSeatIcon from "@material-ui/icons/EventSeat"


const initialCinema = JSON.parse(localStorage.getItem('movieData')) || {
    price: 10,
    seatNumber: 100,
    seatArr: [],
    totalPrice: 0,
}

const MovieSeatBooking = () => {

    const [cinema, setCinema] = useState(initialCinema)
    
    const handleChange = event => {
        const { value } = event.target
        setCinema({
            ...cinema,
            price: value
        })
    }

    const handleInput = event => {
        const { value } = event.target
        setCinema({
            ...cinema,
            seatNumber:value
        })
    }

    const handleClick = id => {
        const newArr = [...cinema.seatArr]
        newArr.forEach(item => {
            if (item.id === id) {
                item.booked = !item.booked
                if (item.color === 'primary') { item.color = 'secondary' }
                else(item.color = 'primary')
            }
        })
        setCinema({
            ...cinema,
            seatArr: newArr
        })
        const bookedSeats = newArr.filter(item => item.booked === true)
        const newTotalPrice = cinema.price * bookedSeats.length
        setCinema({
            ...cinema,
            totalPrice: cinema.totalPrice + newTotalPrice
        })
    }

    useEffect(() => {
        //initalize the seat array once the component mounted or the seatnumber changed
        //if the localstory is true, user can not change the seat-number
        let newArr = []
        for (let i = 0; i < cinema.seatNumber; i++) {
            newArr.push({id: i, booked: false, color: 'primary'})
        }
        setCinema(
            localStorage.getItem('movieData') ? 
            JSON.parse(localStorage.getItem('movieData')) :
            {
            ...cinema,
            seatArr: newArr
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cinema.seatNumber])
    
    const handleSave = () => {
        localStorage.setItem('movieData', JSON.stringify(cinema))
     }

    const handleClear = () => {
        localStorage.clear()
        setCinema({
          price: 10,
          seatNumber: 100,
          seatArr: [],
          totalPrice: 0,
        })
     }

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
              value={cinema.price}
            >
              <MenuItem value={10}>$10</MenuItem>
              <MenuItem value={15}>$15</MenuItem>
              <MenuItem value={20}>$20</MenuItem>
            </Select>
          </FormControl>
          <FormControl >
            <TextField
              label="seat-number"
              name='seatNumber'
              onChange={handleInput}
            value={cinema.seatNumber}             
            />
          </FormControl>
          <Box>
            <Typography>Cinema</Typography>
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
          </Box>
          <Typography>Total Price is ${cinema.totalPrice}</Typography>
          <Button variant="contained" color='primary' onClick={handleSave}>Save</Button>
          <Button variant="contained" color='secondary' onClick={handleClear}>Clear</Button>
        </Container>
      </div>
    )
}


export default MovieSeatBooking
