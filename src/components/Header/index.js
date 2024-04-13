import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="main-con">
    <h1 className="logo">MoveBb</h1>
    <div className="nav-item-con">
      <p>
        <Link to="/" className="nav-item">
          Popular
        </Link>
      </p>
      <p>
        <Link to="/TopRated" className="nav-item">
          Top Rated
        </Link>
      </p>
      <p>
        <Link to="/Upcoming" className="nav-item">
          Up coming
        </Link>
      </p>

      <input className="search-bar" type="text" placeholder="Movie name" />
      <div>
        <button className="button" type="button">
          Search
        </button>
      </div>
    </div>
  </nav>
)

export default Header
