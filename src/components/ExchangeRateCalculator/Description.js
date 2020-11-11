import React from "react"
import { Typography, Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined"
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined"

const useStyles = makeStyles(() => ({
  container: {
    padding: "1.5rem",
  },
}))

const Description = () => {
  const classes = useStyles()

  return (
    <Grid item md={6} xs={12}>
      <Paper className={classes.container}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Typography variant="subtitle1">
              <GradeOutlinedIcon />
              Features:
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              • Exchange rate data pulled from a public API
            </Typography>
            <Typography>• Flags image changes accordingly</Typography>
            <Typography>
              • Input the amount and get the total converted currency
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              <EmojiObjectsOutlinedIcon />
              Height:
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              • A javascript keys() function for returning an array of an
              objects' key. In this case, the API returns an array of conversion
              rates object with the key of country code and value of the rates.
              The keys() function is used to extract the key of country code.
            </Typography>
            <Typography>
              • A select component as well as MenuItem component are employed to
              format the select dropdown menu
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Description
