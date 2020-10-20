import React, { useEffect, useState } from "react"
import {
  Grid,
  Box,
  Typography,
  TextField,
  Paper,
  Button,
} from "@material-ui/core"
import Description from "./Description"
import shortid from "shortid"

const ExpenseTracker = () => {
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [form, setForm] = useState({ text: "", amount: 0 })
  const [list, setList] = useState([])

  useEffect(() => {
    setBalance(income - expense)
  }, [expense, income])

  const handleForm = (event) => {
    const { name, value } = event.target
    //console.log(name, value)
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    if (form.amount > 0) {
      setIncome(income + Number(form.amount))
    } else {
      let contra = -form.amount
      setExpense(expense + Number(contra))
    }
      setList([...list, form])
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
                Expense Tracker
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">YOUR BALANCE:</Typography>
              <Typography>${balance}</Typography>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item xs={6} align="center">
                <Paper>
                  <Typography>INCOME</Typography>
                  <Typography>${income}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} align="center">
                <Paper>
                  <Typography>EXPENSE</Typography>
                  <Typography>${expense}</Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>History</Typography>
              <hr />
            </Grid>
            <Grid item container direction="column-reverse">
              {list.map((item) => {
                return (
                  <Grid item key={shortid.generate()}>
                    <Paper>
                      <Typography>{item.text}</Typography>
                      <Typography>{item.amount}</Typography>
                    </Paper>
                  </Grid>
                )
              })}
            </Grid>
            <Grid item>
              <Typography>Add new transaction</Typography>
              <hr />
              <form>
                <Typography>Text</Typography>
                <TextField
                  name="text"
                  id="outlined-basic"
                  label="Enter text"
                  variant="standard"
                  value={form.text}
                  onChange={handleForm}
                />
                <Typography>Amount</Typography>
                <Typography>(negative - expense, positive - income)</Typography>
                <TextField
                  onChange={handleForm}
                  name="amount"
                  id="outlined-basic"
                  label="Enter amount"
                  variant="standard"
                  value={form.amount}
                  type="number"
                />
              </form>
              <br />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}
export default ExpenseTracker
