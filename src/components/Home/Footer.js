import React from "react"
import { Typography, Box } from "@material-ui/core"
import { purple } from "@material-ui/core/colors"

const Footer = () => {
  return (
    <Box py={4} mt={4} bgcolor={purple[600]}>
      <Typography variant="h6" align="center" color="textSecondary">
        Made by Yue @ Lambda School
      </Typography>
    </Box>
  )
}

export default Footer
