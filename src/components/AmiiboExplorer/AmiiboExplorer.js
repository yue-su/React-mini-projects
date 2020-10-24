import React, { useEffect, useState } from "react"
import { Grid, Box, Typography, Select, InputLabel, Input, MenuItem } from "@material-ui/core"
import Description from "./Description"
import axios from "axios"


const AmiiboExplorer = () => {

    const [serie, setSerie] = useState('')
    const [series, setSeries] = useState([])
    const [amiiboList, setAmiiboList] = useState([])

    useEffect(() => {
        axios
            .get(`https://www.amiiboapi.com/api/amiiboseries`)
            .then(res => {
                setSeries(res.data.amiibo)
                console.log(res.data.amiibo)
            })
        axios
            .get(`https://www.amiiboapi.com/api/amiibo/`)
            .then(res => {
            setAmiiboList(res.data.amiibo)
        })
    }, [])
    
    const handleChange = event => {
        setSerie(event.target.value)
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
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography variant='h6' align='center'>Amiibo Explorer</Typography>
                        </Grid>
                        <Grid item>
                            <InputLabel id="serie">Choose a serie</InputLabel>
                            <Select
                                labelId='serie'
                                value={serie}
                                onChange={handleChange}
                                input={<Input />}
                            >
                                {
                                    series.map(item => (
                                        <MenuItem key={item.key} value={item.name}>{item.name}</MenuItem>
                                    ))
                            }
                            </Select>
                        </Grid>
                        <Grid item>
                            
                        </Grid>

              </Grid>
            </Box>
          </Grid>
          <Description />
        </Grid>
      
    )
}

export default AmiiboExplorer
