import React from 'react'
import { Grid, Box, Typography, TextField } from "@material-ui/core"
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
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h6" align="center">
                  Expense Tracker
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">YOUR BALANCE:</Typography>
                <Typography>$200</Typography>
              </Grid>
              <Grid item container>
                <Grid item xs={6} align="center">
                  <Typography>INCOME</Typography>
                  <Typography>$300</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>EXPENSE</Typography>
                  <Typography>$100</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography>History</Typography>
                <hr />
                List place holder
              </Grid>
              <Grid item>
                <Typography>Add new transaction</Typography>
                <hr />
                <form>
                  <Typography>Text</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Enter text"
                    variant="standard"
                  />
                  <Typography>Amount</Typography>
                  <Typography>
                    (negative - expense, positive - income)
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Enter amount"
                    variant="standard"
                  />
                </form>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Description />
      </Grid>
    )
}
export default ExpenseTracker
