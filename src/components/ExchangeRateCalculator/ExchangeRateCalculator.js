import React, { useEffect, useState } from "react"
import {
  Grid,
  Box,
  Select,
  InputLabel,
  Input,
  MenuItem,
  Typography,
} from "@material-ui/core"
import Description from "./Description"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import Axios from "axios"

//The sub grid could be changed to column stacks to better accommodate larger apps

const APIkey = "eb9a635aa55f4df3f697a7e7"

const ExchangeRateCalculator = () => {

  const [currency, setCurrency] = useState([])
  const [rate, setRate] = useState(null)
  const [currencyFrom, setCurrencyFrom] = useState({ currency: "USD", rate: 1 })
  const [currencyTo, setCurrencyTo] = useState({ currency: "CAD", rate: "" })

  const getRates = (currency) => {
    Axios.get(
      `https://v6.exchangerate-api.com/v6/${APIkey}/latest/${currency}`
    ).then((res) => {
      setRate(res.data.conversion_rates)
      setCurrency(Object.keys(res.data.conversion_rates))
      setCurrencyTo({
        ...currencyTo,
        rate: res.data.conversion_rates[`${currencyTo.currency}`],
      })
    })
  }

  useEffect(() => {
    getRates(currencyFrom.currency)
  }, [])

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  const handleChangeFrom = (event) => {
    setCurrencyFrom({
      ...currencyFrom,
      currency: event.target.value,
    })
    getRates(event.target.value)
  }
  const handleChangeTo = (event) => {
    setCurrencyTo({
      currency: event.target.value,
      rate: rate[`${event.target.value}`],
    })
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
          <Grid container justify="space-between">
            <Grid item>
              <InputLabel id="currencyFrom-label">From</InputLabel>
              <Select
                labelId="currencyFrom-label"
                id="currencyFrom"
                value={currencyFrom.currency}
                onChange={handleChangeFrom}
                input={<Input />}
                MenuProps={MenuProps}
              >
                {currency.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item>
              <MonetizationOnIcon />
              <Typography>{currencyTo.rate}</Typography>
            </Grid>
            <Grid item>
              <InputLabel id="currencyFrom-label">To</InputLabel>
              <Select
                labelId="currencyFrom-label"
                id="currencyFrom"
                value={currencyTo.currency}
                onChange={handleChangeTo}
                input={<Input />}
                MenuProps={MenuProps}
              >
                {currency.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

export default ExchangeRateCalculator
