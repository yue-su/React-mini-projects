import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import MovieSeatBooking from './movie/MovieSeatBooking';
import Home from './Home';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayerClass from './VideoPlayer/VideoPlayerClass';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path ='/' component={Home}  exact />
        <Route path='/movie' component={MovieSeatBooking} />
        <Route path='/video-player' component={VideoPlayer} />
        <Route path='/video-player-class' component={VideoPlayerClass} />
      </Switch>

    </div>
  );
}

export default App;
