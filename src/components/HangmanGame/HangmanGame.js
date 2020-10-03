import React from "react"
import { Grid, Box } from "@material-ui/core"
import Description from "./Description"
import "./HangmanGame.css"

const HangmanGame = () => {
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
          <Grid container>
            <Grid item></Grid>
            <Grid item>
              {/*Rod*/}
              <svg height="250" width="200" className="svg-container">
                <line x1="60" y1="20" x2="140" y2="20" />
                <line x1="140" y1="20" x2="140" y2="50" />
                <line x1="60" y1="20" x2="60" y2="230" />
                <line x1="20" y1="230" x2="100" y2="230" />
                {/*Head*/}
                <circle cx="140" cy="70" r="20" className="body" />
                {/*Body*/}
                <line x1="140" y1="90" x2="140" y2="150" className="body" />
                <line x1="140" y1="120" x2="120" y2="100" className="body" />
                <line x1="140" y1="120" x2="160" y2="100" className="body" />
                <line x1="140" y1="150" x2="120" y2="180" className="body" />
                <line x1="140" y1="150" x2="160" y2="180" className="body" />
              </svg>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Description />
    </Grid>
  )
}

export default HangmanGame
