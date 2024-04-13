import './index.css'

const MovieItem = props => {
  const {MovieDetails} = props
  const {imgUrl, title, rating} = MovieDetails
  return (
    <li className="item-con">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
        alt="img"
      />
      <h1 className="title">{title}</h1>
      <p className="rating">Rating:{rating}</p>
    </li>
  )
}
export default MovieItem
