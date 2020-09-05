import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import MovieSeatBooking from './MovieSeatBooking/MovieSeatBooking';
import Home from './Home/Home';
import Header from './Home/Header';
import Footer from './Home/Footer';
import { Box, Container } from '@material-ui/core';

import { theme } from "../components/theme"
import { ThemeProvider } from "@material-ui/core/styles"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        bgcolor="background.default"
      >
        <Box flexGrow={1}>
          <Container maxWidth="md">
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/movie-seat-booking" component={MovieSeatBooking} />
            </Switch>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App;
