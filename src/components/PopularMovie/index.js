import {Component} from 'react'

import MovieItem from '../MovieItem'

import './index.css'

class PopularMovie extends Component {
  state = {MoviesData: []}

  componentDidMount() {
    this.getMovie()
  }

  getMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=f575555a26050c36ae6316d961eed762&language=en-US&page=1`
    const response = await fetch(url)
    const fetchedData = await response.json()
    const formattedData = fetchedData.results.map(each => ({
      id: each.id,
      imgUrl: each.poster_path,
      title: each.title,
      rating: each.vote_average,
    }))

    this.setState({MoviesData: formattedData})
  }

  render() {
    const {MoviesData} = this.state
    return (
      <div>
        <ul className="movies-list-con">
          {MoviesData.map(eachItem => (
            <MovieItem MovieDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default PopularMovie
