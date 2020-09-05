import React from 'react'
import { Typography, Box, Container } from '@material-ui/core'

const Footer = () => {
    return (
      <Container>
        <Box my={4}>
          <Typography variant="h6" align="center">
            Made by Yue @ Lambda School
          </Typography>
        </Box>
      </Container>
    )
}

export default Footer
