import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {getActiveEventRegistrationStatus} = props
  console.log(getActiveEventRegistrationStatus)

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationClosedView = () => (
    <div className="registration-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed"
      />
      <h1 className="registrations-closed">Registrations Are Closed Now!</h1>
      <p className="reopen-text">
        Stay tuned, We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="registration-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
        className="registration-closed"
      />
      <p className="reopen-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art of form.
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registration-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderActiveEventsRegistrationDetails = () => {
    switch (getActiveEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return <>{renderActiveEventsRegistrationDetails()}</>
}

export default ActiveEventRegistrationDetails
