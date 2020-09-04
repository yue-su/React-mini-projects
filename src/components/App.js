import React from 'react';
import '../styles/App.css';
import '../styles/VideoPlayerClass.css';
import { Switch, Route } from 'react-router-dom'
import MovieSeatBooking from './movie/MovieSeatBooking';
import Home from './Home';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayerClass from './VideoPlayer/VideoPlayerClass';
import VideoPlayerClassRe from './VideoPlayer/VideoPlayerClassRe';
import Header from './Header';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path ='/' component={Home}  exact />
        <Route path='/movie' component={MovieSeatBooking} />
        <Route path='/video-player' component={VideoPlayer} />
        <Route path='/video-player-class' component={VideoPlayerClass} />
        <Route path='/video-player-classRE' component={VideoPlayerClassRe} />
      </Switch>

    </div>
  );
}

export default App;
