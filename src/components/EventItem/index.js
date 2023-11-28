import './index.css'

const EvenItem = props => {
  const {list, update} = props

  const {imageUrl, name, location, registrationStatus} = list

  const tap = () => {
    update(registrationStatus)
  }

  return (
    <li className="li">
      <button type="button" className="btn" onClick={tap}>
        <img src={imageUrl} alt="event" className="img" />
      </button>
      <p className="p">{name}</p>
      <p className="p">{location}</p>
    </li>
  )
}

export default EvenItem
