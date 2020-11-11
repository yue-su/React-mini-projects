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
              • The price and seat number are adjustable, and the seat map will
              change accordingly
            </Typography>
            <Typography>• Click the seats and get the total price</Typography>
            <Typography>
              • Save the current selection to local storage
            </Typography>
            <Typography>• Clear the storage and start over</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              <EmojiObjectsOutlinedIcon />
              Height:
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              • Initiate the local state with values from local storage
            </Typography>
            <Typography>
              • Initiate the seat map in useEffect with the seat number
            </Typography>
            <Typography>
              • Track the seat number: if the number changes, re-initiate the
              seat map
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Description
