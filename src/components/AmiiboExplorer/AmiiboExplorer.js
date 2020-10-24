import React, { useEffect, useState } from "react"
import { Grid, Box, Typography, Button, Select, InputLabel } from "@material-ui/core"
import Description from "./Description"
import axios from "axios"


const AmiiboExplorer = () => {

    const [series, setSeries] = useState([])
    const [amiiboList, setAmiiboList] = useState([])

    useEffect(() => {
        axios
            .get(`https://www.amiiboapi.com/api/amiiboseries`)
            .then(res => {
            setSeries(res.data.amiibo)
        })
    },[])

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
                                
                            
                            >

                            </Select>
                        </Grid>

              </Grid>
            </Box>
          </Grid>
          <Description />
        </Grid>
      
    )
}

export default AmiiboExplorer
