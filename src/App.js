import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'

import PopularMovie from './components/PopularMovie'

import TopRatedMovies from './components/TopRatedMovies'

import UpcomingMovies from './components/UpcomingMovies'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={PopularMovie} />
      <Route exact path="/TopRated" component={TopRatedMovies} />
      <Route exact path="/Upcoming" component={UpcomingMovies} />
    </Switch>
  </BrowserRouter>
)
export default App
