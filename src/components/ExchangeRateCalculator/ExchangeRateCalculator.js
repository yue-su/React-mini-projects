import React, { useEffect, useState } from "react"
import { Grid, Box, Select, InputLabel, Input, MenuItem } from "@material-ui/core"
import Description from "./Description"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Axios from "axios"

//The sub grid could be changed to column stacks to better accommodate larger apps

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}))

const APIkey = "eb9a635aa55f4df3f697a7e7"

const ExchangeRateCalculator = () => {
  const classes = useStyles()
  const theme = useTheme()

  
  const [currency, setCurrency] = useState([])
  const [exchangeRate, setExchangeRate] = useState(null)
  const [currencyFrom, setCurrencyFrom] = useState({currency: 'USD', rate: 1})
  const [currencyTo, setCurrencyTo] = useState({currency:'', rate:''})

  
  useEffect(() => {
    Axios.get(
      `https://v6.exchangerate-api.com/v6/${APIkey}/latest/${setCurrencyFrom}`
      ).then(res => {
        setExchangeRate(res.data.conversion_rates)
        setCurrency(Object.keys(res.data.conversion_rates))
      })
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
  
  function getStyles(name, array, theme) {
    return {
      fontWeight:
        array.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    }
  }
    
  const handleChangeFrom = (event) => {
      
      setCurrencyFrom({
        ...setCurrencyFrom,
        currency: event.target.value
      })
    }
    const handleChangeTo = (event) => {
      setCurrencyTo(event.target.value)
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
          <MonetizationOnIcon />
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
              <MenuItem key={item} value={item} style={getStyles(item,currencyFrom,theme)}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <InputLabel id="currencyFrom-label">To</InputLabel>
          <Select
            labelId="currencyFrom-label"
            id="currencyFrom"
            value={currencyTo}
            onChange={handleChangeTo}
            input={<Input />}
            MenuProps={MenuProps}
          >
            {currency.map((item) => (
              <MenuItem key={item} value={item} style={getStyles(item,currencyTo,theme)}>
                {item}
              </MenuItem>
            ))}
          </Select>

        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

export default ExchangeRateCalculator
