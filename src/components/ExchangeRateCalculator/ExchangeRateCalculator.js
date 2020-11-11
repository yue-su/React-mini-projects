import React, { useEffect, useState } from "react"
import {
  Grid,
  Box,
  Select,
  InputLabel,
  Input,
  MenuItem,
  Typography,
  TextField,
  Avatar,
} from "@material-ui/core"
import Description from "./Description"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import Axios from "axios"
import { makeStyles } from "@material-ui/core/styles"

//The sub grid could be changed to column stacks to better accommodate larger apps

const APIkey = "eb9a635aa55f4df3f697a7e7"

const useStyles = makeStyles({
  grid: {
    height: "400px",
    border: "1px dotted black",
    borderRadius: "4px",
  },
})

const ExchangeRateCalculator = () => {
  const classes = useStyles()

  const [currency, setCurrency] = useState([])
  const [rate, setRate] = useState(null)
  const [currencyFrom, setCurrencyFrom] = useState({
    currency: "USD",
    rate: 1,
    amount: 1,
  })
  const [currencyTo, setCurrencyTo] = useState({
    currency: "CAD",
    rate: "",
    amount: "",
  })

  const getRates = (currency) => {
    Axios.get(
      `https://v6.exchangerate-api.com/v6/${APIkey}/latest/${currency}`
    ).then((res) => {
      setRate(res.data.conversion_rates)
      setCurrency(Object.keys(res.data.conversion_rates))
      setCurrencyTo({
        ...currencyTo,
        rate: res.data.conversion_rates[`${currencyTo.currency}`],
        amount: res.data.conversion_rates[`${currencyTo.currency}`],
      })
    })
  }

  useEffect(() => {
    getRates(currencyFrom.currency)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      ...currencyTo,
      currency: event.target.value,
      rate: rate[`${event.target.value}`],
    })
  }

  const handleChangeAmount = (event) => {
    setCurrencyFrom({
      ...currencyFrom,
      amount: event.target.value,
    })
    setCurrencyTo({
      ...currencyTo,
      amount: event.target.value * rate[`${currencyTo.currency}`],
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
          py={4}
        >
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h6">Real Time ExchangeRate</Typography>
            </Grid>
            <Grid item container spacing={2}>
              <Grid
                item
                sm={4}
                container
                direction="column"
                className={classes.grid}
                justify="space-between"
              >
                <Grid item>
                  <Typography>Select currency</Typography>
                  <Typography>From:</Typography>
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
                  <Typography>Input Amount:</Typography>
                  <InputLabel id="amount">Amount</InputLabel>
                  <TextField
                    labelId="amount"
                    value={currencyFrom.amount}
                    onChange={handleChangeAmount}
                  ></TextField>
                </Grid>
                <Grid item container justify="center">
                  <Avatar
                    src={`https://www.countryflags.io/${
                      currencyFrom.currency[0] + currencyFrom.currency[1]
                    }/flat/64.png`}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                sm={4}
                container
                justify="space-between"
                alignItems="center"
                direction="column"
              >
                <Grid item>
                  <Typography>Rate</Typography>
                  <Typography>{currencyTo.rate}</Typography>
                </Grid>
                <Grid item>
                  <Typography>Equals</Typography>
                </Grid>
                <Grid item>
                  <MonetizationOnIcon />
                </Grid>
              </Grid>
              <Grid
                item
                sm={4}
                container
                justify="space-between"
                direction="column"
                className={classes.grid}
              >
                <Grid item>
                  <Typography>Select currency</Typography>
                  <Typography>To:</Typography>
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
                <Grid item>
                  <Typography>Total:</Typography>
                  <br />
                  <Typography>{currencyTo.amount}</Typography>
                </Grid>
                <Grid item container justify="center">
                  <Avatar
                    src={`https://www.countryflags.io/${
                      currencyTo.currency[0] + currencyTo.currency[1]
                    }/flat/64.png`}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

export default ExchangeRateCalculator
