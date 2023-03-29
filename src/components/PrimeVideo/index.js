// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  console.log(comedyMoviesList)
  console.log(actionMoviesList)
  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1>Action Movies</h1>
      <MoviesSlider moviesList={actionMoviesList} />
      <h1>Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMoviesList} />
    </div>
  )
}

export default PrimeVideo
