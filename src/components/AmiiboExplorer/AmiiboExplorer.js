import React, { useEffect, useState } from "react"
import {
  Grid,
  Box,
  Typography,
  Select,
  InputLabel,
  Input,
  MenuItem,
  Paper,
  Avatar,
} from "@material-ui/core"
import Description from "./Description"
import axios from "axios"
import CachedIcon from "@material-ui/icons/Cached"

const AmiiboExplorer = () => {
  const [serie, setSerie] = useState("")
  const [series, setSeries] = useState([])
  const [amiiboList, setAmiiboList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://www.amiiboapi.com/api/amiiboseries`).then((res) => {
      setSeries(res.data.amiibo)
    })
    axios.get(`https://www.amiiboapi.com/api/amiibo/`).then((res) => {
      setIsLoading(false)
      setAmiiboList(res.data.amiibo)
    })
  }, [])

  const handleChange = (event) => {
    const { value } = event.target
    setSerie(value)
    setAmiiboList([])
    setIsLoading(true)
    axios
      .get(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=${value}`)
      .then((res) => {
        setIsLoading(false)
        setAmiiboList(res.data.amiibo)
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
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h6" align="center">
                Amiibo Explorer
              </Typography>
            </Grid>
            <Grid item>
              <InputLabel id="serie">Choose a serie</InputLabel>
              <Select
                labelId="serie"
                value={serie}
                placeholder="select your game serie"
                onChange={handleChange}
                input={<Input />}
              >
                {series.map((item) => (
                  <MenuItem key={item.key} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid
              item
              container
              spacing={2}
              justify="center"
              alignItems="center"
            >
              {isLoading && <CachedIcon />}

              {amiiboList.map((item) => {
                return (
                  <Grid key={item.tail} item>
                    <Paper>
                      <Box display="flex">
                        <Avatar src={item.image} />
                        <Typography variant="subtitle2">{item.name}</Typography>
                      </Box>
                    </Paper>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

export default AmiiboExplorer
