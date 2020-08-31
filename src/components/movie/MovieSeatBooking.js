import React, { useState } from 'react'
import { Typography, Container, FormControl, InputLabel, Select, MenuItem, Box } from '@material-ui/core'
import EventSeatIcon from "@material-ui/icons/EventSeat"

const initialPrice = 0
const initialSeats = []

const MovieSeatBooking = () => {

    const [price, setPrice] = useState(initialPrice)
    
    const handleChange = event => {
        const { value } = event.target
        setPrice(value)
    }

    return (
        <div>
            <Typography variant='h2' align='center'>Movie Seat Booking</Typography>
            <Container>
                <FormControl>
                    <InputLabel id='ticket price'>Price</InputLabel>
                    <Select
                        labelId='ticket price'
                        name='price'
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>$10</MenuItem>
                        <MenuItem value={15}>$15</MenuItem>
                        <MenuItem value={20}>$20</MenuItem>   
                    </Select>
                </FormControl>
                <Box>
                    <Typography>{price}</Typography>

                </Box>
            </Container>
        </div>
    )
}

export default MovieSeatBooking
