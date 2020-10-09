import React from 'react'
import {  Grid,  Box } from "@material-ui/core"
import Description from "./Description"

const ExpenseTracker = () => {
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
                    <Grid container direction="column" >
                        <Grid item>
                            
                        </Grid>
                    </Grid>
        </Box>
            </Grid>
            <Description />
        </Grid>
    )
}
export default ExpenseTracker
