import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import MovieSeatBooking from './movie/MovieSeatBooking';
import Home from './Home';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path ='/' component={Home}  exact />
        <Route path='/movie' component={MovieSeatBooking} />
      </Switch>

    </div>
  );
}

export default App;
