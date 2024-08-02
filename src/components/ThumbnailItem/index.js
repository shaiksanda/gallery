// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {data, onChangeImageUrl} = props
  const {imageUrl, thumbnailUrl, thumbnailAltText, imageAltText} = data

  const handleClick = () => {
    onChangeImageUrl(imageUrl, imageAltText)
  }

  return (
    <li className="thumbnail-container">
      <button type="button">
        <img
          onClick={handleClick}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
