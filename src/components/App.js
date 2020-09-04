import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import MovieSeatBooking from './movie/MovieSeatBooking';
import Home from './Home/Home';
import Header from './Home/Header';
import Footer from './Home/Footer';
import { Box } from '@material-ui/core';



function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flexGrow={1}>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie" component={MovieSeatBooking} />
        </Switch>
      </Box>
      <Footer />
    </Box>
  )
}

export default App;
