import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import { Box, Container } from '@material-ui/core';
import { theme } from "../components/theme"
import { ThemeProvider } from "@material-ui/core/styles"
import Home from './Home/Home';
import Header from './Home/Header';
import Footer from './Home/Footer';
import MovieSeatBooking from './MovieSeatBooking/MovieSeatBooking';
import CustomVideoPlayer from './CustomVideoPlayer/CustomVideoPlayer';
import ExchangeRateCalculator from './ExchangeRateCalculator/ExchangeRateCalculator';


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
              <Route path="/custom-video-player" component={CustomVideoPlayer} />
              <Route path="/exchange-rate-calculator" component={ExchangeRateCalculator} />
            </Switch>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App;
