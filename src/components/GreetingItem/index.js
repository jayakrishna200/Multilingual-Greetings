import './index.css'

const GreetingItem = props => {
  const {greetingItem} = props
  const {imageUrl, imageAltText} = greetingItem

  return (
    <li className="greeting-item">
      <img src={imageUrl} alt={imageAltText} className="greeting-image" />
    </li>
  )
}
export default GreetingItem
