// Write your code here
import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, categoryId} = eachMovie
  return (
    <div>
      <img src={thumbnailUrl} alt={categoryId} className="thumbnail" />
    </div>
  )
}

export default MovieItem
