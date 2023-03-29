// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  return (
    <div className="slider-container">
      <Slider>
        {moviesList.map(each => (
          <MovieItem eachMovie={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
