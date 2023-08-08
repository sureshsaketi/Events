import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {imageUrl, name, id, location} = eventDetails
  const onClickEvent = () => setActiveEventId(id)

  return (
    <li>
      <button type="button" onClick={onClickEvent}>
        <img alt="event" src={imageUrl} className="event-image" />
      </button>
      <p className="name">{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
